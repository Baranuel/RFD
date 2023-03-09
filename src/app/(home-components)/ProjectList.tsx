"use client";
import React, { useEffect, useState, useRef } from "react";
import ProjectItem from "./ProjectItem";
import ProjectPreview from "./ProjectPreview";
import logo from "../../assets/logo.svg";
import next from "../../assets/next.svg";
import thirteen from "../../assets/thirteen.svg";
import vercel from "../../assets/vercel.svg";

function ProjectList() {
  const projects = [
    { id: 1, image: logo },
    { id: 2, image: vercel },
    { id: 3, image: next },
    { id: 4, image: thirteen },
    { id: 5, image: logo },
    { id: 6, image: logo },
  ];
  const [selectedProject, setSelectedProject] = useState({ id: 0, image: "" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMousePresent, setIsMousePresent] = useState(false);
  const workListRef = useRef<HTMLUListElement>(null!);

  const handleHoverProject = (project: any) => {
    setSelectedProject(project);
  };

  useEffect(() => {
    const { current } = workListRef;
    current.addEventListener("mousemove", (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    });

    return () => {
      current.removeEventListener("mousemove", (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };
  }, []);

  return (
    <ul
      onMouseOver={() => setIsMousePresent(true)}
      onMouseOut={() => setIsMousePresent(false)}
      ref={workListRef}
      className=" relative w-2/3"
    >
      {projects.map((project, index) => (
        <ProjectItem
          key={index}
          project={project}
          handleHoverProject={handleHoverProject}
        />
      ))}
      <ProjectPreview
        image={selectedProject.image || ""}
        mousePresent={isMousePresent}
        mousePosition={mousePosition}
        id={selectedProject}
      />
    </ul>
  );
}

export default ProjectList;
