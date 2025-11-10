import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

const datasourceUrl =
  process.env.DATABASE_URL ??
  "postgresql://preview:preview@localhost:5432/preview";

if (!process.env.DATABASE_URL && process.env.NODE_ENV === "production") {
  console.warn(
    "DATABASE_URL is not set. Using the preview placeholder; API routes relying on Prisma will fail until a real database is configured."
  );
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    datasources: {
      db: {
        url: datasourceUrl,
      },
    },
    log: process.env.NODE_ENV === "development" ? ["query", "error"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
