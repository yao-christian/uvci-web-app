import { Notify } from "@/core/services/notify";
import { CreateUserDto, UserCredentials } from "@/core/models";

const BASE_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/auth`;

export async function signin(user: UserCredentials) {
  const response = await fetch(`${BASE_API_URL}/login`, {
    method: "POST",
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    const error = "L'authetification a échoué, veuillez réessayer";
    Notify.error(error);
    throw new Error(error);
  }
}

export async function signup(data: CreateUserDto) {
  const response = await fetch(`${BASE_API_URL}/register`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = "La création de compte a échoué, veuillez réessayer";
    Notify.error(error);
    throw new Error();
  }
}

export async function logout() {
  const response = await fetch(BASE_API_URL, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Deconnexion échouée");
  }
}
