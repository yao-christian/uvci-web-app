"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { CreatePromoterDto } from "@/core/domain";
import { Input } from "@/shared/components/form";
import Drawer from "@/shared/components/drawer";
import Button from "@/shared/components/button";
import { createPromoterRequest } from "@/core/infra/http-requests/promoter";

type PropsType = {
  isOPen: boolean;
  toggle: () => void;
};

type ValuesType = {
  name: string;
};

const schema = z.object({
  name: z.string().min(1, { message: "Nom obligatoire" }),
});

export default function AddPromoter({ isOPen, toggle }: PropsType) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ValuesType>({
    resolver: zodResolver(schema),
  });

  const handleAdd: SubmitHandler<ValuesType> = async (values) => {
    try {
      setIsSubmitting(true);

      const data: CreatePromoterDto = {
        name: values.name,
      };

      await createPromoterRequest(data);
      reset();
      router.refresh();
      toggle();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Drawer width={300} direction="right" isOpen={isOPen} onClose={toggle}>
      <h1 className="font-bold text-gray-500 p-2 text-center">
        Ajouter un promoter
      </h1>

      <hr className="my-1" />

      <form className="px-4">
        <div className="space-y-5 mt-6">
          <Input
            isRequired
            label="Nom"
            {...register("name")}
            error={errors.name?.message}
            placeholder="Nom"
          />
        </div>

        <div className="flex justify-end space-x-2 mt-5">
          <Button
            className="bg-error text-white border-error hover:bg-error hover:border-error"
            onClick={toggle}
          >
            Annuler
          </Button>

          <Button
            className="text-white"
            isLoading={isSubmitting}
            onClick={handleSubmit(handleAdd)}
          >
            Ajouter
          </Button>
        </div>
      </form>
    </Drawer>
  );
}
