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
    "I build web applications with a focus on user experience and performance. I combine best practices in frontend and backend development to create aesthetically pleasing yet functional interfaces. My expertise includes React/Next.js, responsive design, and performance optimization to ensure apps run fast across a wide range of devices.";

  const words = text.split(" ");

  return (
    <p
      className={`${inter.className} mt-4 text-base sm:text-lg text-justify leading-relaxed`}
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
