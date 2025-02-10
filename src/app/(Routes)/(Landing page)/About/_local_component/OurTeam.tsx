"use client";
import attachCloudinaryPrefix from "@/app/Hooks/_Cloudinary";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
type teamMember = {
  name: string;
  title: string;
  contact: string;
  about: string;
  profile: string;
};
const team: teamMember[] = [
  {
    name: "Silas Adegoke",
    title: "Frontend Engineer",
    profile: attachCloudinaryPrefix(
      "v1738843411/pexels-eric-moura-859101902-30522888_m54i5n.webp"
    ),
    contact: "silasadegoke331@gmail.com",
    about:
      "A passionate frontend engineer that has participated in over 5 projects. He is based in Nigeria",
  },
  {
    name: "Obafolukemi Emmanuel",
    title: "Backend Engineer",
    profile: attachCloudinaryPrefix(
      "v1738843516/pexels-arturoaez220-11093561_rlwg5z.webp"
    ),
    contact: "emmanuel@gmail.com",
    about:
      "A passionate frontend engineer that has participated in over 5 projects. He is based in Nigeria",
  },
];
function OurTeam() {
  const imageOne = useRef<Record<number, HTMLDivElement | null>>({});
  const wrapper = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    Object.values(imageOne.current).forEach((image) => {
      if (!image) return;

      gsap.to(image, {
        css: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
        duration: 5,
        scrollTrigger: {
          trigger: wrapper.current,
          start: "top 20%",
        },
      });
    });
  }, []);
  return (
    <div
      ref={wrapper}
      className="flex flex-col gap-5 md:gap-10 items-center justify-center bg-[#333333] p-[30px] w-100"
    >
      <div className="flex flex-col w-[80]">
        <h2 className="text-center font-[700] text-[18px] md:text-[24px] lg:text-[36px] text-white">
          Our Team
        </h2>
        <h3 className="text-center font-[500] text-[14px] md:text-[16px] text-white w-[24]">
          We are a team of passionate technologists, creatives and visionary
          leaders who believe technology can fuel the growth of the modern day
          information industry
        </h3>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {team.map((item, index) => {
          return (
            <div
              ref={(el) => {
                if (el) imageOne.current[index] = el;
              }}
              className="flex flex-col gap-5 w-80 bg-white p-4 rounded-lg [clip-path:polygon(0_0,100%_0,100%_10%,0_10%)]"
              key={index}
            >
              <div className="relative w-[100%] h-[300px]">
                <Image
                  src={item.profile}
                  alt="member profile"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col text-center gap-1 text-[#333333]">
                <h3 className="text-[14px] md:text-[16px] font-[500]">
                  {item.name}
                </h3>
                <h4 className="text-[12px] md:text-[14px] font-[400]">
                  {item.title}
                </h4>
                <h5 className="italic">{item.contact}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurTeam;
