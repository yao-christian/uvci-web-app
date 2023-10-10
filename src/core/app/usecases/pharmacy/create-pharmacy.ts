import "reflect-metadata";
import { container as DIContainer, inject, injectable } from "tsyringe";

import {
  PharmacyRepositoryToken,
  type PharmacyRepository,
} from "@/core/app/ports/repositories/pharmacy.repository";

import type { Pharmacy } from "@/core/domain";

@injectable()
class CreatePharmacyUseCase {
  constructor(
    @inject(PharmacyRepositoryToken)
    private readonly pharmacyRepository: PharmacyRepository
  ) {}

  async execute(PharmacyData: Pharmacy): Promise<Pharmacy> {
    return await this.pharmacyRepository.create(PharmacyData);
  }
}

const createPharmacyUseCase = DIContainer.resolve(CreatePharmacyUseCase);

export { createPharmacyUseCase };
