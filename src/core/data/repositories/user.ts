import * as bcrypt from "bcrypt";

import { CreateUserDto } from "@/core/domain";
import { prisma } from "@/core/data/prisma/prisma-client";

export async function createUser(user: CreateUserDto) {
  const newUser = {
    ...user,
    password: await bcrypt.hash(user.password, 10),
  };

  const createdUser = await prisma.user.create({
    data: newUser,
  });

  const { password, ...restcreatedUser } = createdUser;

  return restcreatedUser;
}

export async function getUserByEmail(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  return user;
}
