import { LayoutPropsType } from "@/shared/types";
import "@/core/app/config/di-container/medical-service";

export default function MedicalServiceLayout({ children }: LayoutPropsType) {
  return <>{children}</>;
}
