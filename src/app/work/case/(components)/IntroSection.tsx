import Image from "next/image";
import React from "react";
import SectionHeading from "../../../../components/SectionHeading";
import logo from "../../../../assets/logo.svg";
import IntroGrid from "./IntroGrid";
import MetaData from "../../(components)/MetaData";

function IntroSection() {
  return (
    <section className=" h-fit pb-12 pt-48 px-64 2xl:px-48 xl:px-24 sm:px-0 md:px-8 lg:px-16">
      <div className="sm:px-4">
        <SectionHeading text={"Project Title"} />
        <MetaData />
      </div>
      <div className=" min-h-[70vh] lg:min-h-[50vh] my-12 sm:my-6 bg-secondaryDark h-full relative">
        <Image src={logo} alt="case-image" fill />
      </div>
      <div className="flex lg:flex-col justify-between  border-b-2 border-accentDark pb-12 sm:mx-4">
        <div className="w-2/3 lg:w-full text-xl sm:text-lg text-customBlack text-justify">
          <p className="">
            Task description, problem statement, introducing the client, Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt
            tellus et tellus eleifend, sed tincidunt arcu fringilla. Donec non
            mauris massa. Sed in mauris urna. Integer eu ante ut ex gravida
            euismod vel et eros. Vestibulum venenatis mi sit amet nisi interdum,
            vel mattis risus dapibus. Phasellus vitae nibh tincidunt, malesuada
            nunc at, molestie tellus. Sed ut libero euismod, fermentum quam vel,
            consequat urna. Vivamus nec rhoncus metus, ut imperdiet est.
          </p>
        </div>
        <div>
          <div className="flex flex-col text-right lg:text-left lg:mt-12 text-xl">
            <h2 className="font-semibold uppercase mb-4">
              Project Deliverables
            </h2>
            <ul className="font-light">
              <li>Deliverable 1</li>
              <li>Deliverable 2</li>
              <li>Deliverable 3</li>
            </ul>
          </div>
        </div>
      </div>
      <IntroGrid />
    </section>
  );
}

export default IntroSection;
