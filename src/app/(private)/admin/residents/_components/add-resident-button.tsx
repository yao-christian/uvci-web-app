"use client";

import { useState } from "react";

import Button from "@/shared/components/button";
import AddResident from "../_add-resident";

export default function AddResidentButton() {
  const [isAddResidentOpen, setIsAddResidentOpen] = useState(false);

  function toggleAddResident() {
    setIsAddResidentOpen((state) => !state);
  }

  return (
    <>
      <Button className="text-white" onClick={toggleAddResident}>
        Ajouter
      </Button>
      <AddResident isOPen={isAddResidentOpen} toggle={toggleAddResident} />
    </>
  );
}
