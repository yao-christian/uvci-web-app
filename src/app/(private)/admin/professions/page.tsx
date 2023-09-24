import DataTable from "@/shared/components/table/data-table";
import TableContainer from "@/shared/components/table/table-container";

import { columns } from "./_components/column";
import AddProfessionButton from "./_components/add-profession-button";
import { getProfessionsUseCase } from "@/core/app/usecases/profession/get-professions-usecase";

export default async function ProfessionPage() {
  const professions = await getProfessionsUseCase.execute();

  return (
    <TableContainer>
      <TableContainer.Header
        title="Metiers"
        className="flex items-center space-x-2 justify-between"
      >
        <input className="input flex-1" placeholder="Recherche..." />
        <AddProfessionButton />
      </TableContainer.Header>
      <TableContainer.Content>
        <DataTable columns={columns} data={professions} />
      </TableContainer.Content>
    </TableContainer>
  );
}
