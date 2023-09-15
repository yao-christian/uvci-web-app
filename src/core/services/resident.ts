import { prisma } from "@/core/data/prisma/prisma-client";

export async function getResidents() {
  const residents = await prisma.resident.findMany();
  return residents;
}
