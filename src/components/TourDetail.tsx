"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
// import ReCAPTCHA from "react-google-recaptcha";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Modernized, elegant tour detail with glassmorphism, better spacing,
 * vibrant interactivity. Deniz/okyanus tonlarında renklerle yeniden düzenlendi.
 * Use tailwindcss v3+ and framer-motion v7+ for this UI.
 */

export default function TourDetail({ tour }: { tour: any }) {
  const [activeImage, setActiveImage] = useState(tour.images?.[0] || tour.image);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    adults: "",
    children: "",
    infants: "",
    notes: "",
    hotelName: "",
  });

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  // const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
        setIsBookingOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // if (!captchaValue) {
    //   alert("Please verify that you are not a robot.");
    //   return;
    // }

    setSending(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          user_name: formData.name,
          user_email: formData.email,
          user_phone: formData.phone,
          adult_count: formData.adults,
          child_count: formData.children,
          baby_count: formData.infants,
          tour_name: tour.mailTitle,
          tour_date: formData.date,
          special_notes: formData.notes,
          hotel_name: formData.hotelName,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        adults: "",
        children: "",
        infants: "",
        notes: "",
        hotelName: "",
      });
      // setCaptchaValue(null);
    } catch (err) {
      console.error("EmailJS Error:", err);
      alert("Something went wrong. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  // Updated color palette:
  // Instead of rose/fuchsia shades, we use teal, cyan, blue, sky and emeralds for sea/ocean vibes.
  // Example: from-teal-500 via-cyan-400 to-sky-500, text-cyan-700 etc.

  return (
    <>
      <div className="relative max-w-7xl mx-auto px-2 md:px-8 py-10 md:py-16">
        {/* FULLSCREEN IMAGE MODAL */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 flex justify-center items-center z-[10000] backdrop-blur-[2px]"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.img
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                src={activeImage}
                alt={`${tour.title} - ${tour.subtitle} - Elite Dinner Cruise`}
                className="max-w-3xl w-full max-h-[90vh] rounded-3xl shadow-2xl object-cover border-8 border-white/30"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* BOOKING FORM MODAL */}
        <AnimatePresence>
          {isBookingOpen && (
            <motion.div
              className="fixed inset-0 bg-gradient-to-br from-[#122858]/70 to-[#34d1bf]/30 flex justify-center items-center z-[10000] backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookingOpen(false)}
            >
              <motion.div
                initial={{ y: 60, opacity: 0, scale: 0.97 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 60, opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative w-full max-w-xl rounded-3xl p-8 sm:p-10 glass-box border border-cyan-300/10 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-5 right-5 rounded-full bg-gray-100/80 hover:bg-gray-200 shadow-sm text-gray-700 p-2 transition"
                  onClick={() => setIsBookingOpen(false)}
                  aria-label="Close Reservation Form"
                >
                  <svg width={22} height={22} fill="none" stroke="currentColor"><path d="M6 6l10 10M16 6L6 16" strokeWidth={2} strokeLinecap="round" /></svg>
                </button>

                <h2 className="text-4xl font-black mb-5 text-cyan-600 text-center tracking-tight drop-shadow-sm">Reservation</h2>
                <p className="text-center text-gray-600 mb-6 text-[1.10rem]">Book your tour securely. We'll confirm your reservation via email.</p>

                {success && (
                  <motion.div
                    initial={{opacity:0, y:8}}
                    animate={{opacity:1, y:0}}
                    className="mb-4 py-3 px-4 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-xl text-center font-medium"
                  >
                    &#10003; Reservation request sent successfully!
                  </motion.div>
                )}

                <form
                  className="w-full bg-white rounded-2xl shadow-xl px-6 py-8 sm:px-10 sm:py-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7 border border-gray-100"
                  onSubmit={handleSubmit}
                >
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold text-gray-700 text-base mb-1" htmlFor="name">
                      Full Name <span className="text-teal-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="rounded-lg border border-gray-200 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-400 transition shadow-sm text-[1rem] bg-gray-50 placeholder-gray-300"
                      placeholder="Your Name"
                      autoComplete="name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold text-gray-700 text-base mb-1" htmlFor="email">
                      Email <span className="text-teal-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="rounded-lg border border-gray-200 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-400 transition shadow-sm text-[1rem] bg-gray-50 placeholder-gray-300"
                      placeholder="your@email.com"
                      autoComplete="email"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold text-gray-700 text-base mb-1" htmlFor="phone">
                      Phone Number <span className="text-teal-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="rounded-lg border border-gray-200 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-400 transition shadow-sm text-[1rem] bg-gray-50 placeholder-gray-300"
                      placeholder="+99 555 000 0000"
                      autoComplete="tel"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold text-gray-700 text-base mb-1" htmlFor="date">
                      Date <span className="text-teal-500">*</span>
                    </label>
                    <input
                      id="date"
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="rounded-lg border border-gray-200 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-400 transition shadow-sm text-[1rem] bg-gray-50 placeholder-gray-300"
                    />
                  </div>
                  <div className="flex flex-col gap-2 sm:col-span-2">
                    <label className="font-semibold text-gray-700 text-base mb-1" htmlFor="hotelName">
                      Hotel for Pickup
                    </label>
                    <input
                      id="hotelName"
                      type="text"
                      name="hotelName"
                      value={formData.hotelName}
                      onChange={handleChange}
                      className="rounded-lg border border-gray-200 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-400 transition shadow-sm text-[1rem] bg-gray-50 placeholder-gray-300"
                      placeholder="Hotel Name"
                    />
                  </div>
                  <div className="flex flex-col gap-2 sm:col-span-2">
                    <label className="font-semibold text-gray-700 text-base mb-1" htmlFor="notes">
                      Special Requests
                    </label>
                    <textarea
                      id="notes"
                      rows={3}
                      name="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="rounded-lg border border-gray-200 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-400 transition shadow-sm text-[1rem] bg-gray-50 placeholder-gray-300 resize-none"
                      placeholder="Allergies, birthday, or other requests..."
                    ></textarea>
                  </div>
                  <div className="grid grid-cols-3 gap-4 sm:col-span-2">
                    <div className="flex flex-col gap-2">
                      <label className="font-semibold text-gray-700 text-base mb-1" htmlFor="adults">
                        Adults <span className="text-teal-500">*</span>
                      </label>
                      <input
                        id="adults"
                        type="number"
                        min="0"
                        name="adults"
                        value={formData.adults}
                        onChange={handleChange}
                        required
                        className="rounded-lg border border-gray-200 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-400 transition shadow-sm text-center text-[1rem] bg-gray-50 placeholder-gray-300"
                        placeholder="0"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-semibold text-gray-700 text-base mb-1" htmlFor="children">
                        Children
                      </label>
                      <input
                        id="children"
                        type="number"
                        min="0"
                        name="children"
                        value={formData.children}
                        onChange={handleChange}
                        className="rounded-lg border border-gray-200 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-400 transition shadow-sm text-center text-[1rem] bg-gray-50 placeholder-gray-300"
                        placeholder="0"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-semibold text-gray-700 text-base mb-1" htmlFor="infants">
                        Infants
                      </label>
                      <input
                        id="infants"
                        type="number"
                        min="0"
                        name="infants"
                        value={formData.infants}
                        onChange={handleChange}
                        className="rounded-lg border border-gray-200 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-400 transition shadow-sm text-center text-[1rem] bg-gray-50 placeholder-gray-300"
                        placeholder="0"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2 bg-gray-50 border border-teal-100 py-3 px-4 rounded-xl text-gray-800 text-base font-medium flex items-center gap-2 mt-2">
                    <span className="inline-flex w-7 h-7 bg-teal-100 text-cyan-700 flex items-center justify-center rounded-full text-xl shadow">🎫</span>
                    Selected Tour: <strong className="ml-1 text-teal-700">{tour.mailTitle}</strong>
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="sm:col-span-2 mt-4 bg-gradient-to-tr from-teal-600 to-sky-500 text-white py-3 rounded-xl font-bold text-lg shadow-xl hover:scale-105 active:scale-100 transition transform-gpu disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <span className="flex items-center gap-2 justify-center">
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24"><circle cx={12} cy={12} r={10} fill="none" stroke="#fff" strokeWidth={4} opacity={0.3} /><path d="M12 2a10 10 0 0 1 10 10" fill="none" stroke="#fff" strokeWidth={4}></path></svg>
                        Sending...
                      </span>
                    ) : "Send Reservation"}
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* MAIN PAGE MODERNIZED */}
        <section className="lg:grid lg:grid-cols-[2fr_1.1fr] gap-16 lg:gap-12 z-10 relative">
          {/* Left: Tour Content */}
          <div className="flex flex-col">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-4xl md:text-5xl font-extrabold mb-3 text-gradient bg-gradient-to-tr from-teal-500 to-sky-500 bg-clip-text text-transparent drop-shadow-lg"
            >
              {tour.title}
            </motion.h1>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.50, delay: 0.05 }}
              className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900/70"
            >
              {tour.subtitle}
            </motion.h3>

            {/* Image Carousel */}
            <motion.div
              className="group rounded-3xl overflow-hidden shadow-2xl mb-5 bg-gradient-to-br from-white/40 via-cyan-50 to-sky-50 ring-1 ring-gray-200"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative">
                <img
                  src={activeImage}
                  alt={`${tour.title} - ${tour.subtitle} - Elite Dinner Cruise`}
                  className="w-full h-[340px] md:h-[440px] object-cover bg-white/40 cursor-zoom-in transition duration-200 ease-in group-hover:brightness-105 group-hover:scale-[1.025]"
                  onClick={() => setIsModalOpen(true)}
                  style={{borderRadius: "22px"}}
                />
                <span className="absolute bottom-2 right-4 px-3 py-1 rounded-full text-xs bg-black/40 text-white font-semibold backdrop-blur-2xl">
                  Click to enlarge
                </span>
              </div>
            </motion.div>

            <div className="flex gap-2 overflow-x-auto pb-5 pt-1 mb-2 hide-scrollbar">
              {(tour.images || []).map((img: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(img)}
                  aria-label={`View ${tour.title} image ${index + 1}`}
                  className={`rounded-xl overflow-hidden border-2 duration-150 min-w-[90px] h-[64px] shadow-md ${
                    activeImage === img
                      ? "border-cyan-500 shadow-sky-100 ring-2 ring-sky-200 scale-105"
                      : "border-gray-200 hover:scale-105"
                  } bg-white hover:shadow-cyan-100 transition-all`}
                >
                  <img
                    src={img}
                    alt={`${tour.title} image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            <p className="text-lg text-gray-700/90 leading-relaxed mb-12 mt-2 px-1">
              {tour.description}
            </p>

            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-700 mb-2 flex items-center">
                <span className="mr-1">🍽️</span> <span>{tour.menu.title}</span>
              </h2>
              <div className="bg-white/60 glass-box border border-gray-100 rounded-2xl p-5 shadow-md">
                <ul className="space-y-2 pt-1">
                  {tour.menu.items.map((item: string, index: number) => (
                    <li key={index} className="flex text-gray-700 text-base items-center">
                      <span className="text-teal-500 mr-3 text-[1.5em]">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-sky-700 mb-2 flex items-center">
                <span className="mr-2">🎭</span> <span>{tour.program.title}</span>
              </h2>
              <div className="bg-white/60 glass-box border border-gray-100 rounded-2xl p-5 shadow-md">
                <ul className="space-y-2 pt-1">
                  {tour.program.items.map((item: string, index: number) => (
                    <li key={index} className="flex text-gray-700 text-base items-center">
                      <span className="text-sky-500 mr-3 text-[1.5em]">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:sticky lg:top-24 h-fit z-100"
          >
            <div className="glass-box bg-white/80 backdrop-blur-xl shadow-2xl border border-gray-200 rounded-3xl px-7 py-10">
              <h3 className="text-2xl font-black text-cyan-700 mb-7 text-center">Tour Highlights</h3>
              <div className="space-y-5 text-gray-700 text-base font-medium px-1">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-[1.04em]">⏱ Duration:</span>
                  <span className="font-bold text-gray-900">{tour.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1">🍹 Drinks:</span>
                  <span>{tour.drinks}</span>
                </div>
                <div className="mt-4 flex items-center justify-between text-cyan-700 text-lg font-bold">
                  <span>Total Price:</span>
                  <span className="text-gradient bg-gradient-to-br from-teal-500 to-sky-600 bg-clip-text text-transparent">
                    {tour.price}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsBookingOpen(true)}
                className="mt-8 w-full bg-gradient-to-r from-teal-500 to-sky-500 text-white py-4 rounded-full text-xl font-semibold shadow-xl hover:scale-[1.03] transition-all focus:outline-cyan-700 ring-2 ring-transparent hover:ring-cyan-300"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        </section>

        {/* Small CSS tweaks for even more modern feel (if using Tailwind config) */}
        <style jsx global>{`
          .glass-box {
            background: rgba(255,255,255,0.82);
            box-shadow: 0 10px 30px 2px rgba(49,10,67,0.11), 0 0.5px 12px 0 rgba(28,164,210,0.09);
            backdrop-filter: blur(10px) saturate(1.065);
          }
          .input-modern {
            @apply border-none rounded-xl px-4 py-3 bg-white/80 ring-2 ring-cyan-200 text-gray-800 shadow-sm transition-all focus:bg-white focus:ring-cyan-400 focus:ring-2;
          }
          .text-gradient {
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar { -ms-overflow-style:none; scrollbar-width:none; }
        `}</style>
      </div>
    </>
  );
}
