import { SVGProps } from "react";
import { Icontypes } from "./types";

type prop = Icontypes & SVGProps<SVGSVGElement>;
export function Home({ width, height, inheritColor, color, ...props }: prop) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={width || "1em"}
      height={height || "1em"}
      {...props}
    >
      <path
        fill={inheritColor ? "inheriti" : color ? color : "currentColor"}
        d="m8 .5l-8 8L1.5 10L3 8.5V15h4v-3h2v3h4V8.5l1.5 1.5L16 8.5zM8 7a1 1 0 1 1 0-2a1 1 0 0 1 0 2"
      ></path>
    </svg>
  );
}
