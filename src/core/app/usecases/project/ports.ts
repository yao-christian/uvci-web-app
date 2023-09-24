import { Project, CreateProjectDto } from "@/core/domain";

export interface ProjectRepository {
  create(project: CreateProjectDto): Promise<Project>;
  getAll(): Promise<Project[]>;
}

export const ProjectRepositoryToken = Symbol.for("ProjectRepository");
