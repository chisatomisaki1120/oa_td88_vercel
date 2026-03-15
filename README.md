# OA TD88 - Web chấm công nội bộ

Ứng dụng Next.js (App Router) cho chấm công nhân viên theo ngày với phân quyền `SuperAdmin/Admin/Nhân viên`, lưu dữ liệu qua Prisma. Hiện đang trong quá trình refactor sang kiến trúc 2 lớp DB: business data và shared auth/session.

## Tính năng chính
- Đăng nhập bằng `username/password` do admin cấp.
- Nhân viên check-in/check-out, bắt đầu/kết thúc nghỉ giữa ca, xem lịch sử cá nhân.
- Admin quản lý user, ca làm, gán ca, xem/sửa công, xuất Excel (.xlsx), chốt tháng.
- SuperAdmin mở khóa tháng đã chốt.
- Session cookie + CSRF + rate limit login + audit log.

## Stack
- Next.js 16 + React 19 + TypeScript
- Prisma 7
- Turso/libSQL + `@libsql/client`

## Cài đặt local/dev với Turso
```bash
npm install
npm run db:setup
npm run dev
```

Mở `http://localhost:3000` hoặc port bạn cấu hình.

## Deploy Vercel + Turso
1. Tạo database Turso và lấy:
   - `DATABASE_URL` dạng `libsql://...`
   - `TURSO_AUTH_TOKEN`
2. Trên máy local hoặc terminal CI, đồng bộ schema Turso bằng một trong hai cách:
   ```bash
   npm install
   npm run db:push:turso
   # nếu cần seed dữ liệu mẫu
   npm run db:seed
   ```
   hoặc PowerShell:
   ```powershell
   ./scripts/db-sync-turso.ps1
   # nếu muốn seed luôn
   ./scripts/db-sync-turso.ps1 -Seed
   ```
3. Trên Vercel, cấu hình Environment Variables:
   - `DATABASE_URL`
   - `TURSO_AUTH_TOKEN`
   - `SINGLE_DEVICE_ACTIVE_WINDOW_MINUTES`
4. Deploy bình thường. Build production không còn tự seed/reset DB.

Lưu ý:
- Project này đã bỏ hoàn toàn SQLite local.
- `DATABASE_URL` bắt buộc phải là `libsql://...` hoặc `https://...` cho Turso/libSQL.
- Các route backup/restore/import/export kiểu file `.db` cũ hiện trả về `410 Gone`.
- File local như `backups/`, `db-export-*.json`, `auth*` đã được loại khỏi deploy bằng `.vercelignore`.

## Deploy VPS + Turso

> Note: MVP dual-database refactor is in progress. See `ARCHITECTURE-MVP.md` for the current split between business DB and shared auth/session DB.

### Instance role flags
- `APP_INSTANCE=vps|vercel`
- `APP_ROLE=primary|standby|failover`

Khuyến nghị:
- VPS chính: `APP_INSTANCE=vps`, `APP_ROLE=primary`
- Vercel standby: `APP_INSTANCE=vercel`, `APP_ROLE=standby`
- Khi failover: chuyển Vercel sang `APP_ROLE=failover`

Các file mẫu mới:
- `.env.vps.primary.example`
- `.env.vercel.standby.example`
- `.env.vercel.failover.example`
- `DEPLOY-CHECKLIST.md`

Policy conflict khi failback/reconciliation: **first-write-wins** (ghi sớm hơn được giữ lại).

1. Tạo file `.env` hoặc `.env.production` với tối thiểu:
   ```env
   NODE_ENV=production
   PORT=3000
   HOSTNAME=0.0.0.0
   DATABASE_URL=libsql://your-database-name-your-org.turso.io
   TURSO_AUTH_TOKEN=your_turso_auth_token
   SINGLE_DEVICE_ACTIVE_WINDOW_MINUTES=30
   ```
2. Cài dependency và build:
   ```bash
   npm install
   npm run build
   ```
3. Đồng bộ schema lên Turso trước lần chạy đầu:
   ```bash
   npm run db:push:turso
   # nếu cần seed dữ liệu mẫu
   npm run db:seed
   ```
4. Chạy app trên VPS:
   ```bash
   npm run start
   ```
5. Nên đặt sau Nginx/Caddy hoặc chạy qua PM2/systemd.

Ghi chú:
- `npm run start` giờ bind theo `HOSTNAME` nên phù hợp VPS/reverse proxy hơn.
- Không cần SQLite local khi production dùng Turso.

## Tài khoản mẫu sau khi seed
- Chỉ dùng cho môi trường phát triển nội bộ. Đổi mật khẩu ngay khi triển khai thật.
- `superadmin` / `123456`
- `admin` / `123456`
- `employee` / `123456`

## Scripts
- `npm run dev`: chạy local dev server với Turso/libSQL
- `npm run build`: build production
- `npm run start`: chạy production server (bind theo `HOSTNAME`, mặc định `0.0.0.0`)
- `npm run lint`: lint code
- `npm run db:generate`: generate legacy compatibility Prisma Client
- `npm run db:generate:auth`: generate auth Prisma Client from `prisma/auth.prisma`
- `npm run db:generate:business`: generate business Prisma Client from `prisma/business.prisma`
- `npm run db:generate:all`: generate all Prisma clients
- `npm run db:push` / `npm run db:push:turso`: apply schema hiện tại lên Turso/libSQL
- `npm run db:seed`: seed dữ liệu mẫu
- `npm run db:setup`: generate + push schema Turso + seed
- `npm run db:reset`: push schema Turso + seed lại
- `npm run db:import:json:turso -- <duong-dan-file.json>`: import JSON lên Turso/libSQL
- `npm run sync:outbox`: replay các `OutboxEvent` business từ DB local lên Turso replica một lần
- `npm run sync:outbox:loop`: chạy loop sync định kỳ, phù hợp cron/PM2/systemd
- `npm run sync:failback:dry-run`: mô phỏng reconcile Turso -> local (first-write-wins)
- `npm run sync:failback:apply`: apply reconcile Turso -> local (first-write-wins)
- `./scripts/db-sync-turso.ps1 [-Seed]`: đồng bộ schema Turso, tùy chọn seed luôn

### Vận hành standby/failover
- VPS primary: `APP_INSTANCE=vps`, `APP_ROLE=primary`
- Vercel standby: `APP_INSTANCE=vercel`, `APP_ROLE=standby`
- Khi Vercel ở `standby`, các business write route sẽ bị chặn.
- Khi cần failover, đổi `APP_ROLE=failover` trên Vercel để cho phép business writes.

### Tổ chức scripts
- `scripts/db/`: các script liên quan SQLite/Turso/import/export/schema
- `scripts/ops/`: các script vận hành như auto clock/cron
- `scripts/next-run-with-env-port.mjs`: helper chạy Next với port từ env

## Backup DB tự động mỗi 15 phút
- Khi chạy `npm run dev` hoặc `npm run start`, hệ thống tự backup SQLite định kỳ.
- Mặc định:
  - Chu kỳ: `15` phút
  - Thư mục: `backups/auto`
  - Giữ tối đa: `96` file
- Có thể chỉnh bằng biến môi trường:
  - `DB_AUTO_BACKUP_ENABLED=true|false`
  - `DB_AUTO_BACKUP_INTERVAL_MINUTES=15`
  - `DB_BACKUP_DIR=backups/auto`
  - `DB_BACKUP_MAX_FILES=96`
  - `SINGLE_DEVICE_ACTIVE_WINDOW_MINUTES=30` (session cu qua nguong nay se khong tinh la "dang online tren thiet bi khac")

## Cấu trúc thư mục chính
- `app/`: pages + route handlers API
- `components/`: UI cho login/employee/admin/superadmin
- `lib/`: auth, rbac, csrf, rate-limit, business logic chấm công
- `prisma/`: schema và seed
- `scripts/db/`: script cơ sở dữ liệu (SQLite + Turso)
- `scripts/ops/`: script vận hành
- `scripts/next-run-with-env-port.mjs`: helper chạy Next theo env
