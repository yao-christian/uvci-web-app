import "reflect-metadata";
import { container as DIContainer, injectable, inject } from "tsyringe";

import type { Disease } from "@/core/domain";

import {
  DiseaseRepositoryToken,
  type DiseaseRepository,
} from "@/core/app/ports/repositories/disease.repository";

@injectable()
export class GetDiseasesUseCase {
  constructor(
    @inject(DiseaseRepositoryToken)
    private readonly diseaseRepository: DiseaseRepository
  ) {}

  async execute(): Promise<Disease[]> {
    try {
      const diseases = await this.diseaseRepository.getAll();
      return diseases;
    } catch (error) {
      console.error(error);
      throw new Error(`Erreur lors de la récupération des maladies`);
    }
  }
}

const getDiseasesUseCase = DIContainer.resolve(GetDiseasesUseCase);

export { getDiseasesUseCase };
