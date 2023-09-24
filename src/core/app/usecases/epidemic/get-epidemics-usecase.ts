import "reflect-metadata";
import { container as DIContainer, inject, injectable } from "tsyringe";
import { type EpidemicRepository, EpidemicRepositoryToken } from "./ports";
import { Epidemic } from "@/core/domain";

@injectable()
export class GetEpidemicsUseCase {
  constructor(
    @inject(EpidemicRepositoryToken)
    private epidemicRepository: EpidemicRepository
  ) {}

  async execute(): Promise<Epidemic[]> {
    return await this.epidemicRepository.getAll();
  }
}

const getEpidemicsUseCase = DIContainer.resolve(GetEpidemicsUseCase);

export { getEpidemicsUseCase };
