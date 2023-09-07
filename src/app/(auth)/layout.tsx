import type { Metadata } from "next";

import { roboto, montserrat } from "@/fonts";

import "@/app/globals.css";

import { LayoutPropsType } from "@/shared/types";

export const metadata: Metadata = {
  title: "UVCI | authentication",
  description: "Projet de soutenance",
};

export default function AuthLayout({ children }: LayoutPropsType) {
  return (
    <html lang="fr">
      <body className={`${roboto.variable} ${montserrat.variable}`}>
        <div className="flex min-h-screen bg-gray-50">
          <div className="w-full flex flex-col justify-center py-10 px-4 md:block md:w-1/2 md:px-6 lg:px-20 lg:flex-none xl:px-24">
            <div className="w-full max-w-sm mx-auto lg:w-96">
              <div className="flex justify-center md:mt-[20%]">
                <a className="flex items-center">
                  <span className="">
                    <img className="w-[60px] h-[50px]" src="/images/logo.png" />
                  </span>
                </a>
              </div>
              {children}
            </div>
          </div>

          <div className="hidden fixed top-0 right-0 bottom-0 md:block sm:w-1/2">
            <img
              src="/images/auth-illustration.jpg"
              alt="nature"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </body>
    </html>
  );
}
