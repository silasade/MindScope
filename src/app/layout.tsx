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
  title: "MindScope",
  description: "Exploring Everything, One Post at a Time",
  themeColor: "#3952f5",
};
export const Viewport = {};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>{children}</body>
    </html>
  );
}
