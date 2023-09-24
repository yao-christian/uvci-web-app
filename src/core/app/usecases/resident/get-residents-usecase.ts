import "reflect-metadata";
import { container as DIContainer, injectable, inject } from "tsyringe";

import type { Resident } from "@/core/domain";

import { ResidentRepositoryToken, type ResidentRepository } from "./ports";

@injectable()
export class GetResidentsUseCase {
  constructor(
    @inject(ResidentRepositoryToken)
    private readonly residentRepository: ResidentRepository
  ) {}

  async execute(): Promise<Resident[]> {
    return await this.residentRepository.getAll();
  }
}

const getResidentsUseCase = DIContainer.resolve(GetResidentsUseCase);

export { getResidentsUseCase };
