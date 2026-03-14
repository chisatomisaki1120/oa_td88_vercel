import { Role } from "@prisma/client";
import { NextRequest } from "next/server";
import { fail } from "@/lib/api";
import { validateCsrf } from "@/lib/csrf";
import { requireRoleRequest } from "@/lib/rbac";

const MESSAGE = "Project này đã bỏ hoàn toàn SQLite local. Hãy dùng export/import JSON với Turso hoặc backup ở tầng Turso/VPS.";

export async function GET(request: NextRequest) {
  const actor = await requireRoleRequest(request, [Role.ADMIN, Role.SUPER_ADMIN]);
  if (!actor) return fail("Forbidden", 403);
  return fail(MESSAGE, 410);
}

export async function POST(request: NextRequest) {
  const actor = await requireRoleRequest(request, [Role.ADMIN, Role.SUPER_ADMIN]);
  if (!actor) return fail("Forbidden", 403);
  if (!validateCsrf(request)) return fail("Invalid CSRF token", 403);
  return fail(MESSAGE, 410);
}
