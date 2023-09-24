import "reflect-metadata";
import { container as DIContainer } from "tsyringe";

import {
  EpidemicRepository,
  EpidemicRepositoryToken,
} from "@/core/app/usecases/epidemic/ports";

import { PrismaEpidemicRepository } from "@/core/infra/data/repositories/epidemic.repository";

DIContainer.register<EpidemicRepository>(EpidemicRepositoryToken, {
  useClass: PrismaEpidemicRepository,
});
