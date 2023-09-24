import "reflect-metadata";
import { container as DIContainer, inject, injectable } from "tsyringe";

import { type ProjectRepository, ProjectRepositoryToken } from "./ports";

import { Project } from "@/core/domain";

@injectable()
export class GetProjectsUseCase {
  constructor(
    @inject(ProjectRepositoryToken)
    private projectRepository: ProjectRepository
  ) {}

  async execute(): Promise<Project[]> {
    try {
      return await this.projectRepository.getAll();
    } catch (error: any) {
      console.error(error);
      throw new Error(error);
    }
  }
}

const getProjectsUseCase = DIContainer.resolve(GetProjectsUseCase);

export { getProjectsUseCase };
