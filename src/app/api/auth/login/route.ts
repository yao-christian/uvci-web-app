import { NextResponse } from "next/server";
import { signin } from "@/core/app/usecases/auth/signin";

export async function POST(request: Request) {
  const body = await request.json();
  const response = NextResponse.json({});

  try {
    return await signin(response, body);
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ success: false, message: (error as Error).message }),
      { status: 401, headers: { "content-type": "application/json" } }
    );
  }
}
