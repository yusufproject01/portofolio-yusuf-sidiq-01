import { FaDocker, FaFigma, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import LogoLoop from "../LogoLoop/LogoLoop";

export default function Services() {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <FaNodeJs />, title: "NodeJS", href: "https://react.dev" },
    { node: <FaDocker />, title: "Docker", href: "https://react.dev" },
    {
      node: <BiLogoPostgresql />,
      title: "PostgreSQL",
      href: "https://react.dev",
    },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    {
      node: <FaFigma />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
  ];

  // Alternative with image sources
  const imageLogos = [
    {
      src: "/logos/company1.png",
      alt: "Company 1",
      href: "https://company1.com",
    },
    {
      src: "/logos/company2.png",
      alt: "Company 2",
      href: "https://company2.com",
    },
    {
      src: "/logos/company3.png",
      alt: "Company 3",
      href: "https://company3.com",
    },
  ];

  return (
    <main
      id="services"
      className="w-full h-auto py-6 bg-tertiary flex flex-col items-center justify-center"
    >
      {/* frontend */}
      {/* <section className="max-w-7xl w-full px-5 flex items-center justify-around gap-x-4 mb-8">
        <div className="flex flex-col justify-center items-center gap-y-3 hover:scale-110 transition-all duration-300 ease-in-out  hover:cursor-pointer">
          <FaFigma
            size={60}
            className="text-linked-light hover:text-ig-pink transform ease-in-out duration-300"
          />
          <h1 className={`${poppins.className} text-2xl text-white`}>Figma</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-3 hover:scale-110 transition-all duration-300 ease-in-out  hover:cursor-pointer">
          <FaReact
            size={60}
            className="text-linked-light hover:text-ig-pink transform ease-in-out duration-300"
          />
          <h1 className={`${poppins.className} text-2xl text-white`}>
            ReactJS
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-3 hover:scale-110 transition-all duration-300 ease-in-out  hover:cursor-pointer">
          <SiTypescript
            size={60}
            className="text-linked-light hover:text-ig-pink transform ease-in-out duration-300"
          />
          <h1 className={`${poppins.className} text-2xl text-white`}>
            Typescript
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-3 hover:scale-110 transition-all duration-300 ease-in-out hover:cursor-pointer">
          <FaNodeJs
            size={60}
            className="text-linked-light hover:text-ig-pink transform ease-in-out duration-300"
          />
          <h1 className={`${poppins.className} text-2xl text-white`}>NodeJS</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-3 hover:scale-110 transition-all duration-300 ease-in-out  hover:cursor-pointer">
          <BiLogoPostgresql
            size={60}
            className="text-linked-light hover:text-ig-pink transform ease-in-out duration-300"
          />
          <h1 className={`${poppins.className} text-2xl text-white`}>
            PostgreSQL
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-3 hover:scale-110 transition-all duration-300 ease-in-out  hover:cursor-pointer">
          <SiMongodb
            size={60}
            className="text-linked-light hover:text-ig-pink transform ease-in-out duration-300"
          />
          <h1 className={`${poppins.className} text-2xl text-white`}>
            MongoDB
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-3 hover:scale-110 transition-all duration-300 ease-in-out  hover:cursor-pointer">
          <SiPrisma
            size={60}
            className="text-linked-light hover:text-ig-pink transform ease-in-out duration-300"
          />
          <h1 className={`${poppins.className} text-2xl text-white`}>Prisma</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-3 hover:scale-110 transition-all duration-300 ease-in-out  hover:cursor-pointer">
          <FaDocker
            size={60}
            className="text-linked-light hover:text-ig-pink transform ease-in-out duration-300"
          />
          <h1 className={`${poppins.className} text-2xl text-white`}>Docker</h1>
        </div>
      </section> */}
      <div
        // style={{ height: "200px", position: "relative", overflow: "hidden" }}
        className="w-full h-full relative overflow-x-hidden text-linked-light"
      >
        <LogoLoop
          logos={techLogos}
          speed={40}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#052e4e"
          ariaLabel="Technology partners"
        />
      </div>
    </main>
  );
}
