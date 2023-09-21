import DataTable from "@/shared/components/table/data-table";
import TableContainer from "@/shared/components/table/table-container";

import { columns } from "./_components/column";
import AddDiseaseButton from "./_components/add-disease-button";
import { getDiseasesUseCase } from "@/core/app/usecases/disease/get-diseases";

export default async function DiseasePage() {
  const diseases = await getDiseasesUseCase.execute();

  return (
    <TableContainer>
      <TableContainer.Header
        title="Maladies"
        className="flex items-center space-x-2 justify-between"
      >
        <input className="input flex-1" placeholder="Recherche..." />
        <AddDiseaseButton />
      </TableContainer.Header>
      <TableContainer.Content>
        <DataTable columns={columns} data={diseases} />
      </TableContainer.Content>
    </TableContainer>
  );
}
