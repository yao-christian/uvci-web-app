import { createHealthCenter } from "@/core/services/health-center/create-health-center.service";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const createdHealthCenter = await createHealthCenter(body);
    return NextResponse.json(createdHealthCenter);
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ success: false, message: (error as Error).message }),
      { status: 405, headers: { "content-type": "application/json" } }
    );
  }
}
