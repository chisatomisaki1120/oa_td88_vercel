import { NextRequest } from "next/server";
import { Role } from "@prisma/client";
import { fail, ok } from "@/lib/api";
import { prisma } from "@/lib/prisma";
import { prismaSession } from "@/lib/prisma-session";
import { requireRoleRequest } from "@/lib/rbac";
import { ATTENDANCE_DEFAULT_LIMIT, ATTENDANCE_MAX_LIMIT } from "@/lib/constants";
import { isValidDate } from "@/lib/time";

export async function GET(request: NextRequest) {
  const actor = await requireRoleRequest(request, [Role.ADMIN, Role.SUPER_ADMIN]);
  if (!actor) return fail("Forbidden", 403);

  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date");
  const month = searchParams.get("month");
  const department = searchParams.get("department");
  const userId = searchParams.get("userId");
  const openOnly = searchParams.get("openOnly") === "1";
  const limitRaw = Number(searchParams.get("limit") ?? String(ATTENDANCE_DEFAULT_LIMIT));
  const take = Number.isFinite(limitRaw) ? Math.min(Math.max(Math.trunc(limitRaw), 1), ATTENDANCE_MAX_LIMIT) : ATTENDANCE_DEFAULT_LIMIT;

  if (date && !isValidDate(date)) return fail("Ngày không hợp lệ", 400);
  if (month && !/^\d{4}-\d{2}$/.test(month)) return fail("Tháng không hợp lệ", 400);

  const page = Math.max(1, Number(searchParams.get("page") ?? "1") || 1);
  const where: Record<string, unknown> = {};
  if (date) where.workDate = date;
  else if (month) where.workDate = { startsWith: month };
  if (userId) where.userId = userId;
  if (openOnly) {
    where.checkInAt = { not: null };
    where.checkOutAt = null;
  }

  const users = await prismaSession.user.findMany({
    where: {
      deletedAt: null,
      ...(userId ? { id: userId } : {}),
      ...(department ? { department } : {}),
    },
    select: { id: true, fullName: true, username: true, department: true },
  });

  const relevantUserIds = users.map((u) => u.id);
  if (relevantUserIds.length === 0) {
    return ok({ items: [], total: 0, page, pageSize: take, totalPages: 0 });
  }

  const businessWhere = {
    ...where,
    userId: userId ?? { in: relevantUserIds },
  } as Record<string, unknown>;

  const [itemsRaw, total] = await Promise.all([
    prisma.attendanceDay.findMany({
      where: businessWhere,
      select: {
        id: true,
        userId: true,
        workDate: true,
        status: true,
        checkInAt: true,
        checkOutAt: true,
        workedMinutes: true,
        isOffDay: true,
        isDeducted: true,
        offReason: true,
        warningFlagsJson: true,
        createdAt: true,
        breakSessions: {
          select: {
            id: true,
            breakType: true,
            startAt: true,
            endAt: true,
            durationMinutesComputed: true,
          },
          orderBy: { startAt: "asc" },
        },
      },
      orderBy: [{ workDate: "desc" }, { createdAt: "desc" }],
      skip: (page - 1) * take,
      take,
    }),
    prisma.attendanceDay.count({ where: businessWhere }),
  ]);

  const userMap = new Map(users.map((u) => [u.id, u]));
  const items = itemsRaw.map((item) => ({ ...item, user: userMap.get(item.userId) ?? null })).filter((item) => item.user);

  return ok({ items, total, page, pageSize: take, totalPages: Math.ceil(total / take) });
}
