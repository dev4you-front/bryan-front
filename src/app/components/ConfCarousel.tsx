'use client';

import { useState } from 'react';
import { ConfItem } from '@/types';

interface ConfCarouselProps {
  items: ConfItem[];
}

export default function ConfCarousel({ items }: ConfCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Conteneur principal du carrousel */}
      <div className="relative overflow-hidden rounded-lg bg-gray-100">
        {/* Vidéo actuelle */}
        <div className="aspect-video">
          <iframe
            src={items[currentIndex].src}
            title={items[currentIndex].title}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Flèches de navigation - Desktop */}
        {items.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-200 group"
              aria-label="Vidéo précédente"
            >
              <div className="w-3 h-3 border-l-2 border-b-2 border-brandviolet rotate-45 group-hover:border-brandviolet/80 transition-colors" />
            </button>
            <button
              onClick={nextSlide}
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-200 group"
              aria-label="Vidéo suivante"
            >
              <div className="w-3 h-3 border-r-2 border-t-2 border-brandviolet -rotate-45 group-hover:border-brandviolet/80 transition-colors" />
            </button>
          </>
        )}
      </div>

      {/* Titre de la vidéo actuelle */}
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">
          {items[currentIndex].title}
        </h3>
      </div>

      {/* Indicateurs de pagination */}
      {items.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-brandviolet'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Aller à la vidéo ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Flèches de navigation - Mobile */}
      {items.length > 1 && (
        <div className="flex md:hidden justify-center mt-4 space-x-4">
          <button
            onClick={prevSlide}
            className="flex w-10 h-10 items-center justify-center bg-brandviolet/10 hover:bg-brandviolet/20 rounded-full transition-all duration-200 group"
            aria-label="Vidéo précédente"
          >
            <div className="w-3 h-3 border-l-2 border-b-2 border-brandviolet rotate-45 group-hover:border-brandviolet/80 transition-colors" />
          </button>
          <button
            onClick={nextSlide}
            className="flex w-10 h-10 items-center justify-center bg-brandviolet/10 hover:bg-brandviolet/20 rounded-full transition-all duration-200 group"
            aria-label="Vidéo suivante"
          >
            <div className="w-3 h-3 border-r-2 border-t-2 border-brandviolet -rotate-45 group-hover:border-brandviolet/80 transition-colors" />
          </button>
        </div>
      )}
    </div>
  );
}