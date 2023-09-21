import { getHealthCenters } from "@/core/app/usecases/health-center";
import HealthCenterList from "./health-center-list";

export default async function HealthCenterPage() {
  const healthCenters = await getHealthCenters();

  return (
    <div className="max-w-7xl mx-auto py-8">
      <HealthCenterList healthCenters={healthCenters} />
    </div>
  );
}
