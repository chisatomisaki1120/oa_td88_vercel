import { NextRequest } from "next/server";
import { fail, ok } from "@/lib/api";
import { runAutoClockChisato } from "@/lib/auto-clock-chisato";

function isAuthorized(request: NextRequest) {
  const secret = process.env.CRON_SECRET;
  if (!secret) return true;

  const auth = request.headers.get("authorization");
  const bearer = auth?.startsWith("Bearer ") ? auth.slice(7) : null;
  const headerSecret = request.headers.get("x-cron-secret");
  return bearer === secret || headerSecret === secret;
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return fail("Unauthorized", 401);
  }

  const result = await runAutoClockChisato();
  return ok(result);
}
