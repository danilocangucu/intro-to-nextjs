import { PrismaClient } from "@prisma/client";

const prisma = (() => {
  if (process.env.NODE_ENV === "production") {
    console.log("Creating new PrismaClient instance");
    return new PrismaClient();
  }

  if (!global.prisma) {
    console.log("Creating new PrismaClient instance");
    global.prisma = new PrismaClient();
  }

  console.log("Reusing PrismaClient instance");
  return global.prisma;
})();

export default prisma;
