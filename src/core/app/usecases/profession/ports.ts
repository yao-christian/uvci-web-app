import { Profession, CreateProfessionDto } from "@/core/domain";

export interface ProfessionRepository {
  create(profession: CreateProfessionDto): Promise<Profession>;
  getAll(): Promise<Profession[]>;
}

export const ProfessionRepositoryToken = Symbol.for("ProfessionRepository");
