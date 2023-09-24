import { NextResponse } from "next/server";

import "@/core/app/config/di-container/profession";
import { createProfessionUseCase } from "@/core/app/usecases/profession/create-profession-usecase";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const createdResident = await createProfessionUseCase.execute(body);
    return NextResponse.json(createdResident);
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ success: false, message: (error as Error).message }),
      { status: 405, headers: { "content-type": "application/json" } }
    );
  }
}
