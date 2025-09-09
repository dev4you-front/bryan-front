"use client";

import { Formation } from "@/types";

interface FormationSectionProps {
  formation: Formation;
  children?: React.ReactNode; // Pour le carrousel ou autre contenu spécifique
  ctaConfig?: {
    mainText: string;
    subText: string;
    buttonText: string;
    buttonLink: string;
  };
}

export default function FormationSection({ formation, children, ctaConfig }: FormationSectionProps) {
  // Configuration par défaut pour l'appel à l'action
  const defaultCtaConfig = {
    mainText: "Tu veux savoir la date, l'heure et l'endroit de sa prochaine formation ?",
    subText: "Suis le sur Instagram c'est là qu'il donne les informations.",
    buttonText: "Instagram",
    buttonLink: "https://www.instagram.com/bryanlittre/"
  };

  // Utiliser la configuration personnalisée ou celle par défaut
  const finalCtaConfig = ctaConfig || defaultCtaConfig;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 uppercase tracking-wide">
        {formation.title}
      </h2>
      <p className="text-lg text-gray-700 mb-6 text-center">{formation.description}</p>
      
      {/* Contenu spécifique (vidéo ou carrousel) */}
      <div className="w-full max-w-4xl mb-6">
        {children ? (
          children
        ) : formation.video ? (
          <div className="w-full rounded-xl shadow aspect-video overflow-hidden">
            <iframe
              src={formation.video}
              title={formation.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
            />
          </div>
        ) : null}
      </div>
      
      <div className="mt-8 text-center">
        {/* Call-to-action avec design mis en avant */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-brandviolet rounded-lg p-6 mt-8 shadow-sm">
          <p className="text-lg font-medium text-gray-800 mb-4 text-center">
            {finalCtaConfig.mainText}
            <span className="block mt-2 text-brandviolet font-semibold">
              {finalCtaConfig.subText}
            </span>
          </p>
          
          <div className="text-center">
            <a 
              href={finalCtaConfig.buttonLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-brandviolet text-white font-bold px-6 py-2 rounded-lg shadow-lg hover:bg-purple-600 hover:shadow-xl transition-all duration-300 text-base uppercase tracking-wider transform hover:scale-105"
            >
              {finalCtaConfig.buttonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}