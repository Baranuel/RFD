import React from "react";
import Image from "next/image";
interface ProjectItemProps {
  project: any;
  handleHoverProject: (project: any) => void;
}

function ProjectItem({ project, handleHoverProject }: ProjectItemProps) {
  return (
    <li
      onMouseEnter={() => handleHoverProject(project)}
      className="p-6 border-b-2 border-accentDark"
    >
      <div className="flex items-center justify-between ">
        <h2 className="text-2xl text-secondaryLight">Project Name</h2>
        <p className="uppercase">type of the project</p>
      </div>
    </li>
  );
}

export default ProjectItem;
