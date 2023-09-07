import Link from "next/link";

import { SIDEBAR_MENUS } from "../_config/sidebar-items";

type PropsType = React.BaseHTMLAttributes<HTMLElement>;

export default function Sidebar({ ...restProps }: PropsType) {
  const sidebarMenus = SIDEBAR_MENUS;

  return (
    <div {...restProps}>
      <ul className="menu menu-vertical">
        {sidebarMenus.map((menu, index) => (
          <li key={index}>
            {!menu.subMenus ? (
              <Link href={menu.url!}>{menu.title}</Link>
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
