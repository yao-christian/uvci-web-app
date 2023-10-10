import { Suspense } from "react";

import { getPharmaciesUseCase } from "@/core/app/usecases/pharmacy/get-pharmacies";

import LoadingPage from "@/shared/components/loading-page";
import PharmacyList from "./_components/pharmacy-list";

export default async function PharmacyListContainer() {
  const pharmaciesPromise = getPharmaciesUseCase.execute();

  return (
    <Suspense fallback={<LoadingPage />}>
      <div className="max-w-7xl mx-auto py-8">
        <PharmacyList pharmaciesPromise={pharmaciesPromise} />
      </div>
    </Suspense>
  );
}
