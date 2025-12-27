import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elite Bosphorus Yacht",
  description: "Elite Bosphorus Yacht | Yacht Rental",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png", 
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <LanguageProvider>
          <Header />
          {/* Modern WhatsApp Button */}
          <a
            href="https://wa.me/905325429814"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed z-50 bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all p-0 w-14 h-14 flex items-center justify-center"
            style={{ boxShadow: "0 4px 24px 0 rgba(37, 211, 102, 0.3)" }}
            aria-label="WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={28}
              height={28}
              fill="none"
              viewBox="0 0 24 24"
            >
              <g>
                <circle cx="12" cy="12" r="12" fill="#25D366"/>
                <path
                  d="M16.85 13.77c-.24-.12-1.37-.67-1.59-.75-.21-.08-.37-.12-.53.12-.15.24-.6.75-.74.91-.13.16-.27.18-.5.06-.24-.12-1.02-.38-1.93-1.19-.72-.64-1.2-1.41-1.33-1.65-.14-.24-.01-.37.11-.49.12-.12.24-.28.36-.41.12-.14.15-.24.23-.4.08-.16.04-.28-.02-.39-.06-.12-.53-1.3-.73-1.77-.19-.47-.38-.41-.53-.42h-.45c-.15 0-.4.06-.61.28-.20.22-.8.77-.8 1.88 0 1.11.82 2.18.94 2.33.12.16 1.62 2.46 3.92 3.35.55.19.97.3 1.3.39.55.14 1.05.12 1.44.07.44-.06 1.37-.56 1.56-1.11.19-.55.19-1.02.13-1.11-.05-.09-.22-.15-.46-.27z"
                  fill="#fff"
                />
              </g>
            </svg>
          </a>
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
