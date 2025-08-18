import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import SiteHeader from "./components/SiteHeader";
import { SiteMetadata } from "@/types";
import EmailIcon from "./components/icons/EmailIcon";
import InstagramIcon from "./components/icons/InstagramIcon";
import LinkedInIcon from "./components/icons/LinkedInIcon";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
export const metadata: SiteMetadata & Metadata = {
  title: "Bryan Littré",
  description: "Physiothérapeute • Formateur • Conférencier",
  icons: {
    icon: "/next.svg",
    shortcut: "/next.svg",
    apple: "/next.svg",
  },
};

// Header replaced by SiteHeader component

function Footer() {
  return (
    <footer className="bg-brandgray text-brandwhite pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4 text-brandviolet uppercase">Contact</h3>
            <p className="text-brandgraylight flex items-center gap-2">
              <EmailIcon />
              bryanlittre.physio@gmail.com
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4 text-brandviolet uppercase">Réseaux sociaux</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="https://www.instagram.com/bryanlittre/" target="_blank" rel="noopener noreferrer" className="text-brandgraylight hover:text-brandviolet transition">
                <InstagramIcon />
              </a>
              <a href="https://www.linkedin.com/in/bryan-littre-465269143/" target="_blank" rel="noopener noreferrer" className="text-brandgraylight hover:text-brandviolet transition">
                <LinkedInIcon />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4 text-brandviolet uppercase">Newsletter</h3>
            <p className="text-brandgraylight">Restez informé de nos dernières formations</p>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-brandviolet/20 text-center text-brandgraylight">
          © {new Date().getFullYear()} Bryan Littré. Tous droits réservés. Site réalisé par {" "}
          <a href="https://dev4you.fr" className="text-brandviolet hover:text-pink-400 transition">DEV4YOU</a>
        </div>
      </div>
    </footer>
  );
}

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased bg-[#E0E0E0] flex flex-col min-h-screen overflow-x-hidden`}>
        <SiteHeader />
        <main className="pb-12 flex-grow bg-[#E0E0E0]">
          {children}
        </main>
        <div className="bg-[#E0E0E0] mb-[-1px]">
          <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <defs>
              <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
                <stop stopColor="#232323" offset="0%"></stop>
              </linearGradient>
            </defs>
            <path fill="url(#sw-gradient-1)" d="M0,40 C320,20 420,80 640,60 C860,40 960,20 1180,40 C1400,60 1400,40 1440,40 L1440,100 L0,100 Z"></path>
          </svg>
        </div>
        <Footer />
      </body>
    </html>
  );
}
