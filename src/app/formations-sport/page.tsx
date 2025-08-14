import { Formation } from "@/types";

export default function FormationsSport() {
  const formations: Formation[] = [
    {
      title: "Comment prendre en charge les lésions des ischio-jambiers",
      description:
        "Formation avec conférences et podcast sur les pathologies sportives des ischio-jambiers.",
      video: "https://www.youtube.com/embed/QPdA4npgKck",
    },
  ];

  return (
    <section className="py-12 bg-[#E0E0E0]">
      <div className="max-w-5xl mx-auto px-6 space-y-16">
        {formations.map((formation: Formation, idx: number) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 uppercase tracking-wide">
              {formation.title}
            </h2>
            <p className="text-lg text-gray-700 mb-6 text-center">{formation.description}</p>
            <div className="w-full max-w-4xl mb-6">
              <div className="w-full rounded-xl shadow aspect-video overflow-hidden">
                <iframe
                  src={formation.video}
                  title={formation.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
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

