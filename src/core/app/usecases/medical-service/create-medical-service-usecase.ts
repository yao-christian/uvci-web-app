import "reflect-metadata";
import { container as DIContainer, inject, injectable } from "tsyringe";

import {
  type MedicalServiceRepository,
  MedicalServiceRepositoryToken,
} from "./ports";
import { CreateMedicalServiceDto, MedicalService } from "@/core/domain";

@injectable()
export class CreateMedicalServiceUseCase {
  constructor(
    @inject(MedicalServiceRepositoryToken)
    private medicalServiceRepository: MedicalServiceRepository
  ) {}

  async execute(
    MedicalServiceData: CreateMedicalServiceDto
  ): Promise<MedicalService> {
    return await this.medicalServiceRepository.create(MedicalServiceData);
  }
}

const createMedicalServiceUseCase = DIContainer.resolve(
  CreateMedicalServiceUseCase
);

export { createMedicalServiceUseCase };
