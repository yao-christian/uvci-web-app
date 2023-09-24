import "reflect-metadata";
import { injectable } from "tsyringe";

import { prisma } from "@/core/infra/data/prisma/prisma-client";

import type { Profession } from "@/core/domain";
import { ProfessionRepository } from "@/core/app/usecases/profession/ports";

@injectable()
export class PrismaProfessionRepository implements ProfessionRepository {
  async create(Profession: Profession): Promise<Profession> {
    return await prisma.profession.create({ data: Profession });
  }

  async getAll(): Promise<Profession[]> {
    return await prisma.profession.findMany();
  }
}
