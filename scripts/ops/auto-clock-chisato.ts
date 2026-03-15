import "dotenv/config";
import { runAutoClockChisato } from "../../lib/auto-clock-chisato";

runAutoClockChisato()
  .then((result) => {
    if (result.skipped) {
      console.log(`[auto-clock] ${result.reason}`);
      return;
    }
    console.log(`[auto-clock] ${result.action} -> ${result.recordId} at ${result.at}`);
  })
  .catch((err) => console.error("[auto-clock] Error:", err));
