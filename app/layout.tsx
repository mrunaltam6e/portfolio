import type { Metadata } from "next";
import { Bricolage_Grotesque, Newsreader } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["500", "700", "800"], variable: "--font-display" });
const body = Newsreader({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Mrunal Vijay Tambe, Full Stack Developer",
  description: "Portfolio of Mrunal Vijay Tambe: full stack projects, experience and contact details.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} scroll-smooth`}>
      <body className="bg-white font-body text-[19px] leading-relaxed text-ink dark:bg-night dark:text-blush">{children}</body>
    </html>
  );
}
