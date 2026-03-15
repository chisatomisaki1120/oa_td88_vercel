import { spawnSync } from "node:child_process";

const commands = [
  ["npx", ["prisma", "generate"]],
  ["npx", ["prisma", "generate", "--schema", "prisma/auth.prisma"]],
  ["npx", ["prisma", "generate", "--schema", "prisma/business.prisma"]],
];

for (const [command, args] of commands) {
  const result = spawnSync(command, args, { stdio: "inherit", shell: true });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}
