"use client";
import React from "react";
import SectionHeading from "../../components/SectionHeading";
import ProjectList from "./ProjectList";

function WorkSection() {
  return (
    <div className="flex relative justify-center min-h-[75vh] items-center">
      <ProjectList />
    </div>
  );
}

export default WorkSection;
