"use client";

import { useState } from "react";

import Button from "@/shared/components/button";
import AddEpidemic from "../_add-epidemic";

export default function AddEpidemicButton() {
  const [isAddEpidemicOpen, setIsAddEpidemicOpen] = useState(false);

  function toggleAddEpidemic() {
    setIsAddEpidemicOpen((state) => !state);
  }

  return (
    <>
      <Button className="text-white" onClick={toggleAddEpidemic}>
        Ajouter
      </Button>
      <AddEpidemic isOPen={isAddEpidemicOpen} toggle={toggleAddEpidemic} />
    </>
  );
}
