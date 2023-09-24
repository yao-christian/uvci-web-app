import { Info, CreateInfoDto } from "@/core/domain";

export interface InfoRepository {
  create(info: CreateInfoDto): Promise<Info>;
  getAll(): Promise<Info[]>;
}

export const InfoRepositoryToken = Symbol.for("InfoRepository");
