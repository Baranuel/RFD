import React from "react";
import SectionHeading from "../../../components/SectionHeading";
import CaseGrid from "./CaseGrid";

function CaseProcess() {
  return (
    <section className=" bg-backgroundDark py-24 px-48">
      <SectionHeading text="Case Process" />
      <div className="w-1/2">
        <p className="text-xl mt-8">
          More info on the case, explain process with focusing on a specific
          issue, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          tincidunt tellus et tellus eleifend, sed tincidunt arcu fringilla.
          Donec non mauris massa. Sed in mauris urna. Integer eu ante ut ex
          gravida euismod vel et eros. Vestibulum venenatis mi sit amet nisi
          interdum, vel mattis .
        </p>
      </div>
      <CaseGrid />
    </section>
  );
}

export default CaseProcess;
