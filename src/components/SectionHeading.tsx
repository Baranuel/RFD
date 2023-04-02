import React from "react";

interface SectionHeadingProps {
  text: string;
}

function SectionHeading({ text }: SectionHeadingProps) {
  return (
    <h1 className="text-6xl py-4 text-secondaryDark lg:text-5xl  sm:text-4xl">
      {text}
    </h1>
  );
}

export default SectionHeading;
