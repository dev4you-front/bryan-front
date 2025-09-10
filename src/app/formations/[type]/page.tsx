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
    { type: 'geriatrie' },
  ];
} 

export default async function FormationTypePage({ params }: Props) {
  const resolvedParams = await params;
  const { type } = resolvedParams;

  if (!['sport', 'neuro', 'vasculaire', 'geriatrie'].includes(type)) {
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
      
      {/* Section spéciale pour la formation gériatrie */}
      {type === 'geriatrie' && (
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Pourquoi se former ?
            </h2>
            <h3 className="text-xl font-semibold text-brandviolet mb-4">
              Des pathologies délaissées.
            </h3>
            
            <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
              <p>
                En France, on recense plus de <strong>150 000 nouveaux cas d'AVC par an</strong>, et 1 personne sur 5 gardera des séquelles lourdes nécessitant une rééducation spécifique.
              </p>
              <p>
                Près de <strong>900 000 personnes vivent avec la maladie d'Alzheimer</strong> aujourd'hui, un chiffre qui devrait doubler d'ici 2050 avec le vieillissement de la population.
              </p>
              <p>
                Les thérapeutes de terrain jouent un rôle majeur dans le dépistage précoce des déficits, l'adaptation des prises en charge et le maintien de l'autonomie des patients.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-brandviolet rounded-lg p-6 shadow-sm">
              <p className="text-lg font-medium text-gray-800 mb-4 text-center">
                Tu veux en savoir plus sur cette formation ?
                <span className="block mt-2 text-brandviolet font-semibold">
                  Découvre le programme complet et inscris-toi dès maintenant.
                </span>
              </p>
              
              <div className="text-center">
                <a 
                  href="https://physio-learning.com/courses/neurologie-et-geriatrie/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-brandviolet text-white font-bold px-6 py-2 rounded-lg shadow-lg hover:bg-purple-600 hover:shadow-xl transition-all duration-300 text-base uppercase tracking-wider transform hover:scale-105"
                >
                  Découvrir la formation
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Section des formations avec vidéos et carrousels */}
      {formations.map((formation, index) => (
        <FormationSection key={index} formation={formation} ctaConfig={getCtaConfig(type)}>
          {/* Carrousel pour les formations avec des vidéos */}
          {formation.videos && (
            <ConfCarousel items={formation.videos} />
          )}
        </FormationSection>
      ))}
      
      {/* Section des prochaines formations pour ce type */}
      {upcomingFormations.length > 0 && (
        <UpcomingFormationsList 
          formations={upcomingFormations}
          title={`Prochaines formations ${type === 'neuro' ? 'Neuro' : type === 'sport' ? 'Ischio' : type}`}
          displayMode={type === 'sport' || type === 'neuro' ? 'table' : 'cards'}
          showFilters={true}
        />
      )}
    </SectionWrapper>
  );
}