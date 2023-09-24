"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { CreateInfoDto } from "@/core/domain";
import { Input, Textarea } from "@/shared/components/form";
import Drawer from "@/shared/components/drawer";
import Button from "@/shared/components/button";

import { createInfoRequest } from "@/core/infra/http-requests/info";

type PropsType = {
  isOPen: boolean;
  toggle: () => void;
};

type ValuesType = {
  info: string;
  date: string;
  type: string;
};

const schema = z.object({
  info: z.string().min(1, { message: "Information obligatoire" }),
  date: z.string().min(1, { message: "Date obligatoire" }),
  type: z.string().min(1, { message: "Type obligatoire" }),
});

export default function AddInfo({ isOPen, toggle }: PropsType) {
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

      const data: CreateInfoDto = {
        ...values,
        date: new Date(values.date),
      };

      await createInfoRequest(data);

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
        Ajouter une information
      </h1>

      <hr className="my-1" />

      <form className="px-4 my-5">
        <div className="space-y-5">
          <Textarea
            isRequired
            label="Information"
            {...register("info")}
            error={errors.info?.message}
            placeholder="Information"
          />

          <Input
            type="date"
            isRequired
            label="Date"
            {...register("date")}
            error={errors.date?.message}
            placeholder="Date"
          />

          <Input
            isRequired
            label="Type"
            {...register("type")}
            error={errors.type?.message}
            placeholder="Type"
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
