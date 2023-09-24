import { NextResponse } from "next/server";

import "@/core/app/config/di-container/promoter";
import { createPromoterUseCase } from "@/core/app/usecases/promoter/create-promoter-usecase";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const createdPromoter = await createPromoterUseCase.execute(body);
    return NextResponse.json(createdPromoter);
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ success: false, message: (error as Error).message }),
      { status: 405, headers: { "content-type": "application/json" } }
    );
  }
}
