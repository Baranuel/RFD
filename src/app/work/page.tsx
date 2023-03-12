import React from "react";
import SectionHeading from "../../components/SectionHeading";
import CaseStudies from "./(components)/CaseStudies";
import MyWork from "./(components)/MyWork";

function page() {
  return (
    <div className="">
      <MyWork />
      <CaseStudies />
    </div>
  );
}

export default page;
