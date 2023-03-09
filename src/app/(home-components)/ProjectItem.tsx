import React from "react";

function ProjectItem() {
  return (
    <li className="p-6 border-b-2 border-accentDark">
      <div className="flex items-center justify-between ">
        <h2 className="text-2xl text-secondaryLight">Project Name</h2>
        <p className="uppercase">type of the project</p>
      </div>
    </li>
  );
}

export default ProjectItem;
