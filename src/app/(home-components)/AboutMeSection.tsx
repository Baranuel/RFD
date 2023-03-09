import React from "react";
import CTA from "../../components/CTA";

function AboutMeSection() {
  return (
    <div className="flex justify-between mb-24">
      <div className="w-1/2 flex  ">
        <div className="flex flex-col justify-around">
          <div className="flex items-center h-2/3">
            <p className=" w-3/4 text-2xl">
              {`
          I'm a graphic designer with a love for all things creative and a
          cheerful personality to match. When I'm not designing, you can find me
          lost in a good book, watering my plants (or forgetting to), drinking
          crazy amounts of coffee, learning more about the captivating worlds of
          mathematics and science, or exploring the complexities of human
          behaviour and psychology.`}
            </p>
          </div>
          <div>
            <h3 className="mt-8 text-3xl mb-4">{`Let's do something magical together`}</h3>
            <CTA text={"Contact Me"} />
          </div>
        </div>
      </div>
      <div className="w-1/3 flex items-center h-[600px] bg-primaryDark">
        <div className="bg-secondaryDark h-full w-1/2"></div>
      </div>
    </div>
  );
}

export default AboutMeSection;
