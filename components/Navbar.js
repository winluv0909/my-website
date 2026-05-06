"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navStyle = scrolled
    ? "bg-white/70 backdrop-blur-md shadow-sm border-b border-white/30"
    : "bg-transparent";

  const linkStyle = (path) =>
    `block py-2 transition ${
      pathname === path
        ? "text-black font-semibold"
        : "text-gray-500 hover:text-black"
    }`;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${navStyle}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="font-semibold text-lg">株式会社大崎総業</h1>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/" className={linkStyle("/")}>Home</Link>
          <Link href="/about" className={linkStyle("/about")}>About</Link>
          <Link href="/services" className={linkStyle("/services")}>Services</Link>
          <Link href="/achievements" className={linkStyle("/achievements")}>Achievements</Link>
          <Link href="/contact" className={linkStyle("/contact")}>Contact</Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
<span className={`w-6 h-0.5 bg-black transition ${open ? "rotate-45 translate-y-1.5" : ""}`}></span>
<span className={`w-6 h-0.5 bg-black transition ${open ? "opacity-0" : ""}`}></span>
<span className={`w-6 h-0.5 bg-black transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></span>

        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200 px-6 pb-4">
          <nav className="flex flex-col text-sm mt-4">
            <Link href="/" className={linkStyle("/")} onClick={() => setOpen(false)}>Home</Link>
            <Link href="/about" className={linkStyle("/about")} onClick={() => setOpen(false)}>About</Link>
            <Link href="/services" className={linkStyle("/services")} onClick={() => setOpen(false)}>Services</Link>
            <Link href="/achievements" className={linkStyle("/achievements")} onClick={() => setOpen(false)}>Achievements</Link>
            <Link href="/contact" className={linkStyle("/contact")} onClick={() => setOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
