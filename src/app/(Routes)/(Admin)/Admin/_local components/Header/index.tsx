"use client";
import { ArrowBottom, Avatar } from "@/app/(Routes)/_global_components/Icons";
import ReuseablePopover from "@/app/(Routes)/_global_components/ReuseablePopover";
import React from "react";
import PopoverContents from "../PopoverContents";
import { usePathname } from "next/navigation";

function Header() {
  const pathName = usePathname();

  const pageTitles: Record<string, string> = {
    "/Admin": "Overview",
    "/Admin/post": "Post",
    "/Admin/team": "Team",
  };
  const pageTitle = pageTitles[pathName] || "Account"; // Default to "Account" if no match

  return (
    <div className="flex justify-between items-center border-b border-[#333333] w-[100%] p-4">
      <div>
      <h2 className="text-2xl text-[#333333] font-bold">{pageTitle}</h2>
      </div>
      <div className="flex items-center gap-3">
        <Avatar width={50} height={50} />
        <div className="flex flex-col gap-1">
          <h4 className="font-medium">Silas Adegoke</h4>
          <h5 className="text-sm text-gray-600">silasadegoke331@gmail.com</h5>
        </div>
        <ReuseablePopover content={<PopoverContents />}>
          <div>
            <ArrowBottom width={25} height={25} />
          </div>
        </ReuseablePopover>
      </div>
    </div>
  );
}

export default Header;
