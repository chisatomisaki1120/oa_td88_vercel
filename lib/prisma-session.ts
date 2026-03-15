import { PrismaClient } from "@prisma/client";
import { createPrismaAdapter } from "@/lib/db";
import { validateEnv } from "@/lib/env";

validateEnv();

const adapter = createPrismaAdapter("session");

declare global {
  var prismaSession: PrismaClient | undefined;
}

export const prismaSession =
  global.prismaSession ??
  new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  global.prismaSession = prismaSession;
}
