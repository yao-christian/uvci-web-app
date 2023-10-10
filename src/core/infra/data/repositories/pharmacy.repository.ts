import "reflect-metadata";
import { injectable } from "tsyringe";

import { prisma } from "@/core/infra/data/prisma/prisma-client";

import type { PharmacyRepository } from "@/core/app/ports/repositories/pharmacy.repository";
import type { Pharmacy } from "@/core/domain";

@injectable()
export class PrismaPharmacyRepository implements PharmacyRepository {
  async create(Pharmacy: Pharmacy): Promise<Pharmacy> {
    return await prisma.pharmacy.create({ data: Pharmacy });
  }

  async getAll(): Promise<Pharmacy[]> {
    return await prisma.pharmacy.findMany();
  }
}
