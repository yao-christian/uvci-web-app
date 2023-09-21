import { getPharmacies } from "@/core/app/usecases/pharmacy";
import PharmacyList from "@/shared/components/pharmacy/pharmacy-list";

export default async function PharmacyListPage() {
  const pharmacies = await getPharmacies();

  return (
    <div className="max-w-7xl mx-auto py-8">
      <PharmacyList pharmacies={pharmacies} />
    </div>
  );
}
