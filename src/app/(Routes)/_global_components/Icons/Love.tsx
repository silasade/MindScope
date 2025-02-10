import { SVGProps } from "react";
import { Icontypes } from "./types";

type Prop = SVGProps<SVGSVGElement> & Icontypes;
export function Love({ width, height, color,inheritColor, ...props }: Prop) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={width || "1em"}
      height={height || "1em"}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M24.136 9.1c3.31-3.409 5.46-3.6 7.525-3.6c5.815 0 10.478 6.055 10.394 11.612c-.131 8.693-5.281 16.117-17.932 25.388C12.748 34.747 6.137 24.862 5.947 17.599C5.808 12.318 10.823 5.5 16.665 5.5c2.256 0 4.125.148 7.471 3.6"
        fill={inheritColor ? "inherit" : color ? color : "black"}
      ></path>
    </svg>
  );
}
