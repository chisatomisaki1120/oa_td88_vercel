param(
  [switch]$Seed
)

$ErrorActionPreference = 'Stop'

if (-not $env:DATABASE_URL) {
  throw 'Missing DATABASE_URL in environment.'
}

if ($env:DATABASE_URL -notmatch '^(libsql|https?)://') {
  throw "DATABASE_URL must be a Turso/libSQL URL. Current value: $($env:DATABASE_URL)"
}

if (-not $env:TURSO_AUTH_TOKEN) {
  throw 'Missing TURSO_AUTH_TOKEN in environment.'
}

Write-Host 'Generating Prisma Client...'
cmd /c "npm run db:generate"
if ($LASTEXITCODE -ne 0) { throw 'db:generate failed' }

Write-Host 'Pushing Prisma schema to Turso/libSQL...'
cmd /c "npm run db:push:turso"
if ($LASTEXITCODE -ne 0) { throw 'db:push:turso failed' }

if ($Seed) {
  Write-Host 'Seeding Turso/libSQL database...'
  cmd /c "npm run db:seed"
  if ($LASTEXITCODE -ne 0) { throw 'db:seed failed' }
}

Write-Host 'Done syncing Turso schema.'
