import * as bcrypt from "bcrypt";
import { prisma } from "@/core/data/prisma";
import { User } from "@/core/models/user";

export async function createUser(user: User) {
  const newUser = {
    ...user,
    password: await bcrypt.hash(user.password, 10),
  };

  const createdUser = await prisma.user.create({ data: newUser });

  const { password, ...rest } = createdUser;

  return rest;
}

export async function getUserByEmail(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  return user;
}
