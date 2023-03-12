import React from "react";

function CaseCard() {
  return (
    <li>
      <div className="w-full h-[65vh] xl:h-[60vh]  sm:h-[35vh]  bg-primaryDark"></div>
      <div className="flex w-full justify-between items-center sm:mt-2 mt-4">
        <h1 className="text-4xl sm:text-2xl">Project Title</h1>
        <div className="text-xl sm:text-sm  flex gap-4">
          <p className="">Client</p>
          <p>Year</p>
        </div>
      </div>
    </li>
  );
}

export default CaseCard;
