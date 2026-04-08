import { Role } from "@prisma/client";
import { NextRequest } from "next/server";
import { fail } from "@/lib/api";
import { validateCsrf } from "@/lib/csrf";
import { requireRoleRequest } from "@/lib/rbac";

const MESSAGE = "Route import JSON vào file SQLite đã bị loại bỏ. Hãy dùng npm run db:import:json:turso hoặc quy trình import Turso riêng.";

export async function POST(request: NextRequest) {
  const actor = await requireRoleRequest(request, [Role.ADMIN, Role.SUPER_ADMIN]);
  if (!actor) return fail("Forbidden", 403);
  if (!validateCsrf(request)) return fail("Invalid CSRF token", 403);
  return fail(MESSAGE, 410);
}
