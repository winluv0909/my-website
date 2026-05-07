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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const navStyle = scrolled
  ? `
    bg-white/70
    backdrop-blur-2xl
    border-b
    border-white/20
    shadow-[0_8px_30px_rgb(0,0,0,0.04)]
  `
  : "bg-transparent";

  const linkStyle = (path) =>
  `
    relative
    block
    py-2
    text-sm
    tracking-wide
    transition-all
    duration-300
    ${
      pathname === path
        ? "text-black font-semibold"
        : "text-gray-500 hover:text-black"
    }
  `;

  const mobileLinkStyle = (path) =>
    `text-lg py-3 border-b border-gray-100 transition duration-300 ${
      pathname === path
        ? "text-black font-semibold"
        : "text-gray-500 hover:text-black"
    }`;

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navStyle}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex justify-between items-center">

          {/* LOGO */}
          <Link href="/">
            <div className="cursor-pointer">
              <h1 className="text-lg md:text-xl font-bold tracking-wide text-black">
                株式会社大崎総業
              </h1>

              <p className="text-[10px] md:text-xs text-gray-500 tracking-[0.2em] uppercase">
                OOSAKI SOGYO CO., LTD.
              </p>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/" className={desktopLinkStyle("/")}>
              Home
            </Link>

            <Link href="/about" className={desktopLinkStyle("/about")}>
              About
            </Link>

            <Link href="/services" className={desktopLinkStyle("/services")}>
              Services
            </Link>

            <Link
              href="/achievements"
              className={desktopLinkStyle("/achievements")}
            >
              Achievements
            </Link>

            <Link href="/contact" className={desktopLinkStyle("/contact")}>
              Contact
            </Link>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative z-[60] w-10 h-10 flex items-center justify-center"
          >
            <div className="relative w-6 h-6">

              <span
                className={`absolute left-0 top-1 w-6 h-0.5 bg-black transition-all duration-300 ${
                  open ? "rotate-45 top-3" : ""
                }`}
              ></span>

              <span
                className={`absolute left-0 top-3 w-6 h-0.5 bg-black transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              ></span>

              <span
                className={`absolute left-0 top-5 w-6 h-0.5 bg-black transition-all duration-300 ${
                  open ? "-rotate-45 top-3" : ""
                }`}
              ></span>

            </div>
          </button>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* MOBILE MENU */}
      <div className="md:hidden bg-white/80 backdrop-blur-2xl border-t border-white/20 px-6 pb-6 shadow-xl">
        <div className="pt-28 px-8 flex flex-col">

          <Link
            href="/"
            className={mobileLinkStyle("/")}
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={mobileLinkStyle("/about")}
            onClick={() => setOpen(false)}
          >
            About
          </Link>

          <Link
            href="/services"
            className={mobileLinkStyle("/services")}
            onClick={() => setOpen(false)}
          >
            Services
          </Link>

          <Link
            href="/achievements"
            className={mobileLinkStyle("/achievements")}
            onClick={() => setOpen(false)}
          >
            Achievements
          </Link>

          <Link
            href="/contact"
            className={mobileLinkStyle("/contact")}
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>

          {/* Bottom info */}
          <div className="mt-12 text-sm text-gray-400 leading-relaxed">
            <p>〒370-0115 群馬県伊勢崎市境美原1-9</p>
            <p className="mt-2">info@osaki-sogyo.com</p>
          </div>

        </div>
      </div>
    </>
  );
}