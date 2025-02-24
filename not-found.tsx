"use client";
import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP)
function NotFound() {
  const bgTopRef = useRef(null);
  const bgBottomRef = useRef(null);
 
  
  useGSAP(() => {
    gsap.fromTo(
      bgTopRef.current,
      { y: "0%" },
      {
        y: "-30%",
        repeat: -1,
        duration: 10,
        ease: "linear",
        yoyo: true,
        yoyoEase: "linear",
      }
    );
  }, [bgTopRef]);

  // Animate the bottom pattern to move downward
  useGSAP(() => {
    gsap.fromTo(
      bgBottomRef.current,
      { y: "0%" },
      {
        y: "30%",
        repeat: -1,
        duration: 20,
        ease: "linear",
        yoyo: true,
        yoyoEase: "linear",
      }
    );
  }, [bgBottomRef]);
  return (
    <div className="p-8 w-screen h-screen">
      <div className="grid rounded-lg overflow-hidden h-full place-items-center  p-5 bg-[#3252F5] bg-contain bg-no-repeat relative z-1">
        <div
          ref={bgTopRef}
          className="-z-1 absolute bg-contain bg-no-repeat top-0 bg-top w-full h-full opacity-50 bg-[url(https://res.cloudinary.com/dy9ry59fl/image/upload/v1740044019/website/Vector_3_wegk15.webp)]"
        ></div>
        <div className="z-10 flex flex-col gap-4 items-center text-center w-full sm:w-30 md:h-64 justify-center md:justify-end  bg-contain bg-no-repeat bg-center bg-[url(https://res.cloudinary.com/dy9ry59fl/image/upload/v1740044000/website/404_qjwpzv.webp)]">
          <h5 className="text-white text-[32px] leading-[40px]">
            Page Not Found
          </h5>
          <p className="text-white text-[16px] leading-[24px]">
            We can&lsquo;t find the page that you&lsquo;re looking for. Probably
            the link is broken
          </p>
          <Link
            href={"/"}
            className="flex justify-center items-center bg-white rounded-lg w-full sm:w-[269px] h-[56px] text-[#141414] text-[16px] font-semibold"
          >
            Go Back Home
          </Link>
        </div>
        <div
          ref={bgBottomRef}
          className="-z-1 absolute bg-contain bg-no-repeat bottom-0 bg-bottom w-full opacity-50 h-full bg-[url(https://res.cloudinary.com/dy9ry59fl/image/upload/v1740044015/website/Vector_4_tg46pm.webp)]"
        ></div>
      </div>
    </div>
  );
}

export default NotFound;
