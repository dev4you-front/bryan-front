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
    <div className="relative flex justify-center items-center w-full my-12">
      {/* Prev */}
      <button
        aria-label="Précédent"
        className="swiper-button-prev custom-swiper-arrow absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 z-20"
        onClick={goPrev}
      />

      {/* Slide */}
      <div className="w-full max-w-2xl mx-auto">
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

      {/* Next */}
      <button
        aria-label="Suivant"
        className="swiper-button-next custom-swiper-arrow absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 z-20"
        onClick={goNext}
      />

      {/* Bullets (flow layout to push content down like Twig) */}
      <div className="swiper-pagination custom-swiper-pagination mt-8">
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

