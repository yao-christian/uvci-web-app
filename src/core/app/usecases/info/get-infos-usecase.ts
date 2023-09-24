import "reflect-metadata";
import { container as DIContainer, inject, injectable } from "tsyringe";

import { type InfoRepository, InfoRepositoryToken } from "./ports";

import { Info } from "@/core/domain";

@injectable()
export class GetInfosUseCase {
  constructor(
    @inject(InfoRepositoryToken)
    private infoRepository: InfoRepository
  ) {}

  async execute(): Promise<Info[]> {
    try {
      return await this.infoRepository.getAll();
    } catch (error: any) {
      console.error(error);
      throw new Error(error);
    }
  }
}

const getInfosUseCase = DIContainer.resolve(GetInfosUseCase);

export { getInfosUseCase };
