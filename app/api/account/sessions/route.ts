import { NextRequest } from "next/server";
import { fail, ok } from "@/lib/api";
import { validateCsrf } from "@/lib/csrf";
import { prismaSession } from "@/lib/prisma-session";
import { requireUser } from "@/lib/rbac";

// GET /api/account/sessions - list my active sessions
export async function GET(request: NextRequest) {
  const user = await requireUser(request);
  if (!user) return fail("Unauthorized", 401);

  const sessions = await prismaSession.authSession.findMany({
    where: { userId: user.id, expiresAt: { gt: new Date() }, revokedAt: null },
    select: {
      id: true,
      ipAddress: true,
      userAgent: true,
      appInstance: true,
      createdAt: true,
      lastSeenAt: true,
      expiresAt: true,
    },
    orderBy: { lastSeenAt: "desc" },
  });

  return ok(sessions);
}

// DELETE /api/account/sessions - revoke a specific session
export async function DELETE(request: NextRequest) {
  const user = await requireUser(request);
  if (!user) return fail("Unauthorized", 401);
  if (!validateCsrf(request)) return fail("Invalid CSRF token", 403);

  const body = await request.json().catch(() => null);
  const sessionId = body?.sessionId;
  if (!sessionId || typeof sessionId !== "string") return fail("sessionId is required", 400);

  // Only allow revoking own sessions
  const session = await prismaSession.authSession.findFirst({
    where: { id: sessionId, userId: user.id },
  });
  if (!session) return fail("Phiên không tồn tại", 404);

  await prismaSession.authSession.update({
    where: { id: sessionId },
    data: { revokedAt: new Date(), revokedReason: `SELF_REVOKE:${user.id}` },
  });
  return ok({ deleted: sessionId, revoked: true });
}
