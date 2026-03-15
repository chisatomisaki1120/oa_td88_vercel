import { prismaBusiness } from "@/lib/prisma-business";

export type OutboxOperation = "upsert" | "delete";

export async function enqueueOutboxEvent(input: {
  aggregateType: string;
  aggregateId: string;
  operation: OutboxOperation;
  payload: unknown;
}) {
  return prismaBusiness.outboxEvent.create({
    data: {
      aggregateType: input.aggregateType,
      aggregateId: input.aggregateId,
      operation: input.operation,
      payloadJson: JSON.stringify(input.payload),
    },
  });
}

export async function listPendingOutboxEvents(limit = 100) {
  return prismaBusiness.outboxEvent.findMany({
    where: { sentAt: null },
    orderBy: { occurredAt: "asc" },
    take: limit,
  });
}

export async function markOutboxEventSent(id: string) {
  return prismaBusiness.outboxEvent.update({
    where: { id },
    data: { sentAt: new Date(), lastError: null },
  });
}

export async function markOutboxEventFailed(id: string, error: string) {
  return prismaBusiness.outboxEvent.update({
    where: { id },
    data: {
      attemptCount: { increment: 1 },
      lastError: error.slice(0, 2000),
    },
  });
}
