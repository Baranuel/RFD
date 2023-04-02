import React from "react";
import Image from "next/image";

import logo from "../assets/logo.svg";
import Link from "next/link";
function Navigation() {
  return (
    <div className="flex justify-between items-center px-8 py-4 sm:hidden sticky z-50 top-0 bg-background ">
      <Image priority src={logo} alt="Logo" width={70} height={70} />
      <div className="flex gap-6 text-xl items-center text-secondaryDark font-p22 ">
        <Link href="/work">WORK</Link>
        <Link href="/services">SERVICES</Link>
        <Link href="/contact">CONTACT</Link>
      </div>
    </div>
  );
}

export default Navigation;
