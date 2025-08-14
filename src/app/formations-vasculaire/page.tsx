import { formationsData } from "@/data/formations";
import FormationSection from "../components/FormationSection";
import PhysiomapsSection from "../components/PhysiomapsSection";
import ConfCarousel from "../components/ConfCarousel";

export default function FormationsVasculaire() {
  const { formations, videos } = formationsData.vasculaire;

  return (
    <section className="py-12 bg-[#E0E0E0]">
      <div className="max-w-5xl mx-auto px-6 space-y-16">
        {formations.map((formation, idx) => (
          <FormationSection key={idx} formation={formation}>
            {/* Carrousel de vidéos spécifique à la formation vasculaire */}
            <ConfCarousel items={videos} />
          </FormationSection>
        ))}

        <PhysiomapsSection />
      </div>
    </section>
  );
}