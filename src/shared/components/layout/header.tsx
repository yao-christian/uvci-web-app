"use client";

import { logout } from "@/core/requests/auth";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

type PropsType = React.BaseHTMLAttributes<HTMLElement>;

export default function Header({ ...restProps }: PropsType) {
  const router = useRouter();
  const pathname = usePathname();

  async function handleLogout() {
    await logout();
    router.refresh();
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-20" {...restProps}>
      <nav className="navbar bg-white shadow-sm z-10">
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

          <Link href="/" className="btn btn-ghost normal-case text-xl">
            <Image width={30} height={30} src="/images/logo.png" alt="" />
          </Link>

          <div className="invisible ml-auto mr-5 md:visible">
            <ul className="space-x-5 flex">
              <li>
                <Link href="/">
                  <span>Accueil</span>
                </Link>
              </li>
              <li>
                <Link href="/pharmacies">
                  <span>Pharmacies</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span>Centres de santé</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Recherche..."
              className="hidden input input-sm rounded input-bordered sm:block"
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image
                  width={30}
                  height={30}
                  src="https://www.svgrepo.com/show/5125/avatar.svg"
                  alt=""
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-4 p-2 shadow menu menu-compact dropdown-content bg-white  w-52 z-10"
            >
              <li>
                <Link href="/admin/profile" className="justify-between">
                  Mon profil
                </Link>
              </li>
              {pathname.startsWith("/admin") && (
                <li>
                  <button onClick={handleLogout}>Se déconecter</button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
