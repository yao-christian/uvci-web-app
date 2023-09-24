import "reflect-metadata";
import { injectable } from "tsyringe";

import { prisma } from "@/core/infra/data/prisma/prisma-client";

import type { Epidemic } from "@/core/domain";
import { EpidemicRepository } from "@/core/app/usecases/epidemic/ports";

@injectable()
export class PrismaEpidemicRepository implements EpidemicRepository {
  async create(Epidemic: Epidemic): Promise<Epidemic> {
    return await prisma.epidemic.create({ data: Epidemic });
  }

  async getAll(): Promise<Epidemic[]> {
    return await prisma.epidemic.findMany();
  }
}
