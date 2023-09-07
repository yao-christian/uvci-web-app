import HealthCenterList from "./_components/health-center-list";

export default function HealthCenterListPage() {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="text-center max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-gray-900">
          Centres de santé
        </h1>
        <hr className="mt-5 w-1/4 mx-auto" />
        <p className="mt-5 text-xl text-black-800">
          Trouvez ci-dessous la liste des centres de santé
        </p>
      </div>

      <HealthCenterList />
    </div>
  );
}
