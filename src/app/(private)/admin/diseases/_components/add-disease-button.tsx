"use client";

import { useState } from "react";

import Button from "@/shared/components/button";
import AddDisease from "../_add-disease";

export default function AddDiseaseButton() {
  const [isAddDiseaseOpen, setIsAddDiseaseOpen] = useState(false);

  function toggleAddDisease() {
    setIsAddDiseaseOpen((state) => !state);
  }

  return (
    <>
      <Button className="text-white" onClick={toggleAddDisease}>
        Ajouter
      </Button>
      <AddDisease isOPen={isAddDiseaseOpen} toggle={toggleAddDisease} />
    </>
  );
}
