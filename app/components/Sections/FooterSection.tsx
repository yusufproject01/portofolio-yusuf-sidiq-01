import Image from "next/image";
import { inter } from "../FontGoogle";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function FooterSection() {
  return (
    <footer className="w-full bg-white py-8 px-4 md:px-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-y-6">
        {/* Sosial Media */}
        <div className="flex justify-center md:justify-start items-center gap-4 w-full md:w-1/3">
          <Link
            href="https://www.instagram.com/bambinaa_24/"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-ig-orange via-ig-pink to-ig-purple 
                       text-white flex items-center justify-center transition-transform duration-300 hover:scale-110"
          >
            <FaInstagram size={22} />
          </Link>

          <Link
            href="https://facebook.com"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 text-white flex items-center justify-center transition-transform duration-300 hover:scale-110"
          >
            <FaFacebook size={22} />
          </Link>

          <Link
            href="https://linkedin.com"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-700 text-white flex items-center justify-center transition-transform duration-300 hover:scale-110"
          >
            <FaLinkedinIn size={22} />
          </Link>

          <a
            href="mailto:sidiqyusuf042@gmail.com"
            aria-label="Gmail"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-500 text-white flex items-center justify-center transition-transform duration-300 hover:scale-110"
          >
            <SiGmail size={22} />
          </a>
        </div>

        {/* Navigasi */}
        <div className="flex flex-col items-center justify-center gap-y-4 md:gap-x-8 w-full md:w-1/3">
          <nav
            className={`${inter.className} flex items-center gap-x-2 md:gap-x-6 text-sm font-medium text-black`}
          >
            <Link href={"/"}>Home</Link>
            <Link href={"#about"}>About</Link>
            <Link href={"#projects"}>Projects</Link>
            <Link href={"#services"}>Services</Link>
            <Link href={"#contact"}>Contact</Link>
          </nav>
        </div>

        {/* Logo */}
        <div className="flex justify-center items-center md:justify-end w-full md:w-1/3 gap-3">
          <Image
            src={"/logo/logo-light.png"}
            alt="Yusuf Sidiq"
            width={112}
            height={112}
            className="w-14 h-14 sm:w-28 sm:h-28"
          />
          <h1 className={`${inter.className} text-xl sm:text-2xl font-bold`}>
            Yusuf Sidiq
          </h1>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-6">
        <p className={`${inter.className} text-xs text-gray-500 mt-2 md:mt-0`}>
          © Yusuf Sidiq | 2025
        </p>
      </div>
    </footer>
  );
}
