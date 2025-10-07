"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  poppins,
  inter,
  robotoCondensed,
  geistSans,
} from "@/components/FontGoogle";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Halaman yang menampilkan Navbar
  const withNavbar = ["/"];

  // Jika halaman tidak termasuk daftar, jangan tampilkan navbar
  if (!withNavbar.includes(pathname)) return null;

  // Deteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full h-16 fixed top-0 left-0 z-50 flex items-center justify-between px-8 transition-all duration-400 ${
        isScrolled
          ? "bg-secondary text-white shadow-md shadow-white/40"
          : "bg-transparent text-white"
      }`}
    >
      <section>
        {/* Content left */}
        <div className="h-full px-2 flex items-center justify-center gap-x-2">
          {isScrolled ? (
            <Image
              src="/logo/logo-dark.png"
              alt="Logo"
              width={40}
              height={40}
              className="object-contain h-full w-10"
            />
          ) : (
            <Image
              src="/logo/logo-light.png"
              alt="Logo"
              width={40}
              height={40}
              className="object-contain h-full w-10"
            />
          )}

          <h1 className={`${poppins.className} text-2xl`}>Yusuf Sidiq</h1>
        </div>
      </section>
      <section className="h-full px-4 flex items-center justify-center gap-x-6">
        <Link href="#home" className="text-lg font-medium hover:scale-105">
          Home
        </Link>
        <Link href="#about" className="text-lg font-medium hover:scale-105">
          About Me
        </Link>
        <Link href="#projects" className="text-lg font-medium hover:scale-105">
          Projects
        </Link>
        <Link href="#services" className="text-lg font-medium hover:scale-105">
          Services
        </Link>
        <Link
          href="/"
          className={`text-lg  inline-flex items-center gap-2 rounded-md px-5 py-3 text-md font-medium hover:bg-indigo-500 transition ${
            isScrolled
              ? "bg-white text-primary hover:text-white"
              : "bg-secondary text-white"
          }`}
        >
          Let's Talk
        </Link>
      </section>
    </nav>
  );
}
