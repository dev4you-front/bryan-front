"use client";

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

  const isLocalVideo = (src: string): boolean => {
    return src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.ogg');
  };

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Container principal avec flèches externes */}
      <div className="relative">
        {/* Flèche gauche - externe */}
        {items.length > 1 && (
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Vidéo précédente"
          >
            <div className="w-0 h-0 border-t-2 border-b-2 border-r-2 border-transparent border-r-gray-600 ml-1"></div>
          </button>
        )}

        {/* Container vidéo */}
        <div className="w-full rounded-xl shadow aspect-video overflow-hidden bg-black">
          {isLocalVideo(items[currentIndex].src) ? (
            <video
              src={items[currentIndex].src}
              title={items[currentIndex].title}
              className="w-full h-full object-cover"
              controls
              preload="metadata"
            />
          ) : (
            <iframe
              src={items[currentIndex].src}
              title={items[currentIndex].title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
            />
          )}
        </div>

        {/* Flèche droite - externe */}
        {items.length > 1 && (
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Vidéo suivante"
          >
            <div className="w-0 h-0 border-t-2 border-b-2 border-l-2 border-transparent border-l-gray-600 mr-1"></div>
          </button>
        )}
      </div>

      {/* Titre de la vidéo */}
      <h3 className="text-center text-lg font-semibold text-gray-800 mt-4 px-4">
        {items[currentIndex].title}
      </h3>

      {/* Indicateurs de pagination */}
      {items.length > 1 && (
        <div className="flex justify-center space-x-2 mt-4">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
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