"use client";
import React from "react";
import SectionHeading from "../../components/SectionHeading";
import { useFollowPointer } from "../../helpers/use-follow-pointer";
import ProjectList from "./ProjectList";
import ProjectPreview from "./ProjectPreview";

function WorkSection() {
  const ref = React.useRef(null);
  const { x, y } = useFollowPointer(ref);
  return (
    <div ref={ref} className="flex justify-center h-screen items-center">
      {/* <ProjectPreview id="hello" mousePresent={true} mousePosition={{ x, y }} /> */}
      <ProjectList />
    </div>
  );
}

export default WorkSection;
