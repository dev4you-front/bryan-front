import { notFound } from "next/navigation";
import { formationsData } from "@/data/formations";
import ConfCarousel from "@/app/components/ConfCarousel";
import FormationSection from "@/app/components/FormationSection";
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

  // Mapping des types vers des titres descriptifs
  const titleMap = {
    sport: "Comment prendre en charge correctement les lésions des ischio-jambiers ?",
    neuro: "Mes Formations Neurologiques",  
    vasculaire: "Mes Formations Vasculaires"
  };

  const pageTitle = titleMap[type as keyof typeof titleMap];

  return (
    <SectionWrapper maxWidth="7xl" id="formations">
      <h1 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 uppercase tracking-wide">
        {pageTitle}
      </h1>
      {formations.map((formation, index) => (
        <FormationSection key={index} formation={formation}>
          {/* Carrousel pour les formations avec des vidéos (ex: ischio-jambiers) */}
          {formation.videos && (
            <ConfCarousel items={formation.videos} />
          )}
        </FormationSection>
      ))}
    </SectionWrapper>
  );
}