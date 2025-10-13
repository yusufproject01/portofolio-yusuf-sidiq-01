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
      className="w-full h-full flex items-center bg-cover bg-center pt-14 bg-primary"
      // style={{ backgroundImage: "url('/Img/HeroSec/Bg-HeroSection.png')" }}
    >
      {/* Tryng BG */}
      <div className="absolute top-0 left-0 w-full h-full ">
        <Squares
          speed={0.2}
          squareSize={40}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#1e90d5"
          hoverFillColor="#00f5ff"
        />
      </div>

      {/* Left column: texts + CTA + socials */}
      <div className="w-1/2 h-full flex flex-col justify-center items-start px-12 z-20">
        <div className="max-w-xl">
          {/* greeting */}
          <SplitText
            text="Hello, I'm Yusuf"
            className="text-2xl text-white/90 font-semibold text-center"
            delay={80}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          {/* big role */}
          <h1
            className={`${poppins.className} mt-2 font-extrabold text-white leading-tight`}
          >
            <span className="text-3xl sm:text-4xl">I'm a</span>
            {"  "}
            {/* <span className="text-4xl sm:text-6xl bg-gradient-to-r from-ig-purple via-ig-pink to-ig-orange bg-clip-text text-transparent animate-gradient cursor-pointer">
              Fullstack
            </span>{" "} */}
            <RotatingText
              texts={["FrontEnd", "BackEnd", "FullStack"]}
              mainClassName="px-2 sm:px-2 md:px-3 text-5xl bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-1 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.08}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={4000}
            />
            <span className="text-4xl sm:text-5xl bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-epurple bg-clip-text text-transparent animate-gradient cursor-pointer">
              WebDev
            </span>{" "}
            <span className="text-3xl sm:text-4xl"> and</span>{" "}
            <span className="text-4xl sm:text-5xl bg-gradient-to-r from-aqua-lime via-aqua-hotpink to-aqua-cyan bg-clip-text text-transparent animate-gradient cursor-pointer">
              UI/UX Design
            </span>{" "}
          </h1>

          {/* description (added by me) */}
          <Description />

          {/* CTA + socials */}
          <div className="mt-2 flex items-center gap-4">
            <Link
              href="#contact"
              className="bg-secondary inline-flex items-center gap-2 rounded-md px-5 py-3 text-md font-medium text-white hover:bg-indigo-500 transition"
            >
              Get In Touch
            </Link>

            <div className="flex items-center gap-3 ml-2">
              {/* Instagram */}
              <Link
                href="https://www.instagram.com/bambinaa_26/"
                aria-label="bambinaa_26"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-gradient-to-br from-ig-orange via-ig-pink to-ig-purple w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10z" />
                  <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zM17.5 6.5a1 1 0 100 2 1 1 0 000-2z" />
                </svg>
              </Link>

              {/* Facebook */}
              <Link
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-fb-blue w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.2V12h2.2V9.8c0-2.2 1.3-3.4 3.3-3.4.95 0 1.95.17 1.95.17v2.1h-1.08c-1.06 0-1.39.66-1.39 1.33V12h2.36l-.38 2.9h-1.98v7A10 10 0 0022 12z" />
                </svg>
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://linkedin.com"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-gradient-to-br from-linked-dark via-linked-blue to-linked-light w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.36 8.98h4.28V24H.36zM8.98 8.98h4.11v2.05h.06c.57-1.08 1.97-2.22 4.05-2.22 4.33 0 5.13 2.85 5.13 6.55V24h-4.28v-7.2c0-1.72-.03-3.93-2.4-3.93-2.4 0-2.77 1.87-2.77 3.8V24H8.98z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Right column: image + glow */}
      <div className="w-1/2 h-full flex flex-col justify-end items-center">
        <div className="max-w-lg w-full h-auto relative flex items-center justify-center py-6">
          {/* Glow / light effect behind the image */}
          <span
            aria-hidden
            className="absolute z-0 w-64 h-64 rounded-full bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-300 opacity-50 filter blur-3xl translate-y-6 transform scale-110 animate-gradient"
            style={{ mixBlendMode: "screen" }}
          />

          {/* Subtle second halo for depth */}
          <span
            aria-hidden
            className="absolute z-0 w-80 h-80 rounded-full bg-gradient-to-r from-indigo-500 to-ig-pink opacity-50 filter blur-2xl translate-y-6 animate-gradient"
            style={{ mixBlendMode: "screen" }}
          />
          <div className="relative z-10 max-w-sm w-full -top-2 -right-4 shadow-primary-glow">
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
