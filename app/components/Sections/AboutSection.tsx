"use client";

import { inter, robotoCondensed } from "../FontGoogle";
import Lanyard from "../Lanyard/Lanyard";
import CountUp from "../CountUp/CountUp";
import TextType from "../Text/TextType/TextType";
import { useEffect, useState } from "react";

export default function AboutSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // jalankan sekali di awal
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main
      id="about"
      className="w-full min-h-96 h-auto md:h-[35rem] shadow-sm py-10 px-6 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0 bg-primary"
    >
      {/* 🔹 Kolom Kiri: Lanyard (3D) */}
      <section className="w-full md:w-1/3 h-64 sm:h-56 md:h-full border border-slate-300 rounded-xl shadow-md overflow-hidden bg-white flex justify-center items-center">
        <Lanyard
          fov={isMobile ? 25 : 10} // 🔹 ubah FOV saat mobile
          position={[0, 0, 29]}
          gravity={[0, -40, 0]}
          transparent={true}
        />
      </section>

      {/* 🔹 Kolom Kanan: Teks & Statistik */}
      <section className="w-full md:w-2/3 h-full flex flex-col justify-start items-center md:items-start px-2 sm:px-6 text-center md:text-left">
        {/* Title */}
        <h1
          className={`${robotoCondensed.className} text-xl sm:text-2xl shadow shadow-slate-200 cursor-pointer font-bold border border-slate-200 rounded-sm p-2 text-slate-200 animate-gradient`}
        >
          AboutMe
        </h1>

        {/* Sub Judul */}
        <h1
          className={`${robotoCondensed.className} mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold text-white`}
        >
          I Am Available for
          <span className="text-neon-cyan"> Full-Stack Web Development </span>
          And
          <span className="text-aqua-hotpink"> UI/UX Design</span>
        </h1>

        {/* Deskripsi */}
        <div className="mt-4 text-xs sm:text-lg text-white/90">
          <TextType
            text={[
              // "I build web applications with a focus on user experience and performance. I combine best practices in frontend and backend development to create aesthetically pleasing yet functional interfaces. My expertise includes React/Next.js, responsive design, and performance optimization to ensure apps run fast across a wide range of devices.",
              "Halo! Saya Yusuf Sidiq, Seorang Fullstack Web Developer yang berkomitmen membantu UMKM naik kelas melalui digitalisasi. Saya membangun website yang cepat, modern, dan mudah digunakan dengan teknologi terkini seperti React, Next.js dan Typescript. Semuanya dengan harga yang terjangkau untuk pelaku usaha kecil dan menengah. Sebagai bagian dari gerakan #GoDigital, saya ingin memastikan setiap UMKM memiliki akses ke website profesional yang bisa meningkatkan kepercayaan pelanggan dan memperluas jangkauan bisnis secara online. Saya juga memanfaatkan teknologi AI secara efisien untuk mempercepat proses pengembangan tanpa mengorbankan kualitas hasil akhir.",
            ]}
            typingSpeed={90}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>

        {/* Statistik */}
        <div
          className={`${inter.className} mt-4 flex justify-center md:justify-start items-center gap-3 sm:gap-4`}
        >
          {/* Google Review */}
          <div className="flex flex-col items-center justify-center gap-y-1 px-3 sm:px-4 py-2 sm:py-3 font-medium shadow-sm text-white border border-tertiary rounded-md bg-tertiary/80 w-28   sm:w-32">
            <h1 className="text-2xl sm:text-4xl">
              <CountUp
                from={0}
                to={15}
                separator=","
                direction="up"
                duration={2.5}
                className="count-up-text"
              />
              +
            </h1>
            <h1 className="text-[10px]">Google Review</h1>
          </div>

          {/* Experience */}
          <div className="flex flex-col items-center justify-center gap-y-1 px-3 sm:px-4 py-2 sm:py-3 font-medium shadow-sm text-white border border-tertiary rounded-md bg-tertiary/80 w-28   sm:w-32">
            <h1 className="text-2xl sm:text-4xl">
              <CountUp
                from={0}
                to={3}
                separator=","
                direction="up"
                duration={2.5}
                className="count-up-text"
              />
              +
            </h1>
            <h1 className="text-[10px]">Years Experience</h1>
          </div>

          {/* Projects Done */}
          <div className="flex flex-col items-center justify-center gap-y-1 px-3 sm:px-4 py-2 sm:py-3 font-medium shadow-sm text-white border border-tertiary rounded-md bg-tertiary/80 w-28   sm:w-32">
            <h1 className="text-2xl sm:text-4xl">
              <CountUp
                from={0}
                to={5}
                separator=","
                direction="up"
                duration={2.5}
                className="count-up-text"
              />
              +
            </h1>
            <h1 className="text-[10px]">Projects Done</h1>
          </div>
        </div>
      </section>
    </main>
  );
}
