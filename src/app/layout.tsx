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
      <body className={`${roboto.variable} antialiased`}>{children}</body>
    </html>
  );
}
