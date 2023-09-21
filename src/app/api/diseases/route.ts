import { NextResponse } from "next/server";
import { createDiseaseUseCase } from "@/core/app/usecases/disease/create-disease";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const createdDisease = await createDiseaseUseCase.execute(body);
    return NextResponse.json(createdDisease);
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ success: false, message: (error as Error).message }),
      { status: 401, headers: { "content-type": "application/json" } }
    );
  }
}
