import { NextResponse } from "next/server";

import "@/core/app/config/di-container/info";
import { createInfoUseCase } from "@/core/app/usecases/info/create-info-usecase";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const createdInfo = await createInfoUseCase.execute(body);
    return NextResponse.json(createdInfo);
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ success: false, message: (error as Error).message }),
      { status: 405, headers: { "content-type": "application/json" } }
    );
  }
}
