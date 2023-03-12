import { Inter } from "next/font/google";
import Link from "next/link";
import SectionHeading from "../components/SectionHeading";
import AboutMeSection from "./(home-components)/AboutMeSection";
import HeroSection from "./(home-components)/HeroSection";
import ServicesSection from "./(home-components)/ServicesSection";
import WorkSection from "./(home-components)/WorkSection";

export default function Home() {
  return (
    <div>
      <div className="px-48">
        <HeroSection />
      </div>

      <div className="px-64 2xl:px-48 xl:px-24 sm:px-4 md:px-8 lg:px-16">
        <SectionHeading text="Recent Work" />
        <WorkSection />

        <SectionHeading text="Services" />
        <ServicesSection />

        <SectionHeading text="About me" />
        <AboutMeSection />
      </div>
    </div>
  );
}
