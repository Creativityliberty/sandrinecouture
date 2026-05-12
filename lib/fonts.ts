import { Poppins, Londrina_Outline } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const londrinaOutline = Londrina_Outline({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-londrina",
  display: "swap",
});
