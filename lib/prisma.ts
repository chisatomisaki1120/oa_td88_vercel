import { PrismaClient } from "@prisma/client";
import { createPrismaAdapter } from "@/lib/db";
import { validateEnv } from "@/lib/env";

validateEnv();

const adapter = createPrismaAdapter();

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ??
  new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
