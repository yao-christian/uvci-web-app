import "reflect-metadata";
import { container as DIContainer } from "tsyringe";

import { CreatePharmacyDto, Pharmacy } from "@/core/domain";
import { PrismaPharmacyRepository } from "@/core/infra/data/repositories/pharmacy.repository";

export interface PharmacyRepository {
  create(pharmacyData: CreatePharmacyDto): Promise<Pharmacy>;
  getAll(): Promise<Pharmacy[]>;
}

export const PharmacyRepositoryToken = Symbol.for("PharmacyRepository");

DIContainer.register<PharmacyRepository>(PharmacyRepositoryToken, {
  useClass: PrismaPharmacyRepository,
});
