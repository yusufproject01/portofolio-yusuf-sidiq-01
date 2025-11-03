"use client";

import { inter, poppins, robotoCondensed } from "../FontGoogle";
import { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiAdobephotoshop,
  SiExpress,
} from "react-icons/si";

export default function ServicesSection() {
  type Category = "frontend" | "backend" | "uiux";
  const [active, setActive] = useState<Category>("frontend");

  const skills: Record<Category, { name: string; icon: React.ReactNode }[]> = {
    frontend: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Database Design", icon: <FaDatabase /> },
    ],
    uiux: [
      { name: "Figma", icon: <FaFigma /> },
      { name: "Adobe Photoshop", icon: <SiAdobephotoshop /> },
      { name: "Wireframing", icon: <FaFigma /> },
      { name: "Prototyping", icon: <FaFigma /> },
      { name: "User Research", icon: <FaFigma /> },
    ],
  };

  const renderSkills = () => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
      {skills[active].map((skill) => (
        <div
          key={skill.name}
          className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-xl shadow hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out"
        >
          <div className="text-3xl text-blue-500 mb-2">{skill.icon}</div>
          <p className="text-sm font-medium text-slate-700 text-center">
            {skill.name}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <main
      id="services"
      className="w-full flex flex-col justify-start items-center bg-tertiary py-12 px-6"
    >
      {/* ===== TITLE ===== */}
      <div className="text-center mb-10">
        <h1
          className={`${robotoCondensed.className} text-sm tracking-widest text-blue-300 font-semibold`}
        >
          MY SKILLS
        </h1>
        <h1
          className={`${poppins.className} text-4xl font-bold text-white mt-2`}
        >
          SERVICES
        </h1>
      </div>

      {/* ===== KONTEN UTAMA (navigasi + konten skill) ===== */}
      <div className="w-full flex flex-col md:flex-row justify-center items-start gap-6">
        {/* Navigasi */}
        <section className="w-full md:w-1/3 py-4 border bg-white flex flex-col justify-start items-center rounded-2xl shadow-sm">
          {(["frontend", "backend", "uiux"] as Category[]).map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`
                ${inter.className} w-full py-3 text-base font-medium border-b 
                border-slate-300 flex justify-center items-center transition-all duration-300 ease-in-out
                ${
                  active === category
                    ? "bg-blue-500 text-white shadow-md scale-105"
                    : "hover:text-blue-500 text-slate-700"
                }
              `}
            >
              {category === "frontend"
                ? "Front-End"
                : category === "backend"
                ? "Back-End"
                : "UI / UX"}
            </button>
          ))}
        </section>

        {/* Konten Skill */}
        <section className="w-full md:w-2/3 py-6 px-8 border bg-white rounded-2xl shadow-sm flex flex-col justify-start items-start transition-all duration-300">
          <h2 className="text-xl font-semibold text-slate-800 mb-6 capitalize">
            Skill{" "}
            {active === "frontend"
              ? "Front-End"
              : active === "backend"
              ? "Back-End"
              : "UI/UX"}
          </h2>
          {renderSkills()}
        </section>
      </div>
    </main>
  );
}
