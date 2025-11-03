import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Layout/Navbar";
import { geistMono, geistSans } from "@/app/components/FontGoogle";

export const metadata: Metadata = {
  title: "Portofolio | Yusuf Sidiq",
  description:
    "Portofolio Frontend | UI/UX Design | Graphic Design | Web Development",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
