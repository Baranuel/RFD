import React from "react";
import MetaData from "../../(components)/MetaData";
import SectionHeading from "../../../../components/SectionHeading";
import NextProjectButtons from "./NextProjectButtons";

function Description() {
  return (
    <div className="border-t border-t-2 py-6 border-accentDark">
      <SectionHeading text={"Project Title"} />
      <MetaData />
      <div className="w-2/3 text-justify lg:w-full">
        <p className="text-xl lg:text-lg mt-12 lg:mt-6">
          More info on the case, explain process with focusing on a specific
          issue, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          tincidunt tellus et tellus eleifend, sed tincidunt arcu fringilla.
          Donec non mauris massa. Sed in mauris urna. Integer eu ante ut ex
          gravida euismod vel et eros. Vestibulum venenatis mi sit amet nisi
          interdum, vel mattis .
        </p>
      </div>
      <NextProjectButtons />
    </div>
  );
}

export default Description;
