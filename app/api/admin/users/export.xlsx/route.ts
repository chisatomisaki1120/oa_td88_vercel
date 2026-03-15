import { NextRequest } from "next/server";
import * as XLSX from "xlsx";
import { Role } from "@prisma/client";
import { fail } from "@/lib/api";
import { prisma } from "@/lib/prisma";
import { prismaSession } from "@/lib/prisma-session";
import { requireRoleRequest } from "@/lib/rbac";

export async function GET(request: NextRequest) {
  const actor = await requireRoleRequest(request, [Role.ADMIN, Role.SUPER_ADMIN]);
  if (!actor) return fail("Forbidden", 403);

  const users = await prismaSession.user.findMany({
    where: {
      deletedAt: null,
      ...(actor.role === Role.SUPER_ADMIN ? {} : { role: { not: Role.SUPER_ADMIN } }),
    },
    select: {
      id: true,
      username: true,
      fullName: true,
      email: true,
      phone: true,
      department: true,
      role: true,
      isActive: true,
      workStartTime: true,
      workEndTime: true,
      lateGraceMinutes: true,
      earlyLeaveGraceMinutes: true,
      workMode: true,
      allowedOffDaysPerMonth: true,
      createdAt: true,
    },
    orderBy: { createdAt: "asc" },
  });

  const userIds = users.map((u) => u.id);
  const assignments = userIds.length
    ? await prisma.employeeShiftAssignment.findMany({
        where: { userId: { in: userIds }, effectiveTo: null },
        include: { shift: { select: { name: true } } },
        orderBy: { effectiveFrom: "desc" },
      })
    : [];

  const shiftByUserId = new Map<string, string>();
  for (const assignment of assignments) {
    if (!shiftByUserId.has(assignment.userId)) {
      shiftByUserId.set(assignment.userId, assignment.shift.name);
    }
  }

  const roleLabel = (r: string) => {
    switch (r) {
      case "SUPER_ADMIN": return "Siêu quản trị";
      case "ADMIN": return "Quản trị viên";
      case "EMPLOYEE": return "Nhân viên";
      default: return r;
    }
  };

  const sheetRows = [
    [
      "Tên đăng nhập",
      "Họ và tên",
      "Email",
      "Điện thoại",
      "Chức vụ",
      "Vai trò",
      "Ca làm việc",
      "Trạng thái",
      "Giờ vào",
      "Giờ ra",
      "Phút trễ cho phép",
      "Phút về sớm cho phép",
      "Hình thức",
      "Nghỉ/tháng",
    ],
    ...users.map((u) => [
      u.username,
      u.fullName,
      u.email ?? "",
      u.phone ?? "",
      u.department ?? "",
      roleLabel(u.role),
      shiftByUserId.get(u.id) ?? "",
      u.isActive ? "Hoạt động" : "Ngừng",
      u.workStartTime ?? "",
      u.workEndTime ?? "",
      u.lateGraceMinutes,
      u.earlyLeaveGraceMinutes,
      u.workMode === "ONLINE" ? "Online" : "Offline",
      u.allowedOffDaysPerMonth,
    ]),
  ];

  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.aoa_to_sheet(sheetRows);
  worksheet["!cols"] = [
    { wch: 18 },
    { wch: 24 },
    { wch: 24 },
    { wch: 14 },
    { wch: 18 },
    { wch: 16 },
    { wch: 20 },
    { wch: 12 },
    { wch: 10 },
    { wch: 10 },
    { wch: 16 },
    { wch: 18 },
    { wch: 10 },
    { wch: 12 },
  ];
  XLSX.utils.book_append_sheet(workbook, worksheet, "NhanVien");

  const buffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });

  const today = new Date().toISOString().slice(0, 10);
  return new Response(buffer, {
    status: 200,
    headers: {
      "content-type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "content-disposition": `attachment; filename="danh-sach-nhan-vien-${today}.xlsx"`,
    },
  });
}
