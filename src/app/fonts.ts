import { Gabarito, Goudy_Bookletter_1911 } from "next/font/google";
import localFont from "next/font/local";

export const gabarito = Gabarito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-gabarito",
  display: "swap",
});

export const goudy = Goudy_Bookletter_1911({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-goudy",
  display: "swap",
});

export const openRunde = localFont({
  src: "../../public/assets/fonts/hG3wmGmFwadB6X5XPVXkMlmLr8o.woff2",
  weight: "600",
  variable: "--font-open-runde",
  display: "swap",
});
