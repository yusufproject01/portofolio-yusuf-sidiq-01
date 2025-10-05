"use client";

import React from "react";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export default function Description() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const text =
    "Saya membuat aplikasi web yang fokus pada pengalaman pengguna dan performa. Saya menggabungkan praktik terbaik dalam frontend dan backend untuk membangun antarmuka yang estetis namun tetap fungsional. Keahlian saya termasuk React/Next.js, desain responsif, dan optimisasi performa agar aplikasi berjalan cepat di berbagai perangkat.";

  const words = text.split(" ");

  return (
    <p
      className={`${inter.className} mt-6 text-base sm:text-lg text-justify leading-relaxed`}
    >
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <span
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            className={`transition-all duration-300 ${
              hoverIndex !== null && index <= hoverIndex
                ? "bg-secondary bg-clip-text text-transparent"
                : "text-white/85"
            }`}
          >
            {word}
          </span>
          {index !== words.length - 1 ? " " : ""}
        </React.Fragment>
      ))}
    </p>
  );
}
