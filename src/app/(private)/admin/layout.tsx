import { LayoutPropsType } from "@/shared/types";
import Sidebar from "./_components/sidebar";

export default function AdminLayout({ children }: LayoutPropsType) {
  return (
    <div className="drawer">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Sidebar className="fixed top-[67px] bottom-0 z-10 w-[250px] overflow-y-auto bg-gray-200 hidden md:block" />

        <div className="min-h-screen overflow-auto">
          <div className="h-full mt-[4.5rem] px-8 grid grid-rows-[1fr_auto] md:ml-[250px]">
            <div className="py-5">{children}</div>
          </div>
        </div>
      </div>

      <div className="drawer-side z-50">
        <label htmlFor="dashboard-drawer" className="drawer-overlay" />
        <Sidebar className="fixed top-0 bottom-0 w-[250px] overflow-y-auto bg-gray-200" />
      </div>
    </div>
  );
}
