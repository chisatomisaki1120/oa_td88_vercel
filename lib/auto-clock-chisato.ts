import { AttendanceStatus, WorkMode } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { prismaSession } from "@/lib/prisma-session";

const TARGET_USERNAME = "chisato";
const NOW_OFFSET_HOURS = 7;
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

function nowVN() {
  return new Date(Date.now() + NOW_OFFSET_HOURS * 60 * 60 * 1000);
}

function vnDateString(date = nowVN()) {
  return date.toISOString().slice(0, 10);
}

function hhmm(date: Date) {
  return date.toISOString().slice(11, 16);
}

function parseHHMM(value?: string | null) {
  if (!value) return null;
  const [h, m] = value.split(":").map(Number);
  if (!Number.isFinite(h) || !Number.isFinite(m)) return null;
  return h * 60 + m;
}

function minutesSinceMidnight(date: Date) {
  return parseHHMM(hhmm(date)) ?? 0;
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

function shouldCheckIn(now: Date, shift: ActiveShift, hasToday: boolean) {
  if (hasToday) return false;
  const start = parseHHMM(shift.startTime) ?? 8 * 60;
  const nowMin = minutesSinceMidnight(now);
  const minutesBeforeStart = start - nowMin;
  return minutesBeforeStart >= CHECK_IN_BEFORE_MINUTES_MIN && minutesBeforeStart <= CHECK_IN_BEFORE_MINUTES_MAX;
}

function shouldCheckOut(now: Date, shift: ActiveShift, today: { checkInAt: Date | null; checkOutAt: Date | null } | null) {
  if (!today?.checkInAt || today.checkOutAt) return false;
  const end = parseHHMM(shift.endTime) ?? 17 * 60;
  const nowMin = minutesSinceMidnight(now);
  const minutesAfterEnd = nowMin - end;
  return minutesAfterEnd >= CHECK_OUT_AFTER_MINUTES_MIN && minutesAfterEnd <= CHECK_OUT_AFTER_MINUTES_MAX;
}

async function autoCheckIn(userId: string, now: Date) {
  const workDate = vnDateString(now);
  const created = await prisma.attendanceDay.create({
    data: {
      userId,
      workDate,
      checkInAt: now,
      status: AttendanceStatus.PRESENT,
      warningFlagsJson: "[]",
      updatedBy: userId,
      createdBy: userId,
    },
  });
  return { action: "check-in" as const, recordId: created.id, at: now.toISOString() };
}

async function autoCheckOut(dayId: string, userId: string, now: Date) {
  const updated = await prisma.attendanceDay.update({
    where: { id: dayId },
    data: {
      checkOutAt: now,
      updatedBy: userId,
    },
  });
  return { action: "check-out" as const, recordId: updated.id, at: now.toISOString() };
}

export async function runAutoClockChisato() {
  const now = nowVN();
  const workDate = vnDateString(now);

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

  const shift = await getActiveShiftForUser(user.id, now);

  if (shouldCheckIn(now, shift, Boolean(today))) {
    return { ok: true, skipped: false, ...(await autoCheckIn(user.id, now)) };
  }

  if (shouldCheckOut(now, shift, today)) {
    return { ok: true, skipped: false, ...(await autoCheckOut(today!.id, user.id, now)) };
  }

  return { ok: true, skipped: true, reason: `Nothing to do for ${TARGET_USERNAME} at ${now.toISOString()}` };
}
