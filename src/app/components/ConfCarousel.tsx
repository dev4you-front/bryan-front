```typescript
import React, { useState } from 'react';
import { ConfItem } from '@/types';

interface ConfCarouselProps {
  items: ConfItem[];
}

const ConfCarousel: React.FC<ConfCarouselProps> = ({ items }) => {
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
    return <div>Aucune vidéo disponible</div>;
  }

  const currentItem = items[currentIndex];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Conteneur principal avec flèches externes */}
      <div className="relative flex items-center">
        {/* Flèche gauche - externe */}
        {items.length > 1 && (
          <button
            onClick={prevSlide}
            className="absolute left-0 -translate-x-6 z-10 w-12 h-12 bg-white hover:bg-gray-50 border border-gray-200 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:shadow-xl"
            aria-label="Vidéo précédente"
          >
            <div className="w-4 h-4 border-l-2 border-b-2 border-brandviolet transform rotate-45"></div>
          </button>
        )}

        {/* Conteneur vidéo */}
        <div className="w-full">
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            {isLocalVideo(currentItem.src) ? (
              <video
                src={currentItem.src}
                controls
                preload="metadata"
                className="w-full h-full object-cover"
                title={currentItem.title}
              >
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            ) : (
              <iframe
                src={currentItem.src}
                title={currentItem.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>

          {/* Titre de la vidéo */}
          <h3 className="text-lg font-semibold text-gray-800 mt-4 text-center">
            {currentItem.title}
          </h3>
        </div>

        {/* Flèche droite - externe */}
        {items.length > 1 && (
          <button
            onClick={nextSlide}
            className="absolute right-0 translate-x-6 z-10 w-12 h-12 bg-white hover:bg-gray-50 border border-gray-200 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:shadow-xl"
            aria-label="Vidéo suivante"
          >
            <div className="w-4 h-4 border-r-2 border-b-2 border-brandviolet transform -rotate-45"></div>
          </button>
        )}
      </div>

      {/* Indicateurs de pagination */}
      {items.length > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={\`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-brandviolet scale-110'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={\`Aller à la vidéo ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ConfCarousel;
```