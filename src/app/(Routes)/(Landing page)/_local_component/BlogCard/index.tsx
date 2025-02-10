import React from "react";
import s from "./BlogCard.module.scss";
import Image from "next/image";
import { Love } from "@/app/(Routes)/_global_components/Icons/Love";
import { ArrowDown } from "@/app/(Routes)/_global_components/Icons/ArrowDown";

function BlogCard() {
  return (
    <div className={s.wrapper}>
      <div className={"relative w-100 h-64 rounded"}>
        <Image
          src={"/imgs/emptyImage.png"}
          alt="empty blog picture"
          fill
          className="object-cover"
        />
      </div>
      <div className={s.main}>
        <div className={s.content}>
          <div className={s.about}>
            <div className={s.profile}>
              <div className={s.profilePic}>
                <Image
                  src={"/imgs/emptyImage.png"}
                  width={30}
                  height={30}
                  alt="empty profile picture"
                />
              </div>
              <h5 className={s.name}>Silas Adegoke</h5>
            </div>
            <h6 className={s.time}>4mins ago</h6>
          </div>
          <div className={s.title}>
            <h3>
              The importance of branding: tips for building a personal brand
            </h3>
          </div>
          <div className={s.description}>
            <h5>
              The future tech: Implications and also trends, this is so very
              important. The future tech: Implications and also trends, this is
              so very important.
            </h5>
          </div>
        </div>
        <div className={s.reactTion}>
          <div className={s.react}>
            <Love width={30} height={20} />
            <p>1000</p>
          </div>

          <span className={s.link}>
            <ArrowDown className={s.arrow} width={35} height={30} color="white" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
