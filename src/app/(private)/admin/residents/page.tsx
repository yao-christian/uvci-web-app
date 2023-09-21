import DataTable from "@/shared/components/table/data-table";
import TableContainer from "@/shared/components/table/table-container";

import { columns } from "./_components/column";
import AddResidentButton from "./_components/add-resident-button";
import { getResidents } from "@/core/app/usecases/resident";

export default async function ResidentPage() {
  const Residents = await getResidents();

  return (
    <TableContainer>
      <TableContainer.Header
        title="Habitants"
        className="flex items-center space-x-2 justify-between"
      >
        <input className="input flex-1" placeholder="Recherche..." />
        <AddResidentButton />
      </TableContainer.Header>
      <TableContainer.Content>
        <DataTable columns={columns} data={Residents} />
      </TableContainer.Content>
    </TableContainer>
  );
}
