import { LayoutPropsType } from "@/shared/types";
import "@/core/app/config/di-container/epidemic";

export default function EpidemicLayout({ children }: LayoutPropsType) {
  return <>{children}</>;
}
