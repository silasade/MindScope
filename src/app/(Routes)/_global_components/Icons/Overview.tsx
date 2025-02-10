import { SVGProps } from "react";

export function Overview(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="currentColor"
          d="M3.385 18q-.69 0-1.153-.462t-.463-1.153v-8.77q0-.69.463-1.152T3.384 6h8.77q.69 0 1.153.463t.462 1.153v8.769q0 .69-.462 1.153T12.154 18zm14.114 0q-.212 0-.356-.144T17 17.5v-11q0-.213.144-.356T17.501 6t.356.144T18 6.5v11q0 .213-.144.356t-.357.144m4.231 0q-.213 0-.356-.144t-.143-.356v-11q0-.213.144-.356T21.73 6t.356.144t.144.356v11q0 .213-.144.356q-.144.144-.357.144"
        ></path>
      </svg>
    )
  }
  