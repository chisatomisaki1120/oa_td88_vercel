# Deploy checklist: VPS primary + Vercel standby

## 1) Database topology
- Auth/session DB: Turso
- Business primary DB: local SQLite on VPS
- Business replica DB: Turso

Required databases:
- `SESSION_DATABASE_URL` -> Turso auth/session DB
- `BUSINESS_DATABASE_URL` on VPS -> `file:./prisma/dev.db`
- `BUSINESS_SYNC_TARGET_URL` on VPS -> Turso business replica
- `BUSINESS_DATABASE_URL` on Vercel -> same Turso business replica

## 2) Environment files
### VPS primary
Use `.env.vps.primary.example` as template.
Important values:
- `APP_INSTANCE=vps`
- `APP_ROLE=primary`
- `SESSION_DATABASE_URL=libsql://...`
- `BUSINESS_DATABASE_URL=file:./prisma/dev.db`
- `BUSINESS_SYNC_TARGET_URL=libsql://...`
- `TURSO_AUTH_TOKEN=...`

### Vercel standby
Use `.env.vercel.standby.example`.
Important values:
- `APP_INSTANCE=vercel`
- `APP_ROLE=standby`
- `SESSION_DATABASE_URL=libsql://...`
- `BUSINESS_DATABASE_URL=libsql://...`

### Vercel failover
Use `.env.vercel.failover.example`.
Only change from standby:
- `APP_ROLE=failover`

## 3) First-time schema setup
### Auth/session Turso DB
Run schema push for auth/session tables on Turso.
At minimum ensure the runtime schema contains:
- `User`
- `AuthSession`
- `LoginAccessLog`
- `LoginSecurityConfig`
- `AuthSession.revokedAt`
- `AuthSession.revokedReason`
- `AuthSession.appInstance`

### Business local DB on VPS
Initialize local business DB and ensure tables exist:
- `Shift`
- `EmployeeShiftAssignment`
- `AttendanceDay`
- `BreakSession`
- `AuditLog`
- `LeaveRequest`
- `OutboxEvent`

### Business replica Turso DB
Push business schema to Turso replica and ensure it contains:
- `Shift`
- `EmployeeShiftAssignment`
- `AttendanceDay`
- `BreakSession`
- `AuditLog` (optional if not synced yet)
- `LeaveRequest`

## 4) VPS runtime setup
Recommended on VPS:
- app process -> `npm run start`
- sync process -> `npm run sync:outbox:loop`

With PM2:
```bash
pm2 start ecosystem.config.cjs
pm2 save
```

Or with separate commands:
```bash
npm install
npm run db:generate
npm run build
npm run start
npm run sync:outbox:loop
```

## 5) Vercel setup
Set env from `.env.vercel.standby.example`.
Deploy normally.
Expected standby behavior:
- read routes work
- auth/session works
- business write routes return 409 blocked

## 6) Data bootstrap
If you already have production data on VPS local DB:
1. import/migrate into local business DB
2. start sync loop on VPS
3. let outbox sync local -> Turso replica

If you only have Turso data right now:
1. import it into local VPS business DB first
2. keep Turso business DB as replica/failover target

## 7) Real-world test checklist
### Auth/session tests
- [ ] Login on VPS works
- [ ] Login on Vercel standby works
- [ ] Login on VPS then login on Vercel revokes previous session
- [ ] Login on Vercel then login on VPS revokes previous session
- [ ] `/api/account/sessions` shows only active non-revoked sessions

### Standby write-block tests
On Vercel with `APP_ROLE=standby`:
- [ ] check-in blocked
- [ ] check-out blocked
- [ ] break start/end blocked
- [ ] leave request create blocked
- [ ] admin attendance edit blocked
- [ ] admin leave review blocked
- [ ] admin shift create/update/delete blocked
- [ ] admin shift assignment create blocked

### Primary sync tests
On VPS with `APP_ROLE=primary`:
- [ ] check-in creates/updates local `AttendanceDay`
- [ ] `OutboxEvent` row created
- [ ] `npm run sync:outbox` marks event sent
- [ ] Turso business replica receives same row
- [ ] leave request review creates synced attendance off-days if approved

### Failover tests
1. Change Vercel env `APP_ROLE=failover`
2. Redeploy / refresh env
3. Test:
- [ ] check-in now allowed on Vercel
- [ ] leave request create allowed on Vercel
- [ ] admin attendance edit allowed on Vercel

### Failback tests (Turso -> local)
1. Freeze failover writes (set Vercel back to `APP_ROLE=standby`)
2. Run dry-run:
   ```bash
   npm run sync:failback:dry-run
   ```
3. Review output/logs and conflicts (policy first-write-wins)
4. Apply:
   ```bash
   npm run sync:failback:apply
   ```
5. Verify `SyncState` and `ReconciliationLog` in local business DB
6. Switch back to forward mode (`local -> Turso`) and resume outbox loop

## 8) Operational rules
- Normal mode: VPS is the only business write primary
- Vercel standby should remain read-only for business operations
- Only switch Vercel to `failover` during VPS incident
- After failover write period, plan a controlled reconciliation before switching back
- Conflict policy: **first-write-wins** (record written earlier is kept; later conflicting write is skipped + logged)

## 9) Suggested smoke test commands
### VPS primary
```bash
npm run lint
npm run build
npm run sync:outbox
```

### Vercel standby
- open login page
- login test account
- call one business write route and confirm 409 block

## 10) Security follow-up
- Rotate the exposed Turso token used during setup
- Update Vercel and VPS env with the new token
- Keep auth/session Turso DB private and do not expose admin routes publicly without access control
