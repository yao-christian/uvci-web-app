import { Promoter, CreatePromoterDto } from "@/core/domain";

export interface PromoterRepository {
  create(promoter: CreatePromoterDto): Promise<Promoter>;
  getAll(): Promise<Promoter[]>;
}

export const PromoterRepositoryToken = Symbol.for("PromoterRepository");
