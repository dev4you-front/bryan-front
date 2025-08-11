"use client";

import Link from "next/link";
import { useMemo, useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { NavLinkConfig } from "@/types";

function classNames(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}


export default function SiteHeader(): JSX.Element {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const headerTitle = useMemo((): string => {
    if (pathname === "/") return "ACCUEIL";
    if (pathname.startsWith("/formations-")) return "MES FORMATIONS";
    if (pathname.startsWith("/blog")) return "BLOG";
    return "";
  }, [pathname]);

  const waveColor: string = pathname === "/" ? "#ffffff" : "#E0E0E0";

  const formationLinks = [
    { href: "/formations-sport", label: "COMMENT PRENDRE EN CHARGE LES LESIONS DES ISCHIO-JAMBIERS ?" },
    { href: "/formations-neuro", label: "TROUBLES NEUROLOGIQUES EN MSK : Réussir son bilan pour réussir son traitement" },
    { href: "/formations-vasculaire", label: "TROUBLES VASCULAIRES EN MSK : Trier pour savoir quand traiter" },
  ];

  const handleMouseEnterDropdown = (): void => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeaveDropdown = (): void => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const navLink = (href: string, label: string, isActive?: boolean): JSX.Element => (
    <Link
      href={href}
      className={classNames(
        "hover:text-brandviolet transition uppercase font-semibold",
        (isActive || pathname === href) && "underline decoration-brandviolet decoration-3 font-bold"
      )}
    >
      {label}
    </Link>
  );

  const isFormationActive = formationLinks.some(link => pathname === link.href);
  return (
    <header className="bg-brandgray text-brandwhite pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center mb-8 relative">
          <Link href="/" className="text-2xl font-bold tracking-widest text-brandviolet uppercase">
            Bryan Littré
          </Link>
          <div className="flex space-x-8 justify-center flex-1">
            {navLink("/", "ACCUEIL")}
            
            <div 
              className="relative"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnterDropdown}
              onMouseLeave={handleMouseLeaveDropdown}
            >
              <button
                className={classNames(
                  "hover:text-brandviolet transition uppercase font-semibold",
                  isFormationActive && "underline decoration-brandviolet decoration-3 font-bold"
                )}
              >
                MES FORMATIONS
                <svg 
                  className="inline-block ml-1 w-3 h-3 transition-transform duration-200" 
                  style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {isDropdownOpen && (
                <div 
                  className="absolute top-full left-0 w-[520px] bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  onMouseEnter={handleMouseEnterDropdown}
                  onMouseLeave={handleMouseLeaveDropdown}
                >
                  {formationLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={classNames(
                        "block px-4 py-2 text-gray-800 hover:bg-brandviolet hover:text-white transition uppercase font-semibold text-xs whitespace-nowrap",
                        pathname === link.href && "bg-brandviolet text-white"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {navLink("/blog", "BLOG")}
              </div>
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

