import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import SiteHeader from "./components/SiteHeader";

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
export const metadata: Metadata = {
  title: "Bryan Littré",
  description: "Physiothérapeute • Formateur • Conférencier",
};

// Header replaced by SiteHeader component

function Footer() {
  return (
    <footer className="bg-brandgray text-brandwhite pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-brandviolet uppercase">Contact</h3>
            <p className="text-brandgraylight">Email: contact@example.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-brandviolet uppercase">Réseaux sociaux</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-brandgraylight hover:text-brandviolet transition">IG</a>
              <a href="#" className="text-brandgraylight hover:text-brandviolet transition">IN</a>
              <a href="#" className="text-brandgraylight hover:text-brandviolet transition">TW</a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-brandviolet uppercase">Newsletter</h3>
            <p className="text-brandgraylight">Restez informé de nos dernières formations</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-brandviolet/20 text-center text-brandgraylight">
          © {new Date().getFullYear()} Bryan Littré. Tous droits réservés. Site réalisé par {" "}
          <a href="https://dev4you.fr" className="text-brandviolet hover:text-pink-400 transition">DEV4YOU</a>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased bg-[#E0E0E0]`}>
        <SiteHeader />
        <main className="pb-12 bg-[#E0E0E0]">
          {children}
        </main>
        <div className="bg-[#E0E0E0]">
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
