"use client";

import { useState } from "react";

import Button from "@/shared/components/button";
import AddMedicalService from "../_add-medical-service";

export default function AddMedicalServiceButton() {
  const [isAddMedicalServiceOpen, setIsAddMedicalServiceOpen] = useState(false);

  function toggleAddMedicalService() {
    setIsAddMedicalServiceOpen((state) => !state);
  }

  return (
    <>
      <Button className="text-white" onClick={toggleAddMedicalService}>
        Ajouter
      </Button>
      <AddMedicalService
        isOPen={isAddMedicalServiceOpen}
        toggle={toggleAddMedicalService}
      />
    </>
  );
}
