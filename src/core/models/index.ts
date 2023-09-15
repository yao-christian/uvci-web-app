// User
import type { User } from "@prisma/client";
export { User };
export type CreateUserDto = Omit<User, "id">;

// Pharmacy
import type { Pharmacy } from "@prisma/client";
export { Pharmacy };
export type CreatePharmacyDto = Omit<Pharmacy, "id">;

export type UserCredentials = {
  email: string;
  password: string;
};
