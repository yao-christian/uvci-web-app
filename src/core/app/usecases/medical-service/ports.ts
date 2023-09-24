import { MedicalService, CreateMedicalServiceDto } from "@/core/domain";

export interface MedicalServiceRepository {
  create(medicalService: CreateMedicalServiceDto): Promise<MedicalService>;
  getAll(): Promise<MedicalService[]>;
}

export const MedicalServiceRepositoryToken = Symbol.for(
  "MedicalServiceRepository"
);
