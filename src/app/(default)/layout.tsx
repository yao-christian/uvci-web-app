import { LayoutPropsType } from "@/shared/types";
import Header from "@/shared/components/layout/header";

export default function DefaultLayout({ children }: LayoutPropsType) {
  return (
    <>
      <Header />
      <div className="mt-14">{children}</div>
    </>
  );
}
