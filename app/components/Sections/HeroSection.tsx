import Image from "next/image";
import Link from "next/link";
import Description from "../Text/Description";
import { poppins } from "../FontGoogle";
import SplitText from "../SplitText/SplitText";
import Squares from "../Squares/Squares";
import RotatingText from "../RotatingText/RotatingText";

export default function HeroSection() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="w-full h-full overflow-hidden flex flex-col md:flex-row items-center bg-cover bg-center pt-20 pb-0 md:pb-3 md:pt-14 bg-primary relative"
    >
      {/* 🔹 Background Squares */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Squares
          speed={0.2}
          squareSize={40}
          direction="diagonal"
          borderColor="#1e90d5"
          hoverFillColor="#00f5ff"
        />
      </div>

      {/* 🔹 Kolom kiri (Teks) */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center md:items-start px-6 sm:px-8 md:px-12 z-20 text-center md:text-left">
        <div className="max-w-xl mt-3">
          {/* Greeting */}
          <SplitText
            text="Hello, I'm Yusuf"
            className="text-xl sm:text-2xl md:text-2xl text-white/90 font-semibold"
            delay={80}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          />

          {/* Role Title */}
          <h1
            className={`${poppins.className} mt-2 font-extrabold text-white leading-tight`}
          >
            <span className="text-2xl sm:text-3xl md:text-4xl">I'm a</span>{" "}
            <RotatingText
              texts={["FrontEnd", "UI/UX Designer"]}
              mainClassName="px-2 sm:px-3 sm:my-3 text-3xl md:text-5xl bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.08}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={4000}
            />
            <span className="text-3xl mr-2 md:text-5xl bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-epurple bg-clip-text text-transparent animate-gradient cursor-pointer">
              Web Developer
            </span>{" "}
            <span className="text-2xl md:text-4xl mr-2">and</span>{" "}
            <span className="text-3xl md:text-5xl bg-gradient-to-r from-aqua-lime via-aqua-hotpink to-aqua-cyan bg-clip-text text-transparent animate-gradient cursor-pointer">
              Graphic Design
            </span>
          </h1>

          {/* Description */}
          <div className="mt-3 md:mt-4">
            <Description />
          </div>

          {/* CTA + Socials */}
          <div className="mt-5 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <Link
              href="#contact"
              className="bg-secondary inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-md font-medium text-white hover:bg-indigo-500 transition w-full sm:w-auto"
            >
              Get In Touch
            </Link>

            {/* Social Links */}
            {/* <div className="flex items-center gap-3">
              <Link
                href="https://www.instagram.com/bambinaa_24/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-gradient-to-br from-ig-orange via-ig-pink to-ig-purple 
                text-white w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center transition"
              >
                <FaInstagram size={25} />
              </Link>

              <Link
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-fb-blue w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 
                text-white flex items-center justify-center transition"
              >
                <FaFacebook size={25} />
              </Link>

              <Link
                href="https://linkedin.com"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-linked-main text-white w-10 h-10 md:w-12 md:h-12 rounded-full 
                bg-white/10 flex items-center justify-center transition"
              >
                <FaLinkedinIn size={25} />
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      {/* 🔹 Kolom kanan (Gambar) */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-end md:justify-center items-center mt-10 md:mt-0">
        <div className="max-w-xs sm:max-w-sm md:max-w-lg w-full h-auto relative flex items-center justify-center py-6 md:py-0">
          {/* Glow belakang gambar */}
          <span
            aria-hidden
            className="absolute z-0 w-56 sm:w-72 md:w-64 h-56 sm:h-72 md:h-64 rounded-full bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-300 opacity-50 filter blur-3xl translate-y-6 sm:translate-y-24 transform scale-110 animate-gradient"
            style={{ mixBlendMode: "screen" }}
          />
          <span
            aria-hidden
            className="absolute z-0 w-72 sm:w-80 md:w-80 h-72 sm:h-80 md:h-80 rounded-full bg-gradient-to-r from-indigo-500 to-ig-pink opacity-50 filter blur-2xl translate-y-6 sm:translate-y-24 animate-gradient"
            style={{ mixBlendMode: "screen" }}
          />

          {/* Gambar utama */}
          <div className="relative z-10 max-w-sm w-full shadow-primary-glow top-8 md:top-10 md:-right-2">
            <Image
              src="/Png/HeroSec/Yusuf1.png"
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
