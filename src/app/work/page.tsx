import React from "react";
import SectionHeading from "../../components/SectionHeading";
import CaseStudies from "./(components)/CaseStudies";
import MyWork from "./(components)/MyWork";

function page() {
  return (
    <>
      <MyWork />
      <div className="px-64 2xl:px-48 xl:px-12 sm:px-2 md:px-8 lg:px-16">
        <CaseStudies />
      </div>
    </>
  );
}

export default page;
