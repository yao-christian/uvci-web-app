import * as bcrypt from "bcrypt";

import { NextResponse } from "next/server";

import { UserCredentials } from "@/core/domain";

import { getUserByEmail } from "@/core/infra/data/repositories/user";
import { setUserCookie } from "./handle-user-cookies";

export async function signin(
  response: NextResponse,
  credentials: UserCredentials
) {
  const user = await getUserByEmail(credentials.email);

  if (user && (await bcrypt.compare(credentials.password, user.password))) {
    const { password, ...restUser } = user;
    return await setUserCookie(response, restUser);
  }

  throw new Error("Authentification échouée");
}
