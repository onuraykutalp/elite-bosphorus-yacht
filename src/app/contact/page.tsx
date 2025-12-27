"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Page() {
  const { t } = useLanguage();
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            {t("contact.title")}
          </h1>
          <p className="mx-auto max-w-2xl text-gray-600">
            {t("common.contactDescription")}
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-2xl font-semibold">{t("common.getInTouch")}</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-medium">{t("common.phone")}</p>
                    <a href="tel:+905325429814" className="text-gray-600">+90 532 542 98 14</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-medium">{t("common.email")}</p>
                    <p className="text-gray-600">info@elitebosphorusyacht.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-medium">{t("common.location")}</p>
                    <p className="text-gray-600">
                      {t("contact.locationValue")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed - Cibali, Abdülezelpaşa Cd, 34083 Fatih/İstanbul */}
            <div className="w-full aspect-[4/2] rounded-2xl overflow-hidden border-2 border-blue-100 shadow-lg transition-all hover:shadow-2xl">
              <iframe
                title="Bosphorus Marina Map - Cibali"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6014.1991278655275!2d28.963807287962056!3d41.024114233820675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caba0d522d7f69%3A0xf0841cd8cb11d2f9!2sCibali%2C%20Abd%C3%BClezelpa%C5%9Fa%20Cd%2C%2034083%20Fatih%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1717952177002!5m2!1str!2str"
                style={{ border: 0, width: '100%', height: '100%' }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">{t("common.sendUsMessage")}</h2>

            <form className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium">{t("common.fullName")}</label>
                <input
                  type="text"
                  placeholder={t("common.yourName")}
                  className="w-full rounded-xl border px-4 py-3 focus:border-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">{t("common.email")}</label>
                <input
                  type="email"
                  placeholder={t("common.yourEmail")}
                  className="w-full rounded-xl border px-4 py-3 focus:border-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">{t("common.message")}</label>
                <textarea
                  rows={5}
                  placeholder={t("contact.messagePlaceholder")}
                  className="w-full rounded-xl border px-4 py-3 focus:border-blue-600 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                <Send className="h-5 w-5" />
                {t("common.sendMessage")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
