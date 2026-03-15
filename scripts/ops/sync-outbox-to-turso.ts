import "dotenv/config";
import { createClient, type InValue } from "@libsql/client";
import { getBusinessSyncTargetToken, getBusinessSyncTargetUrl } from "../../lib/db";
import { listPendingOutboxEvents, markOutboxEventFailed, markOutboxEventSent } from "../../lib/sync/outbox";

type Payload = Record<string, unknown>;

type AggregateType = "AttendanceDay" | "BreakSession" | "LeaveRequest" | "Shift" | "EmployeeShiftAssignment";

function normalizeValue(value: unknown): InValue {
  if (value === null || value === undefined) return null;
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") return value;
  return JSON.stringify(value);
}

function getTableName(aggregateType: AggregateType) {
  return aggregateType;
}

function getId(payload: Payload) {
  const id = payload.id;
  if (typeof id !== "string" || !id) throw new Error("Payload missing string id");
  return id;
}

async function applyUpsert(client: ReturnType<typeof createClient>, aggregateType: AggregateType, payload: Payload) {
  const tableName = getTableName(aggregateType);
  const id = getId(payload);
  const columns = Object.keys(payload);
  const quotedColumns = columns.map((c) => `"${c}"`).join(", ");
  const placeholders = columns.map(() => "?").join(", ");
  const args = columns.map((column) => normalizeValue(payload[column]));

  await client.execute(`DELETE FROM "${tableName}" WHERE "id" = ?`, [id]);
  await client.execute({
    sql: `INSERT INTO "${tableName}" (${quotedColumns}) VALUES (${placeholders})`,
    args,
  });
}

async function applyDelete(client: ReturnType<typeof createClient>, aggregateType: AggregateType, payload: Payload) {
  const tableName = getTableName(aggregateType);
  const id = getId(payload);
  await client.execute(`DELETE FROM "${tableName}" WHERE "id" = ?`, [id]);
}

async function main() {
  const url = getBusinessSyncTargetUrl();
  const authToken = getBusinessSyncTargetToken();

  if (!url) {
    throw new Error("Missing BUSINESS_SYNC_TARGET_URL (or BUSINESS_REPLICA_DATABASE_URL) for outbox sync target.");
  }
  if (!authToken) {
    throw new Error("Missing BUSINESS_SYNC_TURSO_AUTH_TOKEN or TURSO_AUTH_TOKEN.");
  }

  const client = createClient({ url, authToken });
  const events = await listPendingOutboxEvents(200);

  for (const event of events) {
    try {
      const payload = JSON.parse(event.payloadJson) as Payload;
      const aggregateType = event.aggregateType as AggregateType;
      if (!["AttendanceDay", "BreakSession", "LeaveRequest", "Shift", "EmployeeShiftAssignment"].includes(aggregateType)) {
        throw new Error(`Unsupported aggregateType: ${event.aggregateType}`);
      }

      if (event.operation === "upsert") {
        await applyUpsert(client, aggregateType, payload);
      } else if (event.operation === "delete") {
        await applyDelete(client, aggregateType, payload);
      } else {
        throw new Error(`Unsupported operation: ${event.operation}`);
      }

      await markOutboxEventSent(event.id);
      console.log(`[sync:outbox] Synced ${event.aggregateType}:${event.aggregateId}`);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      await markOutboxEventFailed(event.id, message);
      console.error(`[sync:outbox] Failed ${event.aggregateType}:${event.aggregateId} - ${message}`);
    }
  }

  client.close();
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
