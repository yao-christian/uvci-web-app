import * as bcrypt from "bcrypt";
import { prisma } from "@/core/data/prisma";
import { User, UserCredentials } from "@/core/models/user";
import { NextRequest, NextResponse } from "next/server";
import { SignJWT, jwtVerify } from "jose";

const COOKIE_TOKEN_NAME = "token";

/*
export async function signin(credentials: UserCredentials) {
  const user = await prisma.user.findFirst({
    where: {
      email: credentials.email,
    },
  });

  if (user && (await bcrypt.compare(credentials.password, user.password))) {
    const { password, ...rest } = user;
    return rest;
  }

  return null;
}
*/

export async function signin(
  response: NextResponse,
  credentials: UserCredentials
) {
  const user = await prisma.user.findFirst({
    where: {
      email: credentials.email,
    },
  });

  // if (user && (await bcrypt.compare(credentials.password, user.password))) {
  //   const { password, ...rest } = user;
  //   return await setUserCookie(response, rest);
  // }

  if (user) {
    const { password, ...rest } = user;
    return await setUserCookie(response, rest);
  }

  throw new Error("Authentification échouée");
}

export async function isAuthenticated(request: NextRequest) {
  const token = request.cookies.get(COOKIE_TOKEN_NAME)?.value;

  if (!token) {
    return false;
  }

  try {
    const verifiedToken = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.NEXTAUTH_SECRET)
    );

    if (verifiedToken) {
      return true;
    }

    throw new Error();
  } catch (error) {
    console.error();
    return false;
  }
}

export async function setUserCookie(
  response: NextResponse,
  user: Omit<User, "password">
) {
  const token = await new SignJWT({ user })
    .setProtectedHeader({ alg: "HS256" })
    .sign(new TextEncoder().encode(process.env.NEXTAUTH_SECRET));

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
