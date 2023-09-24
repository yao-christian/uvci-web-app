"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { NumericFormat } from "react-number-format";

import { CreateResidentDto } from "@/core/domain";
import { Input } from "@/shared/components/form";
import Drawer from "@/shared/components/drawer";
import Button from "@/shared/components/button";

import { createResidentRequest } from "@/core/infra/http-requests/resident";

type PropsType = {
  isOPen: boolean;
  toggle: () => void;
};

type ValuesType = {
  firstName: string;
  lastName: string;
  profession: string;
  gender: string;
  age: string;
  birthCountry: string;
  nationality: string;
  educationLevel: string;
  identificationNumber: string;
  email: string;
  phoneNumber: string;
};

const schema = z.object({
  firstName: z.string().min(1, { message: "First Name is required" }),
  lastName: z.string().min(1, { message: "Last Name is required" }),
  profession: z.string().min(1, { message: "Profession is required" }),
  gender: z.string().min(1, { message: "Gender is required" }),
  age: z.string().min(1, { message: "Age is required" }),
  birthCountry: z.string().min(1, { message: "Birth Country is required" }),
  nationality: z.string().min(1, { message: "Nationality is required" }),
  educationLevel: z.string().min(1, { message: "Education Level is required" }),
  identificationNumber: z
    .string()
    .min(1, { message: "Identification Number is required" }),
  email: z.string().email({ message: "Invalid Email Address" }),
  phoneNumber: z.string().min(1, { message: "Phone Number is required" }),
});

export default function AddResident({ isOPen, toggle }: PropsType) {
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

      const data: CreateResidentDto = {
        ...values,
        age: Number(values.age),
      };

      await createResidentRequest(data);

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
            {...register("firstName")}
            error={errors.firstName?.message}
            placeholder="Nom"
          />

          <Input
            isRequired
            label="Prénoms"
            {...register("lastName")}
            error={errors.lastName?.message}
            placeholder="Prénoms"
          />

          <Input
            isRequired
            label="Téléphone"
            {...register("phoneNumber")}
            error={errors.phoneNumber?.message}
            placeholder="Téléphone"
          />

          <Input
            isRequired
            label="Sexe"
            {...register("gender")}
            error={errors.gender?.message}
            placeholder="Sexe"
          />

          <Controller
            control={control}
            name="age"
            render={({ field }) => (
              <NumericFormat placeholder="Age" {...field} customInput={Input} />
            )}
          />

          <Input
            isRequired
            label="Nationilité"
            {...register("nationality")}
            error={errors.nationality?.message}
            placeholder="Nationilité"
          />

          <Input
            isRequired
            label="Profession"
            {...register("profession")}
            error={errors.profession?.message}
            placeholder="Profession"
          />

          <Input
            isRequired
            label="Carte d'identité"
            {...register("identificationNumber")}
            error={errors.identificationNumber?.message}
            placeholder="Carte d'identité"
          />

          <Input
            isRequired
            label="Pays de naissance"
            {...register("birthCountry")}
            error={errors.birthCountry?.message}
            placeholder="Pays de naissance"
          />

          <Input
            isRequired
            label="Niveau d'étude"
            {...register("educationLevel")}
            error={errors.educationLevel?.message}
            placeholder="Niveau d'étude"
          />

          <Input
            isRequired
            label="Email"
            {...register("email")}
            error={errors.email?.message}
            placeholder="Email"
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
