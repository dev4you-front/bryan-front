"use client";

import { blogArticles } from "@/data/blogArticles";
import { useState, useMemo } from "react";
import ClientFormattedDate from "@/app/components/ClientFormattedDate";
import Image from "next/image";
import SectionWrapper from "@/app/components/SectionWrapper";

export default function Blog() {
  const categories = ["NeuroVascu", "Sport", "Autres"];
  const [activeCategory, setActiveCategory] = useState<string>("NeuroVascu");

  // Regrouper les articles par catégorie
  const articlesByCategory = useMemo(() => {
    const grouped: Record<string, typeof blogArticles> = {
      NeuroVascu: [],
      Sport: [],
      Autres: []
    };

    blogArticles.forEach(article => {
      const category = article.category || "Autres";
      if (grouped[category]) {
        grouped[category].push(article);
      } else {
        grouped["Autres"].push(article);
      }
    });

    return grouped;
  }, []);

  // Articles filtrés selon la catégorie active
  const filteredArticles = useMemo(() => {
    return articlesByCategory[activeCategory] || [];
  }, [articlesByCategory, activeCategory]);

  return (
    <SectionWrapper>
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 uppercase tracking-wide">
          Mes Articles
        </h2>
        
        {/* Navigation par catégories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${
                activeCategory === category
                  ? "bg-brandviolet text-white shadow-lg transform scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
              }`}
            >
              {category}
              <span className="ml-2 text-xs opacity-75">
                ({articlesByCategory[category]?.length || 0})
              </span>
            </button>
          ))}
        </div>

        {/* Articles de la catégorie sélectionnée */}
        {filteredArticles.length > 0 ? (
        <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((a, idx: number) => (
            <article key={idx} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col transform transition duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-brandviolet/20 w-full">
              <div className="relative overflow-hidden">
                <Image 
                  src={a.image} 
                  alt={a.title}
                  width={400}
                  height={176}
                  className="w-full h-44 sm:h-48 md:h-44 object-cover transition duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-3 sm:p-3 md:p-5 flex-1 flex flex-col">
                <h3 className="text-base sm:text-lg font-bold mb-3 text-gray-900 leading-tight">{a.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3 leading-relaxed">{a.excerpt.substring(0, 120)}...</p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3 pt-2 border-t border-gray-100">
                  <span className="font-medium text-brandviolet">{a.author}</span>
                  <span>
                    <ClientFormattedDate date={a.date} format="monthYear" />
                  </span>
                </div>
                <a href={a.link} className="inline-flex items-center justify-center mt-auto bg-brandviolet text-white font-semibold py-2 px-3 rounded-lg hover:bg-purple-600 transition-colors duration-200 text-sm w-full">
                  Lire l'article
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Aucun article dans cette catégorie</h3>
            <p className="text-gray-500">Les articles de la catégorie "{activeCategory}" seront bientôt disponibles.</p>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
