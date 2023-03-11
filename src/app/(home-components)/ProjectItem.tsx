"use client";

import React from "react";
import { motion } from "framer-motion";
interface ProjectItemProps {
  project: any;
  active: boolean;
  handleHoverProject: (project: any) => void;
}

function ProjectItem({
  project,
  handleHoverProject,
  active,
}: ProjectItemProps) {
  return (
    <motion.li
      whileHover={{
        paddingTop: "40px",
        paddingBottom: "40px",
        cursor: "pointer",
        transition: { duration: 0.2 },
      }}
      onMouseEnter={() => handleHoverProject(project)}
      className="p-6 border-b-2 border-accentDark"
    >
      <div className="flex items-center justify-between ">
        <h2 className="text-2xl text-secondaryDark">Project Name</h2>
        <p className="uppercase">type of the project</p>
      </div>
    </motion.li>
  );
}

export default ProjectItem;
