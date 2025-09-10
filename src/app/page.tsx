"use client";

import { useRef, useEffect, useState } from "react";
import PhysiomapsSection from "./components/PhysiomapsSection";
import SectionWrapper from "./components/SectionWrapper";
import Image from "next/image";
import UpcomingFormationsList from "./components/UpcomingFormationsList";
import { getUpcomingFormations } from "@/data/upcomingFormations";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.5; // Définit le volume à 50%
    }
  }, []);

  // Play the video as soon as it is displayed
  useEffect(() => {
    if (showVideo && videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise && typeof playPromise.then === "function") {
        playPromise.catch(() => {
          // If autoplay is blocked, try muting then play
          try {
            if (videoRef.current) {
              videoRef.current.muted = true;
              void videoRef.current.play();
            }
          } catch {}
        });
      }
    }
  }, [showVideo]);

  const handlePlayVideo = () => {
    setShowVideo(true);
  };

  // Obtenir les 6 prochaines formations pour la page d'accueil
  const upcomingFormations = getUpcomingFormations(6);

  return (
    <div>
      {/* Hero vidéo immersif */}
      <section className="relative h-screen w-screen overflow-hidden left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] -mt-24">
        {!showVideo ? (
          /* Bannière image avec bouton play */
          <div className="relative w-full h-full">
            {/* Image desktop - visible à partir de md (tablette et plus) */}
            <Image
              src="/images/photo_banniere_desktop.png"
              alt="Bannière Bryan Littré"
              fill
              className="object-cover brightness-75 hidden md:block"
              style={{ objectPosition: 'center top' }}
              priority
            />
            {/* Image mobile/tablette - visible uniquement sur mobile et petite tablette */}
            <Image
              src="/images/photo_banniere_tel.jpg"
              alt="Bannière Bryan Littré"
              fill
              className="object-cover brightness-75 md:hidden"
              style={{ objectPosition: 'center top' }}
              priority
            />
            {/* Bouton play superposé */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={handlePlayVideo}
                className="group relative bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-8 transition-all duration-300 hover:scale-110 shadow-2xl"
                aria-label="Lancer la vidéo"
              >
                {/* Icône play */}
                <div className="w-16 h-16 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-white ml-1 group-hover:text-brandviolet transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                {/* Effet de pulsation */}
                <div className="absolute inset-0 rounded-full bg-white/10 animate-ping"></div>
              </button>
            </div>
          </div>
        ) : (
          /* Vidéo en arrière-plan */
          <div className="absolute inset-0 w-full h-full">
            <video
              ref={videoRef}
              src="/video/video_accueil.mp4"
              className="w-full h-full object-cover brightness-75"
              autoPlay
              playsInline
              controls
              preload="metadata"
            />
          </div>
        )}
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
              
              {/* Call-to-action avec design mis en avant */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-brandviolet rounded-lg p-6 mb-6 shadow-sm">
                <p className="text-lg font-medium text-gray-800 mb-4 text-center">
                  Tu veux savoir la date, l'heure et l'endroit de sa prochaine formation ? 
                  <span className="block mt-2 text-brandviolet font-semibold">
                    Suis le sur Instagram c'est là qu'il donne les informations.
                  </span>
                </p>
                
                <div className="text-center">
                  <a 
                    href="https://www.instagram.com/bryanlittre/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-brandviolet text-white font-bold px-6 py-2 rounded-lg shadow-lg hover:bg-purple-600 hover:shadow-xl transition-all duration-300 text-base uppercase tracking-wider transform hover:scale-105"
                  >
                    Instagram
                  </a>
                </div>
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

      {/* Section Prochaines formations */}
      <SectionWrapper maxWidth="7xl" className="bg-light-gray">
        <UpcomingFormationsList 
          formations={upcomingFormations}
          title="Mes prochaines formations"
          displayMode="table"
        />
      </SectionWrapper>
    </div>
  );
}