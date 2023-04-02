"use client";

import React from "react";
import { motion } from "framer-motion";
interface ProjectItemProps {
  project: any;
  active: boolean;
  fade: boolean;
  handleHoverProject: (project: any) => void;
}

function ProjectItem({
  project,
  handleHoverProject,
  fade,
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
      className={`p-6 border-b-2 ${
        fade ? "border-accentDark/30" : "border-accentDark"
      }`}
    >
      <div
        className={`flex items-center justify-between ${
          fade && "opacity-30"
        } transition-opacity duration-300 ease-in-out`}
      >
        <h2 className="text-3xl text-secondaryDark">Project Name</h2>
        <p className="uppercase text-xl text-right">type of the project</p>
      </div>
    </motion.li>
  );
}

export default ProjectItem;
