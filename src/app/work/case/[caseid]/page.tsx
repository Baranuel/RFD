import Link from "next/link";
import React from "react";
import CaseGrid from "../(components)/CaseGrid";
import CreativeProcess from "../(components)/CreativeProcess";
import FinalSection from "../(components)/FinalSection";
import IntroGrid from "../(components)/IntroGrid";
import IntroSection from "../(components)/IntroSection";

function page() {
  return (
    <div>
      <IntroSection />
      <CreativeProcess />
      <FinalSection />
    </div>
  );
}

export default page;
