import Link from "next/link";

type PropsType = React.BaseHTMLAttributes<HTMLElement>;

export default function Header({ ...restProps }: PropsType) {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-20 w-full border-b shadow-sm border-b-1 border-gray-200 bg-white shadow-gray-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-gray-200 lg:border-gray-200 lg:backdrop-blur-sm lg:after:hidden"
      {...restProps}
    >
      <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
        <nav
          aria-label="main navigation"
          className="flex h-[4.5rem] items-stretch justify-between font-medium text-gray-700"
          role="navigation"
        >
          <Link
            aria-current="page"
            className="flex items-center gap-2 py-3 text-lg whitespace-nowrap focus:outline-none lg:flex-1"
            href="/"
          >
            UVCI
          </Link>

          <button
            className="relative self-center order-10 visible block w-10 h-10 opacity-100 lg:hidden"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
              />
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
              />
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
              />
            </div>
          </button>
          <ul
            role="menubar"
            aria-label="Select page"
            className="invisible absolute top-0 left-0 z-[-1] ml-auto h-screen w-full justify-center overflow-hidden overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-28 font-medium opacity-0 transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0 lg:pt-0 lg:opacity-100"
          >
            <li role="none" className="flex items-stretch">
              <Link
                role="menuitem"
                aria-haspopup="false"
                tabIndex={0}
                className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                href="/pharmacies"
              >
                {" "}
                <span>Pharmacies</span>
              </Link>
            </li>
            <li role="none" className="flex items-stretch">
              <Link
                role="menuitem"
                aria-current="page"
                aria-haspopup="false"
                tabIndex={0}
                className="flex items-center gap-2 py-4 transition-colors duration-300 text-emerald-500 hover:text-emerald-600 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                href="/"
              >
                <span>Centres de santé</span>
              </Link>
            </li>
          </ul>
          <div className="flex items-center px-6 ml-auto lg:ml-0 lg:p-0">
            <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-md whitespace-nowrap bg-primary shadow-gray-200 hover:bg-gray-600 hover:shadow-sm hover:shadow-gray-200 focus:bg-gray-700 focus:shadow-sm focus:shadow-gray-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300 disabled:shadow-none">
              <span>Mon compte</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
