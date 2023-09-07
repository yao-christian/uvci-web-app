import type { Metadata } from "next";

import { roboto, montserrat } from "@/fonts";

import "@/app/globals.css";

import { LayoutPropsType } from "@/shared/types";
import Header from "@/shared/components/layout/header";

export const metadata: Metadata = {
  title: "UVCI",
  description: "Projet de soutenance",
};

export default function PrivateLayout({ children }: LayoutPropsType) {
  return (
    <html lang="fr">
      <body className={`${roboto.variable} ${montserrat.variable}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
