import "reflect-metadata";
import { container as DIContainer, inject, injectable } from "tsyringe";

import { type ResidentRepository, ResidentRepositoryToken } from "./ports";

import type { Resident, CreateResidentDto } from "@/core/domain";

@injectable()
class CreateResidentUseCase {
  constructor(
    @inject(ResidentRepositoryToken)
    private readonly residentRepository: ResidentRepository
  ) {}

  async execute(residentData: CreateResidentDto): Promise<Resident> {
    return await this.residentRepository.create(residentData);
  }
}

const createResidentUseCase = DIContainer.resolve(CreateResidentUseCase);

export { createResidentUseCase };
