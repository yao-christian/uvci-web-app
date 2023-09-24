import "reflect-metadata";
import { container as DIContainer } from "tsyringe";

import {
  InfoRepository,
  InfoRepositoryToken,
} from "@/core/app/usecases/info/ports";

import { PrismaInfoRepository } from "@/core/infra/data/repositories/info.repository";

DIContainer.register<InfoRepository>(InfoRepositoryToken, {
  useClass: PrismaInfoRepository,
});
