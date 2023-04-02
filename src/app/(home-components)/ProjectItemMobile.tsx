import Image from "next/image";
import React from "react";

interface Props {
  project: any;
}

function ProjectItemMobile({ project }: Props) {
  return (
    <div className="w-full h-[350px] sm:h-[250px]  bg-primaryDark relative">
      <Image src={project.image} alt="project" fill className="oject-cover" />
      <div className="absolute w-full h-full  flex justify-end">
        <div className="w-full bg-secondaryLight text-white flex justify-between p-4 self-end text-xl sm:text-md">
          <h1>Project Name</h1>
          <p>Project type</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectItemMobile;
