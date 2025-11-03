import { FaDocker, FaFigma, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import LogoLoop from "../LogoLoop/LogoLoop";

export default function ServicesSlide() {
  const techLogos = [
    {
      node: <SiReact className="w-8 h-8 md:w-12 md:h-12" />,
      title: "React",
      href: "https://react.dev",
    },
    {
      node: <FaNodeJs className="w-8 h-8 md:w-12 md:h-12" />,
      title: "NodeJS",
      href: "https://react.dev",
    },
    {
      node: <FaDocker className="w-8 h-8 md:w-12 md:h-12" />,
      title: "Docker",
      href: "https://react.dev",
    },
    {
      node: <BiLogoPostgresql className="w-8 h-8 md:w-12 md:h-12" />,
      title: "PostgreSQL",
      href: "https://react.dev",
    },
    {
      node: <SiNextdotjs className="w-8 h-8 md:w-12 md:h-12" />,
      title: "Next.js",
      href: "https://nextjs.org",
    },
    {
      node: <SiTypescript className="w-8 h-8 md:w-12 md:h-12" />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss className="w-8 h-8 md:w-12 md:h-12" />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    {
      node: <FaFigma className="w-8 h-8 md:w-12 md:h-12" />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
  ];

  return (
    <main className="w-full h-auto py-4 md:py-6 bg-tertiary flex flex-col items-center justify-center">
      <div className="w-full h-full relative overflow-x-hidden text-linked-light">
        <LogoLoop
          logos={techLogos}
          speed={28}
          direction="right"
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
