import { CreateHealthCenterDto } from "@/core/models";
import { Notify } from "@/core/services/notify";

const BASE_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/health-centers`;

export async function createHealthCenter(data: CreateHealthCenterDto) {
  const response = await fetch(BASE_API_URL, {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = "La création de centre de santé échouée, veuillez réessayer";
    Notify.error(error);
    throw new Error(error);
  }
}
