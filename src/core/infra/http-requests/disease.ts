import type { CreateDiseaseDto, Disease } from "@/core/domain";
import { notificationService } from "@/core/app/ports/notifications";

const BASE_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/diseases`;

export async function createDisease(
  diseaseData: CreateDiseaseDto
): Promise<Disease> {
  const response = await fetch(BASE_API_URL, {
    method: "POST",
    body: JSON.stringify(diseaseData),
  });

  if (!response.ok) {
    const error = "L'opération a échoué, veuillez réessayer";
    notificationService.notify(error, "error");
    throw new Error(error);
  }

  const body: any = response.body;

  return body;
}
