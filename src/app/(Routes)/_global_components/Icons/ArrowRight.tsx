import { SVGProps } from "react";
import { Icontypes } from "./types";

type prop = Icontypes & SVGProps<SVGSVGElement>;
export function ArrowRight({
  width,
  height,
  inheritColor,
  color,
  ...props
}: prop) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width || "1em"}
      height={height || "1em"}
      {...props}
    >
      <path
        fill={inheritColor ? "inherit" : color ? color : "black"}
        d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6z"
      ></path>
    </svg>
  );
}
