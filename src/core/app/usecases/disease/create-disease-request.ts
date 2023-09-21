import "reflect-metadata";
import { container as DIContainer, inject, injectable } from "tsyringe";

import {
  DiseaseRequestToken,
  type DiseaseRequest,
} from "@/core/app/ports/requests/disease.request";

import { CreateDiseaseDto, Disease } from "@/core/domain";

@injectable()
export class CreateDiseaseRequesteUseCase {
  constructor(
    @inject(DiseaseRequestToken)
    private readonly diseaseRequest: DiseaseRequest
  ) {}

  async execute(diseaseData: CreateDiseaseDto): Promise<Disease> {
    try {
      const createdDisease = await this.diseaseRequest.create(diseaseData);
      return createdDisease;
    } catch (error: any) {
      console.error(error);
      throw new Error(error);
    }
  }
}

const createDiseaseRequesteUseCase = DIContainer.resolve(
  CreateDiseaseRequesteUseCase
);

export { createDiseaseRequesteUseCase };
