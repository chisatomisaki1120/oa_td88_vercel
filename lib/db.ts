import { PrismaLibSql } from "@prisma/adapter-libsql";

export function cleanEnvValue(value: string) {
  const trimmed = value.trim();
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1).trim();
  }
  return trimmed;
}

export function getDatabaseUrl() {
  const raw = process.env.DATABASE_URL;
  if (!raw) {
    throw new Error("DATABASE_URL is required and must point to Turso/libSQL.");
  }
  return cleanEnvValue(raw);
}

export function getTursoAuthToken() {
  const raw = process.env.TURSO_AUTH_TOKEN;
  return raw ? cleanEnvValue(raw) : undefined;
}

export function isLibsqlUrl(url = getDatabaseUrl()) {
  return /^(libsql|https?):\/\//i.test(url);
}

export function createPrismaAdapter() {
  const databaseUrl = getDatabaseUrl();

  if (!isLibsqlUrl(databaseUrl)) {
    throw new Error(`Unsupported DATABASE_URL for this Turso-only project: ${databaseUrl}`);
  }

  return new PrismaLibSql({
    url: databaseUrl,
    authToken: getTursoAuthToken(),
  });
}
