"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProjectCard from "../Cards/ProjectSection/ProjectCard";
import { poppins, robotoCondensed } from "../FontGoogle";

export default function ProjectSection() {
  return (
    <main
      id="projects"
      className="w-full py-16 px-6 md:px-20 bg-gradient-to-br from-[#001F3F] to-[#002B5B] flex flex-col justify-start items-start"
    >
      {/* Title */}
      <h1
        className={`${robotoCondensed.className} text-sm tracking-widest text-blue-300 font-semibold`}
      >
        MY WORK
      </h1>
      <h1
        className={`${poppins.className} text-3xl md:text-4xl font-bold text-white mt-2`}
      >
        RECENT PROJECT
      </h1>
      <p className="text-xs text-red-500">
        *This project is for demo purposes only, not a real project. The real
        project is still under development.
      </p>

      {/* Slider Section */}
      <section className="w-full mt-10">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1, // 👈 Mobile
            },
            640: {
              slidesPerView: 1.5, // 👈 Small tablet
            },
            768: {
              slidesPerView: 2, // 👈 Tablet
            },
            1024: {
              slidesPerView: 3, // 👈 Desktop (tetap seperti semula)
            },
          }}
          className="w-full"
        >
          {/* Slides */}
          <SwiperSlide>
            <ProjectCard
              link="https://dapoer-ngebul.vercel.app/"
              image="/assets/particles/Dapoer-Ngebul.png"
              title="Dapoer Ngebul"
              desc="Mini Ecommerce, Shopping Cart"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              link="https://drive.google.com/drive/folders/1sbEZ_MzujtVfzcrmqci6WN4TzS4ibe7_?usp=sharing"
              image="/assets/particles/Project-02.jpeg"
              title="Better Together Boarding"
              desc="Desain Graphic, UI/UX Website, Logo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              image="/assets/particles/MiniEcommers.png"
              title="Mini eCommerce Website"
              desc="Online Store, Shopping Cart"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              image="/assets/particles/Blog.png"
              title="Blog Website"
              desc="Personal Blog, Articles"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              image="/assets/particles/Booking.png"
              title="Booking Website"
              desc="Hotel Booking, Reservations"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              image="/assets/particles/Portofolio.png"
              title="Portfolio Website"
              desc="Showcase, Personal Portfolio"
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </main>
  );
}
