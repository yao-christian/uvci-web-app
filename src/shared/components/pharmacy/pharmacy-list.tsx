import { Pharmacy } from "@/core/models";

type PropsType = {
  pharmacies: Pharmacy[];
};

export default function PharmacyList({ pharmacies }: PropsType) {
  return (
    <div className="bg-white shadow-sm rounded-sm px-10 pb-10">
      <div className="text-center max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-gray-900">Pharmacies</h1>
        <hr className="mt-5 w-1/4 mx-auto" />
        <p className="mt-5 text-xl text-black-800">
          Trouvez ci-dessous la liste de nos pharmacies
        </p>
      </div>

      <div className="w-full overflow-x-auto">
        <table
          className="w-full text-left border border-collapse rounded sm:border-separate border-slate-200"
          cellSpacing={0}
        >
          <tbody>
            <tr>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                N°
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Nom
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Localisation
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Actions
              </th>
            </tr>
            {pharmacies.map((pharmacy, index) => (
              <tr key={pharmacy.id}>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  {index + 1}
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  {pharmacy.name}
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  {pharmacy.location}
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  <button className="btn btn-link">Modifier</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
