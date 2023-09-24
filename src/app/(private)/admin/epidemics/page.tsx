import DataTable from "@/shared/components/table/data-table";
import TableContainer from "@/shared/components/table/table-container";

import { columns } from "./_components/column";
import AddEpidemicButton from "./_components/add-epidemic-button";
import { getEpidemicsUseCase } from "@/core/app/usecases/epidemic/get-epidemics-usecase";

export default async function EpidemicPage() {
  const epidemics = await getEpidemicsUseCase.execute();

  return (
    <TableContainer>
      <TableContainer.Header
        title="Epidemies"
        className="flex items-center space-x-2 justify-between"
      >
        <input className="input flex-1" placeholder="Recherche..." />
        <AddEpidemicButton />
      </TableContainer.Header>
      <TableContainer.Content>
        <DataTable columns={columns} data={epidemics} />
      </TableContainer.Content>
    </TableContainer>
  );
}
