import { Resident, CreateResidentDto } from "@/core/domain";

export interface ResidentRepository {
  create(Resident: CreateResidentDto): Promise<Resident>;
  getAll(): Promise<Resident[]>;
}

export const ResidentRepositoryToken = Symbol.for("ResidentRepository");
