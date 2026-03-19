import { AttendanceStatus, WorkMode } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { prismaSession } from "@/lib/prisma-session";

const TARGET_USERNAME = "chisato";
const VN_TIMEZONE = "Asia/Ho_Chi_Minh";
const CHECK_IN_BEFORE_MINUTES_MIN = 3;
const CHECK_IN_BEFORE_MINUTES_MAX = 5;
const CHECK_OUT_AFTER_MINUTES_MIN = 3;
const CHECK_OUT_AFTER_MINUTES_MAX = 6;

type ActiveShift = {
  startTime: string | null;
  endTime: string | null;
  lateGraceMinutes: number;
  earlyLeaveGraceMinutes: number;
  breakPolicyJson: string | null;
};

/** Lấy thời gian hiện tại theo múi giờ Việt Nam, bất kể VPS ở timezone nào */
function vnNow() {
  const real = new Date();
  const dateStr = real.toLocaleDateString("en-CA", { timeZone: VN_TIMEZONE }); // YYYY-MM-DD
  const timeStr = real.toLocaleTimeString("en-GB", { timeZone: VN_TIMEZONE, hour: "2-digit", minute: "2-digit", hour12: false }); // HH:MM
  const [h, m] = timeStr.split(":").map(Number);
  return { date: dateStr, time: timeStr, minutes: h * 60 + m, real };
}

function parseHHMM(value?: string | null) {
  if (!value) return null;
  const [h, m] = value.split(":").map(Number);
  if (!Number.isFinite(h) || !Number.isFinite(m)) return null;
  return h * 60 + m;
}

async function getActiveShiftForUser(userId: string, reference = new Date()): Promise<ActiveShift> {
  const assignment = await prisma.employeeShiftAssignment.findFirst({
    where: {
      userId,
      effectiveFrom: { lte: reference },
      OR: [{ effectiveTo: null }, { effectiveTo: { gte: reference } }],
    },
    orderBy: { effectiveFrom: "desc" },
    include: {
      shift: {
        select: {
          startTime: true,
          endTime: true,
          lateGraceMinutes: true,
          earlyLeaveGraceMinutes: true,
          breakPolicyJson: true,
        },
      },
    },
  });

  if (assignment?.shift) {
    return assignment.shift;
  }

  const user = await prismaSession.user.findUnique({
    where: { id: userId },
    select: {
      workStartTime: true,
      workEndTime: true,
      lateGraceMinutes: true,
      earlyLeaveGraceMinutes: true,
      breakPolicyJson: true,
    },
  });

  return {
    startTime: user?.workStartTime ?? null,
    endTime: user?.workEndTime ?? null,
    lateGraceMinutes: user?.lateGraceMinutes ?? 5,
    earlyLeaveGraceMinutes: user?.earlyLeaveGraceMinutes ?? 5,
    breakPolicyJson: user?.breakPolicyJson ?? null,
  };
}

function shouldCheckIn(nowMinutes: number, shift: ActiveShift, hasToday: boolean) {
  if (hasToday) return false;
  const start = parseHHMM(shift.startTime) ?? 8 * 60;
  const minutesBeforeStart = start - nowMinutes;
  return minutesBeforeStart >= CHECK_IN_BEFORE_MINUTES_MIN && minutesBeforeStart <= CHECK_IN_BEFORE_MINUTES_MAX;
}

function shouldCheckOut(nowMinutes: number, shift: ActiveShift, today: { checkInAt: Date | null; checkOutAt: Date | null } | null) {
  if (!today?.checkInAt || today.checkOutAt) return false;
  const end = parseHHMM(shift.endTime) ?? 17 * 60;
  const minutesAfterEnd = nowMinutes - end;
  return minutesAfterEnd >= CHECK_OUT_AFTER_MINUTES_MIN && minutesAfterEnd <= CHECK_OUT_AFTER_MINUTES_MAX;
}

async function autoCheckIn(userId: string, workDate: string, realNow: Date) {
  const created = await prisma.attendanceDay.create({
    data: {
      userId,
      workDate,
      checkInAt: realNow,
      status: AttendanceStatus.PRESENT,
      warningFlagsJson: "[]",
      updatedBy: userId,
      createdBy: userId,
    },
  });
  return { action: "check-in" as const, recordId: created.id, at: realNow.toISOString() };
}

async function autoCheckOut(dayId: string, userId: string, realNow: Date) {
  const updated = await prisma.attendanceDay.update({
    where: { id: dayId },
    data: {
      checkOutAt: realNow,
      updatedBy: userId,
    },
  });
  return { action: "check-out" as const, recordId: updated.id, at: realNow.toISOString() };
}

export async function runAutoClockChisato() {
  const { date: workDate, time: vnTime, minutes: nowMinutes, real: realNow } = vnNow();

  const user = await prismaSession.user.findFirst({
    where: { username: TARGET_USERNAME, isActive: true, deletedAt: null },
    select: { id: true, username: true, workMode: true },
  });

  if (!user) {
    return { ok: true, skipped: true, reason: `User "${TARGET_USERNAME}" not found in shared auth/session DB or inactive.` };
  }

  if (user.workMode !== WorkMode.ONLINE) {
    return { ok: true, skipped: true, reason: `User "${TARGET_USERNAME}" is not ONLINE.` };
  }

  const today = await prisma.attendanceDay.findUnique({
    where: { userId_workDate: { userId: user.id, workDate } },
    select: { id: true, checkInAt: true, checkOutAt: true },
  });

  const shift = await getActiveShiftForUser(user.id, realNow);

  if (shouldCheckIn(nowMinutes, shift, Boolean(today))) {
    return { ok: true, skipped: false, ...(await autoCheckIn(user.id, workDate, realNow)) };
  }

  if (shouldCheckOut(nowMinutes, shift, today)) {
    return { ok: true, skipped: false, ...(await autoCheckOut(today!.id, user.id, realNow)) };
  }

  return { ok: true, skipped: true, reason: `Nothing to do for ${TARGET_USERNAME} at ${vnTime} (VN)` };
}
