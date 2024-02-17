/* eslint-disable @next/next/no-img-element */

import { ReactNode } from "react";

export default function AuthLayout({ children }:{
    children: ReactNode
}) {
    return (
      <>
        <div
          id="register"
          className="flex min-h-full w-[100vw] items-center justify-center p-4  "
        >
          <div className="flex w-[100vw] justify-center bg-white py-10 ">
            {children}
          </div>
        </div>
      </>
    );
  }
  