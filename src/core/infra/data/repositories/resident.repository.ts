import "reflect-metadata";
import { injectable } from "tsyringe";

import { prisma } from "@/core/infra/data/prisma/prisma-client";

import type { Resident } from "@/core/domain";
import { ResidentRepository } from "@/core/app/usecases/resident/ports";

@injectable()
export class PrismaResidentRepository implements ResidentRepository {
  async create(Resident: Resident): Promise<Resident> {
    return await prisma.resident.create({ data: Resident });
  }

  async getAll(): Promise<Resident[]> {
    try {
      return await prisma.resident.findMany();
    } catch (error) {
      throw Error("Erreur 500");
    }
  }
}
