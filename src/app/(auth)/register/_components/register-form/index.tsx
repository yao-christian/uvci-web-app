"use client";

import { Input } from "@/shared/components/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

import { User } from "@/core/models/user";
import { signin } from "@/core/requests/auth";

import schema from "./schema";

export default function RegisterForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: zodResolver(schema),
  });

  const handleSignup: SubmitHandler<User> = (data) => {
    signin(data).then(() => {
      router.replace("/admin/profile");
    });
  };

  return (
    <form className="mt-4">
      <div className="space-y-5 mt-6">
        <div>
          <Input
            isRequired
            {...register("firstName")}
            error={errors.firstName?.message}
            placeholder="Nom"
          />
        </div>

        <div>
          <Input
            isRequired
            {...register("lastName")}
            error={errors.lastName?.message}
            placeholder="Prénoms"
          />
        </div>

        <div>
          <Input
            isRequired
            {...register("username")}
            error={errors.username?.message}
            placeholder="Nom utilisateur"
          />
        </div>

        <div>
          <Input
            type="email"
            isRequired
            {...register("email")}
            error={errors.email?.message}
            placeholder="E-mail"
          />
        </div>

        <div>
          <Input
            type="password"
            isRequired
            {...register("password")}
            error={errors.password?.message}
            placeholder="Mot de passe"
          />
        </div>
      </div>

      <div className="flex items-center justify-between mt-8">
        <div className="flex items-center">
          <input type="checkbox" id="remember-me" className="w-4 h-4 rounded" />

          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-gray-900"
          >
            Souviens-toi de moi
          </label>
        </div>

        <a
          href="#"
          className="text-sm font-medium text-green-600 hover:text-green-500"
        >
          Besoin d'aide pour se connecter
        </a>
      </div>

      <button
        onClick={handleSubmit(handleSignup)}
        className="w-full mt-4 bg-primary-700 shadow p-2 rounded text-primary-100"
      >
        S'inscrire
      </button>
    </form>
  );
}
