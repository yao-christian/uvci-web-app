"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MedicalService } from "@/core/domain";

export const columns: ColumnDef<MedicalService>[] = [
  {
    accessorKey: "name",
    header: "Nom",
  },
];
