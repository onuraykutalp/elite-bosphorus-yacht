"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface BannerProps {
  title: string;
  breadcrumb: { label: string; href?: string }[];
}

export default function BreadcrumbBanner({ title, breadcrumb }: BannerProps) {
  const { t } = useLanguage();
  return (
    <section className="relative h-[50vh] min-h-[320px] w-full flex items-center">
      {/* Background Image - uses next/image for better optimization & coverage */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/banner.jpg"
          alt="Bosphorus Yacht Tour"
          fill
          priority
          className="object-cover object-center md:object-[center_48%] w-full h-full"
          sizes="100vw"
        />
        {/* Daha fazla vurgulu bir gradient geçişi ve yoğun opaklık */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex w-full h-full items-center">
        <div className="w-full max-w-5xl mx-auto px-5 pt-10 md:pt-0">
          <nav className="mb-4 flex flex-wrap items-center gap-1 text-sm text-gray-200">
            {breadcrumb.map((item, index) => {
              // Check if label is a translation key (starts with common., tours., etc.)
              const labelText = item.label.includes(".") ? t(item.label) : item.label;
              return (
              <div key={index} className="flex items-center gap-1">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="transition hover:text-white hover:underline"
                  >
                    {labelText}
                  </Link>
                ) : (
                  <span className="text-white font-semibold">{labelText}</span>
                )}

                {index < breadcrumb.length - 1 && (
                  <ChevronRight className="h-4 w-4 opacity-80" />
                )}
              </div>
              );
            })}
          </nav>

          <h1 className="max-w-4xl text-4xl font-extrabold text-white drop-shadow-lg md:text-5xl lg:text-6xl">
            {t(title) || title}
          </h1>
        </div>
      </div>
    </section>
  );
}
