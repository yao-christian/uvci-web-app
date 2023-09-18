import type { User, Pharmacy, HealthCenter } from "@prisma/client";

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
