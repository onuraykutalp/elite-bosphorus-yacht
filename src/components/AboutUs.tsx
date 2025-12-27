"use client";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

export default function AboutUs() {
  const { t } = useLanguage();
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-blue-50 via-white to-pink-50 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* IMAGE */}
        <div className="flex-1 flex justify-center mb-10 md:mb-0">
          <img
            src="/kiz-kulesi.jpg"
            alt="Elite Bosphorus Yacht"
            className="rounded-2xl shadow-lg w-full max-w-xl md:max-w-4xl object-cover border-4 border-white"
            loading="lazy"
          />
        </div>
        {/* TEXT */}
        <div className="flex-1">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-6">
            {t("about.title")} <span className="text-pink-600">Elite Bosphorus Yacht</span>
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            {t("about.description")}
          </p>
          <ul className="mb-6 space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-pink-600 mt-1">
                <svg width={22} height={22} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 6.293a1 1 0 00-1.414 0L9 12.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 00-1.414-1.414z" />
                </svg>
              </span>
              <span>
                <b>{t("about.luxuryFleet")}</b> {t("about.luxuryFleetDesc")}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-600 mt-1">
                <svg width={22} height={22} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 6.293a1 1 0 00-1.414 0L9 12.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 00-1.414-1.414z" />
                </svg>
              </span>
              <span>
                <b>{t("about.experiencedCrew")}</b> {t("about.experiencedCrewDesc")}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-600 mt-1">
                <svg width={22} height={22} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 6.293a1 1 0 00-1.414 0L9 12.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 00-1.414-1.414z" />
                </svg>
              </span>
              <span>
                <b>{t("about.unforgettableMoments")}</b> {t("about.unforgettableMomentsDesc")}
              </span>
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/tours"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full shadow transition"
            >
              {t("common.viewTours")}
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-blue-100 text-blue-800 hover:bg-blue-200 font-semibold py-3 px-8 rounded-full shadow transition border border-blue-200"
            >
              {t("common.contact")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
