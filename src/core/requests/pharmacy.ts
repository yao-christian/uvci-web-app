import { CreatePharmacyDto } from "@/core/models";

export async function createPharmacy(data: CreatePharmacyDto) {
  const response = await fetch("http://localhost:3000/api/pharmacy", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Opération échouée, veuillez réessayer");
  }

  const pharmacy = response.body;

  return pharmacy;
}
