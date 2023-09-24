import { LayoutPropsType } from "@/shared/types";
import "@/core/app/config/di-container/project";

export default function ProjectLayout({ children }: LayoutPropsType) {
  return <>{children}</>;
}
