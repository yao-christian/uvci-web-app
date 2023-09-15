"use client";

import { Input } from "@/shared/components/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

import { UserCredentials } from "@/core/models";

import { signin } from "@/core/requests/auth";

import schema from "./schema";
import Button from "@/shared/components/button";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCredentials>({
    resolver: zodResolver(schema),
  });

  const handleSignin: SubmitHandler<UserCredentials> = async (data) => {
    try {
      setIsSubmitting(true);
      await signin(data);
      router.replace("/admin/profile");
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="mt-4">
      <div className="space-y-5 mt-6">
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
        onClick={handleSubmit(handleSignin)}
        className="w-full mt-4 bg-primary shadow p-2 rounded text-white"
      >
        SE CONNECTER
      </Button>
    </form>
  );
}
