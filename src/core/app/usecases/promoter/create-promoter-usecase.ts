import "reflect-metadata";
import { container as DIContainer, inject, injectable } from "tsyringe";

import { type PromoterRepository, PromoterRepositoryToken } from "./ports";
import { CreatePromoterDto, Promoter } from "@/core/domain";

@injectable()
export class CreatePromoterUseCase {
  constructor(
    @inject(PromoterRepositoryToken)
    private promoterRepository: PromoterRepository
  ) {}

  async execute(PromoterData: CreatePromoterDto): Promise<Promoter> {
    return await this.promoterRepository.create(PromoterData);
  }
}

const createPromoterUseCase = DIContainer.resolve(CreatePromoterUseCase);

export { createPromoterUseCase };
