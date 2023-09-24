"use client";

import { useState } from "react";

import Button from "@/shared/components/button";
import AddPromoter from "../_add-promoter";

export default function AddPromoterButton() {
  const [isAddPromoterOpen, setIsAddPromoterOpen] = useState(false);

  function toggleAddPromoter() {
    setIsAddPromoterOpen((state) => !state);
  }

  return (
    <>
      <Button className="text-white" onClick={toggleAddPromoter}>
        Ajouter
      </Button>
      <AddPromoter isOPen={isAddPromoterOpen} toggle={toggleAddPromoter} />
    </>
  );
}
