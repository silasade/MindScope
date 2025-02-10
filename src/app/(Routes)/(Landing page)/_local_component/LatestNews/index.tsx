"use client"
import React from "react";
import s from "./latestNews.module.scss";
import BlogCard from "../BlogCard";
import { ArrowRight } from "@/app/(Routes)/_global_components/Icons";
import { useRouter } from "next/navigation";
function LatestNews() {
  const router=useRouter()
  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <h2>Latest News</h2>
        <span onClick={()=>router.push("/Blog")} className={s.icon}>
          <p>See all</p>
          <ArrowRight height={70} />
        </span>
      </div>
      <div className={s.main}>
        <BlogCard />

        <BlogCard />

        <BlogCard />
      </div>
    </div>
  );
}

export default LatestNews;
