"use client";

import { useState } from "react";
import { ConfItem } from "@/types";

interface ConfCarouselProps {
  items: ConfItem[];
}

export default function ConfCarousel({ items }: ConfCarouselProps) {
  const [index, setIndex] = useState(0);

  const goPrev = (): void => setIndex((i: number) => (i - 1 + items.length) % items.length);
  const goNext = (): void => setIndex((i: number) => (i + 1) % items.length);

  return (
    <div className="w-full my-12">
      {/* Desktop: flèches à l'extérieur */}
      <div className="hidden md:block relative">
        <button
          aria-label="Précédent"
          className="absolute left-0 top-1/3 -translate-y-1/2 z-20 w-12 h-12 bg-transparent text-brandviolet rounded-full flex items-center justify-center text-2xl font-black border-none transition-colors hover:text-purple-600"
          onClick={goPrev}
        >
          <div className="w-3 h-3 border-t-2 border-r-2 border-brandgray transform -rotate-135"></div>
        </button>
        
        <div className="w-full mx-auto px-12">
          <div className="flex flex-col items-center">
            <div className="w-full aspect-video rounded-xl shadow mb-4 overflow-hidden">
              <iframe
                src={items[index]?.src}
                title={items[index]?.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
            <p className="text-gray-700 text-center mt-6">{items[index]?.title}</p>
          </div>
        </div>
        
        <button
          aria-label="Suivant"
          className="absolute right-0 top-1/3 -translate-y-1/2 z-20 w-12 h-12 bg-transparent text-brandviolet rounded-full flex items-center justify-center text-2xl font-black border-none transition-colors hover:text-purple-600"
          onClick={goNext}
        >
          <div className="w-3 h-3 border-t-2 border-r-2 border-brandgray transform rotate-45"></div>
        </button>
      </div>

      {/* Mobile/Tablette: flèches en dessous */}
      <div className="md:hidden">
        <div className="flex flex-col items-center">
          <div className="w-full aspect-video rounded-xl shadow mb-4 overflow-hidden">
            <iframe
              src={items[index]?.src}
              title={items[index]?.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
          <p className="text-gray-700 text-center mt-6">{items[index]?.title}</p>
          
          {/* Flèches de navigation mobile */}
          <div className="flex items-center justify-center gap-8 mt-6">
            <button
              aria-label="Précédent"
              className="relative w-12 h-12 bg-transparent text-brandviolet rounded-full flex items-center justify-center text-2xl font-black border-none transition-colors hover:text-purple-600"
              onClick={goPrev}
            >
              <div className="w-3 h-3 border-t-2 border-r-2 border-brandgray transform -rotate-135"></div>
            </button>
            <button
              aria-label="Suivant"
              className="relative w-12 h-12 bg-transparent text-brandviolet rounded-full flex items-center justify-center text-2xl font-black border-none transition-colors hover:text-purple-600"
              onClick={goNext}
            >
              <div className="w-3 h-3 border-t-2 border-r-2 border-brandgray transform rotate-45"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Pagination commune */}
      <div className="flex justify-center gap-4 mt-6">
        {items.map((_, i) => (
          <button
            key={i}
            aria-label={`Aller à la slide ${i + 1}`}
            className={`w-4 h-4 rounded-full border-2 border-brandviolet transition-colors ${
              i === index ? "bg-brandviolet" : "bg-brandgraylight"
            }`}
            onClick={(): void => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

