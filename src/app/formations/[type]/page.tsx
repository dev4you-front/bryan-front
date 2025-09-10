import { notFound } from "next/navigation";
import { formationsData } from "@/data/formations";
import ConfCarousel from "@/app/components/ConfCarousel";
import FormationSection from "@/app/components/FormationSection";
import SectionWrapper from "@/app/components/SectionWrapper";
import UpcomingFormationsList from "@/app/components/UpcomingFormationsList";
import { getFormationsByType, getUpcomingFormations } from "@/data/upcomingFormations";

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
    neuro: "Troubles neurologiques en musculo-squelettique : Réussir ses bilans et savoir quoi en faire",  
    vasculaire: "Troubles vasculaires : Apprendre à trier pour savoir traiter !"
  };

  const pageTitle = titleMap[type as keyof typeof titleMap];

  // Configuration spécifique pour l'appel à l'action selon le type de formation
  const getCtaConfig = (formationType: string) => {
    if (formationType === 'vasculaire') {
      return {
        mainText: "Tu veux savoir la date, l'heure et l'endroit de sa prochaine formation ?",
        subText: "Clique sur le lien ci-dessous c'est là que tout se passe.",
        buttonText: "S'inscrire",
        buttonLink: "https://physio-learning.com/courses/formation-troubles-vasculaires/"
      };
    }
    // Pour les autres formations (sport, neuro), on utilise la configuration par défaut
    return undefined;
  };

  // Obtenir les formations correspondant au type de page
  const getFormationsForType = (formationType: string) => {
    // Récupérer toutes les formations à venir triées par date
    const allUpcomingFormations = getUpcomingFormations();
    
    // Filtrer par type de formation
    if (formationType === 'sport') {
      return allUpcomingFormations.filter(formation => formation.type === 'sport');
    } else if (formationType === 'neuro') {
      return allUpcomingFormations.filter(formation => formation.type === 'neuro');
    }
    return [];
  };

  const upcomingFormations = getFormationsForType(type);

  return (
    <SectionWrapper maxWidth="7xl" id="formations">
      <h1 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 uppercase tracking-wide">
        {pageTitle}
      </h1>
      
      {/* Affichage conditionnel selon le type de formation */}
      {type === 'sport' ? (
        /* Pour les formations sport (ischio), afficher uniquement le tableau */
        upcomingFormations.length > 0 && (
          <UpcomingFormationsList 
            formations={upcomingFormations}
            title="Prochaines formations Ischio"
            displayMode="table"
            showFilters={true}
          />
        )
      ) : (
        /* Pour les autres formations (neuro, vasculaire), afficher le format original */
        <>
          {/* Section des prochaines formations pour ce type */}
          {upcomingFormations.length > 0 && (
            <UpcomingFormationsList 
              formations={upcomingFormations}
              title={`Prochaines formations ${type === 'neuro' ? 'Neuro' : type}`}
              showFilters={true}
            />
          )}
          
          {formations.map((formation, index) => (
            <FormationSection key={index} formation={formation} ctaConfig={getCtaConfig(type)}>
              {/* Carrousel pour les formations avec des vidéos */}
              {formation.videos && (
                <ConfCarousel items={formation.videos} />
              )}
            </FormationSection>
          ))}
        </>
      )}
    </SectionWrapper>
  );
}