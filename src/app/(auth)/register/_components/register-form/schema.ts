import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(1, { message: "Nom obligatoire" }),
  lastName: z.number().min(1, { message: "Prix obligatoire" }),
  username: z.number().min(1, { message: "Nom utilisateur obligatoire" }),
  email: z.number().min(1, { message: "Email obligatoire" }),
  password: z.string().min(1, { message: "Mot de passe obligatoire" }),
});

export default schema;
