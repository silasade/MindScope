import React from "react";
import HeroSection from "./_local_component/HeroSection";
import AboutMindScope from "./_local_component/AboutMindScope";
import OurCommitment from "./_local_component/OurCommitment";
import OurValues from "../_local_component/OurValues";
import OurTeam from "./_local_component/OurTeam";

function About() {
  return (
    <div className="min-h-[100%]">
      <HeroSection />
      <AboutMindScope />
      <OurCommitment />
      <OurValues />
      <OurTeam />
    </div>
  );
}

export default About;
