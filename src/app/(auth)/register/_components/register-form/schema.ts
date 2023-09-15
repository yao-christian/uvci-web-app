import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(1, { message: "Nom obligatoire" }),
  lastName: z.string().min(1, { message: "Prix obligatoire" }),
  email: z
    .string()
    .min(1, { message: "Email obligatoire" })
    .email("Email incorrect"),
  password: z.string().min(1, { message: "Mot de passe obligatoire" }),
});

export default schema;
