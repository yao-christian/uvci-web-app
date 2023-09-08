import Link from "next/link";
import { LayoutPropsType } from "@/shared/types";

export default function AuthLayout({ children }: LayoutPropsType) {
  return (
    <div className="flex min-h-screen">
      <div className="w-full flex flex-col justify-center py-10 px-4 md:block md:w-1/2 md:px-6 lg:px-20 lg:flex-none xl:px-24">
        <div className="w-full max-w-sm mx-auto lg:w-96">
          <div className="flex justify-center md:mt-[20%]">
            <Link href="/" className="flex items-center">
              <span>
                <img className="w-[60px] h-[50px]" src="/images/logo.png" />
              </span>
            </Link>
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
  );
}
