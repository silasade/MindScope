"use client";
import React from "react";
import { InfinitySpin } from "react-loader-spinner";

function Loading() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <InfinitySpin
        width="200"
        color="#9747ff"
      />
    </div>
  );
}

export default Loading;
