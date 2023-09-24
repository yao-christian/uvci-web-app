import { CreatePharmacyDto } from "@/core/domain";
import * as pharmacyRepositories from "@/core/infra/data/repositories/pharmacy";

import "server-only";

export const createPharmacy = async (data: CreatePharmacyDto) => {
  return await pharmacyRepositories.createPharmacy(data);
};
