import Link from "next/link";
import React from "react";
import CaseGrid from "../(components)/CaseGrid";
import CaseProcess from "../(components)/CaseProcess";
import FinalSection from "../(components)/FinalSection";
import IntroGrid from "../(components)/IntroGrid";
import IntroSection from "../(components)/IntroSection";

function page() {
  return (
    <div>
      <IntroSection />
      <CaseProcess />
      <FinalSection />
    </div>
  );
}

export default page;
