"use client";

import { useState } from "react";

import Button from "@/shared/components/button";
import AddInfo from "../_add-info";

export default function AddInfoButton() {
  const [isAddInfoOpen, setIsAddInfoOpen] = useState(false);

  function toggleAddInfo() {
    setIsAddInfoOpen((state) => !state);
  }

  return (
    <>
      <Button className="text-white" onClick={toggleAddInfo}>
        Ajouter
      </Button>
      <AddInfo isOPen={isAddInfoOpen} toggle={toggleAddInfo} />
    </>
  );
}
