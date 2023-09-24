import "reflect-metadata";
import { container as DIContainer, inject, injectable } from "tsyringe";

import { type InfoRepository, InfoRepositoryToken } from "./ports";
import { CreateInfoDto, Info } from "@/core/domain";

@injectable()
export class CreateInfoUseCase {
  constructor(
    @inject(InfoRepositoryToken)
    private infoRepository: InfoRepository
  ) {}

  async execute(infoData: CreateInfoDto): Promise<Info> {
    return await this.infoRepository.create(infoData);
  }
}

const createInfoUseCase = DIContainer.resolve(CreateInfoUseCase);

export { createInfoUseCase };
