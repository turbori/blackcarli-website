import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE, hasPhone } from "@/lib/site";

const services = [
  { label: "Airport Transfers", slug: "airport" },
  { label: "Corporate Travel", slug: "corporate" },
  { label: "Point-to-Point", slug: "point-to-point" },
  { label: "Hourly / As-Directed", slug: "hourly" },
  { label: "Weddings & Events", slug: "weddings-events" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Corporate Accounts", href: "/corporate" },
  { label: "About", href: "/about" },
  { label: "Book a Ride", href: "/quote" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl font-black tracking-widest text-gold-gradient">
                {SITE.name}
              </span>
            </div>
            <p className="text-[#999] text-sm leading-relaxed">
              Private chauffeured sedans and SUVs serving the five boroughs of New York City, Long
              Island, Connecticut, and New Jersey.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-sm text-[#999] hover:text-[#C9A84C] transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[#999] hover:text-[#C9A84C] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              {hasPhone && (
                <li>
                  <a
                    href={SITE.phoneHref}
                    className="flex items-start gap-3 text-sm text-[#999] hover:text-[#C9A84C] transition-colors"
                  >
                    <Phone size={15} className="mt-0.5 shrink-0 text-[#C9A84C]" />
                    {SITE.phone}
                  </a>
                </li>
              )}
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-start gap-3 text-sm text-[#999] hover:text-[#C9A84C] transition-colors"
                >
                  <Mail size={15} className="mt-0.5 shrink-0 text-[#C9A84C]" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#999]">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[#C9A84C]" />
                NYC · Long Island · Connecticut · New Jersey
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#1E1E1E] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#555]">
            &copy; {new Date().getFullYear()} {SITE.legalName} All rights reserved.
          </p>
          <p className="text-xs text-[#555]">
            Private Chauffeured Transportation — NYC, Long Island, Connecticut &amp; New Jersey
          </p>
        </div>
      </div>
    </footer>
  );
}
