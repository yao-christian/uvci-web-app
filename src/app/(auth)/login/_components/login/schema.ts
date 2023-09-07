import { z } from "zod";

const schema = z.object({
  email: z.string().min(1, { message: "Email obligatoire" }),
  password: z.string().min(1, { message: "Mot de passe obligatoire" }),
});

export default schema;
