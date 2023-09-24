import { NextResponse } from "next/server";

import "@/core/app/config/di-container/medical-service";
import { createMedicalServiceUseCase } from "@/core/app/usecases/medical-service/create-medical-service-usecase";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const createdMedicalService = await createMedicalServiceUseCase.execute(
      body
    );
    return NextResponse.json(createdMedicalService);
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ success: false, message: (error as Error).message }),
      { status: 405, headers: { "content-type": "application/json" } }
    );
  }
}
