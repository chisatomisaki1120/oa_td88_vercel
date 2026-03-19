#!/usr/bin/env bash
# scripts/setup-crontab-auto-clock.sh
# Tạo crontab trên Ubuntu cho auto-clock-chisato
# Chạy: bash scripts/setup-crontab-auto-clock.sh

set -euo pipefail

# === CẤU HÌNH ===
APP_DIR="${APP_DIR:-/www/wwwroot/oatd88}"
LOG_FILE="${LOG_FILE:-/www/wwwroot/oatd88/log/auto-clock-chisato.log}"
CRON_SCHEDULE="* * * * *"  # Mỗi phút

# Đường dẫn npx (tìm tự động hoặc dùng mặc định)
NPX_PATH="$(command -v npx 2>/dev/null || echo '/usr/local/bin/npx')"

CRON_CMD="cd ${APP_DIR} && ${NPX_PATH} tsx -r dotenv/config scripts/auto-clock-chisato-vps.ts >> ${LOG_FILE} 2>&1"
CRON_MARKER="# auto-clock-chisato"

echo "=== Setup crontab auto-clock-chisato ==="
echo "App dir:  ${APP_DIR}"
echo "Log file: ${LOG_FILE}"
echo "Schedule: ${CRON_SCHEDULE}"
echo ""

# Tạo log file nếu chưa có
if [ ! -f "${LOG_FILE}" ]; then
  sudo touch "${LOG_FILE}"
  sudo chown "$(whoami)":"$(whoami)" "${LOG_FILE}"
  echo "Đã tạo log file: ${LOG_FILE}"
fi

# Xóa entry cũ nếu có, rồi thêm mới
EXISTING_CRONTAB=$(crontab -l 2>/dev/null || true)
NEW_CRONTAB=$(echo "${EXISTING_CRONTAB}" | grep -v "${CRON_MARKER}" || true)

# Thêm dòng mới
NEW_CRONTAB="${NEW_CRONTAB}
${CRON_SCHEDULE} ${CRON_CMD} ${CRON_MARKER}"

# Loại bỏ dòng trống đầu
NEW_CRONTAB=$(echo "${NEW_CRONTAB}" | sed '/^$/d')

echo "${NEW_CRONTAB}" | crontab -

echo ""
echo "Crontab đã được cập nhật. Kiểm tra:"
crontab -l
echo ""
echo "Xem log: tail -f ${LOG_FILE}"
