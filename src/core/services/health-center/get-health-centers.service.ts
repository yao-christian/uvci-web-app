import { cache } from "react";
import * as healthCentersRepository from "@/core/data/repositories/health-center";

export const getHealthCenters = cache(async () => {
  const healthCenters = await healthCentersRepository.getHealthCenters();
  return healthCenters;
});
