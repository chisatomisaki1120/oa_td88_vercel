import { spawn } from "node:child_process";

const intervalMs = Number(process.env.OUTBOX_SYNC_INTERVAL_MS || 15000);

function runOnce() {
  return new Promise((resolve) => {
    const child = spawn(process.platform === "win32" ? "npm.cmd" : "npm", ["run", "sync:outbox"], {
      stdio: "inherit",
      shell: true,
    });
    child.on("exit", () => resolve(undefined));
  });
}

async function main() {
  console.log(`[sync:outbox:loop] starting, interval=${intervalMs}ms`);
  while (true) {
    await runOnce();
    await new Promise((r) => setTimeout(r, intervalMs));
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
