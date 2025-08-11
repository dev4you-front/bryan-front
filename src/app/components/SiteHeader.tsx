"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { NavLinkConfig } from "@/types";

function classNames(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}


export default function SiteHeader(): JSX.Element {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isFormationsDropdownOpen, setIsFormationsDropdownOpen] = useState(false);
  const [isMobileFormationsDropdownOpen, setIsMobileFormationsDropdownOpen] = useState(false);

  const headerTitle = useMemo((): string => {
    if (pathname === "/") return "ACCUEIL";
    if (pathname.startsWith("/formations-")) return "MES FORMATIONS";
    if (pathname.startsWith("/blog")) return "BLOG";
    return "";
  }, [pathname]);

  const waveColor: string = pathname === "/" ? "#ffffff" : "#E0E0E0";

  const navLinks: NavLinkConfig[] = [
    { href: "/", label: "ACCUEIL" },
    { 
      label: "MES FORMATIONS",
      subLinks: [
        { href: "/formations-sport", label: "ISCHIO ET SPRINT" },
        { href: "/formations-neuro", label: "TROUBLES NEUROLOGIQUES" },
        { href: "/formations-vasculaire", label: "TROUBLES VASCULAIRES" },
      ]
    },
    { href: "/blog", label: "BLOG" },
  ];

  const isFormationActive = pathname.startsWith("/formations-");

  const navLink = (href: string, label: string, isActive?: boolean): JSX.Element => (
    <Link
      href={href}
      className={classNames(
        "hover:text-brandviolet transition uppercase font-semibold",
        (isActive || pathname === href) && "underline decoration-brandviolet decoration-3 font-bold"
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
              <div key={link.href || link.label}>
                {link.subLinks ? (
                  <div 
                    className="relative"
                    onMouseEnter={(): void => setIsFormationsDropdownOpen(true)}
                    onMouseLeave={(): void => setIsFormationsDropdownOpen(false)}
                  >
                    <button
                      className={classNames(
                        "hover:text-brandviolet transition uppercase font-semibold flex items-center gap-1",
                        isFormationActive && "underline decoration-brandviolet decoration-3 font-bold"
                      )}
                    >
                      {link.label}
                      <svg 
                        className={classNames(
                          "w-4 h-4 transition-transform",
                          isFormationsDropdownOpen && "rotate-180"
                        )} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isFormationsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.href}
                            href={subLink.href!}
                            className={classNames(
                              "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brandviolet transition uppercase font-semibold",
                              pathname === subLink.href && "bg-gray-100 text-brandviolet font-bold"
                            )}
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  navLink(link.href!, link.label)
                )}
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
                  <div key={link.href || link.label}>
                    {link.subLinks ? (
                      <div>
                        <button
                          className={classNames(
                            "hover:text-brandviolet transition uppercase font-semibold",
                            isFormationActive && "underline decoration-brandviolet decoration-3 font-bold"
                          )}
                          onClick={(): void => setIsMobileFormationsDropdownOpen(!isMobileFormationsDropdownOpen)}
                        >
                          {link.label}
                        </button>
                        {isMobileFormationsDropdownOpen && (
                          <div className="mt-4 space-y-4">
                            {link.subLinks.map((subLink) => (
                              <div key={subLink.href}>
                                {navLink(subLink.href!, subLink.label)}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      navLink(link.href!, link.label)
                    )}
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

