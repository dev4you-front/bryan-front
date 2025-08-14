import { notFound } from "next/navigation";
import { formationsData } from "@/data/formations";
import FormationSection from "@/app/components/FormationSection";
import PhysiomapsSection from "@/app/components/PhysiomapsSection";
import ConfCarousel from "@/app/components/ConfCarousel";
import SectionWrapper from "@/app/components/SectionWrapper";

interface FormationPageProps {
  params: {
    type: string;
  };
}

export async function generateStaticParams() {
  return [
    { type: 'sport' },
    { type: 'neuro' },
    { type: 'vasculaire' }
  ];
}

export default async function FormationPage({ params }: FormationPageProps) {
  const resolvedParams = await params;
  const { type } = resolvedParams;
  
  // Vérifier si le type de formation existe
  if (!formationsData[type as keyof typeof formationsData]) {
    notFound();
  }

  const data = formationsData[type as keyof typeof formationsData];
  const { formations } = data;
  const videos = 'videos' in data ? data.videos : undefined;

  return (
    <SectionWrapper>
      {formations.map((formation, idx) => (
        <FormationSection key={idx} formation={formation}>
          {/* Carrousel spécifique pour la formation vasculaire */}
          {type === 'vasculaire' && videos && (
            <ConfCarousel items={videos} />
          )}
        </FormationSection>
      ))}

      <PhysiomapsSection />
    </SectionWrapper>
  );
}