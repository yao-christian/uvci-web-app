export default function Home() {
  return (
    <div>
      <section className="bg-[url('/images/stylish-mesh-bg.jpg')] relative">
        <div
          id="accueil"
          className="px-4 text-center pt-40 pb-56 sm:pb-80 md:pt-20"
        >
          <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Université Virtuelle de Côte d'Ivoire (UVCI)
          </h1>
          <p className="mt-3 max-w-sm mx-auto text-gray-700 sm:text-lg md:mt-5 md:text-xl md:max-w-2xl lg:max-w-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            totam harum fugit est ipsam quia?
          </p>

          <div className="mt-5 max-w-md mx-auto flex justify-center items-center flex-col space-y-5 sm:space-y-0 sm:flex-row md:mt-8">
            <a
              href="#"
              className="min-w-[250px] rounded-md shadow px-8 py-3 text-sm font-medium text-white bg-primary sm:text-base md:mr-3 md:min-w-fit md:py-4 md:text-lg md:px-10"
            >
              Commencer 🚀
            </a>

            <a
              href="#"
              className="min-w-[250px] rounded-md shadow px-8 py-3 text-sm font-medium text-zinc-800 ring-1 ring-gray-200 bg-white hover:bg-gray-50 sm:text-base md:py-4 md:min-w-fit md:text-lg md:px-10"
            >
              Démo 🕹️
            </a>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:bottom-10">
          <a
            href="#services"
            className="animate-bounce bg-white p-2 w-12 h-12 ring-1 ring-slate-900/5 shadow-lg rounded-full flex items-center justify-center sm:w-16 sm:h-16"
          >
            <svg
              className="w-6 h-6 text-violet-500 sm:w-8"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </section>

      <section id="services" className="relative flex flex-col lg:flex-row">
        <div className="cta-striper-bg px-10 pb-16 pt-10 w-full order-2 text-center md:py-32 lg:w-1/2 lg:order-1">
          <h2 className="font-extrabold text-gray-800 text-2xl sm:text-3xl md:text-5xl">
            <span className="block">PASSEZ À L'ACTION</span>
            <span className="block text-blue-800">Boostez votre carrière</span>
          </h2>
          <p className="mt-3 text-md mx-auto text-gray-800 max-w-xs sm:text-xl md:mt-5 md:max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            impedit.
          </p>
          <a
            href="#"
            className="min-w-[200px] bg-primary mt-5 mx-auto inline-block px-8 py-3 border-transparent font-medium rounded-md text-white text-md md:mt-10 md:text-xl"
          >
            Essayez maintenant 🔥
          </a>
        </div>

        <div className="h-96 w-full relative overflow-hidden order-1 lg:static lg:w-1/2 lg:h-full lg:order-2">
          <img
            src="/images/hommeTravail.jpg"
            alt="homme au travail"
            className="absolute w-full h-full object-cover object-center lg:w-1/2"
          />
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary to-blue-500 py-12 px-4 text-center sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-3xl font-extrabold text-white md:text-5xl">
          10K+ Développeurs déjà convaincus
        </h2>
        <p className="mt-3 px-4 text-md text-indigo-200 max-w-md mx-auto sm:text-xl sm:mt-4 md:max-w-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis,
          et?
        </p>

        <div className="flex justify-center items-center mt-10 flex-col space-y-10 sm:space-y-0 sm:space-x-10 sm:flex-row">
          <div className="flex flex-col justify-center items-center">
            <p className="text-4xl font-extrabold text-white md:text-5xl">
              100%
            </p>
            <p className="mt-2 text-lg font-medium text-indigo-200">En ligne</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="text-4xl font-extrabold text-white md:text-5xl">
              24/7
            </p>
            <p className="mt-2 text-lg font-medium text-indigo-200">Support</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <p className="text-4xl font-extrabold text-white md:text-5xl">
              100K+
            </p>
            <p className="mt-2 text-lg font-medium text-indigo-200">Projets</p>
          </div>
        </div>
      </section>

      <div className="text-center max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-gray-900">Formations</h1>
        <hr className="mt-5 w-1/4 mx-auto" />
        <p className="mt-5 text-xl text-black-800">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
          necessitatibus?
        </p>

        <div className="mt-8 flex flex-wrap justify-center items-center flex-col space-x-0 md:space-x-10 md:flex-row">
          <div className="flex flex-col max-w-sm min-h-[450px] shadow-md ring-1 ring-zinc-300 w-72 h-full border border-gray-200 rounded-lg mt-5 px-6 py-4 text-left">
            <h2 className="mb-10 text-2xl font-bold text-gray-900">Licence</h2>

            <ul className="flex flex-grow flex-shrink-0 flex-col">
              <li className="flex space-x-3 py-2">
                <img
                  src="/images/checked.svg"
                  alt="check icone"
                  className="flex-shrink-0 h-5 w-5"
                />
                <span className="text-sm text-gray-800">
                  Potenti felis, in cras at.
                </span>
              </li>
              <li className="flex space-x-3 py-2">
                <img
                  src="/images/checked.svg"
                  alt="check icone"
                  className="flex-shrink-0 h-5 w-5"
                />
                <span className="text-sm text-gray-800">
                  Potenti felis, in cras at.
                </span>
              </li>
              <li className="flex space-x-3 py-2">
                <img
                  src="/images/checked.svg"
                  alt="check icone"
                  className="flex-shrink-0 h-5 w-5"
                />
                <span className="text-sm text-gray-800">
                  Potenti felis, in cras at.
                </span>
              </li>

              <li className="flex space-x-3 py-2 mt-auto">
                <a
                  href="#"
                  className="block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                >
                  Subscribe to this plan
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col max-w-sm min-h-[450px] shadow-md ring-1 ring-zinc-300 w-72 h-full border border-gray-200 rounded-lg mt-5 px-6 py-4 text-left">
            <h2 className="mb-10 text-2xl font-bold text-gray-900">Master</h2>

            <ul className="flex flex-grow flex-shrink-0 flex-col">
              <li className="flex space-x-3 py-2">
                <img
                  src="/images/checked.svg"
                  alt="check icone"
                  className="flex-shrink-0 h-5 w-5"
                />
                <span className="text-sm text-gray-800">
                  Potenti felis, in cras at.
                </span>
              </li>
              <li className="flex space-x-3 py-2">
                <img
                  src="/images/checked.svg"
                  alt="check icone"
                  className="flex-shrink-0 h-5 w-5"
                />
                <span className="text-sm text-gray-800">
                  Potenti felis, in cras at.
                </span>
              </li>
              <li className="flex space-x-3 py-2">
                <img
                  src="/images/checked.svg"
                  alt="check icone"
                  className="flex-shrink-0 h-5 w-5"
                />
                <span className="text-sm text-gray-800">
                  Potenti felis, in cras at.
                </span>
              </li>

              <li className="flex space-x-3 py-2 mt-auto">
                <a
                  href="#"
                  className="block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                >
                  Subscribe to this plan
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col max-w-sm min-h-[450px] shadow-md ring-1 ring-zinc-300 w-72 h-full border border-gray-200 rounded-lg mt-5 px-6 py-4 text-left">
            <h2 className="mb-10 text-2xl font-bold text-gray-900">Doctorat</h2>

            <ul className="flex flex-grow flex-shrink-0 flex-col">
              <li className="flex space-x-3 py-2">
                <img
                  src="/images/checked.svg"
                  alt="check icone"
                  className="flex-shrink-0 h-5 w-5"
                />
                <span className="text-sm text-gray-800">
                  Potenti felis, in cras at.
                </span>
              </li>
              <li className="flex space-x-3 py-2">
                <img
                  src="/images/checked.svg"
                  alt="check icone"
                  className="flex-shrink-0 h-5 w-5"
                />
                <span className="text-sm text-gray-800">
                  Potenti felis, in cras at.
                </span>
              </li>
              <li className="flex space-x-3 py-2">
                <img
                  src="/images/checked.svg"
                  alt="check icone"
                  className="flex-shrink-0 h-5 w-5"
                />
                <span className="text-sm text-gray-800">
                  Potenti felis, in cras at.
                </span>
              </li>
              <li className="flex space-x-3 py-2">
                <img
                  src="/images/checked.svg"
                  alt="check icone"
                  className="flex-shrink-0 h-5 w-5"
                />
                <span className="text-sm text-gray-800">
                  Potenti felis, in cras at.
                </span>
              </li>
              <li className="flex space-x-3 py-2">
                <img
                  src="/images/checked.svg"
                  alt="check icone"
                  className="flex-shrink-0 h-5 w-5"
                />
                <span className="text-sm text-gray-800">
                  Potenti felis, in cras at.
                </span>
              </li>

              <li className="flex space-x-3 py-2 mt-auto">
                <a
                  href="#"
                  className="block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                >
                  Subscribe to this plan
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="divider-bg">
        <div className="max-w-4xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 text-center md:text-5xl">
            Ces entreprises nous font confiance
          </h2>

          <div className="mt-10 flex justify-center items-center space-x-5 md:space-x-10">
            <img
              src="/images/IBM.png"
              alt="logo ibm"
              className="w-14 md:w-24"
            />
            <img
              src="/images/apple-logo.png"
              alt="logo apple"
              className="w-6 md:w-12"
            />
            <img
              src="/images/github-logo.png"
              alt="logo github"
              className="w-14 md:w-28"
            />
            <img
              src="/images/Audi.png"
              alt="logo audi"
              className="w-14 md:w-24"
            />
          </div>
        </div>
      </div>

      <section id="contact" className="bg-gray-50 pb-32 md:pb-40">
        <h2 className="text-center font-medium pt-10 pb-6 text-3xl md:text-4xl">
          Rentrons en contact
        </h2>
        <hr className="bloc mx-auto bg-gray-600 h-1 mb-10 w-44" />

        <form className="space-y-6 relative bg-white max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8 xl pl-12">
          <div>
            <label htmlFor="nom" className="text-gray-500 mb-2 block">
              Nom complet
            </label>
            <input
              type="text"
              id="nom"
              placeholder="Votre nom"
              className="block w-full ring-1 ring-gray-200 shadow-sm py-3 px-4 placeholder-gray-500 border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="prenom" className="text-gray-500 mb-2 block">
              Prénom
            </label>
            <input
              type="text"
              id="prenom"
              placeholder="Votre nom"
              className="block w-full ring-1 ring-gray-200 shadow-sm py-3 px-4 placeholder-gray-500 border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="entreprise" className="text-gray-500 mb-2 block">
              Votre entreprise
            </label>
            <input
              type="text"
              id="entreprise"
              placeholder="Votre nom"
              className="block w-full ring-1 ring-gray-200 shadow-sm py-3 px-4 placeholder-gray-500 border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-gray-500 mb-2 block">
              Votre message
            </label>
            <textarea
              id="message"
              placeholder="Votre nom"
              className="block w-full ring-1 ring-gray-200 shadow-sm py-3 px-4 placeholder-gray-500 border-gray-300 rounded-md"
            />
          </div>

          <button className="py-3 px-6 border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary">
            Envoyer
          </button>
        </form>
      </section>

      <footer className="bg-gray-800 py-5">
        <h3 className="text-3xl pb-5 text-center text-white">
          Retrouvez-nous ici
        </h3>

        <div className="mb-5 flex space-x-6 justify-center text-white">
          <a href="#">
            <img src="/images/fb.svg" alt="icône fb" className="w-6" />
          </a>

          <a href="#">
            <img
              src="/images/instagram.svg"
              alt="icône instagram"
              className="w-6"
            />
          </a>

          <a href="#">
            <img
              src="/images/githubpetitlogo.svg"
              alt="icône github"
              className="w-6"
            />
          </a>

          <a href="#">
            <img
              src="/images/twitter.svg"
              alt="icône twitter"
              className="w-6"
            />
          </a>
        </div>

        <hr className="w-36 mx-auto mb-5" />

        <p className="text-center mt-8 text-base text-gray-400 md:mt-0">
          &copy; 2023 djeachristian@gmail.com, TOUS DROITS RÉSERVÉS
        </p>
      </footer>
    </div>
  );
}
