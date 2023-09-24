import "reflect-metadata";
import { injectable } from "tsyringe";

import { prisma } from "@/core/infra/data/prisma/prisma-client";

import type { Promoter } from "@/core/domain";
import { PromoterRepository } from "@/core/app/usecases/promoter/ports";

@injectable()
export class PrismaPromoterRepository implements PromoterRepository {
  async create(Promoter: Promoter): Promise<Promoter> {
    return await prisma.promoter.create({ data: Promoter });
  }

  async getAll(): Promise<Promoter[]> {
    return await prisma.promoter.findMany();
  }
}
