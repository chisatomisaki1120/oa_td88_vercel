import "dotenv/config";
import { createClient } from "@libsql/client";
import { AttendanceStatus, BreakType, LeaveRequestStatus } from "@prisma/client";
import { prismaBusiness } from "../../lib/prisma-business";
import { getBusinessSyncTargetToken } from "../../lib/db";

type Entity = "Shift" | "EmployeeShiftAssignment" | "AttendanceDay" | "BreakSession" | "LeaveRequest";

type Cursor = { createdAt: string; id: string } | null;

const ENTITIES: Entity[] = ["Shift", "EmployeeShiftAssignment", "AttendanceDay", "BreakSession", "LeaveRequest"];
const BATCH_SIZE = Number(process.env.FAILBACK_BATCH_SIZE ?? 300);
const STATE_ID = "failback:turso-to-local";
const APPLY = process.argv.includes("--apply");
const DRY_RUN = !APPLY;

function toDate(value: unknown): Date | null {
  if (value === null || value === undefined) return null;
  return new Date(String(value));
}

function compareFirstWriteWins(localCreatedAt: Date, remoteCreatedAt: Date, localId: string, remoteId: string) {
  if (localCreatedAt.getTime() < remoteCreatedAt.getTime()) return "KEEP_LOCAL" as const;
  if (localCreatedAt.getTime() > remoteCreatedAt.getTime()) return "APPLY_REMOTE" as const;
  return localId <= remoteId ? ("KEEP_LOCAL" as const) : ("APPLY_REMOTE" as const);
}

function getSourceConfig() {
  const url = process.env.FAILBACK_SOURCE_URL ?? process.env.BUSINESS_SYNC_TARGET_URL ?? process.env.BUSINESS_REPLICA_DATABASE_URL;
  const authToken = process.env.FAILBACK_SOURCE_TOKEN ?? getBusinessSyncTargetToken();
  if (!url) throw new Error("Missing FAILBACK_SOURCE_URL (or BUSINESS_SYNC_TARGET_URL / BUSINESS_REPLICA_DATABASE_URL)");
  if (!authToken) throw new Error("Missing FAILBACK_SOURCE_TOKEN (or BUSINESS_SYNC_TURSO_AUTH_TOKEN / TURSO_AUTH_TOKEN)");
  return { url, authToken };
}

async function fetchBatch(client: ReturnType<typeof createClient>, entity: Entity, cursor: Cursor) {
  const where = cursor
    ? `WHERE (\"createdAt\" > ? OR (\"createdAt\" = ? AND \"id\" > ?))`
    : "";
  const args = cursor ? [cursor.createdAt, cursor.createdAt, cursor.id, BATCH_SIZE] : [BATCH_SIZE];
  const sql = `SELECT * FROM \"${entity}\" ${where} ORDER BY \"createdAt\" ASC, \"id\" ASC LIMIT ?`;
  const result = await client.execute({ sql, args });
  return result.rows as Array<Record<string, unknown>>;
}

async function applyEntity(entity: Entity, row: Record<string, unknown>) {
  const id = String(row.id);

  const remoteCreatedAt = toDate(row.createdAt);
  if (!remoteCreatedAt) throw new Error(`${entity}:${id} missing createdAt`);

  switch (entity) {
    case "Shift": {
      const local = await prismaBusiness.shift.findUnique({ where: { id } });
      if (!local) {
        if (!DRY_RUN) {
          await prismaBusiness.shift.create({
            data: {
              id,
              name: String(row.name),
              startTime: String(row.startTime),
              endTime: String(row.endTime),
              lateGraceMinutes: Number(row.lateGraceMinutes ?? 5),
              earlyLeaveGraceMinutes: Number(row.earlyLeaveGraceMinutes ?? 5),
              breakPolicyJson: String(row.breakPolicyJson ?? "{}"),
              isActive: Boolean(row.isActive),
              createdAt: remoteCreatedAt,
              updatedAt: toDate(row.updatedAt) ?? remoteCreatedAt,
            },
          });
        }
        return { action: "create", reason: "local_missing", remoteCreatedAt, localCreatedAt: null as Date | null };
      }
      const decision = compareFirstWriteWins(local.createdAt, remoteCreatedAt, local.id, id);
      if (decision === "KEEP_LOCAL") return { action: "skip", reason: "first_write_wins_local", remoteCreatedAt, localCreatedAt: local.createdAt };
      if (!DRY_RUN) {
        await prismaBusiness.shift.update({
          where: { id },
          data: {
            name: String(row.name),
            startTime: String(row.startTime),
            endTime: String(row.endTime),
            lateGraceMinutes: Number(row.lateGraceMinutes ?? 5),
            earlyLeaveGraceMinutes: Number(row.earlyLeaveGraceMinutes ?? 5),
            breakPolicyJson: String(row.breakPolicyJson ?? "{}"),
            isActive: Boolean(row.isActive),
            createdAt: remoteCreatedAt,
            updatedAt: toDate(row.updatedAt) ?? remoteCreatedAt,
          },
        });
      }
      return { action: "update", reason: "remote_earlier", remoteCreatedAt, localCreatedAt: local.createdAt };
    }
    case "EmployeeShiftAssignment": {
      const local = await prismaBusiness.employeeShiftAssignment.findUnique({ where: { id } });
      if (!local) {
        if (!DRY_RUN) {
          await prismaBusiness.employeeShiftAssignment.create({
            data: {
              id,
              userId: String(row.userId),
              shiftId: String(row.shiftId),
              effectiveFrom: toDate(row.effectiveFrom) ?? remoteCreatedAt,
              effectiveTo: toDate(row.effectiveTo),
              createdAt: remoteCreatedAt,
              updatedAt: toDate(row.updatedAt) ?? remoteCreatedAt,
            },
          });
        }
        return { action: "create", reason: "local_missing", remoteCreatedAt, localCreatedAt: null as Date | null };
      }
      const decision = compareFirstWriteWins(local.createdAt, remoteCreatedAt, local.id, id);
      if (decision === "KEEP_LOCAL") return { action: "skip", reason: "first_write_wins_local", remoteCreatedAt, localCreatedAt: local.createdAt };
      if (!DRY_RUN) {
        await prismaBusiness.employeeShiftAssignment.update({
          where: { id },
          data: {
            userId: String(row.userId),
            shiftId: String(row.shiftId),
            effectiveFrom: toDate(row.effectiveFrom) ?? remoteCreatedAt,
            effectiveTo: toDate(row.effectiveTo),
            createdAt: remoteCreatedAt,
            updatedAt: toDate(row.updatedAt) ?? remoteCreatedAt,
          },
        });
      }
      return { action: "update", reason: "remote_earlier", remoteCreatedAt, localCreatedAt: local.createdAt };
    }
    case "AttendanceDay": {
      const local = await prismaBusiness.attendanceDay.findUnique({ where: { id } });
      if (!local) {
        if (!DRY_RUN) {
          await prismaBusiness.attendanceDay.create({
            data: {
              id,
              userId: String(row.userId),
              workDate: String(row.workDate),
              checkInAt: toDate(row.checkInAt),
              checkOutAt: toDate(row.checkOutAt),
              status: String(row.status) as AttendanceStatus,
              warningFlagsJson: String(row.warningFlagsJson ?? "[]"),
              workedMinutes: row.workedMinutes == null ? null : Number(row.workedMinutes),
              isOffDay: Boolean(row.isOffDay),
              offReason: row.offReason == null ? null : String(row.offReason),
              isDeducted: Boolean(row.isDeducted),
              createdBy: row.createdBy == null ? null : String(row.createdBy),
              updatedBy: row.updatedBy == null ? null : String(row.updatedBy),
              createdAt: remoteCreatedAt,
              updatedAt: toDate(row.updatedAt) ?? remoteCreatedAt,
            },
          });
        }
        return { action: "create", reason: "local_missing", remoteCreatedAt, localCreatedAt: null as Date | null };
      }
      const decision = compareFirstWriteWins(local.createdAt, remoteCreatedAt, local.id, id);
      if (decision === "KEEP_LOCAL") return { action: "skip", reason: "first_write_wins_local", remoteCreatedAt, localCreatedAt: local.createdAt };
      if (!DRY_RUN) {
        await prismaBusiness.attendanceDay.update({
          where: { id },
          data: {
            userId: String(row.userId),
            workDate: String(row.workDate),
            checkInAt: toDate(row.checkInAt),
            checkOutAt: toDate(row.checkOutAt),
            status: String(row.status) as AttendanceStatus,
            warningFlagsJson: String(row.warningFlagsJson ?? "[]"),
            workedMinutes: row.workedMinutes == null ? null : Number(row.workedMinutes),
            isOffDay: Boolean(row.isOffDay),
            offReason: row.offReason == null ? null : String(row.offReason),
            isDeducted: Boolean(row.isDeducted),
            createdBy: row.createdBy == null ? null : String(row.createdBy),
            updatedBy: row.updatedBy == null ? null : String(row.updatedBy),
            createdAt: remoteCreatedAt,
            updatedAt: toDate(row.updatedAt) ?? remoteCreatedAt,
          },
        });
      }
      return { action: "update", reason: "remote_earlier", remoteCreatedAt, localCreatedAt: local.createdAt };
    }
    case "BreakSession": {
      const local = await prismaBusiness.breakSession.findUnique({ where: { id } });
      if (!local) {
        if (!DRY_RUN) {
          await prismaBusiness.breakSession.create({
            data: {
              id,
              attendanceDayId: String(row.attendanceDayId),
              breakType: String(row.breakType) as BreakType,
              startAt: toDate(row.startAt) ?? remoteCreatedAt,
              endAt: toDate(row.endAt),
              durationMinutesComputed: row.durationMinutesComputed == null ? null : Number(row.durationMinutesComputed),
              createdAt: remoteCreatedAt,
            },
          });
        }
        return { action: "create", reason: "local_missing", remoteCreatedAt, localCreatedAt: null as Date | null };
      }
      const decision = compareFirstWriteWins(local.createdAt, remoteCreatedAt, local.id, id);
      if (decision === "KEEP_LOCAL") return { action: "skip", reason: "first_write_wins_local", remoteCreatedAt, localCreatedAt: local.createdAt };
      if (!DRY_RUN) {
        await prismaBusiness.breakSession.update({
          where: { id },
          data: {
            attendanceDayId: String(row.attendanceDayId),
            breakType: String(row.breakType) as BreakType,
            startAt: toDate(row.startAt) ?? remoteCreatedAt,
            endAt: toDate(row.endAt),
            durationMinutesComputed: row.durationMinutesComputed == null ? null : Number(row.durationMinutesComputed),
            createdAt: remoteCreatedAt,
          },
        });
      }
      return { action: "update", reason: "remote_earlier", remoteCreatedAt, localCreatedAt: local.createdAt };
    }
    case "LeaveRequest": {
      const local = await prismaBusiness.leaveRequest.findUnique({ where: { id } });
      if (!local) {
        if (!DRY_RUN) {
          await prismaBusiness.leaveRequest.create({
            data: {
              id,
              userId: String(row.userId),
              year: Number(row.year),
              dates: String(row.dates),
              reason: row.reason == null ? null : String(row.reason),
              status: String(row.status) as LeaveRequestStatus,
              reviewedBy: row.reviewedBy == null ? null : String(row.reviewedBy),
              reviewedAt: toDate(row.reviewedAt),
              rejectedReason: row.rejectedReason == null ? null : String(row.rejectedReason),
              createdAt: remoteCreatedAt,
              updatedAt: toDate(row.updatedAt) ?? remoteCreatedAt,
            },
          });
        }
        return { action: "create", reason: "local_missing", remoteCreatedAt, localCreatedAt: null as Date | null };
      }
      const decision = compareFirstWriteWins(local.createdAt, remoteCreatedAt, local.id, id);
      if (decision === "KEEP_LOCAL") return { action: "skip", reason: "first_write_wins_local", remoteCreatedAt, localCreatedAt: local.createdAt };
      if (!DRY_RUN) {
        await prismaBusiness.leaveRequest.update({
          where: { id },
          data: {
            userId: String(row.userId),
            year: Number(row.year),
            dates: String(row.dates),
            reason: row.reason == null ? null : String(row.reason),
            status: String(row.status) as LeaveRequestStatus,
            reviewedBy: row.reviewedBy == null ? null : String(row.reviewedBy),
            reviewedAt: toDate(row.reviewedAt),
            rejectedReason: row.rejectedReason == null ? null : String(row.rejectedReason),
            createdAt: remoteCreatedAt,
            updatedAt: toDate(row.updatedAt) ?? remoteCreatedAt,
          },
        });
      }
      return { action: "update", reason: "remote_earlier", remoteCreatedAt, localCreatedAt: local.createdAt };
    }
  }
}

async function main() {
  const { url, authToken } = getSourceConfig();
  const client = createClient({ url, authToken });
  const batchId = `failback-${new Date().toISOString()}`;

  if (!DRY_RUN) {
    await prismaBusiness.syncState.upsert({
      where: { id: STATE_ID },
      create: { id: STATE_ID, mode: "FAILBACK", lastRunStatus: "RUNNING" },
      update: { mode: "FAILBACK", lastRunStatus: "RUNNING", lastError: null },
    });
  }

  try {
    for (const entity of ENTITIES) {
      let cursor: Cursor = null;
      while (true) {
        const rows = await fetchBatch(client, entity, cursor);
        if (rows.length === 0) break;

        for (const row of rows) {
          const outcome = await applyEntity(entity, row);
          const rowId = String(row.id);

          console.log(`[failback:${DRY_RUN ? "dry-run" : "apply"}] ${entity}:${rowId} -> ${outcome.action} (${outcome.reason})`);

          if (!DRY_RUN) {
            await prismaBusiness.reconciliationLog.create({
              data: {
                batchId,
                entityType: entity,
                entityId: rowId,
                action: outcome.action,
                reason: outcome.reason,
                remoteCreatedAt: outcome.remoteCreatedAt,
                localCreatedAt: outcome.localCreatedAt,
              },
            });
          }
        }

        const last = rows[rows.length - 1]!;
        cursor = {
          createdAt: String(last.createdAt),
          id: String(last.id),
        };

        if (!DRY_RUN) {
          await prismaBusiness.syncState.update({
            where: { id: STATE_ID },
            data: {
              lastEntity: entity,
              lastCursorCreatedAt: toDate(cursor.createdAt),
              lastCursorId: cursor.id,
              lastAppliedAt: new Date(),
            },
          });
        }
      }
    }

    if (!DRY_RUN) {
      await prismaBusiness.syncState.update({
        where: { id: STATE_ID },
        data: { lastRunStatus: "SUCCESS", lastError: null, lastAppliedAt: new Date() },
      });
    }

    client.close();
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (!DRY_RUN) {
      await prismaBusiness.syncState.update({
        where: { id: STATE_ID },
        data: { lastRunStatus: "FAILED", lastError: message, lastAppliedAt: new Date() },
      });
    }
    client.close();
    throw error;
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
;
