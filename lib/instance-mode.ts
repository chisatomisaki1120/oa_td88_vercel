export type AppInstance = "vps" | "vercel" | "unknown";
export type AppRole = "primary" | "standby" | "failover";

export function getAppInstance(): AppInstance {
  const raw = (process.env.APP_INSTANCE ?? "").trim().toLowerCase();
  if (raw === "vps" || raw === "vercel") return raw;
  return "unknown";
}

export function getAppRole(): AppRole {
  const raw = (process.env.APP_ROLE ?? "primary").trim().toLowerCase();
  if (raw === "standby" || raw === "failover") return raw;
  return "primary";
}

export function isBusinessWriteAllowed() {
  return getAppRole() !== "standby";
}

export function getBusinessWriteBlockReason() {
  const instance = getAppInstance();
  const role = getAppRole();
  return `Business write is disabled on this instance (instance=${instance}, role=${role}). Switch APP_ROLE to failover or primary to allow writes.`;
}
