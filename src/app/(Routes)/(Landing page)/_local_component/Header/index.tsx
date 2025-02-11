"use client";
import React, { useEffect, useRef, useState } from "react";
import s from "./Header.module.scss";
import Link from "next/link";
import { TimelineLite } from "gsap";
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import attachCloudinaryPrefix from "@/app/Hooks/_Cloudinary";
import Image from "next/image";
function Header() {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const linksRef = useRef<HTMLDivElement | null>(null);

  const tl = useRef(new TimelineLite({ paused: true }));
  // Toggle the menu when clicking on the hamburger
  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  // Run the GSAP animation when the menu opens or closes
  useEffect(() => {
    if (isMobile) {
      //const childrenLinks = linksRef.current?.children;
      if (menuOpen) {
        wrapperRef.current!.style.height = "100vh"; // Directly set height for immediate response
        // Use GSAP to animate the sliding effect of the links
        tl.current.to(wrapperRef.current, 1, {
          height: "100vh",
          ease: "power2.out",
        });
      } else {
        wrapperRef.current!.style.height = "55px"; // Directly set height for immediate response

        tl.current.to(wrapperRef.current, 1, {
          height: "55px", // Shrink the height back to the original state
          ease: "power2.in",
        });
      }
    }
  }, [isMobile, menuOpen]);

  return (
    <div ref={wrapperRef} className={s.wrapper}>
      <div className={s.logo}>

      
      <div className="relative items-start justify-self-start w-[85px] md:max-w-[200px] h-[80px] md:h-[150px]">
        <Image
          src={attachCloudinaryPrefix(
            "v1738942077/blueLogo-removebg-preview_jjfsoh.png"
          )}
          alt="blue logo"
          fill
        />
        </div>
      </div>
      <div ref={linksRef} className={s.linkWrapper}>
        <Link onClick={toggleMenu} className={clsx({ [s.active]: pathName === "/" })} href="/">
          Home
        </Link>
        <Link
        onClick={toggleMenu}
          className={clsx({ [s.active]: pathName.includes("/About") })}
          href="/About"
        >
          About
        </Link>
        <Link
        onClick={toggleMenu}
          className={clsx({ [s.active]: pathName.includes("/Blog") })}
          href="/Blog"
        >
          Blog
        </Link>
        <Link
        onClick={toggleMenu}
          className={clsx({ [s.active]: pathName.includes("/Contact") })}
          href="/Contact"
        >
          Contact
        </Link>
      </div>
      {/* <div ref={btnRef} className={s.authCta}>
        <button className={s.signUpBtn}>Sign up</button>
        <button className={s.logInBtn}>Log in</button>
      </div> */}
      <div onClick={toggleMenu} className={s.menu}>
        <div className={clsx(s.bar, { [s.active]: menuOpen })}></div>
      </div>
    </div>
  );
}

export default Header;
