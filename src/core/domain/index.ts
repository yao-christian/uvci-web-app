import type {
  User,
  Pharmacy,
  HealthCenter,
  Resident,
  Disease,
  Epidemic,
  Profession,
  Project,
  Promoter,
  MedicalService,
  Info,
} from "@prisma/client";

// User
export { User };
export type CreateUserDto = Omit<User, "id">;

export type UserCredentials = {
  email: string;
  password: string;
};

// Pharmacy
export { Pharmacy };
export type CreatePharmacyDto = Omit<Pharmacy, "id">;

// Health center
export { HealthCenter };
export type CreateHealthCenterDto = Omit<HealthCenter, "id">;

// Health center
export { Resident };
export type CreateResidentDto = Omit<Resident, "id">;

export { Disease };
export type CreateDiseaseDto = Omit<Disease, "id">;

export { Epidemic };
export type CreateEpidemicDto = Omit<Epidemic, "id">;

export { Profession };
export type CreateProfessionDto = Omit<Profession, "id">;

export { Project };
export type CreateProjectDto = Omit<Project, "id">;

export { Promoter };
export type CreatePromoterDto = Omit<Promoter, "id">;

export { MedicalService };
export type CreateMedicalServiceDto = Omit<MedicalService, "id">;

export { Info };
export type CreateInfoDto = Omit<Info, "id">;
