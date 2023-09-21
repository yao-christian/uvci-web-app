import { prisma } from "@/core/data/prisma/prisma-client";
import { CreatePharmacyDto } from "@/core/domain";

import "server-only";

export const createPharmacy = async (data: CreatePharmacyDto) => {
  return await prisma.pharmacy.create({ data });
};
