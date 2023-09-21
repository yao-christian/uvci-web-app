import "reflect-metadata";
import { container as DIContainer, inject, injectable } from "tsyringe";

import {
  DiseaseRepositoryToken,
  type DiseaseRepository,
} from "@/core/app/ports/repositories/disease.repository";
import type { Disease } from "@/core/domain";

@injectable()
class CreateDiseaseUseCase {
  constructor(
    @inject(DiseaseRepositoryToken)
    private readonly diseaseRepository: DiseaseRepository
  ) {}

  async execute(diseaseData: Disease): Promise<Disease> {
    try {
      const createdDisease = await this.diseaseRepository.create(diseaseData);
      return createdDisease;
    } catch (error) {
      console.error(error);
      throw new Error(`Erreur lors de la création de la maladie`);
    }
  }
}

const createDiseaseUseCase = DIContainer.resolve(CreateDiseaseUseCase);

export { createDiseaseUseCase };
