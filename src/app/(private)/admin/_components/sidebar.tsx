"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SIDEBAR_MENUS } from "../_config/sidebar-items";

type PropsType = React.BaseHTMLAttributes<HTMLElement>;

export default function Sidebar({ ...restProps }: PropsType) {
  const sidebarMenus = SIDEBAR_MENUS;
  const pathname = usePathname();

  return (
    <div {...restProps}>
      <ul className="menu menu-vertical">
        {sidebarMenus.map((menu, index) => (
          <li
            key={index}
            className={`${
              isActive(pathname, menu.url!) ? "bg-primary text-white" : ""
            }`}
          >
            {!menu.subMenus ? (
              <Link
                className={`${
                  isActive(pathname, menu.url!) ? "focus:text-white" : ""
                }`}
                href={menu.url!}
              >
                {menu.title}
              </Link>
            ) : (
              <>
                <a>{menu.title}</a>
                <ul>
                  {menu.subMenus.map((subMenu, subIndex) => (
                    <li key={subIndex}>
                      <Link href={subMenu.url!}>{subMenu.title}</Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function isActive(pathname: string, url: string): boolean {
  return pathname === url;
}
