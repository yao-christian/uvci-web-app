import { CreateResidentDto } from "@/core/domain";
import * as ResidentRepositories from "@/core/data/repositories/resident";

import "server-only";

export async function createResident(data: CreateResidentDto) {
  return await ResidentRepositories.createResident(data);
}
