"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  
  const NAV_LINKS = [
    { href: "/", labelKey: "common.home" },
    { href: "/#about", labelKey: "common.about" },
    { href: "/tours", labelKey: "common.tours" },
    { href: "/contact", labelKey: "common.contact" }
  ];

  useEffect(() => {
    // Close menu on click outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMobileOpen(false);
      }
    };
    // Close menu on escape
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden"; // Prevent scroll
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="bg-gradient-to-r from-[#081829] via-[#081829] to-[#3A6D8C] shadow-lg w-full z-30">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="w-auto h-20" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-pink-200 transition font-medium text-lg"
            >
              {t(link.labelKey)}
            </Link>
          ))}
        </nav>
        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Language Switcher */}
          <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-2 py-1">
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded text-sm font-medium transition ${
                language === "en"
                  ? "bg-white text-[#081829]"
                  : "text-white hover:bg-white/20"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("tr")}
              className={`px-3 py-1 rounded text-sm font-medium transition ${
                language === "tr"
                  ? "bg-white text-[#081829]"
                  : "text-white hover:bg-white/20"
              }`}
            >
              TR
            </button>
          </div>
          <a href="/tours" className="relative bg-[#80A1BA] text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-[#081829] hover:text-white transition duration-200 cursor-pointer">
            {t("common.bookNow")}
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            className="text-white hover:text-pink-300 focus:outline-none"
            aria-label={mobileOpen ? t("header.menuClose") : t("header.menuOpen")}
            onClick={() => setMobileOpen(prev => !prev)}
          >
            {mobileOpen ? (
              // Close Icon
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            ) : (
              // Hamburger Icon
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 lg:hidden 
        ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        aria-hidden="true"
      ></div>
      {/* Mobile Sliding Menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 w-[85vw] max-w-xs h-full bg-gradient-to-b from-[#0a1b2d] via-[#17395b] to-[#3A6D8C] z-50 shadow-lg transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col py-7 px-6`}
        style={{ borderTopLeftRadius: "1.5rem", borderBottomLeftRadius: "1.5rem" }}
      >
        {/* Close Button for Mobile Menu */}
        <div className="flex items-center justify-between mb-10">
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <img src="/logo.png" alt="Logo" className="h-12" />
          </Link>
          <button
            aria-label={t("header.menuClose")}
            onClick={() => setMobileOpen(false)}
            className="text-white hover:text-pink-300"
            tabIndex={mobileOpen ? 0 : -1}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        {/* Navigation Links - Ultra Modern Mobile Style */}
        <nav className="flex flex-col space-y-6">
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-2xl font-semibold rounded-xl py-3 px-4 transition bg-white/0 hover:bg-white/10 active:bg-pink-100/10 focus:bg-pink-100/10 outline-none"
              style={{
                boxShadow: "0 2px 16px 0 rgba(65,105,225,.06)"
              }}
              onClick={() => setMobileOpen(false)}
              tabIndex={mobileOpen ? 0 : -1}
            >
              {t(link.labelKey)}
            </Link>
          ))}
        </nav>
        {/* Mobile Language Switcher */}
        <div className="mt-6 flex items-center justify-center space-x-2 bg-white/10 rounded-lg px-2 py-2">
          <button
            onClick={() => setLanguage("en")}
            className={`px-4 py-2 rounded text-sm font-medium transition ${
              language === "en"
                ? "bg-white text-[#081829]"
                : "text-white hover:bg-white/20"
            }`}
            tabIndex={mobileOpen ? 0 : -1}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("tr")}
            className={`px-4 py-2 rounded text-sm font-medium transition ${
              language === "tr"
                ? "bg-white text-[#081829]"
                : "text-white hover:bg-white/20"
            }`}
            tabIndex={mobileOpen ? 0 : -1}
          >
            TR
          </button>
        </div>
        {/* Mobile Book Now Button */}
        <div className="mt-6">
          <button
            className="w-full bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400 text-white font-semibold text-lg px-6 py-3 rounded-2xl shadow-xl hover:bg-pink-600 transition"
            tabIndex={mobileOpen ? 0 : -1}
            onClick={() => setMobileOpen(false)}
          >
            {t("common.bookNow")}
          </button>
        </div>
        <div className="flex-1"></div>
        
      </div>
    </header>
  );
};

export default Header;
