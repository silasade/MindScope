import React from "react";
import { Icontypes } from "./types";
function Menu({
  width = 20,
  height = 20,
  inheritColor = true,
  color = "",
}: Icontypes) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M4 6H20M4 12H20M4 18H20"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={inheritColor ? "inherit" : color ? color : "black"}
        ></path>
      </g>
    </svg>
  );
}

export default Menu;
