import React from "react";
import Description from "../(components)/Description";
import HeroImage from "../(components)/HeroImage";

function page() {
  return (
    <div className="py-16 px-64 2xl:px-48 xl:px-24 sm:px-4  md:px-8 lg:px-16">
      <HeroImage />
      <Description />
    </div>
  );
}

export default page;
