import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Specify weights if needed
  display: "swap",
});

export const metadata: Metadata = {
  description: "Exploring Everything, One Post at a Time",
  title: {
    template: "%s | MindScope",
    default: "MindScope",
  },
};
export const viewport = {
  themeColor: "#ffffff", // Use a valid hex color (e.g., white)
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light" />
      </head>
      <body className={`${roboto.variable} antialiased`}>{children}</body>
    </html>
  );
}
