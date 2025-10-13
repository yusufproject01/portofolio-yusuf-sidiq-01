"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { poppins } from "@/app/components/FontGoogle";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Halaman yang menampilkan Navbar
  const withNavbar = ["/"];

  if (!withNavbar.includes(pathname)) return null;

  // 🔹 Deteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Deteksi section aktif menggunakan Intersection Observer
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 } // bagian 40% terlihat baru dianggap aktif
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav
      className={`w-full h-16 fixed top-0 left-0 z-50 flex items-center justify-between px-8 transition-all duration-400 ${
        isScrolled
          ? "bg-secondary text-white shadow-md shadow-white/40"
          : "bg-transparent text-white"
      }`}
    >
      {/* Logo */}
      <section>
        <div className="h-full px-2 flex items-center justify-center gap-x-2">
          <Image
            src={isScrolled ? "/logo/logo-dark.png" : "/logo/logo-light.png"}
            alt="Logo"
            width={40}
            height={40}
            className="object-contain h-full w-10"
          />
          <h1 className={`${poppins.className} text-2xl`}>Yusuf Sidiq</h1>
        </div>
      </section>

      {/* Menu */}
      <section className="h-full px-4 flex items-center justify-center gap-x-6">
        {[
          { name: "Home", id: "home", href: "#home" },
          { name: "About Me", id: "about", href: "#about" },
          { name: "Projects", id: "projects", href: "#projects" },
          { name: "Services", id: "services", href: "#services" },
        ].map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`text-lg font-medium hover:scale-105 transition-all ${
              activeSection === item.id
                ? "underline underline-offset-8 decoration-2 decoration-secondary"
                : ""
            }`}
          >
            {item.name}
          </Link>
        ))}

        <Link
          href="#contact"
          className={`text-lg inline-flex items-center gap-2 rounded-md px-5 py-3 text-md font-medium hover:bg-indigo-500 transition ${
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
