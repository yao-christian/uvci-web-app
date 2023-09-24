import "reflect-metadata";
import { container as DIContainer } from "tsyringe";

import {
  ProjectRepository,
  ProjectRepositoryToken,
} from "@/core/app/usecases/project/ports";

import { PrismaProjectRepository } from "@/core/infra/data/repositories/project.repository";

DIContainer.register<ProjectRepository>(ProjectRepositoryToken, {
  useClass: PrismaProjectRepository,
});
