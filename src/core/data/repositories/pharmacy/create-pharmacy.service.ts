import { prisma } from "@/core/data/prisma";
import { CreatePharmacyDto } from "@/core/models";

import "server-only";

export const createPharmacy = async (data: CreatePharmacyDto) => {
  return await prisma.pharmacy.create({ data });
};
