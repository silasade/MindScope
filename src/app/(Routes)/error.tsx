"use client"

import Link from "next/link";
function Error() {
  return (
    <div className="p-8 w-screen h-screen">
      <div
        className={`grid place-items-center h-full rounded-lg p-5 bg-[#3252F5] bg-contain bg-no-repeat bg-[url(https://res.cloudinary.com/dy9ry59fl/image/upload/v1740040276/website/Pattern_1_odzti1.webp)]  md:bg-[url(https://res.cloudinary.com/dy9ry59fl/image/upload/v1740040277/website/Pattern_2_i4dw7u.webp)]`}
      >
        <div className="flex flex-col gap-4 items-center text-center w-full  md:h-64 justify-center md:justify-end sm:w-30 bg-contain bg-no-repeat bg-center bg-[url(https://res.cloudinary.com/dy9ry59fl/image/upload/v1740039772/website/500_1_rcredl.webp)]">
          <h5 className="text-white text-[32px] leading-[40px]">
            Internal Server Error
          </h5>
          <p className="text-white text-[16px] leading-[24px]">
            We&lsquo;re working towards creating something better. We
            won&lsquo;t be long, Try again Later
          </p>
          <Link
            href="/"
            className=" flex items-center justify-center bg-white rounded-lg w-full sm:w-[269px] h-[56px] text-[#141414] text-[16px] font-semibold"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
