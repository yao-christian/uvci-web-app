import "reflect-metadata";
import { injectable } from "tsyringe";

import { prisma } from "@/core/infra/data/prisma/prisma-client";

import type { MedicalService } from "@/core/domain";
import { MedicalServiceRepository } from "@/core/app/usecases/medical-service/ports";

@injectable()
export class PrismaMedicalServiceRepository
  implements MedicalServiceRepository
{
  async create(MedicalService: MedicalService): Promise<MedicalService> {
    return await prisma.medicalService.create({ data: MedicalService });
  }

  async getAll(): Promise<MedicalService[]> {
    return await prisma.medicalService.findMany();
  }
}
