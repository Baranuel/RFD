import React from "react";
import SectionHeading from "../../../../components/SectionHeading";
import CaseGrid from "./CaseGrid";

function CreativeProcess() {
  return (
    <section className=" bg-backgroundDark py-24 px-64 2xl:px-48 xl:px-24 sm:px-4  md:px-8 lg:px-16">
      <SectionHeading text="Creative Process" />
      <div className="w-2/3 lg:w-full">
        <p className="text-xl mt-8 text-justify">
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

export default CreativeProcess;
