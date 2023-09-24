import DataTable from "@/shared/components/table/data-table";
import TableContainer from "@/shared/components/table/table-container";

import { columns } from "./_components/column";
import AddInfoButton from "./_components/add-info-button";
import { getInfosUseCase } from "@/core/app/usecases/info/get-infos-usecase";

export default async function InfoPage() {
  const Infos = await getInfosUseCase.execute();

  return (
    <TableContainer>
      <TableContainer.Header
        title="Informations"
        className="flex items-center space-x-2 justify-between"
      >
        <input className="input flex-1" placeholder="Recherche..." />
        <AddInfoButton />
      </TableContainer.Header>
      <TableContainer.Content>
        <DataTable columns={columns} data={Infos} />
      </TableContainer.Content>
    </TableContainer>
  );
}
