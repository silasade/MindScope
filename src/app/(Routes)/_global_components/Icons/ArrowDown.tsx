import { SVGProps } from "react";
import { Icontypes } from "./types";
type prop = SVGProps<SVGSVGElement> & Icontypes;
export function ArrowDown({
  width,
  height,
  color,
  inheritColor,
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
        d="M6 6v2h8.59L5 17.59L6.41 19L16 9.41V18h2V6z"
      ></path>
    </svg>
  );
}
