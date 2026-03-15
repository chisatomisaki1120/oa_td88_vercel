# MVP architecture: VPS-local + Turso-session + sync

## Goal
- VPS uses local DB for business data (attendance, leave, shifts, users)
- Vercel uses Turso as failover/backup business data store
- Auth/session/login-security uses Turso as shared central store
- Single-login enforced across instances through shared `AuthSession`
- Add sync pipeline local -> Turso for business data

## Phase 1 scaffold completed
- `lib/prisma-business.ts`: Prisma client for business DB
- `lib/prisma-session.ts`: Prisma client for shared auth/session DB
- `lib/prisma.ts`: compatibility export mapped to business DB
- `lib/auth.ts`: moved `AuthSession` queries to session DB
- `lib/rate-limit.ts`: moved `LoginAccessLog` queries to session DB
- `lib/login-security-config.ts`: moved `LoginSecurityConfig` to session DB
- `lib/db.ts`: now supports `BUSINESS_DATABASE_URL` and `SESSION_DATABASE_URL`

## Environment model
- VPS:
  - `BUSINESS_DATABASE_URL=file:./prisma/dev.db`
  - `SESSION_DATABASE_URL=libsql://...`
  - `TURSO_AUTH_TOKEN=...`
- Vercel:
  - `BUSINESS_DATABASE_URL=libsql://...`
  - `SESSION_DATABASE_URL=libsql://...`
  - `TURSO_AUTH_TOKEN=...`

## Phase 2 scaffold completed
- Added `prisma/auth.prisma`
- Added `prisma/business.prisma`
- Added `OutboxEvent` model to business schema (and compatibility schema)
- Added `lib/sync/outbox.ts` minimal outbox helper
- Added Prisma generate commands for auth/business split

## Phase 4 scaffold completed
- Added `APP_INSTANCE` / `APP_ROLE` instance flags
- Added business write guard for standby instances
- Added outbox sync loop script and PM2 example (`ecosystem.config.cjs`)

## Current status
- Major admin/employee routes have been refactored to use business DB + auth/session DB explicitly
- Standby write guard is in place for main business mutation routes
- Outbox sync worker exists for primary business entities
- Deploy templates/checklist added:
  - `.env.vps.primary.example`
  - `.env.vercel.standby.example`
  - `.env.vercel.failover.example`
  - `DEPLOY-CHECKLIST.md`

## Conflict policy (agreed)
- Policy: **first-write-wins**
- During reconciliation/failback, the record written earlier is kept.
- Comparison order:
  1) `createdAt` (earlier wins)
  2) `id` as deterministic tie-breaker when timestamps match
- Later conflicting writes are skipped and logged to reconciliation/audit logs.

## Failback implementation (current)
- Added `SyncState` and `ReconciliationLog` models
- Added failback script: `scripts/ops/sync-failback-turso-to-local.ts`
- Added npm commands:
  - `sync:failback:dry-run`
  - `sync:failback:apply`
- Conflict policy in script: first-write-wins (`createdAt` first, then `id` tie-breaker)

## Next implementation steps
1. Execute real deployment and test checklist on VPS primary + Vercel standby
2. Extend reconciliation to additional entities if needed (e.g., `AuditLog`)
3. Replace compatibility schema usage with split generated clients more aggressively
4. Add stronger operational locking around failover/failback mode switches
