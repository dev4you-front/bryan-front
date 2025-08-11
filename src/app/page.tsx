import ConfCarousel from "./components/ConfCarousel";
import { ConfItem } from "@/types";

export default function Home(): JSX.Element {
  const items: ConfItem[] = [
    {
      src: "https://www.youtube-nocookie.com/embed/O0bjv3zgy2Q",
      title:
        "Bryan LITTRE et Matthieu GONZALES BANDRES - Les blessures en course et réflexion autour d'une étude",
    },
    {
      src: "https://www.youtube-nocookie.com/embed/VVLn86-t-Sg",
      title: "Récidives dans le sport : à qui la faute ? Bryan LITTRÉ // Conférence SPO",
    },
    {
      src: "https://www.youtube-nocookie.com/embed/E4kTrmriU64",
      title:
        "Gaetan HENRY et Bryan LITTRE - Retour au sport et lésions sportives du membre inférieur. CIFEPK 2022",
    },
    {
      src: "https://www.youtube-nocookie.com/embed/QPdA4npgKck",
      title: "Bryan Littré, Kiné du sport - Comment ne plus se BLESSER aux ISCHIOS",
    },
  ];
  return (
    <div className="space-y-12">
      {/* Full-bleed hero (same rendu que body_top Twig) */}
      <section className="relative bg-white overflow-hidden w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[80vh] px-6 py-8">
            <div className="text-center md:text-left space-y-6">
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 uppercase tracking-tight">Bryan Littré</h1>
              <p className="text-xl md:text-2xl text-brandviolet font-semibold mt-4">Physiotherapeute • Formateur • Conférencier</p>
              <p className="text-lg text-gray-800 leading-relaxed mt-6">À travers formations et conférences, Bryan Littré diffuse son expertise en physiothérapie sportive et ainsi que les affections neuromusculosquelettiques. Sa méthodologie articule connaissances scientifiques et applications pratiques, visant l'amélioration continue des pratiques professionnelles.</p>
              <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-8">
                <a href="#formations" className="inline-block bg-brandviolet text-white font-bold px-8 py-3 rounded-lg shadow hover:bg-purple-600 transition text-lg uppercase tracking-wider">Découvrir les formations</a>
                <a href="https://www.instagram.com/bryanlittre/" target="_blank" className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-bold px-8 py-3 rounded-lg shadow hover:bg-gray-50 transition">@bryanlittre</a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src="/images/formation_neuro.jpeg" alt="Bryan Littré" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brandviolet rounded-full opacity-20"></div>
            </div>
          </div>
          {/* Physiomaps section (full width container content) */}
          <div className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-center text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 uppercase tracking-wide">
              Physiomaps - Mes formations interactives
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-0 md:p-8">
              <iframe
                src="https://physiomaps.com/?courseIds=67f1cef01ca87268403e1183,67f1cefa1ca87268403e11a3&no_header=true"
                width="100%"
                height="600"
                style={{ border: "none", borderRadius: 12 }}
              />
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

      <section className="py-12 bg-[#E0E0E0]" id="formations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 uppercase tracking-wide">Conférences et broadcast</h2>
          {/* Carousel */}
          <ConfCarousel items={items} />
        </div>
      </section>
    </div>
  );
}
