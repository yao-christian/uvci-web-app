"use client";

import datetFormatter from "date-fns/format";
import { ColumnDef } from "@tanstack/react-table";
import { Info } from "@/core/domain";

export const columns: ColumnDef<Info>[] = [
  {
    accessorKey: "info",
    header: "Information",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const date = datetFormatter(row.original.date, "dd/MM/yyyy");
      return date;
    },
  },
  {
    accessorKey: "type",
    header: "Type",
  },
];
