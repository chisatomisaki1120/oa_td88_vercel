import { Role } from "@prisma/client";
import { NextRequest } from "next/server";
import { fail } from "@/lib/api";
import { requireRoleRequest } from "@/lib/rbac";

const MESSAGE = "Route export JSON kiểu đọc trực tiếp file SQLite đã bị loại bỏ. Hãy export ở tầng Turso hoặc dùng công cụ Turso/libSQL riêng.";

export async function GET(request: NextRequest) {
  const actor = await requireRoleRequest(request, [Role.ADMIN, Role.SUPER_ADMIN]);
  if (!actor) return fail("Forbidden", 403);
  return fail(MESSAGE, 410);
}
