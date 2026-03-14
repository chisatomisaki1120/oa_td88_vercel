import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import { createClient, type InValue } from "@libsql/client";
import { getDatabaseUrl, getTursoAuthToken, isLibsqlUrl } from "../../lib/db";

type DbObject = {
  type: string;
  name: string;
  tableName: string;
  sql: string;
};

type ImportPayload = {
  schema: DbObject[];
  data: Record<string, Array<Record<string, unknown>>>;
};

const TABLE_DELETE_ORDER = [
  "BreakSession",
  "AttendanceDay",
  "EmployeeShiftAssignment",
  "LeaveRequest",
  "LoginAccessLog",
  "AuthSession",
  "AuditLog",
  "Shift",
  "LoginSecurityConfig",
  "User",
];

const TABLE_INSERT_ORDER = [
  "LoginSecurityConfig",
  "User",
  "Shift",
  "EmployeeShiftAssignment",
  "AttendanceDay",
  "BreakSession",
  "LeaveRequest",
  "LoginAccessLog",
  "AuthSession",
  "AuditLog",
];

function assertLibsqlEnv() {
  const url = getDatabaseUrl();
  if (!isLibsqlUrl(url)) {
    throw new Error(`This script only supports Turso/libSQL. Current DATABASE_URL: ${url}`);
  }
  if (!getTursoAuthToken()) {
    throw new Error("Missing TURSO_AUTH_TOKEN in environment.");
  }
}

function orderedTableNames(data: ImportPayload["data"]) {
  const names = Object.keys(data);
  const seen = new Set<string>();
  const ordered: string[] = [];

  for (const name of TABLE_INSERT_ORDER) {
    if (names.includes(name)) {
      ordered.push(name);
      seen.add(name);
    }
  }

  for (const name of names) {
    if (!seen.has(name)) ordered.push(name);
  }

  return ordered;
}

function orderedDeleteNames(data: ImportPayload["data"]) {
  const names = Object.keys(data);
  const seen = new Set<string>();
  const ordered: string[] = [];

  for (const name of TABLE_DELETE_ORDER) {
    if (names.includes(name)) {
      ordered.push(name);
      seen.add(name);
    }
  }

  for (const name of names) {
    if (!seen.has(name)) ordered.push(name);
  }

  return ordered;
}

function normalizeValue(value: unknown): InValue {
  if (value === null || value === undefined) return null;
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") return value;
  if (value instanceof Uint8Array) return value;
  return JSON.stringify(value);
}

async function insertRows(
  client: ReturnType<typeof createClient>,
  tableName: string,
  rows: Array<Record<string, unknown>>,
) {
  if (rows.length === 0) return;

  const columns = Object.keys(rows[0]);
  if (columns.length === 0) return;

  const placeholders = columns.map(() => "?").join(", ");
  const quotedColumns = columns.map((c) => `"${c}"`).join(", ");
  const sql = `INSERT INTO "${tableName}" (${quotedColumns}) VALUES (${placeholders})`;

  for (const row of rows) {
    const args = columns.map((column) => normalizeValue(row[column]));
    await client.execute({ sql, args });
  }
}

async function main() {
  assertLibsqlEnv();

  const inputPath = process.argv[2];
  if (!inputPath) {
    throw new Error("Usage: tsx scripts/db-import-json-libsql.ts <path-to-json>");
  }

  const resolvedInput = path.resolve(process.cwd(), inputPath);
  if (!fs.existsSync(resolvedInput)) {
    throw new Error(`Input file does not exist: ${resolvedInput}`);
  }

  const parsed = JSON.parse(fs.readFileSync(resolvedInput, "utf8")) as ImportPayload;
  if (!parsed || !Array.isArray(parsed.schema) || typeof parsed.data !== "object" || parsed.data === null) {
    throw new Error("Invalid JSON format. Expected fields: schema[] and data{}");
  }

  const client = createClient({
    url: getDatabaseUrl(),
    authToken: getTursoAuthToken(),
  });

  const deleteNames = orderedDeleteNames(parsed.data);
  const insertNames = orderedTableNames(parsed.data);

  try {
    await client.execute("PRAGMA foreign_keys=OFF");

    for (const tableName of deleteNames) {
      await client.execute(`DELETE FROM "${tableName}"`);
    }

    for (const tableName of insertNames) {
      await insertRows(client, tableName, parsed.data[tableName] ?? []);
    }

    console.log(`Imported JSON into Turso/libSQL from ${resolvedInput}`);
    for (const tableName of insertNames) {
      console.log(`- ${tableName}: ${(parsed.data[tableName] ?? []).length} rows`);
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`[db:import:json:turso] ${message}`);
    throw error;
  } finally {
    await client.execute("PRAGMA foreign_keys=ON");
    client.close();
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
