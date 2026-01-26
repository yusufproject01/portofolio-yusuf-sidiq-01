"use client";

import Image from "next/image";
import { useState } from "react";
import { inter, poppins } from "../FontGoogle";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    title: "",
    fullName: "",
    email: "",
    whatsApp: "",
    clientType: "",
    company: "",
    projectType: "",
    projectDescription: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const {
      title,
      fullName,
      email,
      whatsApp,
      clientType,
      company,
      projectType,
      projectDescription,
    } = formData;

    // Validasi sederhana
    if (
      !title ||
      !fullName ||
      !email ||
      !whatsApp ||
      !clientType ||
      !projectType ||
      !projectDescription
    ) {
      alert("Mohon lengkapi semua form terlebih dahulu.");
      return;
    }

    const message = `
Halo Yusuf 👋
Saya tertarik untuk konsultasi project website.

*Data Klien*
Nama: ${title} ${fullName}
Email: ${email}
WhatsApp: ${whatsApp}
Tipe Klien: ${clientType}
Perusahaan: ${company || "-"}

*Detail Project*
Jenis Project: ${projectType}
Deskripsi Project:
${projectDescription}
    `;

    const whatsappUrl = `https://wa.me/62895364454719?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main
      id="contact"
      className="w-full min-h-screen py-0 sm:py-12 flex items-center justify-center relative"
    >
      {/* Background */}
      <Image
        src={"/assets/bg/bg-contact.jpg"}
        alt="bg"
        fill
        className="object-cover absolute"
      />

      {/* Container utama */}
      <section className="max-w-5xl w-full flex flex-col md:flex-row justify-center items-center rounded-sm shadow-sm overflow-hidden z-20">
        {/* Gambar */}
        <div className="w-full md:w-2/3 h-64 sm:h-[33rem] hover:brightness-75 transform duration-300 ease-in-out hover:scale-105 overflow-hidden">
          <Image
            src={"/assets/bg/contact-cover.png"}
            alt="Contact Us"
            width={600}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Form */}
        <div className="w-full md:w-1/3 py-6 px-4 sm:px-8 bg-white flex flex-col items-center justify-center shadow-sm text-sm">
          <h1 className={`${poppins.className} text-2xl font-medium mb-4`}>
            Contact Me!
          </h1>

          <form className="mx-auto gap-y-2 flex flex-col w-full">
            {/* Title */}
            <select
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Title
              </option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Ms">Ms</option>
            </select>

            {/* Full Name */}
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* WhatsApp */}
            <input
              type="tel"
              name="whatsApp"
              placeholder="WhatsApp Number"
              value={formData.whatsApp}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Client Type */}
            <select
              name="clientType"
              value={formData.clientType}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Client Type
              </option>
              <option value="Company">Company</option>
              <option value="Personal">Personal</option>
            </select>

            {/* Company Name */}
            <input
              type="text"
              name="company"
              placeholder="Company Name (optional)"
              value={formData.company}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Project Type */}
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Type of Project
              </option>
              <option value="Landing Page">Landing Page</option>
              <option value="Portfolio">Portfolio</option>
              <option value="Company Website">Company Website</option>
              <option value="Blog">Blog</option>
              <option value="Institute">Institute</option>
              <option value="Mini E-Commerce">Mini E-Commerce</option>
              <option value="E-Commerce">E-Commerce</option>
              <option value="Booking Website">Booking Website</option>
            </select>

            {/* Project Description */}
            <textarea
              name="projectDescription"
              placeholder="Project Description"
              value={formData.projectDescription}
              onChange={handleChange}
              className="h-20 border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </form>

          {/* Button */}
          <div className="w-full flex justify-center items-center pt-4">
            <button
              type="button"
              onClick={handleSubmit}
              className={`${inter.className} py-2 px-5 rounded-sm text-sm text-white font-medium bg-secondary hover:bg-ig-purple transform ease-in-out duration-300`}
            >
              Send Me!
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
