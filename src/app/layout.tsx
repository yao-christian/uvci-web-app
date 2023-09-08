import type { Metadata } from "next";

import { roboto, montserrat } from "@/fonts";

import "@/app/globals.css";

import { LayoutPropsType } from "@/shared/types";
import ToastProvider from "@/shared/components/toast-provider";

export const metadata: Metadata = {
  title: "UVCI",
  description: "Projet de soutenance",
};

export default function DefaultLayout({ children }: LayoutPropsType) {
  return (
    <html lang="fr">
      <body className={`bg-gray-100 ${roboto.variable} ${montserrat.variable}`}>
        <ToastProvider>
          <main>{children}</main>
        </ToastProvider>
      </body>
    </html>
  );
}
