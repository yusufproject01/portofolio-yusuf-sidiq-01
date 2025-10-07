import {
  Geist,
  Geist_Mono,
  Inter,
  Poppins,
  Roboto_Condensed,
} from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});
export const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
