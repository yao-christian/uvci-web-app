import DataTable from "@/shared/components/table/data-table";
import TableContainer from "@/shared/components/table/table-container";

import { columns } from "./_components/column";
import AddPromoterButton from "./_components/add-promoter-button";
import { getPromotersUseCase } from "@/core/app/usecases/promoter/get-promoters-usecase";

export default async function PromoterPage() {
  const Promoters = await getPromotersUseCase.execute();

  return (
    <TableContainer>
      <TableContainer.Header
        title="Promoteurs"
        className="flex items-center space-x-2 justify-between"
      >
        <input className="input flex-1" placeholder="Recherche..." />
        <AddPromoterButton />
      </TableContainer.Header>
      <TableContainer.Content>
        <DataTable columns={columns} data={Promoters} />
      </TableContainer.Content>
    </TableContainer>
  );
}
