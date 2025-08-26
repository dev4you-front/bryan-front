"use client";

import { Formation } from "@/types";

interface FormationSectionProps {
  formation: Formation;
  children?: React.ReactNode; // Pour le carrousel ou autre contenu spécifique
}

export default function FormationSection({ formation, children }: FormationSectionProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      {formation.title && formation.title.trim().length > 0 ? (
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 uppercase tracking-wide">
          {formation.title}
        </h2>
      ) : null}
      <p className="text-lg text-gray-700 mb-6 text-center">{formation.description}</p>
      
      {/* Contenu spécifique (vidéo ou carrousel) */}
      <div className="w-full max-w-4xl mb-6">
        {children ? (
          children
        ) : formation.video ? (
          <div className="w-full rounded-xl shadow aspect-video overflow-hidden">
            <iframe
              src={formation.video}
              title={formation.title && formation.title.trim().length > 0 ? formation.title : "video"}
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
    </div>
  );
}