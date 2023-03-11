import { Inter } from "next/font/google";
import Link from "next/link";
import SectionHeading from "../components/SectionHeading";
import AboutMeSection from "./(home-components)/AboutMeSection";
import HeroSection from "./(home-components)/HeroSection";
import ServicesSection from "./(home-components)/ServicesSection";
import WorkSection from "./(home-components)/WorkSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="px-48">
      <HeroSection />

      <SectionHeading text="Recent Work" />
      <WorkSection />

      <SectionHeading text="Services" />
      <ServicesSection />

      <SectionHeading text="About me" />
      <AboutMeSection />
    </div>
  );
}
