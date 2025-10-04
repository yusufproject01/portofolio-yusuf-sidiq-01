/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Contoh warna kustom — ganti sesuai pilihan Anda
        primary: "#062037",
        accent: "#f97316",
        "brand-100": "#f5f3ff",
      },
    },
  },
  plugins: [],
};
