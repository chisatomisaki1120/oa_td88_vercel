import "dotenv/config";
import { runAutoClockChisato } from "../../lib/auto-clock-chisato";

runAutoClockChisato()
  .then((result) => {
    if (result.skipped) {
      console.log(`[auto-clock] ${result.reason}`);
      return;
    }

    if ("action" in result) {
      console.log(`[auto-clock] ${result.action} -> ${result.recordId} at ${result.at}`);
      return;
    }

    console.log("[auto-clock] Completed with no action details.");
  })
  .catch((err) => console.error("[auto-clock] Error:", err));
