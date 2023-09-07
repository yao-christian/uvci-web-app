import type { Metadata } from "next";

import { roboto, montserrat } from "@/fonts";

import "@/app/globals.css";

import { LayoutPropsType } from "@/shared/types";
import Header from "@/shared/components/layout/header";

export const metadata: Metadata = {
  title: "UVCI",
  description: "Projet de soutenance",
};

export default function DefaultLayout({ children }: LayoutPropsType) {
  return (
    <html lang="fr">
      <body
        className={` bg-gray-100 ${roboto.variable} ${montserrat.variable}`}
      >
        <Header />
        <main className="mt-14">{children}</main>
      </body>
    </html>
  );
}
