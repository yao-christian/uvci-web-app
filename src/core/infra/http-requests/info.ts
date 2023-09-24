import { CreateInfoDto } from "@/core/domain";
import { notificationService } from "@/core/app/ports/notifications";

const BASE_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/infos`;

export async function createInfoRequest(data: CreateInfoDto) {
  const response = await fetch(BASE_API_URL, {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = "L'opération a échouée, veuillez réessayer";
    notificationService.notify(error, "error");
    throw new Error(error);
  }
}
