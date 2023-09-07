import type { Pharmacy } from "@prisma/client";
export { Pharmacy };
export type CreatePharmacyDto = Omit<Pharmacy, "id">;
