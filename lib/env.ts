import { cleanEnvValue, getTursoAuthToken } from "@/lib/db";

/** Validate required environment variables at startup */
export function validateEnv() {
  const required: string[] = [];
  const databaseUrl = process.env.DATABASE_URL ? cleanEnvValue(process.env.DATABASE_URL) : undefined;
  const usesLibsql = !!databaseUrl && /^(libsql|https?):\/\//i.test(databaseUrl);

  if (!databaseUrl) {
    required.push("DATABASE_URL is required and must point to Turso/libSQL");
  } else if (!usesLibsql) {
    required.push("DATABASE_URL must use libsql:// or https:// for Turso/libSQL");
  }

  if (!getTursoAuthToken()) {
    required.push("TURSO_AUTH_TOKEN is required");
  }

  if (required.length > 0) {
    throw new Error(`[env] Missing required environment variables: ${required.join(", ")}`);
  }
}
