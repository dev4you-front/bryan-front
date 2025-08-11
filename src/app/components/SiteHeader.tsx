"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";

function classNames(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

interface NavLinkConfig {
  href: string;
  label: string;
}

export default function SiteHeader(): JSX.Element {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const headerTitle = useMemo((): string => {
    if (pathname === "/") return "ACCUEIL";
    if (pathname.startsWith("/formations-sport")) return "PATHOLOGIES SPORTIVES ET SPRINT";
    if (pathname.startsWith("/formations-neuro")) return "TROUBLES NEUROLOGIQUES";
    if (pathname.startsWith("/formations-vasculaire")) return "TROUBLES VASCULAIRES";
    if (pathname.startsWith("/blog")) return "BLOG";
    return "";
  }, [pathname]);

  const waveColor: string = pathname === "/" ? "#ffffff" : "#E0E0E0";

  const navLinks: NavLinkConfig[] = [
    { href: "/", label: "ACCUEIL" },
    { href: "/formations-sport", label: "PATHOLOGIES SPORTIVES ET SPRINT" },
    { href: "/formations-neuro", label: "TROUBLES NEUROLOGIQUES" },
    { href: "/formations-vasculaire", label: "TROUBLES VASCULAIRES" },
  ];

  const navLink = (href: string, label: string): JSX.Element => (
    <Link
      href={href}
      className={classNames(
        "hover:text-brandviolet transition uppercase font-semibold",
        pathname === href && "underline decoration-brandviolet decoration-3 font-bold"
      )}
      onClick={(): void => setOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className="bg-brandgray text-brandwhite pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center mb-8 relative">
          <Link href="/" className="text-2xl font-bold tracking-widest text-brandviolet uppercase">
            Bryan Littré
          </Link>
          {/* Hamburger */}
          <button
            aria-label="Ouvrir le menu"
            className={classNames("hamburger md:hidden", open && "active")}
            onClick={(): void => setOpen((v: boolean) => !v)}
          >
            <div className="hamburger-bar" />
            <div className="hamburger-bar" />
            <div className="hamburger-bar" />
          </button>
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <div key={link.href}>
                {navLink(link.href, link.label)}
              </div>
            ))}
          </div>
          {/* Mobile overlay */}
          {open && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center mobile-menu-overlay"
              onClick={(): void => setOpen(false)}
            >
              <nav className="space-y-8 text-center">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    {navLink(link.href, link.label)}
                  </div>
                ))}
              </nav>
            </div>
          )}
        </nav>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight uppercase text-brandwhite drop-shadow-lg">
          {headerTitle}
        </h1>
      </div>
      <div className="mt-4">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor={waveColor} offset="0%"></stop>
            </linearGradient>
          </defs>
          <path
            stroke="none"
            fill="url(#sw-gradient-0)"
            d="M0,40 C320,20 420,80 640,60 C860,40 960,20 1180,40 C1400,60 1400,40 1440,40 L1440,100 L0,100 Z"
          ></path>
        </svg>
      </div>
    </header>
  );
}

