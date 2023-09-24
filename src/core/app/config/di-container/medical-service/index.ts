import "reflect-metadata";
import { container as DIContainer } from "tsyringe";

import {
  MedicalServiceRepository,
  MedicalServiceRepositoryToken,
} from "@/core/app/usecases/medical-service/ports";

import { PrismaMedicalServiceRepository } from "@/core/infra/data/repositories/medical-service.repository";

DIContainer.register<MedicalServiceRepository>(MedicalServiceRepositoryToken, {
  useClass: PrismaMedicalServiceRepository,
});
