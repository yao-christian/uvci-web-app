"use client";

import { useState } from "react";

import Button from "@/shared/components/button";
import AddHealthCenter from "../_add-health-center";

export default function AddHealthCenterButton() {
  const [isAddHealthCenterOpen, setIsAddHealthCenterOpen] = useState(false);

  function toggleAddHealthCenter() {
    setIsAddHealthCenterOpen((state) => !state);
  }

  return (
    <>
      <Button className="text-white" onClick={toggleAddHealthCenter}>
        Ajouter
      </Button>
      <AddHealthCenter
        isOPen={isAddHealthCenterOpen}
        toggle={toggleAddHealthCenter}
      />
    </>
  );
}
