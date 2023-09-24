"use client";

import datetFormatter from "date-fns/format";
import { ColumnDef } from "@tanstack/react-table";
import { Epidemic } from "@/core/domain";

export const columns: ColumnDef<Epidemic>[] = [
  {
    accessorKey: "name",
    header: "Nom",
  },
  {
    accessorKey: "startDate",
    header: "Date début",
    cell: ({ row }) => {
      const date = datetFormatter(row.original.startDate, "dd/MM/yyyy");
      return date;
    },
  },
  {
    accessorKey: "endDate",
    header: "Date fin",
    cell: ({ row }) => {
      const date = datetFormatter(row.original.endDate, "dd/MM/yyyy");
      return date;
    },
  },
  {
    accessorKey: "totalCases",
    header: "Nombre de cas",
  },
  {
    accessorKey: "totalDeaths",
    header: "Nombre de décès",
  },
];
