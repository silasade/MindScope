"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import attachCloudinaryPrefix from "@/app/Hooks/_Cloudinary";
import {
  Account,
  Logout,
  Overview,
  Post,
  Team,
} from "@/app/(Routes)/_global_components/Icons";
import { usePathname, useRouter } from "next/navigation";

type LinkType = {
  page: string;
  href: string;
  icon: React.ReactNode;
};

const links: LinkType[] = [
  { page: "Overview", href: "/Admin", icon: <Overview /> },
  { page: "Posts", href: "/Admin/post", icon: <Post /> },
  { page: "Team", href: "/Admin/team", icon: <Team /> },
  { page: "Account", href: "/Admin/account", icon: <Account /> },
];

function Sidebar() {
  const pathName = usePathname();
  const router=useRouter()
  return (
    <div className="h-full p-4 pt-0 flex flex-col justify-between bg-gray-900">
      {/* Logo */}
      <div className="relative w-full max-w-[200px] h-[150px]">
        <Image
          src={attachCloudinaryPrefix(
            "v1738943198/greyLogo-removebg-preview_1_lskrjc.png"
          )}
          alt="blue logo"
          fill
          className="object-contain"
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-[#f5f5f5] flex flex-row items-center text-[20px] p-2 h-12 font-medium rounded-md border-l-8 border-transparent ${
              pathName===(link.href)
                ? "bg-[#9747FF] border-[#b175ff] border-l-8"
                : ""
            } hover:bg-[#9747FF] hover:border-[#b175ff] transition-all`}
          >
            {link.icon}
            <span className="ml-2">{link.page}</span>
          </Link>
        ))}
      </nav>

      {/* Logout Button */}
      <button onClick={()=>router.push("/Signin")} className="flex items-center text-[#f5f5f5] text-[20px] font-medium mt-auto hover:text-red-500 transition-all">
        <Logout />
        <span className="ml-2">Log out</span>
      </button>
    </div>
  );
}

export default Sidebar;
