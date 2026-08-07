"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";
import { SITE, hasPhone } from "@/lib/site";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Corporate", href: "/corporate" },
  { label: "Locations", href: "/locations" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#2A2A2A]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-baseline gap-2">
            <span className="text-2xl font-black tracking-widest text-gold-gradient">
              {SITE.name}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium tracking-widest uppercase text-[#999] hover:text-[#C9A84C] transition-colors duration-200"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {hasPhone ? (
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-2 text-sm text-[#C9A84C] font-medium"
              >
                <Phone size={15} />
                {SITE.phone}
              </a>
            ) : (
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 text-sm text-[#C9A84C] font-medium"
              >
                <Mail size={15} />
                {SITE.email}
              </a>
            )}
            <Link
              href="/quote"
              className="btn-gold px-5 py-2.5 rounded-lg text-sm uppercase tracking-widest"
            >
              Book Now
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#999] hover:text-white"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#111111] border-t border-[#2A2A2A]">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium tracking-widest uppercase text-[#999] hover:text-[#C9A84C] transition-colors"
              >
                {l.label}
              </Link>
            ))}
            {hasPhone ? (
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-2 text-sm text-[#C9A84C] font-medium pt-2 border-t border-[#2A2A2A]"
              >
                <Phone size={15} />
                {SITE.phone}
              </a>
            ) : (
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 text-sm text-[#C9A84C] font-medium pt-2 border-t border-[#2A2A2A]"
              >
                <Mail size={15} />
                {SITE.email}
              </a>
            )}
            <Link
              href="/quote"
              onClick={() => setOpen(false)}
              className="btn-gold px-5 py-3 rounded-lg text-sm uppercase tracking-widest text-center"
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
