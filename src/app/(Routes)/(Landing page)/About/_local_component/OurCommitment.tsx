"use client";
import attachCloudinaryPrefix from "@/app/Hooks/_Cloudinary";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
function OurCommitment() {
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
  }, [isMobile]);
  return (
    <div className="flex md:flex-row flex-col-reverse justify-center w-[full] gap-[24px] h-auto md:h-[400px] items-center p-[20px] md:p-[60px]">
      <div className="relative w-[100%] md:w-[50%] h-[250px] md:h-[350px]">
        <Image
          src={attachCloudinaryPrefix("v1738346697/pexels-life-of-pix-7974_a7hx9p.webp")}
          fill
          alt="window image"
          className="object-cover rounded-lg"
        />
      </div>
      <div ref={content} className="flex flex-col gap-[18px] w-[100%] md:w-[40%]">
        <h2 className="text-[18px] md:text-[24px] font-[#10182f] font-[700]">
          Our Commitment
        </h2>
        <p className="mdtext-[14px] text-[16px] font-[#10182f] font-[500]">
          At MindScope, we are dedicated to empowering communities and
          organizations with seamless digital solutions. Our mission is to
          enhance engagement, streamline operations, and foster meaningful
          connections through intuitive technology. With a focus on efficiency
          and innovation, MindScope provides the tools needed to navigate the
          ever-evolving digital landscape with clarity and purpose.
        </p>
      </div>
    </div>
  );
}

export default OurCommitment;
