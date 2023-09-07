import { UserCredentials } from "@/core/models/user";

export async function signin(user: UserCredentials) {
  const response = await fetch("api/auth", {
    method: "POST",
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Authetification échouée");
  }
}

export async function logout() {
  const response = await fetch("api/auth", {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Deconnexion échouée");
  }
}
