import { getPharmacies } from "@/core/app/usecases/pharmacy";
import PharmacyList from "./_components/pharmacy-list";

export default async function PharmacyListPage() {
  const pharmacies = await getPharmacies();

  return (
    <div className="max-w-5xl mx-auto py-8">
      <PharmacyList pharmacies={pharmacies} />
    </div>
  );
}
