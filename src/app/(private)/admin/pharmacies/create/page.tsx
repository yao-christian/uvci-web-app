"use client";

import { useRouter } from "next/navigation";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { createPharmacy } from "@/core/requests/pharmacy";
import { Input } from "@/shared/components/forms";
import { CreatePharmacyDto } from "@/core/models";
import Button from "@/shared/components/button";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(1, { message: "Nom obligatoire" }),
  location: z.string().min(1, { message: "Localisation obligatoire" }),
});

export default function CreatePharmacyPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePharmacyDto>({
    resolver: zodResolver(schema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCreatePharmacy: SubmitHandler<CreatePharmacyDto> = async (
    data
  ) => {
    setIsSubmitting(true);

    try {
      await createPharmacy(data);
      router.replace("/admin/pharmacies");
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="max-w-lg mx-auto card">
      <div className="card-body">
        <h2 className="card-title mb-4">Ajouter une pharmacie</h2>

        <div className="space-y-6">
          <Input
            isRequired
            {...register("name")}
            error={errors.name?.message}
            placeholder="Nom"
          />

          <Input
            isRequired
            {...register("location")}
            error={errors.location?.message}
            placeholder="Localisation"
          />
        </div>

        <div className="card-actions justify-end mt-5">
          <Button
            className="btn btn-primary"
            onClick={handleSubmit(handleCreatePharmacy)}
            isLoading={isSubmitting}
          >
            Valider
          </Button>
        </div>
      </div>
    </form>
  );
}
