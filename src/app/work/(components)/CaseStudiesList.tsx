import React from "react";
import CaseCard from "./CaseCard";

function CaseStudiesList() {
  return (
    <ul className=" py-4 sm:py-2 flex flex-col gap-24 lg:gap-12 sm:gap-8 mt-12 lg:mt-6 sm:mt-2">
      <CaseCard />
      <CaseCard />
      <CaseCard />
    </ul>
  );
}

export default CaseStudiesList;
