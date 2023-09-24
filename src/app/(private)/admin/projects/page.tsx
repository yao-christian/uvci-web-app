import DataTable from "@/shared/components/table/data-table";
import TableContainer from "@/shared/components/table/table-container";

import { columns } from "./_components/column";
import AddProjectButton from "./_components/add-project-button";
import { getProjectsUseCase } from "@/core/app/usecases/project/get-projects-usecase";

export default async function ProjectPage() {
  const projects = await getProjectsUseCase.execute();

  return (
    <TableContainer>
      <TableContainer.Header
        title="Projets"
        className="flex items-center space-x-2 justify-between"
      >
        <input className="input flex-1" placeholder="Recherche..." />
        <AddProjectButton />
      </TableContainer.Header>
      <TableContainer.Content>
        <DataTable columns={columns} data={projects} />
      </TableContainer.Content>
    </TableContainer>
  );
}
