import DataTable from "@/shared/components/table/data-table";
import TableContainer from "@/shared/components/table/table-container";

import { columns } from "./_components/column";
import AddMedicalServiceButton from "./_components/add-medical-service-button";
import { getMedicalServicesUseCase } from "@/core/app/usecases/medical-service/get-medical-services-usecase";

export default async function MedicalServicePage() {
  const MedicalServices = await getMedicalServicesUseCase.execute();

  return (
    <TableContainer>
      <TableContainer.Header
        title="Services medicaux"
        className="flex items-center space-x-2 justify-between"
      >
        <input className="input flex-1" placeholder="Recherche..." />
        <AddMedicalServiceButton />
      </TableContainer.Header>
      <TableContainer.Content>
        <DataTable columns={columns} data={MedicalServices} />
      </TableContainer.Content>
    </TableContainer>
  );
}
