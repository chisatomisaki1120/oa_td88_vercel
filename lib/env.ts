import { cleanEnvValue, getBusinessDatabaseUrl, getSessionDatabaseUrl, getTursoAuthToken, isFileSqliteUrl, isLibsqlUrl } from "@/lib/db";

/** Validate required environment variables at startup */
export function validateEnv() {
  const required: string[] = [];
  const businessUrl = getBusinessDatabaseUrl();
  const sessionUrl = getSessionDatabaseUrl();
  const rawDatabaseUrl = process.env.DATABASE_URL ? cleanEnvValue(process.env.DATABASE_URL) : undefined;

  if (!sessionUrl && !rawDatabaseUrl) {
    required.push("SESSION_DATABASE_URL or DATABASE_URL is required for shared auth/session storage");
  } else if (!sessionUrl || !isLibsqlUrl(sessionUrl)) {
    required.push("SESSION_DATABASE_URL (or DATABASE_URL fallback) must use libsql:// or https:// for Turso/libSQL");
  }

  if (!businessUrl) {
    required.push("BUSINESS_DATABASE_URL, DATABASE_URL, or default local SQLite path is required");
  } else if (!isLibsqlUrl(businessUrl) && !isFileSqliteUrl(businessUrl)) {
    required.push("BUSINESS_DATABASE_URL must use file:, libsql://, or https://");
  }

  if (!getTursoAuthToken()) {
    required.push("TURSO_AUTH_TOKEN is required");
  }

  if (required.length > 0) {
    throw new Error(`[env] Missing required environment variables: ${required.join(", ")}`);
  }
}
