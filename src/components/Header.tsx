"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

import Image from "next/image";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { numeral: "I.", label: "Services", href: "#services" },
    { numeral: "II.", label: "Selected Work", href: "#work" },
    { numeral: "III.", label: "Experience", href: "#experience" },
    { numeral: "IV.", label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAFAF8]/90 backdrop-blur-md border-b border-black/[0.06] py-3 shadow-xs"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <Link
          href="/"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="group -ml-2 flex items-center no-underline transition-opacity hover:opacity-80 cursor-pointer"
          aria-label="Henrik Nyhus Home"
        >
          <Image
            src="/images/logos/personal-logo.svg"
            alt="Henrik Nyhus"
            width={200}
            height={75}
            priority
            className="h-14 sm:h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs xl:text-sm font-medium text-black/70">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-black transition-colors relative py-1 flex items-baseline gap-1.5 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-black hover:after:w-full after:transition-all after:duration-200"
            >
              <span className="font-serif font-bold text-black/50 group-hover:text-black">
                {item.numeral}
              </span>
              <span>{item.label}</span>
            </a>
          ))}
          <a
            href="mailto:henrik.b.nyhus@gmail.com"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider bg-black text-white rounded-full hover:bg-black/85 transition-colors shrink-0"
          >
            Get in touch
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-black/80 hover:text-black focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAFAF8] border-b border-black/[0.08] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200 shadow-lg">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 text-base font-medium text-black/80 hover:text-black py-1"
            >
              <span className="font-serif font-bold text-black/40">
                {item.numeral}
              </span>
              <span>{item.label}</span>
            </a>
          ))}
          <div className="pt-2">
            <a
              href="mailto:henrik.b.nyhus@gmail.com"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 text-sm font-semibold bg-black text-white rounded-full"
            >
              Get in touch
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
