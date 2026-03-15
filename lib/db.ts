import path from "node:path";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const DEFAULT_LOCAL_BUSINESS_DB_URL = "file:./prisma/dev.db";

type DatabaseTarget = "business" | "session";

type DatabaseMode = "sqlite-file" | "libsql";

export function cleanEnvValue(value: string) {
  const trimmed = value.trim();
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1).trim();
  }
  return trimmed;
}

function getRawEnv(name: string) {
  const raw = process.env[name];
  return raw ? cleanEnvValue(raw) : undefined;
}

export function getBusinessDatabaseUrl() {
  return getRawEnv("BUSINESS_DATABASE_URL") ?? getRawEnv("DATABASE_URL") ?? DEFAULT_LOCAL_BUSINESS_DB_URL;
}

export function getSessionDatabaseUrl() {
  return getRawEnv("SESSION_DATABASE_URL") ?? getRawEnv("DATABASE_URL");
}

// Backward-compatible alias during dual-DB refactor.
export function getDatabaseUrl() {
  return getSessionDatabaseUrl() ?? getBusinessDatabaseUrl();
}

export function getTursoAuthToken() {
  return getRawEnv("TURSO_AUTH_TOKEN");
}

export function getBusinessSyncTargetUrl() {
  return getRawEnv("BUSINESS_SYNC_TARGET_URL") ?? getRawEnv("BUSINESS_REPLICA_DATABASE_URL");
}

export function getBusinessSyncTargetToken() {
  return getRawEnv("BUSINESS_SYNC_TURSO_AUTH_TOKEN") ?? getTursoAuthToken();
}

export function isLibsqlUrl(url: string) {
  return /^(libsql|https?):\/\//i.test(url);
}

export function isFileSqliteUrl(url: string) {
  return url.startsWith("file:");
}

export function resolveSqliteFilePath(url: string) {
  const dbPath = url.replace(/^file:/, "");
  return path.isAbsolute(dbPath) ? dbPath : path.resolve(process.cwd(), dbPath);
}

export function getDatabaseMode(url: string): DatabaseMode {
  if (isFileSqliteUrl(url)) return "sqlite-file";
  if (isLibsqlUrl(url)) return "libsql";
  throw new Error(`Unsupported database URL: ${url}`);
}

export function createPrismaAdapter(target: DatabaseTarget = "business") {
  const databaseUrl = target === "session" ? getSessionDatabaseUrl() : getBusinessDatabaseUrl();

  if (!databaseUrl) {
    throw new Error(`${target.toUpperCase()} database URL is required.`);
  }

  const mode = getDatabaseMode(databaseUrl);

  if (target === "session" && mode !== "libsql") {
    throw new Error("Session/auth database must use Turso/libSQL.");
  }

  if (mode === "sqlite-file") {
    return new PrismaBetterSqlite3({
      url: resolveSqliteFilePath(databaseUrl),
    });
  }

  return new PrismaLibSql({
    url: databaseUrl,
    authToken: getTursoAuthToken(),
  });
}
