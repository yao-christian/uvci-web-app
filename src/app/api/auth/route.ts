import { NextResponse } from "next/server";
import { signin, expireUserCookie } from "@/core/services/auth";

/*
import { loginUser } from "@/core/services/auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const user = await loginUser(body);

  return NextResponse.json(user);
}
*/

// Signin user
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

// Logout user
export async function DELETE() {
  const response = NextResponse.json({});
  return expireUserCookie(response);
}
