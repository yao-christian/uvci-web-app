"use client";

import datetFormatter from "date-fns/format";
import { ColumnDef } from "@tanstack/react-table";
import { Project } from "@/core/domain";

export const columns: ColumnDef<Project>[] = [
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
    accessorKey: "description",
    header: "Description",
  },
];
