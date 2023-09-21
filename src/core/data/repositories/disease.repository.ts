import "reflect-metadata";
import { injectable } from "tsyringe";

import { prisma } from "@/core/data/prisma/prisma-client";

import type { DiseaseRepository } from "@/core/app/ports/repositories/disease.repository";
import type { Disease } from "@/core/domain";

@injectable()
export class PrismaDiseaseRepository implements DiseaseRepository {
  async create(disease: Disease): Promise<Disease> {
    return await prisma.disease.create({ data: disease });
  }

  async getAll(): Promise<Disease[]> {
    return await prisma.disease.findMany();
  }
}
