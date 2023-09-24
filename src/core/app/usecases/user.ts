import { User } from "@/core/domain";
import * as userRepositories from "@/core/infra/data/repositories/user";

export async function createUser(data: User) {
  return await userRepositories.createUser(data);
}
