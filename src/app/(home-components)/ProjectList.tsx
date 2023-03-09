"use client";
import React, { useEffect, useState, useRef } from "react";
import ProjectItem from "./ProjectItem";
import ProjectPreview from "./ProjectPreview";
import logo from "../../assets/logo.svg";
import next from "../../assets/next.svg";
import thirteen from "../../assets/thirteen.svg";
import vercel from "../../assets/vercel.svg";
import { useFollowPointer } from "../../helpers/use-follow-pointer";

function ProjectList() {
  const projects = [
    { id: 1, image: logo },
    { id: 2, image: vercel },
    { id: 3, image: next },
    { id: 4, image: thirteen },
    { id: 5, image: logo },
    { id: 6, image: logo },
  ];
  const workListRef = useRef<HTMLUListElement>(null!);
  const { x, y } = useFollowPointer(workListRef);
  const [selectedProject, setSelectedProject] = useState({ id: 0, image: "" });
  const [isMousePresent, setIsMousePresent] = useState(false);

  const handleHoverProject = (project: any) => {
    setSelectedProject(project);
  };

  const handleDeSelectProject = () => {
    setSelectedProject({ id: 0, image: "" });
  };

  return (
    <ul
      onMouseOver={() => setIsMousePresent(true)}
      onMouseOut={() => setIsMousePresent(false)}
      onMouseLeave={() => handleDeSelectProject()}
      ref={workListRef}
      className=" relative w-2/3"
    >
      {projects.map((project, index) => (
        <ProjectItem
          active={selectedProject.id === project.id}
          key={index}
          project={project}
          handleHoverProject={handleHoverProject}
        />
      ))}
      <ProjectPreview
        image={selectedProject.image || ""}
        mousePresent={isMousePresent}
        mousePosition={{ x, y }}
        id={selectedProject}
      />
    </ul>
  );
}

export default ProjectList;
