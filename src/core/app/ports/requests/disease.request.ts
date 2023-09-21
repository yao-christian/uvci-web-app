import "reflect-metadata";
import { container as DIContainer } from "tsyringe";

import { Disease, CreateDiseaseDto } from "@/core/domain";
import { HttpDiseaseRequest } from "@/core/services/http-requests/disease.request";

export interface DiseaseRequest {
  create(disease: CreateDiseaseDto): Promise<Disease>;
}

export const DiseaseRequestToken = Symbol.for("DiseaseRequest");

DIContainer.register<DiseaseRequest>(DiseaseRequestToken, {
  useClass: HttpDiseaseRequest,
});
