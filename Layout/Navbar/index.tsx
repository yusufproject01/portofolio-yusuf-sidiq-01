"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { poppins } from "@/app/components/FontGoogle";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

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

  // 🔹 Deteksi section aktif saat scroll
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
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navItems = [
    { name: "Home", id: "home", href: "#home" },
    { name: "About Me", id: "about", href: "#about" },
    { name: "Projects", id: "projects", href: "#projects" },
    { name: "Services", id: "services", href: "#services" },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      const offsetTop =
        section.getBoundingClientRect().top + window.scrollY - 80; // 80px tinggi navbar
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`w-full h-16 fixed top-0 left-0 z-50 flex items-center justify-between px-8 transition-all duration-400 ${
        isScrolled
          ? "bg-secondary text-white shadow-md shadow-white/40"
          : "bg-transparent text-white"
      }`}
    >
      {/* 🔹 Logo */}
      <section>
        <div className="h-full px-2 flex items-center justify-center gap-x-2">
          <Image
            src={isScrolled ? "/logo/logo-dark.png" : "/logo/logo-light.png"}
            alt="Logo"
            width={40}
            height={40}
            className="object-contain h-full w-8 sm:w-9 md:w-10"
          />
          <h1 className={`${poppins.className} text-xs sm:text-lg md:text-2xl`}>
            Yusuf Sidiq
          </h1>
        </div>
      </section>

      {/* 🔹 Menu Desktop */}
      <section className="h-full px-4 hidden md:flex items-center justify-center gap-x-6">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`text-lg font-medium pb-1 border-b-2 transition-all ${
              activeSection === item.id
                ? isScrolled
                  ? "border-white scale-105"
                  : "border-secondary scale-105"
                : "border-transparent hover:border-secondary"
            }`}
          >
            {item.name}
          </button>
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

      {/* 🔹 Menu Mobile */}
      <section className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(true)}
          className="text-2xl p-2 rounded-md focus:outline-none transition-all"
        >
          <FaBars />
        </button>

        {menuOpen && (
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          ></div>
        )}

        <motion.aside
          initial={{ x: "100%" }}
          animate={{ x: menuOpen ? 0 : "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className={`fixed top-0 right-0 h-full w-2/3 bg-primary text-white shadow-2xl flex flex-col items-center justify-center gap-6 z-50 ${poppins.className}`}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-3xl hover:scale-110 transition"
          >
            <FaTimes />
          </button>

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                handleNavClick(item.id);
                setMenuOpen(false);
              }}
              className={`text-lg font-medium pb-1 border-b-2 transition-all ${
                activeSection === item.id
                  ? "border-white scale-105"
                  : "border-transparent hover:border-white"
              }`}
            >
              {item.name}
            </button>
          ))}

          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className={`text-lg inline-flex items-center gap-2 rounded-md px-5 py-3 text-md font-medium hover:bg-indigo-500 transition ${
              isScrolled
                ? "bg-white text-primary hover:text-white"
                : "bg-secondary text-white"
            }`}
          >
            Let's Talk
          </Link>
        </motion.aside>
      </section>
    </nav>
  );
}
