import { Geist, Geist_Mono, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
/* ✅ ADD THIS */
const notoJP = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Oosaki Sogyo Co., Ltd.",
  description: "Providing reliable business solutions and manpower services since 1990.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
     <body className={`${notoJP.className} min-h-full flex flex-col`}>

        {/* ✅ NAVBAR */}
        <Navbar />
          <Toaster
             position="top-right"
             toastOptions={{
              style: {
              background: "#111",
              color: "#fff",
              borderRadius: "10px",
         },
      }}/>
        {/* ✅ PAGE CONTENT */}
        <main className="pt-24 grow">
          {children}
        </main>

        {/* ✅ FOOTER */}
        <Footer />

      </body>
    </html>
  );
}
