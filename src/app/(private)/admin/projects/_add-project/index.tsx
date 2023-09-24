"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { CreateProjectDto } from "@/core/domain";
import { Input } from "@/shared/components/form";
import Drawer from "@/shared/components/drawer";
import Button from "@/shared/components/button";

import { createProjectRequest } from "@/core/infra/http-requests/project";

type PropsType = {
  isOPen: boolean;
  toggle: () => void;
};

type ValuesType = {
  name: string;
  startDate: string;
  endDate: string;
  description: string;
};

const schema = z.object({
  name: z.string().min(1, { message: "Nom obligatoire" }),
  startDate: z.string().min(1, { message: "Date début obligatoire" }),
  endDate: z.string().min(1, { message: "Date fin obligatoire" }),
  description: z.string().min(1, { message: "Description obligatoire" }),
});

export default function AddProject({ isOPen, toggle }: PropsType) {
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

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const handleAdd: SubmitHandler<ValuesType> = async (values) => {
    try {
      setIsSubmitting(true);

      const data: CreateProjectDto = {
        ...values,
        startDate: new Date(values.startDate),
        endDate: new Date(values.endDate),
        description: values.description,
      };

      await createProjectRequest(data);

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
    <Drawer
      width={300}
      direction="right"
      isOpen={isOPen}
      className="overflow-auto py-2"
      onClose={toggle}
    >
      <h1 className="font-bold text-gray-500 p-2 text-center">
        Ajouter un projet
      </h1>

      <hr className="my-1" />

      <form className="px-4 my-5">
        <div className="space-y-5">
          <Input
            isRequired
            label="Nom"
            {...register("name")}
            error={errors.name?.message}
            placeholder="Nom"
          />

          <Input
            type="date"
            isRequired
            label="Date début"
            {...register("startDate")}
            error={errors.startDate?.message}
            placeholder="Date début"
          />

          <Input
            type="date"
            isRequired
            label="Date fin"
            {...register("endDate")}
            error={errors.endDate?.message}
            placeholder="Date fin"
          />

          <Input
            isRequired
            label="Description"
            {...register("description")}
            error={errors.description?.message}
            placeholder="Description"
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
