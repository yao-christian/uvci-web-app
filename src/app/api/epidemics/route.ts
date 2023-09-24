import { NextResponse } from "next/server";

import "@/core/app/config/di-container/epidemic";
import { createEpidemicUseCase } from "@/core/app/usecases/epidemic/create-epidemic-usecase";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const createdResident = await createEpidemicUseCase.execute(body);
    return NextResponse.json(createdResident);
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ success: false, message: (error as Error).message }),
      { status: 405, headers: { "content-type": "application/json" } }
    );
  }
}
