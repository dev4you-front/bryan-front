import { notFound } from "next/navigation";
import { formationsData } from "@/data/formations";
import ConfCarousel from "@/app/components/ConfCarousel";
import FormationSection from "@/app/components/FormationSection";
import SectionWrapper from "@/app/components/SectionWrapper";
import UpcomingFormationsList from "@/app/components/UpcomingFormationsList";
import { getFormationsByType, getUpcomingFormations } from "@/data/upcomingFormations";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Accordion from "@/app/components/Accordion";
import Image from "next/image";

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
    vasculaire: "Troubles vasculaires : Apprendre à trier pour savoir traiter !",
    geriatrie: "Neurologie et Gériatrie : L'approche déficitaire qui change vos patients et votre pratique"
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
    if (formationType === 'geriatrie') {
      return {
        mainText: "Intéressé par cette formation ?",
        subText: "Découvrez le programme complet et les dates disponibles.",
        buttonText: "Découvrir la formation",
        buttonLink: "https://physio-learning.com/courses/neurologie-et-geriatrie/"
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
      
      {/* Section des formations avec vidéos et carrousels */}
      {formations.map((formation, index) => (
        <FormationSection key={index} formation={formation} ctaConfig={getCtaConfig(type)}>
          {/* Contenu spécifique selon le type de formation */}
          {type === 'geriatrie' && formation.detailedContent && (
            <div className="w-full max-w-4xl">
              {/* Introduction */}
              <div className="prose prose-lg max-w-none text-gray-700">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h2: ({children}) => <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{children}</h2>,
                    h3: ({children}) => <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">{children}</h3>,
                    p: ({children}) => <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>,
                    ul: ({children}) => <ul className="mb-4 pl-6 list-disc">{children}</ul>,
                    li: ({children}) => <li className="text-gray-700 mb-2">{children}</li>,
                    blockquote: ({children}) => <blockquote className="border-l-4 border-brandviolet bg-gray-50 p-4 my-6 italic">{children}</blockquote>,
                    strong: ({children}) => <strong className="font-bold text-gray-900">{children}</strong>
                  }}
                >
                  {formation.detailedContent}
                </ReactMarkdown>
              </div>
              
              {/* Image illustrative */}
              <div className="my-8 flex justify-center">
                <div className="relative w-full max-w-2xl">
                  <Image
                    src="/images/geria.jpg"
                    alt="Formation Neurologie et Gériatrie"
                    width={800}
                    height={500}
                    className="w-full h-auto rounded-xl shadow-lg object-cover"
                    priority
                  />
                </div>
              </div>
              
              {/* Contenu en cours de création */}
              {formation.sections && (
                <div className="mt-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                    Contenu en cours de création
                  </h2>
                  <p className="text-lg text-gray-700 mb-8 text-center">
                    La formation apporte les éléments nécessaires pour mettre en place l'approche déficitaire.
                  </p>
                  <Accordion sections={formation.sections} />
                </div>
              )}
            </div>
          )}
          
          {/* Carrousel pour les autres formations avec des vidéos */}
          {type !== 'geriatrie' && formation.videos && (
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