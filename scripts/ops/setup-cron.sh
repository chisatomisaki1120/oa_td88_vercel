#!/usr/bin/env bash
# setup-cron.sh — Install/remove cron job for auto-clock (Turso-aware)
# Usage:
#   bash scripts/ops/setup-cron.sh
#   bash scripts/ops/setup-cron.sh --remove
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/../.." && pwd)"
CRON_TAG="# auto-clock-chisato"

if [ "${1:-}" = "--remove" ]; then
  CLEANED="$(crontab -l 2>/dev/null | grep -vF "auto-clock-chisato" || true)"
  echo "$CLEANED" | crontab -
  echo "🗑️  Cron job removed."
  exit 0
fi

NPX_PATH="$(command -v npx 2>/dev/null || true)"
if [ -z "$NPX_PATH" ]; then
  for p in "$HOME/.nvm/versions/node"/*/bin/npx "$HOME/.local/share/fnm/node-versions"/*/installation/bin/npx /usr/local/bin/npx /usr/bin/npx; do
    if [ -x "$p" ]; then
      NPX_PATH="$p"
      break
    fi
  done
fi

if [ -z "$NPX_PATH" ]; then
  echo "❌ npx not found. Please install Node.js first."
  exit 1
fi

NODE_BIN_DIR="$(dirname "$NPX_PATH")"
mkdir -p "$PROJECT_DIR/logs"

# Load .env at runtime if present so Turso/session env is available in cron.
CRON_CMD="* * * * * export TZ='Asia/Ho_Chi_Minh' && export PATH='$NODE_BIN_DIR:\$PATH' && cd '$PROJECT_DIR' && [ -f ./.env ] && set -a && . ./.env && set +a; npx tsx scripts/ops/auto-clock-chisato.ts >> '$PROJECT_DIR/logs/auto-clock.log' 2>&1 $CRON_TAG"

EXISTING="$(crontab -l 2>/dev/null || true)"
if echo "$EXISTING" | grep -qF "auto-clock-chisato"; then
  echo "⚠️  Cron job already exists. Replacing..."
  EXISTING="$(echo "$EXISTING" | grep -vF "auto-clock-chisato")"
fi

(echo "$EXISTING"; echo "$CRON_CMD") | crontab -

echo "✅ Cron job installed! Runs every minute."
echo
echo "   Project:  $PROJECT_DIR"
echo "   Node:     $NODE_BIN_DIR"
echo "   Log:      $PROJECT_DIR/logs/auto-clock.log"
echo
echo "   To verify:  crontab -l"
echo "   To remove:  bash $SCRIPT_DIR/setup-cron.sh --remove"
