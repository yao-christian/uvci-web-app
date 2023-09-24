import "reflect-metadata";
import { container as DIContainer, inject, injectable } from "tsyringe";

import { type ProfessionRepository, ProfessionRepositoryToken } from "./ports";

import { Profession } from "@/core/domain";

@injectable()
export class GetProfessionsUseCase {
  constructor(
    @inject(ProfessionRepositoryToken)
    private professionRepository: ProfessionRepository
  ) {}

  async execute(): Promise<Profession[]> {
    try {
      return await this.professionRepository.getAll();
    } catch (error: any) {
      console.error(error);
      throw new Error(error);
    }
  }
}

const getProfessionsUseCase = DIContainer.resolve(GetProfessionsUseCase);

export { getProfessionsUseCase };
