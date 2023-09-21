import { prisma } from "@/core/data/prisma/prisma-client";
import { CreateHealthCenterDto } from "@/core/domain";

export async function createHealthCenter(data: CreateHealthCenterDto) {
  return await prisma.healthCenter.create({ data });
}

export async function getHealthCenters() {
  return await prisma.healthCenter.findMany();
}
