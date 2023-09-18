import { CreateHealthCenterDto } from "@/core/models";
import * as healthRepositories from "@/core/data/repositories/health-center";

import "server-only";

export async function createHealthCenter(data: CreateHealthCenterDto) {
  return await healthRepositories.createHealthCenter(data);
}
