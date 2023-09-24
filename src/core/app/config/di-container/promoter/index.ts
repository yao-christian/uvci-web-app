import "reflect-metadata";
import { container as DIContainer } from "tsyringe";

import {
  PromoterRepository,
  PromoterRepositoryToken,
} from "@/core/app/usecases/promoter/ports";

import { PrismaPromoterRepository } from "@/core/infra/data/repositories/promoter.repository";

DIContainer.register<PromoterRepository>(PromoterRepositoryToken, {
  useClass: PrismaPromoterRepository,
});
