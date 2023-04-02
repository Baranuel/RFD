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
  const [fade, setFade] = useState(false);
  const [isMousePresent, setIsMousePresent] = useState(false);

  const handleHoverProject = (project: any) => {
    setSelectedProject(project);
    setFade(true);
  };

  const handleDeSelectProject = () => {
    setIsMousePresent(false);
    setSelectedProject({ id: 0, image: "" });
    setFade(false);
  };

  return (
    <>
      <div className="flex justify-center min-h-[70vh] my-12 items-center">
        <ul
          onMouseOver={() => setIsMousePresent(true)}
          onMouseOut={() => setIsMousePresent(false)}
          onMouseLeave={() => handleDeSelectProject()}
          ref={workListRef}
          className=" w-4/5 sm:w-full"
        >
          {projects.map((project, index) => (
            <ProjectItem
              active={selectedProject.id === project.id}
              fade={fade && selectedProject.id !== project.id}
              key={index}
              project={project}
              handleHoverProject={handleHoverProject}
            />
          ))}
        </ul>
        <ProjectPreview
          image={selectedProject.image || ""}
          mousePresent={isMousePresent}
          mousePosition={{ x, y }}
          id={selectedProject}
        />
      </div>
    </>
  );
}

export default ProjectList;
