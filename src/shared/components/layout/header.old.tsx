type PropsType = React.BaseHTMLAttributes<HTMLElement>;

export default function Header({ ...restProps }: PropsType) {
  return (
    <header {...restProps}>
      <nav className="navbar bg-primary shadow-sm z-10">
        <div className="flex-1">
          <label
            htmlFor="dashboard-drawer"
            className="cursor-pointer drawer-button md:hidden"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <a className="btn btn-ghost normal-case text-xl">
            <img className="h-[40px]" src="assets/images/logo.png" alt="" />
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="hidden input input-bordered sm:block"
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://www.svgrepo.com/show/5125/avatar.svg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 z-10"
            >
              <li>
                <a className="justify-between">Mon profil</a>
              </li>
              <li>
                <a>Paramètre</a>
              </li>
              <li>
                <a>Se déconecter</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
