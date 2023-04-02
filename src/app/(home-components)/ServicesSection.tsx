import Image from "next/image";
import React from "react";
import branding from "../../assets/branding.svg";
import social from "../../assets/social.svg";
import website from "../../assets/website.svg";
import editorial from "../../assets/editorial.svg";
import Services from "./Services";

function ServicesSection() {
  return (
    <ul className="flex lg:flex-col gap-12 lg:gap-0  items-center justify-center min-h-[55vh]">
      <Services icons={[branding, website, editorial, social]} />
    </ul>
  );
}

export default ServicesSection;
