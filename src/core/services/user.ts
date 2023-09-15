import { User } from "@/core/models";
import * as userRepositories from "@/core/data/repositories/user";

export async function createUser(data: User) {
  return await userRepositories.createUser(data);
}
