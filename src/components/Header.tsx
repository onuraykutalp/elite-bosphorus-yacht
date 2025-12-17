import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[#081829] via-[#081829] to-[#3A6D8C] shadow-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="w-auto h-20" />
          </Link>
        </div>
        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-white hover:text-pink-200 transition font-medium text-lg">
            Home
          </Link>
          <Link href="/#about" className="text-white hover:text-pink-200 transition font-medium text-lg">
            About Us
          </Link>
          <Link href="/tours" className="text-white hover:text-pink-200 transition font-medium text-lg">
            Tours
          </Link>
          <Link href="/contact" className="text-white hover:text-pink-200 transition font-medium text-lg">
            Contact Us
          </Link>
        </nav>
        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button className="relative bg-[#80A1BA] text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-[#081829] hover:text-white transition duration-200 cursor-pointer">
            Book Now
          </button>
          
        </div>
        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            className="text-white hover:text-pink-300 focus:outline-none"
            aria-label="Menüyü Aç"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
