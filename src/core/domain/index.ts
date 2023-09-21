import type {
  User,
  Pharmacy,
  HealthCenter,
  Resident,
  Disease,
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
