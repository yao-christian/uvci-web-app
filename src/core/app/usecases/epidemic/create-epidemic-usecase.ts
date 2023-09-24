import "reflect-metadata";
import { container as DIContainer, inject, injectable } from "tsyringe";

import { type EpidemicRepository, EpidemicRepositoryToken } from "./ports";

import { CreateEpidemicDto, Epidemic } from "@/core/domain";

@injectable()
export class CreateEpidemicUseCase {
  constructor(
    @inject(EpidemicRepositoryToken)
    private readonly epidemicRepository: EpidemicRepository
  ) {}

  async execute(epidemicData: CreateEpidemicDto): Promise<Epidemic> {
    return await this.epidemicRepository.create(epidemicData);
  }
}

const createEpidemicUseCase = DIContainer.resolve(CreateEpidemicUseCase);

export { createEpidemicUseCase };
