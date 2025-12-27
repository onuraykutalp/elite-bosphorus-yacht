"use client";

import { useEffect, useState } from "react";

type Slide = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const slides: Slide[] = [
    {
        id: 1,
        title: "Sunset Yacht Bosphorus Tour",
        description:
          "Experience the magic of Istanbul with a luxury sunset yacht tour on the Bosphorus.",
        image: "/slider/slider-1.jpg",
      },
      {
        id: 3,
        title: "Private Yacht Charter",
        description:
          "Exclusive private yacht rentals for unforgettable moments on the Bosphorus.",
        image: "/slider/slider-3.JPG",
      },
      {
        id: 2,
        title: "Special Celebration",
        description:
          "Celebrate your special moments on a private luxury yacht with a fully customized Bosphorus tour.",
        image: "/slider/slider-2.jpg",
      },
  
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Autoplay
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay */}
            <div className="flex h-full w-full items-center bg-black/50">
              <div className="container mx-auto px-6 text-white">
                <h2 className="mb-4 max-w-2xl text-3xl font-bold leading-tight md:text-5xl">
                  {slide.title}
                </h2>
                <p className="mb-6 max-w-xl text-gray-200 md:text-lg">
                  {slide.description}
                </p>

                <button className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200">
                  More Details
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 text-black backdrop-blur transition hover:bg-white"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 text-black backdrop-blur transition hover:bg-white"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
