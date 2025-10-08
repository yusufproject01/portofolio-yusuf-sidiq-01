import { FaDocker, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { robotoCondensed, poppins, inter } from "../FontGoogle";
import { SiMongodb, SiPrisma, SiTypescript } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoHtml5 } from "react-icons/io";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoTriangleSharp } from "react-icons/io5";

export default function Services() {
  return (
    <main className="w-full h-auto py-6 gap-y-6 bg-tertiary flex flex-col items-center justify-center">
      {/* frontend */}
      <h1 className={`${inter.className} text-4xl text-white underline mb-2`}>
        Frontend
      </h1>
      <section className="max-w-7xl w-full px-5 flex items-center justify-around gap-x-4 mb-8">
        <div className="flex flex-col justify-center items-center gap-y-3 hover:scale-110 transition-all duration-300 ease-in-out hover:cursor-pointer">
          <IoLogoHtml5
            size={70}
            className="text-linked-light hover:text-ig-pink transform ease-in-out duration-300"
          />
          <h1 className={`${poppins.className} text-2xl text-white`}>HTML5</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-3 hover:scale-110 transition-all duration-300 ease-in-out  hover:cursor-pointer">
          <RiTailwindCssFill
            size={70}
            className="text-linked-light hover:text-ig-pink transform ease-in-out duration-300"
          />
          <h1 className={`${poppins.className} text-2xl text-white`}>
            TailwindCSS
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-3 hover:scale-110 transition-all duration-300 ease-in-out  hover:cursor-pointer">
          <FaReact
            size={70}
            className="text-linked-light hover:text-ig-pink transform ease-in-out duration-300"
          />
          <h1 className={`${poppins.className} text-2xl text-white`}>
            ReactJS
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-3 hover:scale-110 transition-all duration-300 ease-in-out  hover:cursor-pointer">
          <SiTypescript
            size={70}
            className="text-linked-light hover:text-ig-pink transform ease-in-out duration-300"
          />
          <h1 className={`${poppins.className} text-2xl text-white`}>
            Typescript
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-3 hover:scale-110 transition-all duration-300 ease-in-out  hover:cursor-pointer">
          <RiNextjsFill
            size={70}
            className="text-linked-light hover:text-ig-pink transform ease-in-out duration-300"
          />
          <h1 className={`${poppins.className} text-2xl text-white`}>NextJS</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-3 hover:scale-110 transition-all duration-300 ease-in-out  hover:cursor-pointer">
          <FaGithub
            size={70}
            className="text-linked-light hover:text-ig-pink transform ease-in-out duration-300"
          />
          <h1 className={`${poppins.className} text-2xl text-white`}>Github</h1>
        </div>
      </section>
      {/* end frontend */}
      {/* backend */}
      <h1 className={`${inter.className} text-4xl text-white underline mb-2`}>
        Backend
      </h1>
      <section className="max-w-7xl w-full px-5 flex items-center justify-around gap-x-4">
        <div className="flex flex-col justify-center items-center gap-y-3 hover:scale-110 transition-all duration-300 ease-in-out hover:cursor-pointer">
          <FaNodeJs
            size={70}
            className="text-linked-light hover:text-ig-pink transform ease-in-out duration-300"
          />
          <h1 className={`${poppins.className} text-2xl text-white`}>NodeJS</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-3 hover:scale-110 transition-all duration-300 ease-in-out  hover:cursor-pointer">
          <BiLogoPostgresql
            size={70}
            className="text-linked-light hover:text-ig-pink transform ease-in-out duration-300"
          />
          <h1 className={`${poppins.className} text-2xl text-white`}>
            PostgreSQL
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-3 hover:scale-110 transition-all duration-300 ease-in-out  hover:cursor-pointer">
          <SiMongodb
            size={70}
            className="text-linked-light hover:text-ig-pink transform ease-in-out duration-300"
          />
          <h1 className={`${poppins.className} text-2xl text-white`}>
            MongoDB
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-3 hover:scale-110 transition-all duration-300 ease-in-out  hover:cursor-pointer">
          <SiPrisma
            size={70}
            className="text-linked-light hover:text-ig-pink transform ease-in-out duration-300"
          />
          <h1 className={`${poppins.className} text-2xl text-white`}>Prisma</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-3 hover:scale-110 transition-all duration-300 ease-in-out  hover:cursor-pointer">
          <IoTriangleSharp
            size={70}
            className="text-linked-light hover:text-ig-pink transform ease-in-out duration-300"
          />
          <h1 className={`${poppins.className} text-2xl text-white`}>Vercel</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-3 hover:scale-110 transition-all duration-300 ease-in-out  hover:cursor-pointer">
          <FaDocker
            size={70}
            className="text-linked-light hover:text-ig-pink transform ease-in-out duration-300"
          />
          <h1 className={`${poppins.className} text-2xl text-white`}>Docker</h1>
        </div>
      </section>
    </main>
  );
}
