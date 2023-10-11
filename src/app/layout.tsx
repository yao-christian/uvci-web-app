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
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/images/logo.png" type="image/png" />
      </head>

      <body className={`bg-gray-100 ${roboto.variable} ${montserrat.variable}`}>
        <ToastProvider>
          <main>{children}</main>
        </ToastProvider>
      </body>
    </html>
  );
}
