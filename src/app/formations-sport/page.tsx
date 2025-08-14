import { formationsData } from "@/data/formations";
import FormationSection from "../components/FormationSection";
import PhysiomapsSection from "../components/PhysiomapsSection";

export default function FormationsSport() {
  const { formations } = formationsData.sport;

  return (
    <section className="py-12 bg-[#E0E0E0]">
      <div className="max-w-5xl mx-auto px-6 space-y-16">
        {formations.map((formation, idx) => (
          <FormationSection key={idx} formation={formation} />
        ))}

        <PhysiomapsSection />
      </div>
    </section>
  );
}