import { Formation } from "@/types";

interface FormationSectionProps {
  formation: Formation;
  children?: React.ReactNode; // Pour le carrousel ou autre contenu spécifique
}

export default function FormationSection({ formation, children }: FormationSectionProps) {
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
        <a
          href="https://physio-learning.com/courses/formation-troubles-vasculaires/"
          className="inline-block bg-brandviolet text-white font-bold px-8 py-3 rounded-lg shadow hover:bg-purple-600 transition text-lg uppercase tracking-wider"
          target="_blank"
          rel="noopener noreferrer"
        >
          Accéder à la formation
        </a>
      </div>
    </div>
  );
}