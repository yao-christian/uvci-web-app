import "reflect-metadata";
import { container as DIContainer } from "tsyringe";

import { Disease } from "@/core/domain";
import { PrismaDiseaseRepository } from "@/core/infra/data/repositories/disease.repository";

export interface DiseaseRepository {
  create(disease: Disease): Promise<Disease>;
  getAll(): Promise<Disease[]>;
}

export const DiseaseRepositoryToken = Symbol.for("DiseaseRepository");

DIContainer.register<DiseaseRepository>(DiseaseRepositoryToken, {
  useClass: PrismaDiseaseRepository,
});
