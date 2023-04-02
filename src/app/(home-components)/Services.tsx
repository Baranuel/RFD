import React from "react";
import Image from "next/image";

function Services({ icons }: { icons: string[] }) {
  return (
    <>
      {icons.map((icon, index) => {
        return (
          <li
            key={index}
            className="flex flex-col items-center justify-center gap-2 px-2 py-12 w-[420px] h-[300px] lg:w-full lg:h-[300px] sm:h-[200px] lg:border-b lg:border-accentDark lg:flex-row"
          >
            <div className="relative flex items-center p-4 justify-center w-full h-full lg:w-1/2">
              <Image src={icon} alt="image" fill />
            </div>
            <div className="flex flex-col items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <h1 className="text-xl font-semibold text-secondaryDark lg:text-4xl md:text-3xl sm:text-xl text-center">
                Visual identity
              </h1>
              <p className="text-center">This is a text about the thing.</p>
            </div>
          </li>
        );
      })}
    </>
  );
}

export default Services;
