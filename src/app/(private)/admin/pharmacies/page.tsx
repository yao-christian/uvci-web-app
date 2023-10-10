import { Suspense } from "react";

import LoadingPage from "@/shared/components/loading-page";
import { getPharmaciesUseCase } from "@/core/app/usecases/pharmacy/get-pharmacies";

import PharmacyList from "./_components/pharmacy-list";

export default async function PharmacyListPage() {
  const pharmaciesPromise = getPharmaciesUseCase.execute();

  return (
    <Suspense fallback={<LoadingPage />}>
      <div className="max-w-5xl mx-auto py-8">
        <PharmacyList pharmaciesPromise={pharmaciesPromise} />
      </div>
    </Suspense>
  );
}
