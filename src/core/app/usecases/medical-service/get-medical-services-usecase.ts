import "reflect-metadata";
import { container as DIContainer, inject, injectable } from "tsyringe";

import {
  type MedicalServiceRepository,
  MedicalServiceRepositoryToken,
} from "./ports";

import { MedicalService } from "@/core/domain";

@injectable()
export class GetMedicalServicesUseCase {
  constructor(
    @inject(MedicalServiceRepositoryToken)
    private medicalServiceRepository: MedicalServiceRepository
  ) {}

  async execute(): Promise<MedicalService[]> {
    try {
      return await this.medicalServiceRepository.getAll();
    } catch (error: any) {
      console.error(error);
      throw new Error(error);
    }
  }
}

const getMedicalServicesUseCase = DIContainer.resolve(
  GetMedicalServicesUseCase
);

export { getMedicalServicesUseCase };
