import React from "react";

function MetaData() {
  return (
    <div className="flex flex-col w-full gap-1  lg:gap-0 text-2xl lg:text-lg font-light mt-4 sm:mt-0">
      <div className="flex justify-between">
        <p className="text-secondaryDark">Client</p>
        <p className="text-secondaryDark">Project category</p>
      </div>
      <div className="flex justify-between">
        <p className="text-secondaryDark">Year</p>
        <p className="text-secondaryDark"> Team members</p>
      </div>
    </div>
  );
}

export default MetaData;
