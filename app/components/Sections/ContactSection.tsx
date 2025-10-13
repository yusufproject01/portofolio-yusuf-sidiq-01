import Image from "next/image";
import { inter, poppins } from "../FontGoogle";
import Link from "next/link";

export default function ContactSection() {
  return (
    <main
      id="contact"
      className="w-full h-screen py-12 flex items-center justify-center relative"
    >
      <Image
        src={"/assets/bg/bg-contact.jpg"}
        alt="bg"
        width={500}
        height={500}
        className="object-cover w-full h-full absolute"
      />
      <section
        className="max-w-5xl w-full h-full flex justify-center items-center 
      rounded-tl-sm rounded-bl-sm shadow-sm overflow-hidden z-20"
      >
        <div
          className="w-2/3 h-full hover:brightness-75 transform duration-300 ease-in-out
        hover:scale-105"
        >
          <Image
            src={"/assets/bg/contact-cover.png"}
            alt="Contact Us"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
        <div
          className="h-full py-6 px-8 bg-white flex flex-col items-center 
        justify-center z-20 shadow-sm rounded-tr-sm rounded-br-sm text-sm"
        >
          <h1 className={`${poppins.className} text-2xl font-medium`}>
            Contact Me!
          </h1>
          <form className="mx-auto gap-y-2 flex flex-col mt-3">
            {/* Input Option Mr/Mrs */}
            <select
              name="title"
              className="border border-gray-300 rounded-md px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue=""
            >
              <option value="" disabled>
                Title
              </option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Ms">Ms</option>
            </select>

            {/* Input Full Name */}
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="border border-gray-300 rounded-md px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Input Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border border-gray-300 rounded-md px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Input WhatsApp Number */}
            <input
              type="tel"
              name="whatsApp"
              placeholder="WhatsApp Number"
              className="border border-gray-300 rounded-md px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Input Option Company or Personal */}
            <select
              name="clientType"
              className="border border-gray-300 rounded-md px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue=""
            >
              <option value="" disabled>
                Client Type
              </option>
              <option value="company">Company</option>
              <option value="personal">Personal</option>
            </select>

            {/* Input Company Name */}
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              className="border border-gray-300 rounded-md px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Input Option Type Website */}
            <select
              name="projectType"
              className="border border-gray-300 rounded-md px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue=""
            >
              <option value="" disabled>
                Type of Project
              </option>
              <option value="landing-page">Landing Page</option>
              <option value="portfolio">Portfolio</option>
              <option value="company-website">Company Website</option>
              <option value="blog">Blog</option>
              <option value="institute">Institute</option>
              <option value="mini-ecommerce">Mini E-Commerce</option>
              <option value="ecommerce">E-Commerce</option>
              <option value="booking">Booking Website</option>
            </select>
            {/* Input Project Description */}
            <textarea
              name="projectDescription"
              placeholder="Project Description"
              className="h-20 border border-gray-300 rounded-md px-4 py-2  w-72 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </form>
          <div className="w-full flex justify-center items-center pt-2">
            <Link
              href={"/"}
              className={`${inter.className} py-2 px-5 rounded-sm text-sm text-white font-medium bg-secondary hover:bg-ig-purple transform ease-in-out duration-300`}
            >
              Send Me!
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
