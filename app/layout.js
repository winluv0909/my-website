import { Geist, Geist_Mono, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

import { Toaster } from "react-hot-toast";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import ScrollProgress from "../components/ScrollProgress";
import PageTransition from "../components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ✅ JAPANESE FONT */
const notoJP = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  metadataBase: new URL("https://osakisogyo.vercel.app"),

  title: {
    default: "株式会社大崎総業 | Oosaki Sogyo Co., Ltd.",
    template: "%s | 株式会社大崎総業",
  },

  description:
    "株式会社大崎総業は、日本における人材サービス・アウトソーシング・グローバル採用を提供する企業です。",

  keywords: [
    "株式会社大崎総業",
    "Oosaki Sogyo",
    "Japan manpower services",
    "Japanese outsourcing company",
    "人材派遣",
    "群馬県",
    "伊勢崎市",
    "Japanese staffing company",
    "外国人雇用",
    "global recruitment japan",
  ],

  authors: [{ name: "Oosaki Sogyo Co., Ltd." }],

  creator: "Oosaki Sogyo Co., Ltd.",
  publisher: "Oosaki Sogyo Co., Ltd.",

  openGraph: {
    title: "株式会社大崎総業 | Oosaki Sogyo Co., Ltd.",
    description:
      "日本における信頼性の高い人材サービス・アウトソーシング企業。",
    url: "https://osakisogyo.vercel.app",
    siteName: "株式会社大崎総業",
    locale: "ja_JP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "株式会社大崎総業",
    description:
      "日本における信頼性の高い人材サービス・アウトソーシング企業。",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="overflow-x-hidden">

        <ScrollProgress />

        {/* NAVBAR */}
        <Navbar />

        {/* TOASTER */}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#111",
              color: "#fff",
              borderRadius: "12px",
            },
          }}
        />

        {/* PAGE CONTENT */}
       <main className="pt-24 grow overflow-x-hidden">
        <PageTransition>
          {children}
        </PageTransition>
      </main>

        {/* BACK TO TOP */}
        <BackToTop />

        {/* FOOTER */}
        <Footer />

      </body>
    </html>
  );
}