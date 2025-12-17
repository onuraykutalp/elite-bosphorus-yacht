import React from "react";
import Link from "next/link";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Tours", href: "/#tours" },
      { label: "Contact", href: "/#contact" },
      { label: "About", href: "/#about" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Sunset Cruise", href: "/tours/sunset-cruise-tour" },
      { label: "Dinner Cruise", href: "/tours/dinner-cruise-tour" },
      { label: "Swimming Tour", href: "/tours/swimming-tour" },
      { label: "Special Celebration", href: "/tours/special-celebration-tour" },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        label: "info@elitebosphorusyacht.com",
        href: "mailto:info@elitebosphorusyacht.com",
      },
      { label: "+90 532 000 00 00", href: "tel:+905320000000" },
      {
        label: "Istanbul, Bosphorus",
        href: "https://maps.google.com",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {/* Logo/Brand */}
          <div className="mb-8 md:mb-0 flex-shrink-0">
            <Link href="/">
              <span className="text-2xl font-extrabold text-white tracking-wide hover:text-[#F5F1DC] transition-colors cursor-pointer">
                Elite Bosphorus Yacht
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-gray-400 text-sm">
              Luxury yacht tours & experiences on the beautiful Bosphorus. Unforgettable journeys await!
            </p>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 flex-1">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-bold mb-4 text-[#F5F1DC]">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("http") || link.href.startsWith("mailto") || link.href.startsWith("tel") ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-white transition-colors"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="hover:text-white transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <span>
            &copy; {new Date().getFullYear()} Elite Bosphorus Yacht. All rights reserved.
          </span>
          <div className="flex space-x-4 mt-3 sm:mt-0">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
              aria-label="Instagram"
            >
              <svg width="20" height="20" fill="currentColor" className="inline">
                <path d="M7 2C4.243 2 2 4.243 2 7v6c0 2.757 2.243 5 5 5h6c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm7 2c1.654 0 3 1.346 3 3v6c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h7zm-3.5 3A3.5 3.5 0 1 0 14 10.5 3.504 3.504 0 0 0 10.5 7zm0 1.5a2 2 0 1 1-2 2 2 2 0 0 1 2-2zm4.75-.25a.75.75 0 1 1-.75.75.751.751 0 0 1 .75-.75z" />
              </svg>
            </a>
            <a
              href="https://wa.me/905320000000"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
              aria-label="WhatsApp"
            >
              <svg width="20" height="20" fill="currentColor" className="inline">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.671.15-.198.297-.768.967-.941 1.166-.173.198-.347.223-.644.074a7.373 7.373 0 0 1-2.206-1.354c-.815-.726-1.368-1.623-1.528-1.9-.16-.272-.017-.418.12-.566.124-.123.298-.32.447-.48.149-.16.198-.273.298-.446.099-.172.05-.322-.025-.47-.074-.146-.673-1.624-.922-2.217-.243-.584-.492-.506-.672-.516l-.573-.012c-.182 0-.475.07-.724.323C4.282 8.656 4 9.47 4 10.308c0 1.993 1.439 4.283 4.006 5.973C9.952 16.982 11.485 17.5 13 17.5c.838 0 1.652-.282 2.243-.484.256-.089.465-.17.588-.272.123-.102.212-.188.342-.36.13-.173.218-.295.272-.414.055-.12.055-.221.04-.246zm-7.053-11.384A8.006 8.006 0 0 0 2 10c0 1.16.263 2.337.812 3.406l-1.06 3.877a1.002 1.002 0 0 0 1.24 1.238l3.876-1.058C8.664 18.74 9.84 19 11 19c4.418 0 8-3.582 8-8 0-2.132-.832-4.138-2.345-5.654A7.958 7.958 0 0 0 10.42 3.002zm.58 15C6.037 18 3 14.963 3 11.42c0-3.543 3.037-6.58 6.58-6.58S16.16 7.877 16.16 11.42c0 3.543-3.037 6.58-6.58 6.58z"/>
              </svg>
            </a>
            <a
              href="mailto:info@elitebosphorusyacht.com"
              className="hover:text-blue-400"
              aria-label="Mail"
            >
              <svg width="20" height="20" fill="currentColor" className="inline">
                <path d="M2.5 4h15A1.5 1.5 0 0 1 19 5.5v9A1.5 1.5 0 0 1 17.5 16h-15A1.5 1.5 0 0 1 1 14.5v-9A1.5 1.5 0 0 1 2.5 4zm0 1A.5.5 0 0 0 2 5.5v.511l8 5.303 8-5.303V5.5a.5.5 0 0 0-.5-.5h-15zm16 2.489-7.417 4.924a1 1 0 0 1-1.166 0L2 7.488V14.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V7.489z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
