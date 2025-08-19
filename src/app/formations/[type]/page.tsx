import { notFound } from "next/navigation";
import { formationsData, physiomapsSection } from "@/data/formations";
import ConfCarousel from "@/app/components/ConfCarousel";
import FormationSection from "@/app/components/FormationSection";
import PhysiomapsSection from "@/app/components/PhysiomapsSection";
import SectionWrapper from "@/app/components/SectionWrapper";

type Props = {
  params: Promise<{ type: string }>;
};

export async function generateStaticParams() {
  return [
    { type: 'sport' },
    { type: 'neuro' },
    { type: 'vasculaire' },
  ];
}

export default async function FormationTypePage({ params }: Props) {
  const resolvedParams = await params;
  const { type } = resolvedParams;

  if (!['sport', 'neuro', 'vasculaire'].includes(type)) {
    notFound();
  }

  const data = formationsData[type as keyof typeof formationsData];
  
  if (!data) {
    notFound();
  }

  const { formations } = data;
  const videos = 'videos' in data ? data.videos : undefined;

  return (
    <SectionWrapper maxWidth="7xl" id="formations">
      {formations.map((formation, index) => (
        <FormationSection key={index} formation={formation}>
          {/* Carrousel pour les formations avec des vidéos (ex: ischio-jambiers) */}
          {formation.videos && (
            <ConfCarousel items={formation.videos} />
          )}
        </FormationSection>
      ))}

      {/* Carrousel pour les vidéos de la section (ex: vasculaire) */}
      {videos && (
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 uppercase tracking-wide">
            Troubles vasculaires : Apprendre à trier pour savoir traiter ! 
          </h2>
          <ConfCarousel items={videos} />
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
      )}

      {/* Section Physiomaps pour la formation neuro */}
      {type === 'neuro' && <PhysiomapsSection />}
    </SectionWrapper>
  );
}