import { prisma } from "@/core/data/prisma";

export async function getResidents() {
  const residents = await prisma.resident.findMany();
  return residents;
}
