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
    return await this.diseaseRepository.getAll();
  }
}

const getDiseasesUseCase = DIContainer.resolve(GetDiseasesUseCase);

export { getDiseasesUseCase };
