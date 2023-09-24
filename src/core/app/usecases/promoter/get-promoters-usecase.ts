import "reflect-metadata";
import { container as DIContainer, inject, injectable } from "tsyringe";

import { type PromoterRepository, PromoterRepositoryToken } from "./ports";

import { Promoter } from "@/core/domain";

@injectable()
export class GetPromotersUseCase {
  constructor(
    @inject(PromoterRepositoryToken)
    private promoterRepository: PromoterRepository
  ) {}

  async execute(): Promise<Promoter[]> {
    try {
      return await this.promoterRepository.getAll();
    } catch (error: any) {
      console.error(error);
      throw new Error(error);
    }
  }
}

const getPromotersUseCase = DIContainer.resolve(GetPromotersUseCase);

export { getPromotersUseCase };
