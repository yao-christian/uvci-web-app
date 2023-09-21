import { User } from "@/core/domain";
import * as userRepositories from "@/core/data/repositories/user";

export async function createUser(data: User) {
  return await userRepositories.createUser(data);
}
