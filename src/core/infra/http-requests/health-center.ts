import { CreateHealthCenterDto } from "@/core/domain";
import { notificationService } from "@/core/app/ports/notifications";

const BASE_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/health-centers`;

export async function createHealthCenter(data: CreateHealthCenterDto) {
  const response = await fetch(BASE_API_URL, {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = "La création de centre de santé échouée, veuillez réessayer";
    notificationService.notify(error, "error");
    throw new Error(error);
  }
}
