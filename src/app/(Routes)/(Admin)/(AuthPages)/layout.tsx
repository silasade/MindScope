import React from "react";
import Image from "next/image";
import attachCloudinaryPrefix from "@/app/Hooks/_Cloudinary";
import Link from "next/link";
type layout = {
  children: React.ReactNode;
};
function Authlayout({ children }: layout) {
  return (
    <div className="flex flex-row bg-[#9747ff] min-h-[100vh] w-full">
      <div className="relative hidden md:inline w-2/5 h-[100] p-2">
        <div className="relative w-[250px] h-[200px]">
          <Link href={"/"}>
            <Image
              src={attachCloudinaryPrefix(
                "v1738943198/greyLogo-removebg-preview_1_lskrjc.png"
              )}
              alt="blue logo"
              fill
              className="object-contain"
            />
          </Link>
        </div>
        <div className="absolute -right-28 top-52">
          <div className="relative w-64 h-60">
            <Image
              src={attachCloudinaryPrefix(
                "v1738939996/tinywow_change_bg_photo_74696371_x39w0w.png"
              )}
              alt="sa"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-100 md:w-3/5 h-[100] rounded-lg bg-[#ffffff]">
        {children}
      </div>
    </div>
  );
}

export default Authlayout;
