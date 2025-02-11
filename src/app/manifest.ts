import { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MindScope website",
    short_name: "MindScope",
    description:
      "MindScope is a blog platform that informs people around the world how the world works",
    start_url: "/",
    display: "browser",
    theme_color: "#ffff",
  };
}
