"use client";

import React from "react";
import Link from "next/link";

type MenuItem = {
  id: number | string;
  slug: string;
  name: string;
  subtitle: string;
  details: string;
  tour: string;
  service: string;
  price: string;
  image: string;
};

type MenuCardsProps = {
  items: MenuItem[];
};

export function MenuCards({ items }: MenuCardsProps) {

  return (
    <section className="py-8 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 text-gray-800">
        Our Services
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="relative aspect-[4/3]">
            <a href={`/tours/${item.slug}`}>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              </a>
            </div>
            <div className="flex-1 flex flex-col p-5">
              <a href={`/tours/${item.slug}`}>
              <h3 className="text-xl font-bold mb-1 text-blue-900">{item.name}</h3>
              </a>
              <p className="text-blue-600 font-medium mb-2">{item.subtitle}</p>
              <p className="text-gray-600 text-sm mb-4 flex-1">{item.details}</p>
              
              <div className="flex items-center justify-between mt-auto">
                {
                  item.price === "Contact For Price" ? (
                    <span className="text-md font-bold text-pink-600">Contact Us For Price</span>
                  ) : (
                    <>
                      <span className="text-xl font-bold text-pink-600">{item.price}</span>
                      <Link
                        href={`/tours/${item.slug}`}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition-colors"
                      >
                        Book Now
                      </Link>
                    </>
                  )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}