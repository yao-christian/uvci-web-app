import { NextResponse } from "next/server";
import { createPharmacy } from "@/core/services/pharmacy";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const createdPharmacy = await createPharmacy(body);
    return NextResponse.json(createdPharmacy);
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ success: false, message: (error as Error).message }),
      { status: 401, headers: { "content-type": "application/json" } }
    );
  }
}
