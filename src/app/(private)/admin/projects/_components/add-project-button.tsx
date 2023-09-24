"use client";

import { useState } from "react";

import Button from "@/shared/components/button";
import AddProject from "../_add-project";

export default function AddProjectButton() {
  const [isAddProjectOpen, setIsAddProjectOpen] = useState(false);

  function toggleAddProject() {
    setIsAddProjectOpen((state) => !state);
  }

  return (
    <>
      <Button className="text-white" onClick={toggleAddProject}>
        Ajouter
      </Button>
      <AddProject isOPen={isAddProjectOpen} toggle={toggleAddProject} />
    </>
  );
}
