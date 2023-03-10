import Image from "next/image";
import Link from "next/link";
import React from "react";
import vercel from "../../../assets/vercel.svg";

function FinalSection() {
  return (
    <section className="px-48 py-24">
      <div className="relative h-[75vh] bg-primaryDark">
        <Image src={vercel} alt="project" fill />
      </div>
      <div className="flex justify-between mt-24">
        <Link
          className="border-b-2 border-accentDark text-xl uppercase pr-12 py-2"
          href="work"
        >
          Previous Project
        </Link>
        <Link
          className="border-b-2 border-accentDark text-xl uppercase pl-12  py-2"
          href="work"
        >
          Next Project
        </Link>
      </div>
    </section>
  );
}

export default FinalSection;
