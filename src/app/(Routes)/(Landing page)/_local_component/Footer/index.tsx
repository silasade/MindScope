"use client";
import React from "react";
import s from "./Footer.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Button, Input } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { Controller, useForm } from "react-hook-form";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "../../../_global_components/Icons";
import attachCloudinaryPrefix from "@/app/Hooks/_Cloudinary";
type dataType = {
  email: string;
};
function Footer() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<dataType>();
  const onSubmit = (data: dataType) => {
    console.log(data.email);
  };
  const pathName = usePathname();
  return (
    <div className={s.wrapper}>
      <div className={s.main}>
        <div className={s.logo}>
          <div className="relative w-[200px] h-[150px]">
            <Image
              src={attachCloudinaryPrefix(
                "v1738943198/greyLogo-removebg-preview_1_lskrjc.png"
              )}
              alt="blue logo"
              fill
              className="object-cover"
            />
          </div>
          <div className={`${s.social}`}>
            <Facebook
              color="#ffff"
              width={30}
              height={30}
              className="motion-safe:animate-bounce"
            />
            <Linkedin
              color="#ffff"
              width={30}
              height={30}
              className="motion-safe:animate-bounce delay-125"
            />
            <Twitter
              color="#ffff"
              width={30}
              height={30}
              className="motion-safe:animate-bounce delay-225"
            />
            <Instagram
              color="#ffff"
              width={30}
              height={30}
              className="motion-safe:animate-bounce delay-325"
            />
          </div>
        </div>
        <div className={`flex flex-row md:flex-col  gap-4`}>
          <Link className={clsx({ [s.active]: pathName === "/" })} href="/">
            Home
          </Link>
          <Link
            className={clsx({ [s.active]: pathName.includes("/About") })}
            href="/About"
          >
            About
          </Link>
          <Link
            className={clsx({ [s.active]: pathName.includes("/Blog") })}
            href="/Blog"
          >
            Blog
          </Link>
          <Link
            className={clsx({ [s.active]: pathName.includes("/Contact") })}
            href="/Contact"
          >
            Contact
          </Link>
        </div>
        <div className={s.newsletter}>
          <h2>Subscribe to our newsletter</h2>
          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
              }}
              render={({ field }) => (
                <Input
                  className={clsx({ [s.errorInput]: errors.email })}
                  placeholder="Enter your email"
                  suffix={<MailOutlined />}
                  {...field}
                />
              )}
            />
            {errors.email && (
              <span className={clsx(s.errorMessage)}>
                {errors.email.message}
              </span>
            )}
            <Button htmlType="submit" className={`${s.btn}`}>
              Submit
            </Button>
          </form>
        </div>
      </div>
      <div>&copy; {new Date().getFullYear()} All rights reserved</div>
    </div>
  );
}

export default Footer;
