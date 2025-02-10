"use client";
import { Account, Logout } from "@/app/(Routes)/_global_components/Icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function PopoverContents() {
  const router = useRouter();
  return (
    <div className="flex flex-col w-64 h-fit">
      <div className="border-b border-[#8f8f8f]">
        <Link
          href="/Admin/account"
          className="flex items-center gap-1 text-[#333333] text-[16px] font-medium transition-all h-10 hover:bg-[#F5F5F5]"
        >
          <Account />
          Account
        </Link>
      </div>
      <button
        onClick={() => router.push("/Signin")}
        className="flex items-center gap-1 text-[#333333] text-[16px] font-medium h-10 hover:text-red-500 transition-all hover:bg-[#F5F5F5]"
      >
        <Logout />
        <span>Log out</span>
      </button>
    </div>
  );
}

export default PopoverContents;
