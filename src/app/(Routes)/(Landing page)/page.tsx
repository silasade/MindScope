import React from "react";
import HeroSection from "./_local_component/HeroSection";
import s from "./page.module.scss";
import LatestNews from "./_local_component/LatestNews";
import NewsLetter from "./_local_component/NewsLetter";
import Contact from "./_local_component/Contact";
import OurValues from "./_local_component/OurValues";
function Home() {
  return (
    <div className={s.wrapper}>
      <HeroSection />
      <LatestNews />
      <NewsLetter />
      <Contact />
      <OurValues />
    </div>
  );
}

export default Home;
