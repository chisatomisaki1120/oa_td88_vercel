// scripts/auto-clock-chisato-vps.ts
// Chạy auto clock cho user chisato trên production VPS
// Lệnh: npx tsx -r dotenv/config scripts/auto-clock-chisato-vps.ts

import { runAutoClockChisato } from "../lib/auto-clock-chisato";

(async () => {
  try {
    const result = await runAutoClockChisato();
    const ts = new Date().toISOString();
    console.log(`[${ts}] auto-clock-chisato:`, JSON.stringify(result));
    process.exit(0);
  } catch (err) {
    const ts = new Date().toISOString();
    console.error(`[${ts}] auto-clock-chisato ERROR:`, err);
    process.exit(1);
  }
})();
