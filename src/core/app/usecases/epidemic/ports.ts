import { Epidemic, CreateEpidemicDto } from "@/core/domain";

export interface EpidemicRepository {
  create(epidemic: CreateEpidemicDto): Promise<Epidemic>;
  getAll(): Promise<Epidemic[]>;
}

export const EpidemicRepositoryToken = Symbol.for("EpidemicRepository");
