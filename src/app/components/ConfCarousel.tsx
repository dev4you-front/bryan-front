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

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!items || items.length === 0) {
    return null;
  }

  const currentItem = items[currentIndex];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Container principal avec flèches externes */}
      <div className="relative flex items-center">
        {/* Flèche gauche - externe */}
        <button
          onClick={prevSlide}
          className="absolute left-0 -translate-x-6 z-10 w-12 h-12 bg-white hover:bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center shadow-md transition-all duration-200 hover:shadow-lg"
          aria-label="Vidéo précédente"
        >
          <div className="w-4 h-4 border-l-2 border-b-2 border-brandviolet rotate-45"></div>
        </button>

        {/* Container vidéo */}
        <div className="w-full">
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              src={currentItem.src}
              title={currentItem.title}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          
          {/* Titre de la vidéo */}
          <h3 className="mt-4 text-lg font-semibold text-gray-800 text-center">
            {currentItem.title}
          </h3>
        </div>

        {/* Flèche droite - externe */}
        <button
          onClick={nextSlide}
          className="absolute right-0 translate-x-6 z-10 w-12 h-12 bg-white hover:bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center shadow-md transition-all duration-200 hover:shadow-lg"
          aria-label="Vidéo suivante"
        >
          <div className="w-4 h-4 border-r-2 border-b-2 border-brandviolet -rotate-45"></div>
        </button>
      </div>

      {/* Indicateurs de pagination */}
      {items.length > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
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
    </div>
  );
}