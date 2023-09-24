import "reflect-metadata";
import { injectable } from "tsyringe";

import { prisma } from "@/core/infra/data/prisma/prisma-client";

import type { Project } from "@/core/domain";
import { ProjectRepository } from "@/core/app/usecases/project/ports";

@injectable()
export class PrismaProjectRepository implements ProjectRepository {
  async create(Project: Project): Promise<Project> {
    return await prisma.project.create({ data: Project });
  }

  async getAll(): Promise<Project[]> {
    return await prisma.project.findMany();
  }
}
