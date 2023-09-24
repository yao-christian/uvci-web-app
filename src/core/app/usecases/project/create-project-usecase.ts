import "reflect-metadata";
import { container as DIContainer, inject, injectable } from "tsyringe";

import { type ProjectRepository, ProjectRepositoryToken } from "./ports";
import { CreateProjectDto, Project } from "@/core/domain";

@injectable()
export class CreateProjectUseCase {
  constructor(
    @inject(ProjectRepositoryToken)
    private projectRepository: ProjectRepository
  ) {}

  async execute(ProjectData: CreateProjectDto): Promise<Project> {
    return await this.projectRepository.create(ProjectData);
  }
}

const createProjectUseCase = DIContainer.resolve(CreateProjectUseCase);

export { createProjectUseCase };
