import { LayoutPropsType } from "@/shared/types";
import Header from "@/shared/components/layout/header";

export default function PrivateLayout({ children }: LayoutPropsType) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
