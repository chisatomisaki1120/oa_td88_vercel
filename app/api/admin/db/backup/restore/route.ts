import { Role } from "@prisma/client";
import { NextRequest } from "next/server";
import { fail } from "@/lib/api";
import { validateCsrf } from "@/lib/csrf";
import { requireRoleRequest } from "@/lib/rbac";

const MESSAGE = "Project này đã bỏ hoàn toàn SQLite local. Hãy dùng import JSON lên Turso hoặc khôi phục ở tầng Turso/VPS.";

export async function POST(request: NextRequest) {
  const actor = await requireRoleRequest(request, [Role.SUPER_ADMIN]);
  if (!actor) return fail("Forbidden", 403);
  if (!validateCsrf(request)) return fail("Invalid CSRF token", 403);
  return fail(MESSAGE, 410);
}
