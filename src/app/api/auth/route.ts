import { NextResponse } from "next/server";
import { expireUserCookie } from "@/core/app/usecases/auth/handle-user-cookies";

// Logout user
export async function DELETE() {
  const response = NextResponse.json({});
  return expireUserCookie(response);
}
