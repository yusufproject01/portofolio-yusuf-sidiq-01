import Image from "next/image";
import Link from "next/link";
import { inter } from "../../FontGoogle";

interface ProjectCardProps {
  image: string;
  title: string;
  desc: string;
}

export default function ProjectCard({ image, title, desc }: ProjectCardProps) {
  return (
    <div className="relative group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 p-2">
      <div className="w-full h-52 rounded-t-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-4">
        <h3
          className={`${inter.className} text-lg font-semibold text-gray-800`}
        >
          {title}
        </h3>
        <p className={`${inter.className} text-sm text-gray-500 mt-1`}>
          {desc}
        </p>
      </div>

      {/* Tombol panah di kanan bawah */}
      <Link
        href="/"
        className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
      >
        ➜
      </Link>
    </div>
  );
}
