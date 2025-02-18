"use client";
import { Button } from "antd";
import React from "react";
import Card from "../_local components/Card";
import { useRouter } from "next/navigation";

function Post() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4">
      <Button
        onClick={() => router.push("/Admin/post/CreatePost")}
        className="bg-[#10182f] text-white font-[500] text-[16px] w-32 self-end p-4"
      >
        Create blog
      </Button>
      <div className="flex gap-2 w-full flex-wrap">
        <Card name="New articles" stat="5" />
        <Card name="Total Draft" stat="5" />
        <Card name="Total articles" stat="5" />
      </div>
    </div>
  );
}

export default Post;
