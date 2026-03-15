import type { Prisma } from "@prisma/client";

type BusinessTx = Prisma.TransactionClient;

type AggregateType = "AttendanceDay" | "BreakSession" | "LeaveRequest" | "Shift" | "EmployeeShiftAssignment";

type Operation = "upsert" | "delete";

export async function enqueueBusinessEvent(
  tx: BusinessTx,
  aggregateType: AggregateType,
  aggregateId: string,
  operation: Operation,
  payload: unknown,
) {
  await tx.outboxEvent.create({
    data: {
      aggregateType,
      aggregateId,
      operation,
      payloadJson: JSON.stringify(payload),
    },
  });
}
