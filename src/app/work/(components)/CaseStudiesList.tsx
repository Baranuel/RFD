import React from "react";
import CaseCard from "./CaseCard";

function CaseStudiesList() {
  return (
    <ul className=" py-8 sm:py-2 flex flex-col gap-24 lg:gap-12 sm:gap-8 mt-12 sm:mt-2">
      <CaseCard />
      <CaseCard />
      <CaseCard />
    </ul>
  );
}

export default CaseStudiesList;
