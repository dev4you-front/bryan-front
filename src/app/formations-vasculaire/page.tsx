import ConfCarousel from "../components/ConfCarousel";
import { Formation } from "@/types";
import { ConfItem } from "@/types";

export default function FormationsVasculaire() {
  const videos: ConfItem[] = [
    {
      src: "https://www.youtube.com/embed/wJkIQ_0tExc",
      title: "Troubles vasculaires : Trier pour savoir quand traiter ! - Nouvelle présentation",
    },
    {
      src: "https://www.youtube.com/embed/O0bjv3zgy2Q",
      title: "Bryan LITTRE et Matthieu GONZALES BANDRES - Les blessures en course et réflexion autour d'une étude",
    },
  ];

  const formations: Formation[] = [
    {
      title: "Troubles vasculaires : Trier pour savoir quand traiter !",
      description:
        "Formation accessible en e-learning sur la plate-forme Physio-learning. Actuellement : V2.",
      video: "", // Vidéo maintenant gérée par le carrousel
    },
  ];

  return (
    <section className="py-12 bg-[#E0E0E0]">
      <div className="max-w-5xl mx-auto px-6 space-y-16">
        {formations.map((formation: Formation, idx: number) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center"
          >
            <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 uppercase tracking-wide">
              {formation.title}
            </h2>
            <p className="text-lg text-gray-700 mb-6 text-center">{formation.description}</p>
            
            {/* Carrousel de vidéos */}
            <div className="w-full max-w-4xl mb-6">
              <ConfCarousel items={videos} />
            </div>
            
            <div className="mt-8 text-center">
              <a
                href="https://physio-learning.com/courses/formation-troubles-vasculaires/"
                className="inline-block bg-brandviolet text-white font-bold px-8 py-3 rounded-lg shadow hover:bg-purple-600 transition text-lg uppercase tracking-wider"
              >
                Accéder à la formation
              </a>
            </div>
          </div>
        ))}

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 uppercase tracking-wide">
            Formations interactives Physiomaps
          </h2>
          <p className="text-lg text-gray-700 mb-6 text-center">
            Accédez à mes formations neurologiques interactives sur Physiomaps
          </p>
          <div className="w-full">
            <iframe
              src="https://physiomaps.com/?no_header=true"
              width="100%"
              height="600"
              style={{ border: "none", borderRadius: 12 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

