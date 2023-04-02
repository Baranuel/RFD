import React from "react";
import CTA from "../../../components/CTA";
import SectionHeading from "../../../components/SectionHeading";
import CaseStudiesList from "./CaseStudiesList";

function CaseStudies() {
  return (
    <div className="mt-8">
      <SectionHeading text="Case Studies" />
      <CaseStudiesList />
      <div>
        <h3 className="mt-24 text-3xl mb-4">{`Let's do something magical together`}</h3>
        <CTA text={"Contact Me"} />
      </div>
    </div>
  );
}

export default CaseStudies;
