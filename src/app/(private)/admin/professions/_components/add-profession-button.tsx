"use client";

import { useState } from "react";

import Button from "@/shared/components/button";
import AddProfession from "../_add-profession";

export default function AddProfessionButton() {
  const [isAddProfessionOpen, setIsAddProfessionOpen] = useState(false);

  function toggleAddProfession() {
    setIsAddProfessionOpen((state) => !state);
  }

  return (
    <>
      <Button className="text-white" onClick={toggleAddProfession}>
        Ajouter
      </Button>
      <AddProfession
        isOPen={isAddProfessionOpen}
        toggle={toggleAddProfession}
      />
    </>
  );
}
