"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Page() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto max-w-2xl text-gray-600">
            Plan your Bosphorus yacht tour with us. Reach out for reservations,
            special requests or private events.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-2xl font-semibold">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+90 555 000 00 00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">info@elitebosphorusyacht.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600">
                      Istanbul, Turkey – Bosphorus Marina
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 overflow-hidden rounded-2xl bg-gray-200">
              <div className="flex h-full items-center justify-center text-gray-500">
                Map Placeholder
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">Send Us a Message</h2>

            <form className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border px-4 py-3 focus:border-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Email</label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="w-full rounded-xl border px-4 py-3 focus:border-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your yacht tour request"
                  className="w-full rounded-xl border px-4 py-3 focus:border-blue-600 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
