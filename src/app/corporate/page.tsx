import Link from "next/link";
import {
  Building2,
  ChevronRight,
  BanknoteX,
  Users,
  Clock,
  ShieldCheck,
  Phone,
  Mail,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";
import { SITE, hasPhone } from "@/lib/site";

export const metadata: Metadata = {
  title: "Corporate Accounts",
  description:
    "Set up a corporate transportation account with SG Limo. Dependable, flat-rate chauffeured service for executives, staff, and visiting clients across NYC, Long Island, Connecticut, and New Jersey.",
};

const benefits = [
  {
    icon: BanknoteX,
    title: "Predictable, Flat-Rate Billing",
    desc: "Flat rate plus tolls, wait time, and gratuity — confirmed in advance, so trip costs are never a surprise on your invoice.",
  },
  {
    icon: Users,
    title: "One Point of Contact",
    desc: "Coordinate every ride directly, rather than dealing with a rotating cast of rideshare drivers or a call center.",
  },
  {
    icon: Clock,
    title: "Built for Recurring Travel",
    desc: "Ideal for standing airport runs, client pickups, and regular executive transportation.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    desc: `Commercially insured with ${SITE.insuranceLabel}, backed by ${SITE.experienceYears} years of professional driving experience.`,
  },
];

const useCases = [
  "Executive airport transfers (JFK, LaGuardia, Newark)",
  "Visiting client pickup and drop-off",
  "Recurring commute for leadership team members",
  "Off-site meetings, conferences, and events",
  "Multi-passenger transportation for staff outings",
];

export default function CorporatePage() {
  return (
    <>
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#111]/80 to-[#0A0A0A]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Breadcrumbs crumbs={[{ label: "Home", href: "/" }, { label: "Corporate Accounts" }]} />
          <p className="text-xs font-semibold tracking-[0.4em] uppercase text-[#C9A84C] mb-4">
            For Businesses
          </p>
          <h1 className="text-5xl md:text-6xl font-black mb-6">Corporate Accounts</h1>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-[#999] text-lg max-w-2xl mx-auto leading-relaxed">
            Dependable, flat-rate transportation for your executives, staff, and visiting clients
            — across the five boroughs, Long Island, Connecticut, and New Jersey.
          </p>
        </div>
      </section>

      <section className="section-darker py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C9A84C] mb-3">
              Why Companies Choose {SITE.name}
            </p>
            <h2 className="text-4xl font-black mb-4">Built for Business Travel</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="luxury-card p-7">
                  <div className="w-12 h-12 rounded-xl bg-[#1E1A0A] flex items-center justify-center mb-5">
                    <Icon size={20} className="text-[#C9A84C]" />
                  </div>
                  <h3 className="font-bold text-sm mb-2">{b.title}</h3>
                  <p className="text-xs text-[#999] leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-dark py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#1E1A0A] flex items-center justify-center mb-6">
                <Building2 size={22} className="text-[#C9A84C]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                Common Corporate <span className="text-gold-gradient">Use Cases</span>
              </h2>
              <div className="gold-divider mb-8" />
              <p className="text-[#999] text-base leading-relaxed mb-6">
                Whether it&apos;s a standing airport account or occasional client transportation,
                we tailor the arrangement to how your business actually operates.
              </p>
              <ul className="space-y-3">
                {useCases.map((u) => (
                  <li key={u} className="flex items-start gap-3 text-sm text-[#CCCCCC]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-2 shrink-0" />
                    {u}
                  </li>
                ))}
              </ul>
            </div>
            <div className="luxury-card p-8 md:p-10">
              <h3 className="text-xl font-bold mb-2">Set Up an Account</h3>
              <p className="text-sm text-[#999] mb-8 leading-relaxed">
                Email us with your company name, expected trip volume, and typical routes — we&apos;ll
                follow up to set up billing and a recurring booking process.
              </p>
              <div className="space-y-4">
                <a
                  href={`mailto:${SITE.email}?subject=Corporate%20Account%20Inquiry`}
                  className="btn-gold w-full py-4 rounded-lg text-sm uppercase tracking-widest font-bold flex items-center justify-center gap-2"
                >
                  <Mail size={16} />
                  Email {SITE.email}
                </a>
                {hasPhone && (
                  <a
                    href={SITE.phoneHref}
                    className="btn-outline-gold w-full py-4 rounded-lg text-sm uppercase tracking-widest font-bold flex items-center justify-center gap-2"
                  >
                    <Phone size={16} />
                    Call {SITE.phone}
                  </a>
                )}
                <Link
                  href="/quote"
                  className="block text-center text-xs text-[#999] hover:text-[#C9A84C] transition-colors pt-2"
                >
                  Or submit a general quote request →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-darker py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">
            Let&apos;s Build a <span className="text-gold-gradient">Reliable Arrangement.</span>
          </h2>
          <p className="text-[#999] text-base mb-8 leading-relaxed">
            No app, no algorithm — just a direct relationship with your driver.
          </p>
          <Link
            href="/quote"
            className="btn-gold px-10 py-4 rounded-lg text-sm uppercase tracking-widest font-bold inline-flex items-center justify-center gap-2"
          >
            Get Started
            <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
