"use client";
import React, {  useRef } from "react";
import s from "./HeroSection.module.scss";
import Image from "next/image";
import gsap from "gsap";
import attachCloudinaryPrefix from "@/app/Hooks/_Cloudinary";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function HeroSection() {
  const imageOne = useRef<HTMLDivElement | null>(null);
  const wrapper = useRef<HTMLDivElement | null>(null);
  return (
    <div ref={wrapper} className={s.wrapper}>
      <div className={s.heroContent}>
        <h1>
          Unleash Your Potential: Insights <div> for the Mind.</div>
        </h1>
        <h3>
          Dive into articles that unravel the mysteries of{" "}
          <div> human thought and potential.</div>
        </h3>
        <button className="animate-bounce">Start Reading</button>
      </div>
      <div
        ref={imageOne}
        className="relative w-[50%] h-[450px]"
      >
        <Image
          src={attachCloudinaryPrefix("v1738344541/heroImg_dveqvm.webp")}
          alt="consultant"
          fill
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
}

export default HeroSection;
