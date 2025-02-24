"use client";
import React, {  useRef } from "react";
import s from "./HeroSection.module.scss";
import Image from "next/image";
import gsap from "gsap";
import attachCloudinaryPrefix from "@/app/Hooks/_Cloudinary";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react"
gsap.registerPlugin(ScrollTrigger);
function HeroSection() {
  const imageOne = useRef<HTMLDivElement | null>(null);
  const wrapper = useRef<HTMLDivElement | null>(null);
  return (
    <div ref={wrapper} className={s.wrapper}>
      <div className={s.heroContent}>
        <h1>
          Unleash Your Potential: Insights for the Mind
        </h1>
        <h3>
          Dive into articles that unravel the mysteries of{" "}
           human thought and potential.
        </h3>
        <button className="animate-bounce">Start Reading</button>
      </div>
      <motion.div
        ref={imageOne}
        initial={{clipPath: "polygon(49% 0, 50% 0, 33% 100%, 32% 100%);"}}
        whileInView={{ 
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          transition: { duration: 1.5, delay: 0.5 }
        }}
        
        className="relative w-[100%] h-[250px] md:w-[50%] h-[450px]"
      >
        <Image
          src={attachCloudinaryPrefix("v1738344541/heroImg_dveqvm.webp")}
          alt="consultant"
          fill
          className="object-cover rounded-lg"
        />
      </motion.div>
    </div>
  );
}

export default HeroSection;
