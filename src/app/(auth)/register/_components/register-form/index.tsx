"use client";

import { useState } from "react";

import { Input } from "@/shared/components/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

import { CreateUserDto } from "@/core/domain";
import { signup } from "@/core/services/http-requests/auth";
import Button from "@/shared/components/button";

import schema from "./schema";

export default function RegisterForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserDto>({
    resolver: zodResolver(schema),
  });

  const handleSignup: SubmitHandler<CreateUserDto> = async (values) => {
    try {
      const data = {
        ...values,
      };

      setIsSubmitting(true);
      await signup(data);
      router.replace("/login");
    } finally {
      setIsSubmitting(false);
    }
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

      <Button
        isLoading={isSubmitting}
        onClick={handleSubmit(handleSignup)}
        className="w-full mt-4 bg-primary shadow p-2 rounded text-white"
      >
        S'inscrire
      </Button>
    </form>
  );
}
