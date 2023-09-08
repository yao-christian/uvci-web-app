import { UserCredentials } from "@/core/models/user";

const BASE_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/auth`;

export async function signin(user: UserCredentials) {
  const response = await fetch(BASE_API_URL, {
    method: "POST",
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Authetification échouée");
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
