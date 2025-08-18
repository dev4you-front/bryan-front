import ConfCarousel from "./components/ConfCarousel";
import PhysiomapsSection from "./components/PhysiomapsSection";
import SectionWrapper from "./components/SectionWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <div>
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
                <a href="https://www.instagram.com/bryanlittre/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-bold px-8 py-3 rounded-lg shadow hover:bg-gray-50 transition">@bryanlittre</a>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full max-w-4xl mx-auto">
                <div className="aspect-video rounded-xl overflow-hidden shadow-2xl bg-gray-900 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    loop
                    preload="metadata"
                    poster="/images/formation_neuro.jpeg"
                    volume={0.5}
                  >
                    <source src="/video/video_accueil.mp4" type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture de vidéos.
                  </video>
                </div>
                
                {/* Overlay décoratif */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brandviolet rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-brandviolet rounded-full opacity-30 blur-lg"></div>
              </div>
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

      {/* Section Vidéo */}
      <SectionWrapper maxWidth="6xl" className="bg-light-gray">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 uppercase tracking-wide">
            Ma formation en neurologie
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Découvrez ma formation spécialisée en troubles neurologiques en musculo-squelettique, 
            pour une approche complète et scientifique de la prise en charge.
          </p>
          
          {/* Conteneur vidéo responsive */}
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image 
                src="/images/formation_neuro.jpeg" 
                alt="Formation neurologie Bryan Littré" 
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            
            {/* Overlay décoratif */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brandviolet rounded-full opacity-20"></div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section Physiomaps */}
      <SectionWrapper maxWidth="7xl" className="bg-light-gray">
        <PhysiomapsSection />
      </SectionWrapper>
    </div>
  );
}