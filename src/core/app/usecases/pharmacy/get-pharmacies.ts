import "reflect-metadata";
import { container as DIContainer, injectable, inject } from "tsyringe";

import type { Pharmacy } from "@/core/domain";

import {
  PharmacyRepositoryToken,
  type PharmacyRepository,
} from "@/core/app/ports/repositories/pharmacy.repository";

@injectable()
export class GetPharmaciesUseCase {
  constructor(
    @inject(PharmacyRepositoryToken)
    private readonly pharmacyRepository: PharmacyRepository
  ) {}

  async execute(): Promise<Pharmacy[]> {
    return await this.pharmacyRepository.getAll();
  }
}

const getPharmaciesUseCase = DIContainer.resolve(GetPharmaciesUseCase);

export { getPharmaciesUseCase };
