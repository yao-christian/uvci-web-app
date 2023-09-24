"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { NumericFormat } from "react-number-format";

import { CreateEpidemicDto } from "@/core/domain";
import { Input } from "@/shared/components/form";
import Drawer from "@/shared/components/drawer";
import Button from "@/shared/components/button";

import { createEpidemicRequest } from "@/core/infra/http-requests/epidemic";

type PropsType = {
  isOPen: boolean;
  toggle: () => void;
};

type ValuesType = {
  name: string;
  startDate: string;
  endDate: string;
  totalCases: string;
  totalDeaths: string;
};

const schema = z.object({
  name: z.string().min(1, { message: "Nom obligatoire" }),
  startDate: z.string().min(1, { message: "Date début obligatoire" }),
  endDate: z.string().min(1, { message: "Date fin obligatoire" }),
  totalCases: z.string().min(1, { message: "Nombre de cas obligatoire" }),
  totalDeaths: z.string().min(1, { message: "Nombre de décès obligatoire" }),
});

export default function AddEpidemic({ isOPen, toggle }: PropsType) {
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

      const data: CreateEpidemicDto = {
        ...values,
        startDate: new Date(values.startDate),
        endDate: new Date(values.endDate),
        totalCases: Number(values.totalCases),
        totalDeaths: Number(values.totalDeaths),
      };

      await createEpidemicRequest(data);

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
        Ajouter un habitant
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

          <Controller
            control={control}
            name="totalCases"
            render={({ field }) => (
              <NumericFormat
                placeholder="Nombre de cas"
                {...field}
                customInput={Input}
              />
            )}
          />

          <Controller
            control={control}
            name="totalDeaths"
            render={({ field }) => (
              <NumericFormat
                placeholder="Nombre de décès"
                {...field}
                customInput={Input}
              />
            )}
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
