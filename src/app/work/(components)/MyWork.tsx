import React from "react";
import SectionHeading from "../../../components/SectionHeading";
import MyCarousel from "./MyCarousel";
function MyWork() {
  return (
    <section className="pt-24">
      <div className="  px-64 2xl:px-48 xl:px-24 sm:px-4 md:px-8 lg:px-16">
        <SectionHeading text="My Work" />
      </div>
      <div className="border-b-2 border-accentDark mx-64  2xl:mx-48 xl:mx-24 lg:mx-16 md:mx-8 sm:mx-4 my-10 sm:my-2 xl:my-8 "></div>
      <MyCarousel>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </MyCarousel>
      <div className="border-b-2 border-accentDark mx-64 2xl:mx-48  xl:mx-24 lg:mx-16 md:mx-8  sm:mx-4 mt-10 sm:mt-2 xl:mt-8 "></div>
    </section>
  );
}

export default MyWork;
