import { physiomapsSection } from "@/data/formations";

export default function PhysiomapsSection() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 uppercase tracking-wide">
        {physiomapsSection.title}
      </h2>
      <p className="text-lg text-gray-700 mb-6 text-center">
        {physiomapsSection.description}
      </p>
      <div className="w-full">
        <iframe
          src={physiomapsSection.url}
          width="100%"
          height="600"
          style={{ border: "none", borderRadius: 12 }}
          loading="lazy"
        />
      </div>
    </div>
  );
}