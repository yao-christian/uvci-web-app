import "reflect-metadata";
import { container as DIContainer, inject, injectable } from "tsyringe";

import { type ProfessionRepository, ProfessionRepositoryToken } from "./ports";
import { CreateProfessionDto, Profession } from "@/core/domain";

@injectable()
export class CreateProfessionUseCase {
  constructor(
    @inject(ProfessionRepositoryToken)
    private professionRepository: ProfessionRepository
  ) {}

  async execute(professionData: CreateProfessionDto): Promise<Profession> {
    return await this.professionRepository.create(professionData);
  }
}

const createProfessionUseCase = DIContainer.resolve(CreateProfessionUseCase);

export { createProfessionUseCase };
