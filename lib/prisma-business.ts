import { PrismaClient } from "@prisma/client";
import { createPrismaAdapter } from "@/lib/db";
import { validateEnv } from "@/lib/env";

validateEnv();

const adapter = createPrismaAdapter("business");

declare global {
  var prismaBusiness: PrismaClient | undefined;
}

export const prismaBusiness =
  global.prismaBusiness ??
  new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  global.prismaBusiness = prismaBusiness;
}
