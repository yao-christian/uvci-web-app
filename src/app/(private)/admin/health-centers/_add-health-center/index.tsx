"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { CreateHealthCenterDto } from "@/core/domain";
import { Input, Textarea } from "@/shared/components/form";
import Drawer from "@/shared/components/drawer";
import Button from "@/shared/components/button";
import { createHealthCenter } from "@/core/infra/http-requests/health-center";

type PropsType = {
  isOPen: boolean;
  toggle: () => void;
};

type ValuesType = {
  name: string;
  address: string;
  tel: string;
};

const schema = z.object({
  name: z.string().min(1, { message: "Nom obligatoire" }),
  address: z.string().min(1, { message: "Adresse obligatoire" }),
  tel: z.string().min(1, { message: "Téléphone obligatoire" }),
});

export default function AddHealthCenter({ isOPen, toggle }: PropsType) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ValuesType>({
    resolver: zodResolver(schema),
  });

  const handleAdd: SubmitHandler<ValuesType> = async (values) => {
    try {
      setIsSubmitting(true);

      const data: CreateHealthCenterDto = {
        name: values.name,
        location: values.address,
        phoneNumber: values.tel,
      };

      await createHealthCenter(data);
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
        Ajouter un centre de santé
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

          <Input
            isRequired
            label="Téléphone"
            {...register("tel")}
            error={errors.tel?.message}
            placeholder="Téléphone"
          />

          <Textarea
            isRequired
            {...register("address")}
            error={errors.address?.message}
            label="Adresse"
            placeholder="Adresse"
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
