"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Disease } from "@/core/domain";

export const columns: ColumnDef<Disease>[] = [
  {
    accessorKey: "name",
    header: "Nom",
  },
];
