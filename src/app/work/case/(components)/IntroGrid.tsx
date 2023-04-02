import React from "react";

function IntroGrid() {
  return (
    <div className="grid grid-cols-10 grid-rows-8 min-h-screen h-[120vh] gap-8 sm:gap-4 my-16 sm:px-4">
      <div className="col-start-1 col-span-5 lg:col-span-10 row-span-3 bg-primaryDark">
        1
      </div>
      <div className="col-start-6 col-span-5 lg:col-start-1 lg:col-span-10 row-span-3 bg-primaryDark">
        2
      </div>
      <div className="row-start-4 lg:row-start-7 col-span-10 row-span-3 bg-primaryDark">
        3
      </div>
    </div>
  );
}

export default IntroGrid;
