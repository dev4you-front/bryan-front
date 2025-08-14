import { blogArticles } from "@/data/blogArticles";
import ClientFormattedDate from "@/app/components/ClientFormattedDate";
import Image from "next/image";
import SectionWrapper from "@/app/components/SectionWrapper";

export default function Blog() {
  return (
    <SectionWrapper>
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 uppercase tracking-wide">
          Mes Articles
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogArticles.map((a, idx: number) => (
            <article key={idx} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col transform transition duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-brandviolet/20">
              <div className="relative overflow-hidden">
                <Image 
                  src={a.image} 
                  alt={a.title}
                  width={400}
                  height={176}
                  className="w-full h-44 object-cover transition duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold mb-3 text-gray-900 leading-tight">{a.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3 leading-relaxed">{a.excerpt.substring(0, 120)}...</p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pt-2 border-t border-gray-100">
                  <span className="font-medium text-brandviolet">{a.author}</span>
                  <span>
                    <ClientFormattedDate date={a.date} format="monthYear" />
                  </span>
                </div>
                <a href={a.link} className="inline-flex items-center justify-center mt-auto bg-brandviolet text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-purple-600 transition-colors duration-200 text-sm">
                  Lire l'article
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

