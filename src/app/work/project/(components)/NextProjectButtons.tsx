import Link from "next/link";
import React from "react";

function NextProjectButtons() {
  return (
    <div className="flex justify-between mt-24 lg:mt-12">
      <Link
        className="border-b-2 border-accentDark text-xl lg:text-lg sm:text-sm uppercase pr-12 sm:pr-6 py-2"
        href="work"
      >
        Previous Project
      </Link>
      <Link
        className="border-b-2 border-accentDark text-xl lg:text-lg sm:text-sm uppercase pl-12 sm:pl-6  py-2"
        href="work"
      >
        Next Project
      </Link>
    </div>
  );
}

export default NextProjectButtons;
