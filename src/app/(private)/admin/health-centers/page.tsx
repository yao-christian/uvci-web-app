import DataTable from "@/shared/components/table/data-table";
import TableContainer from "@/shared/components/table/table-container";

import { columns } from "./_components/column";
import AddHealthCenterButton from "./_components/add-health-center-button";
import { getHealthCenters } from "@/core/services/health-center";

export default async function HealthCenterPage() {
  const healthCenters = await getHealthCenters();

  return (
    <TableContainer>
      <TableContainer.Header
        title="Centres de santé"
        className="flex items-center space-x-2 justify-between"
      >
        <input className="input flex-1" placeholder="Recherche..." />
        <AddHealthCenterButton />
      </TableContainer.Header>
      <TableContainer.Content>
        <DataTable columns={columns} data={healthCenters} />
      </TableContainer.Content>
    </TableContainer>
  );
}
