import React from "react";

function CaseGrid() {
  return (
    <div className="grid grid-cols-10 grid-rows-8 min-h-screen h-[120vh] gap-8 my-16">
      <div className="col-start-1 col-span-10  row-start-1 row-span-5 lg:row-span-4 bg-primaryDark">
        1
      </div>
      <div className="col-start-6 lg:col-start-1 col-span-5 lg:col-span-10 row-start-6 row-span-5 lg:row-span-4 bg-primaryDark">
        2
      </div>
      <div className=" col-span-5 lg:col-span-10  row-start-6 row-span-5 lg:row-span-4 bg-primaryDark">
        3
      </div>
    </div>
  );
}

export default CaseGrid;
