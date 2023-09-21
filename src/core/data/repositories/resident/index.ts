import { prisma } from "@/core/data/prisma/prisma-client";
import { CreateResidentDto } from "@/core/domain";

export async function createResident(data: CreateResidentDto) {
  return await prisma.resident.create({ data });
}

export async function getResidents() {
  return await prisma.resident.findMany();
}
