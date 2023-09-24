"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Promoter } from "@/core/domain";

export const columns: ColumnDef<Promoter>[] = [
  {
    accessorKey: "name",
    header: "Nom",
  },
];
