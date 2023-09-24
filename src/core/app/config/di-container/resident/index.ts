import "reflect-metadata";
import { container as DIContainer } from "tsyringe";

import {
  ResidentRepository,
  ResidentRepositoryToken,
} from "@/core/app/usecases/resident/ports";

import { PrismaResidentRepository } from "@/core/infra/data/repositories/resident.repository";

DIContainer.register<ResidentRepository>(ResidentRepositoryToken, {
  useClass: PrismaResidentRepository,
});
