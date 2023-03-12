import React from "react";
import CTA from "../../../components/CTA";
import SectionHeading from "../../../components/SectionHeading";
import CaseStudiesList from "./CaseStudiesList";

function CaseStudies() {
  return (
    <section className=" mt-12 sm:mt-4 px-64 2xl:px-48 xl:px-24 md:px-8 sm:px-4 lg:px-16">
      <SectionHeading text="Case Studies" />
      <CaseStudiesList />
      <div>
        <h3 className="mt-24 text-3xl mb-4">{`Let's do something magical together`}</h3>
        <CTA text={"Contact Me"} />
      </div>
    </section>
  );
}

export default CaseStudies;
