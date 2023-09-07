import { NextResponse } from "next/server";
import { createUser } from "@/core/services/user";

export async function POST(request: Request) {
  const body = await request.json();

  const createdUser = await createUser(body);

  return NextResponse.json(createdUser);
}
