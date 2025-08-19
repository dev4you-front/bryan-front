"use client";

import { useRef, useEffect } from "react";
import ConfCarousel from "./components/ConfCarousel";
import PhysiomapsSection from "./components/PhysiomapsSection";
import SectionWrapper from "./components/SectionWrapper";
import { ConfItem } from "@/types";
import Image from "next/image";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.5; // Définit le volume à 50%
    }
  }, []);

  return (
    <div>
      {/* Hero vidéo immersif */}
      <section className="relative h-screen w-screen overflow-hidden left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] -mt-24">
        {/* Vidéo en arrière-plan */}
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            src="/video/video_accueil.mp4"
            className="w-full h-full object-cover brightness-75"
            controls
            preload="metadata"
            autoPlay
            loop
          />
        </div>
      </section>

      {/* Full-bleed hero (same rendu que body_top Twig) */}
      <section className="relative bg-white overflow-hidden w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-0">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 py-16">
            <div className="text-center md:text-left space-y-6">
              <div className="mb-8">
                <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight mb-4 text-gray-900">
                  Bryan Littré
                </h1>
                <p className="text-xl md:text-2xl text-brandviolet font-semibold mb-8">
                  Physiotherapeute • Formateur • Conférencier
                </p>
              </div>
              <p className="text-lg text-gray-800 leading-relaxed mb-6">À travers formations et conférences, Bryan Littré diffuse son expertise en physiothérapie sportive et ainsi que les affections neuromusculosquelettiques. Sa méthodologie articule connaissances scientifiques et applications pratiques, visant l'amélioration continue des pratiques professionnelles.</p>
              
              {/* Section CTA Instagram avec design distinct */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 text-center border-l-4 border-brandviolet shadow-sm">
                <p className="text-lg font-medium text-gray-800 mb-4 italic">
                  💡 Tu veux savoir la date et l'endroit de ma prochaine formation ?<br />
                  <span className="text-brandviolet font-semibold">Suis moi sur Instagram c'est là que je donne les informations.
                </p>
                <a 
                  href="https://www.instagram.com/bryanlittre/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-brandviolet to-purple-600 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg uppercase tracking-wider"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image 
                  src="/images/formation_neuro.jpeg" 
                  alt="Bryan Littré" 
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brandviolet rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
        {/* Wave to grey, inside white section to avoid black gap */}
        <div className="mt-4">
          <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <defs>
              <linearGradient id="sw-gradient-0-home" x1="0" x2="0" y1="1" y2="0">
                <stop stopColor="#E0E0E0" offset="0%"></stop>
              </linearGradient>
            </defs>
            <path fill="url(#sw-gradient-0-home)" d="M0,40 C320,20 420,80 640,60 C860,40 960,20 1180,40 C1400,60 1400,40 1440,40 L1440,100 L0,100 Z"></path>
          </svg>
        </div>
      </section>

      {/* Section Physiomaps */}
      <SectionWrapper maxWidth="7xl" className="bg-light-gray">
        <PhysiomapsSection />
      </SectionWrapper>
    </div>
  );
}