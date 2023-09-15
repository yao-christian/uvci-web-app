import { NextResponse } from "next/server";
import { createUser } from "@/core/services/user";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const createdUser = await createUser(body);
    return NextResponse.json(createdUser);
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ success: false, message: (error as Error).message }),
      { status: 401, headers: { "content-type": "application/json" } }
    );
  }
}
