import Image from "next/image";
import React from "react";
import { Poppins, Inter, Roboto_Condensed } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export default function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="w-full h-screen flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/Img/HeroSec/HeroSec2.jpg')" }}
    >
      {/* Left column: texts + CTA + socials */}
      <div className="w-1/2 h-full flex flex-col justify-center items-start px-12">
        <div className="max-w-xl">
          {/* small bold name */}
          <div
            className={`${robotoCondensed.className} text-sm font-bold text-white/90`}
          >
            Yusuf Sidiq
          </div>

          {/* greeting */}
          <h2 className={`${inter.className} mt-3 text-2xl text-white/95`}>
            Hay! I'm Yusuf
          </h2>

          {/* big role */}
          <h1
            className={`${poppins.className} mt-2 text-5xl sm:text-6xl font-extrabold text-white leading-tight`}
          >
            I'm a Fullstack WebDev | and Designe
          </h1>

          {/* description (added by me) */}
          <p
            className={`${inter.className} mt-6 text-base sm:text-lg text-white/85 text-justify`}
          >
            Saya membuat aplikasi web yang fokus pada pengalaman pengguna dan
            performa. Saya menggabungkan praktik terbaik dalam frontend dan
            backend untuk membangun antarmuka yang estetis namun tetap
            fungsional. Keahlian saya termasuk React/Next.js, desain responsif,
            dan optimisasi performa agar aplikasi berjalan cepat di berbagai
            perangkat.
          </p>

          {/* CTA + socials */}
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-500 transition"
            >
              Get In Touch
            </a>

            <div className="flex items-center gap-3 ml-2">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-white"
                >
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10z" />
                  <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zM17.5 6.5a1 1 0 100 2 1 1 0 000-2z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-white"
                >
                  <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.2V12h2.2V9.8c0-2.2 1.3-3.4 3.3-3.4.95 0 1.95.17 1.95.17v2.1h-1.08c-1.06 0-1.39.66-1.39 1.33V12h2.36l-.38 2.9h-1.98v7A10 10 0 0022 12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-white"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.36 8.98h4.28V24H.36zM8.98 8.98h4.11v2.05h.06c.57-1.08 1.97-2.22 4.05-2.22 4.33 0 5.13 2.85 5.13 6.55V24h-4.28v-7.2c0-1.72-.03-3.93-2.4-3.93-2.4 0-2.77 1.87-2.77 3.8V24H8.98z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right column: image + glow */}
      <div className="w-1/2 h-full flex flex-col justify-end items-center">
        <div className="max-w-lg w-full h-auto relative flex items-center justify-center py-12">
          {/* Glow / light effect behind the image */}
          <span
            aria-hidden
            className="absolute z-0 w-64 h-64 rounded-full bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-300 opacity-40 filter blur-3xl transform scale-110"
            style={{ mixBlendMode: "screen" }}
          />

          {/* Subtle second halo for depth */}
          <span
            aria-hidden
            className="absolute z-0 w-80 h-80 rounded-full bg-gradient-to-r from-indigo-500 to-transparent opacity-20 filter blur-2xl -translate-y-4"
            style={{ mixBlendMode: "screen" }}
          />
          <div className="relative z-10 max-w-md w-full -top-8">
            <Image
              src="/Png/HeroSec/Yusuf.png"
              width={500}
              height={500}
              alt="Yusuf"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
