import React from "react";

export default function AboutUs() {
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
            About <span className="text-pink-600">Elite Bosphorus Yacht</span>
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Elite Bosphorus Yacht offers unique, luxurious yacht experiences on the iconic waters of Istanbul. Whether it’s a dazzling <span className="font-semibold text-blue-700">Bosphorus sunset cruise</span>, a vibrant private celebration, or an unforgettable swimming tour, our dedicated team makes every journey magical.
          </p>
          <ul className="mb-6 space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-pink-600 mt-1">
                <svg width={22} height={22} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 6.293a1 1 0 00-1.414 0L9 12.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 00-1.414-1.414z" />
                </svg>
              </span>
              <span>
                <b>Luxury Yacht Fleet:</b> Modern, fully-equipped yachts for every occasion.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-600 mt-1">
                <svg width={22} height={22} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 6.293a1 1 0 00-1.414 0L9 12.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 00-1.414-1.414z" />
                </svg>
              </span>
              <span>
                <b>Experienced Crew:</b> Friendly, professional service for a seamless journey.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-600 mt-1">
                <svg width={22} height={22} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 6.293a1 1 0 00-1.414 0L9 12.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 00-1.414-1.414z" />
                </svg>
              </span>
              <span>
                <b>Unforgettable Moments:</b> Custom tours, events, and magical Bosphorus views.
              </span>
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/tours"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full shadow transition"
            >
              View Our Tours
            </a>
            <a
              href="/contact"
              className="inline-block bg-blue-100 text-blue-800 hover:bg-blue-200 font-semibold py-3 px-8 rounded-full shadow transition border border-blue-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
