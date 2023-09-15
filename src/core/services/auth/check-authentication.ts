import { NextRequest } from "next/server";
import { jwtVerify } from "jose";

import { COOKIE_TOKEN_NAME } from "./handle-user-cookies";

export async function isAuthenticated(request: NextRequest) {
  const token = request.cookies.get(COOKIE_TOKEN_NAME)?.value;

  if (!token) {
    return false;
  }

  try {
    const verifiedToken = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.AUTH_SECRET)
    );

    if (verifiedToken) {
      return true;
    }

    throw new Error();
  } catch (error) {
    console.error(1111, error);
    return false;
  }
}
