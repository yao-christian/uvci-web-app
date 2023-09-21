"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Resident } from "@/core/domain";

export const columns: ColumnDef<Resident>[] = [
  {
    accessorKey: "firstName",
    header: "Nom",
  },
  {
    accessorKey: "lastName",
    header: "Prénoms",
  },
  {
    accessorKey: "gender",
    header: "Sexe",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "nationality",
    header: "Nationilité",
  },
  {
    accessorKey: "nationality",
    header: "Nationilité",
  },
  {
    accessorKey: "birthCountry",
    header: "Pays de naissance",
  },
  {
    accessorKey: "educationLevel",
    header: "Niveau d'étude",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phoneNumber",
    header: "Téléphone",
  },
];
