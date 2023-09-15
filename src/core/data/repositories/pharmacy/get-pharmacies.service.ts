import { cache } from "react";
import { prisma } from "@/core/data/prisma/prisma-client";

import "server-only";

export const getPharmacies = cache(async () => {
  const pharmacies = await prisma.pharmacy.findMany();
  return pharmacies;
});
