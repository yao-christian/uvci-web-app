import "reflect-metadata";
import { injectable } from "tsyringe";

import type { Disease } from "@/core/domain";
import type { DiseaseRequest } from "@/core/app/ports/requests/disease.request";
import { notificationService } from "@/core/app/ports/notifications";

const BASE_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/diseases`;

@injectable()
export class HttpDiseaseRequest implements DiseaseRequest {
  async create(diseaseData: Disease): Promise<Disease> {
    const response = await fetch(BASE_API_URL, {
      method: "POST",
      body: JSON.stringify(diseaseData),
    });

    if (!response.ok) {
      const error = "L'opération a échoué, veuillez réessayer";
      notificationService.notify(error, "error");
      throw new Error(error);
    }

    return diseaseData;
  }
}
