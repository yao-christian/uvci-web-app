import "reflect-metadata";
import { injectable } from "tsyringe";

import { prisma } from "@/core/infra/data/prisma/prisma-client";

import type { Info } from "@/core/domain";
import { InfoRepository } from "@/core/app/usecases/info/ports";

@injectable()
export class PrismaInfoRepository implements InfoRepository {
  async create(Info: Info): Promise<Info> {
    return await prisma.info.create({ data: Info });
  }

  async getAll(): Promise<Info[]> {
    try {
      return await prisma.info.findMany();
    } catch (error) {
      throw Error("Erreur 500");
    }
  }
}
