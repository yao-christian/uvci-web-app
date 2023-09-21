import { cache } from "react";
import * as residentsRepository from "@/core/data/repositories/resident";

export const getResidents = cache(async () => {
  const residents = await residentsRepository.getResidents();
  return residents;
});
