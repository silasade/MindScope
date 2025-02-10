"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import attachCloudinaryPrefix from "@/app/Hooks/_Cloudinary";
import { useMediaQuery } from "react-responsive";
gsap.registerPlugin(ScrollTrigger);
function AboutMindScope() {
  const content = useRef<HTMLDivElement | null>(null);
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  useEffect(() => {
    if (!content) return;
    gsap.fromTo(
      content.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        ease: "power2.out",
        y: 0,
        scrollTrigger: {
          trigger: content.current,
          start: `top ${isMobile ? "center" : "80%"}`,
          scrub: 0.5,
        },
      }
    );
  }, []);
  return (
    <div className="flex flex-col md:flex-row justify-center w-[full] gap-[24px] h-auto md:h-[400px] items-center p-[20px] md:p-[60px]">
      <div
        ref={content}
        className="flexflex-col gap-[18px] w-[100%] md:w-[40%]"
      >
        <h2 className="text-[18px] md:text-[24px] font-[#10182f] font-[700]">
          About MindScope
        </h2>
        <p className="text-[14px] md:text-[16px] font-[#10182f] font-[500]">
          We enhance community engagement by fostering generosity, expanding
          outreach, and creating seamless communication channels with effective
          feedback systems. Our intuitive check-in process, along with
          integrated tools for sharing experiences and insights, ensures
          meaningful participation and global connectivity.
        </p>
      </div>
      <div className="relative w-[100%] md:w-[50%] h-[250px] md:h-[350px]">
        <Image
          src={attachCloudinaryPrefix("v1738344543/window_xsmhvl.webp")}
          fill
          alt="window image"
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
}

export default AboutMindScope;
