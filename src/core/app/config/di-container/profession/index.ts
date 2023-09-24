import "reflect-metadata";
import { container as DIContainer } from "tsyringe";

import {
  ProfessionRepository,
  ProfessionRepositoryToken,
} from "@/core/app/usecases/profession/ports";

import { PrismaProfessionRepository } from "@/core/infra/data/repositories/profession.repository";

DIContainer.register<ProfessionRepository>(ProfessionRepositoryToken, {
  useClass: PrismaProfessionRepository,
});
