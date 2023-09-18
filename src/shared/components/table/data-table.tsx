"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  Tbody,
  Thead,
  Tr,
  Td,
  Th,
} from "@/shared/components/table/elements";

type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
} & React.ThHTMLAttributes<HTMLElement>;

export default function DataTable<TData, TValue>({
  columns,
  data,
  ...restProps
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div {...restProps}>
      <Table>
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <Th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </Th>
                );
              })}
            </Tr>
          ))}
        </Thead>

        <Tbody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <Tr key={row.id} data-state={row.getIsSelected() && "selected"}>
                {row.getVisibleCells().map((cell) => (
                  <Td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))}
              </Tr>
            ))
          ) : (
            <Tr>
              <Td colSpan={columns.length} className="h-24 text-center">
                Aucune donnée
              </Td>
            </Tr>
          )}
        </Tbody>
      </Table>

      {/* <div className="flex justify-end mt-5">
        <div className="join">
          <button
            className="join-item btn"
            onClick={() => table.previousPage()}
          >
            «
          </button>
          <button className="join-item btn">Page 22</button>
          <button className="join-item btn" onClick={() => table.nextPage()}>
            »
          </button>
        </div>
      </div> */}
    </div>
  );
}
