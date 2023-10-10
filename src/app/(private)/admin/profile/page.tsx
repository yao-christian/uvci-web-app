export default function Profile() {
  return (
    <div className="space-y-10">
      <div className="bg-gray-50 p-2 md:p-10">
        <div className="flex flex-col items-center space-x-2 md:flex-row md:space-y-0 md:space-x-2">
          <div className="flex justify-center items-center md:flex-none md:w-48">
            <div className="avatar placeholder">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-36">
                <span className="text-3xl">D</span>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-5">
            <div className="flex flex-col md:flex-row md:items-baseline md:space-x-2">
              <h2 className="font-bold text-sm text-gray-700 uppercase md:text-xl">
                Informations personnelles
              </h2>
              <div className="hidden w-52 h-1 bg-primary md:block"></div>
            </div>

            <div className="space-y-3">
              <div className="bg-white shadow-sm py-2 px-3">
                <div>
                  <div className="flex flex-col space-y-2 md:flex-row md:items-center md:space-y-0 md:space-x-5">
                    <div className="font-semibold text-gray-500">Nom</div>
                    <div className="text-xs text-gray-500">
                      {/* {{ authUser.firstName }} */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-sm py-2 px-3">
                <div>
                  <div className="flex flex-col space-y-2 md:flex-row md:items-center md:space-y-0 md:space-x-5">
                    <div className="font-semibold text-gray-500">Prénoms</div>
                    <div className="text-xs text-gray-500">
                      {/* {{ authUser.lastName }} */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-sm py-2 px-3">
                <div>
                  <div className="flex flex-col space-y-2 md:flex-row md:items-center md:space-y-0 md:space-x-5">
                    <div className="font-semibold text-gray-500">
                      N° de téléphone
                    </div>
                    <div className="text-xs text-gray-500">
                      {/* {{ authUser.tel }} */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-sm py-2 px-3">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div className="flex flex-col space-y-2 md:flex-row md:items-center md:space-y-0 md:space-x-5">
                    <div className="font-semibold text-gray-500">Mail</div>
                    <div className="text-xs text-gray-500">
                      {/* {{ authUser.email }} */}
                    </div>
                  </div>

                  <button className="btn btn-link text-xs no-underline">
                    Mettre à jour
                  </button>
                </div>
              </div>

              <div className="bg-white shadow-sm py-2 px-3">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div className="flex flex-col space-y-2 md:flex-row md:items-center md:space-y-0 md:space-x-5">
                    <div className="font-semibold text-gray-500">
                      Mot de passe
                    </div>
                    <div className="text-xs text-gray-500">******</div>
                  </div>

                  <button className="btn btn-link text-xs no-underline">
                    Mettre à jour
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
