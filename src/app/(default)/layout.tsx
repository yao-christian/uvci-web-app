import { LayoutPropsType } from "@/shared/types";
import Header from "@/shared/components/layout/header";

export default function DefaultLayout({ children }: LayoutPropsType) {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="mt-14">{children}</div>
    </div>
  );
}
