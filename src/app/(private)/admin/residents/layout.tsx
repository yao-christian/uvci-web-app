import { LayoutPropsType } from "@/shared/types";
import "@/core/app/config/di-container/resident";

export default function ResidentLayout({ children }: LayoutPropsType) {
  return <>{children}</>;
}
