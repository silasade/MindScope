"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import attachCloudinaryPrefix from "@/app/Hooks/_Cloudinary";
gsap.registerPlugin(ScrollTrigger);
function HeroSection() {
  const left = useRef<HTMLDivElement | null>(null);
  const right = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      left.current,
      { y: "350" }, // Starting position
      { y: "0", duration: 2, ease: "power3.out" }
    ).fromTo(
      right.current,
      { y: "350" }, // Starting position
      { y: "0", duration: 2, ease: "power3.out" },
      "<" // Starts at the same time as the left image animation
    );
  }, []);
  useEffect(() => {
    if (left.current && right.current) {
      gsap.to(
        left.current,

        {
          x: "-100%",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: left.current,
            start: "top center",
            scrub: 0.5,
          },
        }
      );

      gsap.to(
        right.current,

        {
          x: "120%",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: right.current,
            start: "top center",
            scrub: 0.5,
          },
        }
        // Starts at the same time as the left image animation
      );
    }
  }, []);
  return (
    <div className="relative bg-[#333333] h-[500px] flex justify-between items-end overflow-hidden">
      {/* Backdrop element with backdrop-filter applied */}
      <div className="w-[100%] h-full z-10 bg-black absolute bg-opacity-60 backdrop-brightness"></div>
      <div className="w-[100%] h-full absolute top-[10%] z-10  flex flex-col gap-2 items-center justify-center">
        <h1 className="text-[20px] md:text-[36px] lg:text-[48px] text-white text-center font-bold">
          About us
        </h1>
        <h3 className="text-[15px] md:text-[18px] text-white text-center font-semibold w-[75%]">
          The ultimate management tool to help celebrate your members, engage
          with your community, and connect like never before.
        </h3>
      </div>

      {/* Image Sections */}
      <div
        className="relative w-[45%] translate-y-[350px] h-[350px] float-left"
        ref={left}
      >
        <Image
          src={attachCloudinaryPrefix("v1738344549/left_vqddkf.webp")}
          alt="hand"
          fill
          className="object-cover rounded-lg border-8 border-[#10182f]"
        />
      </div>
      <div
        className="relative w-[45%] translate-y-[350px] h-[350px]  float-right"
        ref={right}
      >
        <Image
          src={attachCloudinaryPrefix("v1738344549/right_h7dtmn.webp")}
          alt="book"
          fill
          className="object-cover rounded-lg border-8 border-[#10182f]"
        />
      </div>
    </div>
  );
}

export default HeroSection;
