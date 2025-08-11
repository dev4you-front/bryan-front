"use client";

import { useState } from "react";
import { ConfItem } from "@/types";

interface ConfCarouselProps {
  items: ConfItem[];
}

export default function ConfCarousel({ items }: ConfCarouselProps): JSX.Element {
  const [index, setIndex] = useState(0);

  const goPrev = (): void => setIndex((i: number) => (i - 1 + items.length) % items.length);
  const goNext = (): void => setIndex((i: number) => (i + 1) % items.length);

  return (
    <div className="w-full my-12">
      {/* Desktop: flèches à l'extérieur */}
      <div className="hidden md:block relative">
        <button
          aria-label="Précédent"
          className="swiper-button-prev custom-swiper-arrow absolute -left-12 top-1/3 -translate-y-1/2 z-20"
          onClick={goPrev}
        />
        
        <div className="w-full mx-auto">
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
          className="swiper-button-next custom-swiper-arrow absolute -right-12 top-1/3 -translate-y-1/2 z-20"
          onClick={goNext}
        />
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
              className="swiper-button-prev custom-swiper-arrow relative"
              onClick={goPrev}
            />
            <button
              aria-label="Suivant"
              className="swiper-button-next custom-swiper-arrow relative"
              onClick={goNext}
            />
          </div>
        </div>
      </div>

      {/* Pagination commune */}
      <div className="swiper-pagination custom-swiper-pagination mt-6">
        {items.map((_, i) => (
          <button
            key={i}
            aria-label={`Aller à la slide ${i + 1}`}
            className={
              "swiper-pagination-bullet" + (i === index ? " swiper-pagination-bullet-active" : "")
            }
            onClick={(): void => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

