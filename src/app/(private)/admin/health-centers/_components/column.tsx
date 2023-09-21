"use client";

import { ColumnDef } from "@tanstack/react-table";
import { HealthCenter } from "@/core/domain";

export const columns: ColumnDef<HealthCenter>[] = [
  {
    accessorKey: "name",
    header: "Nom",
  },
  {
    accessorKey: "location",
    header: "Adresse",
  },
  {
    accessorKey: "phoneNumber",
    header: "Téléphone",
  },
];
