import { LayoutPropsType } from "@/shared/types";
import "@/core/app/config/di-container/promoter";

export default function PromoterLayout({ children }: LayoutPropsType) {
  return <>{children}</>;
}
