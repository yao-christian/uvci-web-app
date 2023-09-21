import { NextResponse } from "next/server";
import { SignJWT } from "jose";

import { User } from "@/core/domain";

export const COOKIE_TOKEN_NAME = "token";

export async function setUserCookie(
  response: NextResponse,
  user: Omit<User, "password">
) {
  const token = await new SignJWT({ user })
    .setProtectedHeader({ alg: "HS256" })
    .sign(new TextEncoder().encode(process.env.AUTH_SECRET));

  response.cookies.set({
    name: COOKIE_TOKEN_NAME,
    value: token,
    maxAge: 3600,
    path: "/",
  });

  return response;
}

export async function expireUserCookie(response: NextResponse) {
  response.cookies.set({
    name: COOKIE_TOKEN_NAME,
    value: "",
    maxAge: 0,
  });

  return response;
}
