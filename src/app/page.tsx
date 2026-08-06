import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  ChevronRight,
  Plane,
  Building2,
  Heart,
  CalendarDays,
  MapPinned,
  MapPin,
  BanknoteX,
  UserCheck,
  Mail,
  Wrench,
  Baby,
  PawPrint,
} from "lucide-react";
import type { Metadata } from "next";
import { SITE, hasPhone } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE.name} | Private Chauffeur Service — NYC, Long Island, CT & NJ`,
  description: SITE.description,
  alternates: { canonical: SITE.url },
};

const services = [
  {
    icon: Plane,
    title: "Airport Transportation",
    desc: "Flight tracked, driver waiting — JFK, LaGuardia, and Newark covered, day or night.",
  },
  {
    icon: Building2,
    title: "Corporate Transportation",
    desc: "A polished, dependable ride that reflects your professional standard, from Manhattan to Long Island and back.",
  },
  {
    icon: MapPinned,
    title: "Point-to-Point",
    desc: "One pickup, one destination, one flat rate. No apps, no surge — just a confirmed ride.",
  },
  {
    icon: CalendarDays,
    title: "Hourly / As-Directed",
    desc: "Retain your driver by the hour for meetings, errands, or a full day on your schedule.",
  },
  {
    icon: Heart,
    title: "Weddings & Events",
    desc: "Nights out, weddings, and special occasions — arrive composed, on time, and in comfort.",
  },
];

const whyUs = [
  {
    icon: BanknoteX,
    title: "Flat-Rate Pricing",
    desc: "Your rate is flat rate plus tolls, wait time, and gratuity — confirmed before you book. No surge, no surprises.",
  },
  {
    icon: UserCheck,
    title: "One Driver, 14 Years of Experience",
    desc: "You're riding with an experienced professional, not a rotating cast of rideshare drivers.",
  },
  {
    icon: Wrench,
    title: "An Engineer's Approach",
    desc: "A background in engineering means routes, timing, and logistics are planned, not improvised.",
  },
  {
    icon: Shield,
    title: "Insured & Prepared",
    desc: `Commercially insured with ${SITE.insuranceLabel}. Car seats available and small pets welcome.`,
  },
];

const icpReasons = [
  {
    label: "You've been burned by surge pricing",
    sub: "Your rate is confirmed upfront — flat rate plus tolls, wait time, and gratuity.",
  },
  {
    label: "You need a driver who's actually there",
    sub: "14 years in the business. No cancellations, no last-minute surprises.",
  },
  {
    label: "You're building a corporate account",
    sub: "Reliable transportation for teams, clients, and recurring executive travel.",
  },
  {
    label: "You need door-to-door across the region",
    sub: "NYC to Long Island, Connecticut, or New Jersey — one call covers it all.",
  },
];

const serviceAreas = [
  { city: "Manhattan, NY", desc: "Fast, discreet black car service across Midtown, Lower Manhattan, and beyond." },
  { city: "Brooklyn & Queens, NY", desc: "Reliable point-to-point and airport transfers across both boroughs." },
  { city: "Long Island, NY", desc: "Corporate, airport, and event transportation across Nassau and Suffolk County." },
  { city: "Connecticut", desc: "Executive travel and airport transfers for Fairfield County and beyond." },
  { city: "New Jersey", desc: "Cross-state transportation for corporate clients and travelers." },
  { city: "The Bronx & Staten Island, NY", desc: "Full coverage across all five boroughs." },
];

const faqs = [
  {
    q: "How is your pricing structured?",
    a: "We use flat-rate pricing plus tolls, wait time, and gratuity. Your base rate is confirmed before you book, so there are no surprises regardless of traffic or time of day.",
  },
  {
    q: "What areas do you serve?",
    a: "We cover all five boroughs of New York City, Long Island, Connecticut, and New Jersey. If your trip starts or ends in one of these regions, we can help.",
  },
  {
    q: "What vehicles are in your fleet?",
    a: "Our core fleet is executive sedans (3 passengers, 3 bags) and SUVs (6 passengers, 6 bags). Vans, stretch limos, and sprinters can be arranged on request for larger groups.",
  },
  {
    q: "Do you accommodate car seats or pets?",
    a: "Yes. Car seats are available on request, and small pets are welcome — just let us know when you book.",
  },
  {
    q: "Do you work with corporate accounts?",
    a: "Yes. We're actively building relationships with corporate clients who need dependable, recurring transportation for executives, staff, or visiting clients across the NYC metro area.",
  },
  {
    q: "Are you licensed and insured?",
    a: `Yes — we carry ${SITE.insuranceLabel} and have over ${SITE.experienceYears} years of professional driving experience in the tri-state area.`,
  },
];

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "#080808",
            backgroundImage: `
            radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201,168,76,0.13) 0%, transparent 70%),
            radial-gradient(ellipse 60% 40% at 80% 110%, rgba(201,168,76,0.07) 0%, transparent 60%),
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 60px,
              rgba(201,168,76,0.025) 60px,
              rgba(201,168,76,0.025) 61px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 60px,
              rgba(255,255,255,0.015) 60px,
              rgba(255,255,255,0.015) 61px
            )
          `,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 120% 100% at 50% 50%, transparent 30%, rgba(0,0,0,0.7) 100%)",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-16">
          <p className="text-xs font-semibold tracking-[0.4em] uppercase text-[#C9A84C] mb-6">
            NYC · Long Island · Connecticut · New Jersey
          </p>
          <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tight mb-6">
            Your Private
            <br />
            <span className="text-gold-gradient">Chauffeur.</span>
            <br />
            Not a Rideshare.
          </h1>
          <p className="text-lg md:text-xl text-[#BBBBBB] max-w-2xl mx-auto mb-4 leading-relaxed">
            Flat-rate chauffeured transportation across the five boroughs, Long Island,
            Connecticut, and New Jersey — driven by {SITE.experienceYears} years of professional
            experience.
          </p>
          <p className="text-sm text-[#C9A84C] mb-10 font-medium tracking-wide">
            JFK · LGA · EWR · Manhattan · Long Island · Connecticut · New Jersey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="btn-gold px-8 py-4 rounded-lg text-sm uppercase tracking-widest font-bold inline-flex items-center justify-center gap-2"
            >
              Reserve Your Chauffeur
              <ChevronRight size={16} />
            </Link>
            <a
              href={`mailto:${SITE.email}`}
              className="btn-outline-gold px-8 py-4 rounded-lg text-sm uppercase tracking-widest inline-flex items-center justify-center gap-2"
            >
              <Mail size={15} />
              {SITE.email}
            </a>
          </div>
        </div>
      </section>

      {/* ─── ICP PAIN POINT STRIP ─────────────────────────────── */}
      <section className="bg-[#0D0D0D] border-y border-[#2A2A2A] py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-xs font-semibold tracking-[0.3em] uppercase text-[#C9A84C] mb-10">
            Built for Clients Who Expect More
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {icpReasons.map((r) => (
              <div key={r.label} className="flex flex-col gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                <p className="text-sm font-semibold text-white leading-snug">{r.label}</p>
                <p className="text-xs text-[#777] leading-relaxed">{r.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─────────────────────────────────────────── */}
      <section className="section-darker py-24 px-6" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C9A84C] mb-3">
              Our Services
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Every Occasion. Covered.</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="luxury-card p-8">
                  <div className="w-12 h-12 rounded-xl bg-[#1E1A0A] flex items-center justify-center mb-5">
                    <Icon size={22} className="text-[#C9A84C]" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{s.title}</h3>
                  <p className="text-sm text-[#999] leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="btn-outline-gold px-8 py-3.5 rounded-lg text-sm uppercase tracking-widest inline-flex items-center gap-2"
            >
              View All Services
              <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FLEET ────────────────────────────────────────────── */}
      <section className="bg-[#080808] py-16 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-[0.4em] uppercase text-[#C9A84C] mb-2">
              Our Fleet
            </p>
            <h2 className="text-3xl md:text-4xl font-black">Sedans &amp; SUVs. Always Clean.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                img: "/fleet/executive-sedans.jpg",
                name: "Executive Sedan",
                spec: "3 passengers · 3 bags",
              },
              {
                img: "/fleet/executive-suvs.jpg",
                name: "Executive SUV",
                spec: "6 passengers · 6 bags",
              },
              {
                img: "https://images.pexels.com/photos/17455633/pexels-photo-17455633.jpeg?auto=compress&cs=tinysrgb&w=800",
                name: "Vans, Limos & Sprinters",
                spec: "Arranged on request",
              },
            ].map((v) => (
              <div
                key={v.name}
                className="luxury-card overflow-hidden"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={v.img}
                    alt={v.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <p className="text-white text-base font-bold">{v.name}</p>
                  <p className="text-xs text-[#999] mt-1">{v.spec}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-[#555] mt-8 max-w-xl mx-auto">
            Photography above is representative stock imagery. Photos of our actual fleet are
            coming soon.
          </p>
        </div>
      </section>

      {/* ─── THE STANDARD ─────────────────────────────────────── */}
      <section className="section-dark py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C9A84C] mb-3">
                The {SITE.name} Standard
              </p>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
                A Relationship,
                <br />
                Not a <span className="text-gold-gradient">Transaction.</span>
              </h2>
              <div className="gold-divider mb-8" />
              <p className="text-[#999] text-base leading-relaxed mb-5">
                When you book with {SITE.name}, you know exactly who is picking you up. {SITE.experienceYears}{" "}
                years behind the wheel, plus a background in engineering, means every trip is
                planned — routes, timing, and logistics — not improvised.
              </p>
              <p className="text-[#999] text-base leading-relaxed mb-8">
                Our clients are professionals across NYC, Long Island, Connecticut, and New Jersey
                who expect their transportation to be as dependable as everything else in their
                life. That&apos;s exactly what we deliver.
              </p>
              <Link
                href="/quote"
                className="btn-gold px-8 py-4 rounded-lg text-sm uppercase tracking-widest font-bold inline-flex items-center gap-2"
              >
                Reserve Your Chauffeur
                <ChevronRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyUs.map((w) => {
                const Icon = w.icon;
                return (
                  <div key={w.title} className="luxury-card p-6">
                    <Icon size={20} className="text-[#C9A84C] mb-4" />
                    <h3 className="text-sm font-bold mb-2">{w.title}</h3>
                    <p className="text-xs text-[#999] leading-relaxed">{w.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CAR SEAT / PET FRIENDLY STRIP ────────────────────── */}
      <section className="section-darker py-14 px-6 border-y border-[#2A2A2A]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-center gap-4 justify-center">
            <Baby size={20} className="text-[#C9A84C] shrink-0" />
            <p className="text-sm text-[#CCCCCC]">Car seats available on request</p>
          </div>
          <div className="flex items-center gap-4 justify-center">
            <PawPrint size={20} className="text-[#C9A84C] shrink-0" />
            <p className="text-sm text-[#CCCCCC]">Small pets welcome onboard</p>
          </div>
        </div>
      </section>

      {/* ─── CORPORATE CTA ────────────────────────────────────── */}
      <section className="section-dark py-24 px-6">
        <div className="max-w-6xl mx-auto luxury-card p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C9A84C] mb-3">
              For Businesses
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-5">
              Set Up a <span className="text-gold-gradient">Corporate Account.</span>
            </h2>
            <p className="text-[#999] text-base leading-relaxed">
              Reliable, flat-rate transportation for your executives, staff, and visiting clients
              across the NYC metro area — with a single point of contact you can count on.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
            <Link
              href="/corporate"
              className="btn-gold px-8 py-4 rounded-lg text-sm uppercase tracking-widest font-bold inline-flex items-center justify-center gap-2"
            >
              Corporate Accounts
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SERVICE AREAS ────────────────────────────────────── */}
      <section className="section-darker py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C9A84C] mb-3">
              Where We Operate
            </p>
            <h2 className="text-4xl font-black mb-4">The Tri-State, Covered</h2>
            <div className="gold-divider mx-auto mb-6" />
            <p className="text-[#999] max-w-xl mx-auto text-sm leading-relaxed">
              From Manhattan to Montauk, Greenwich to Jersey City — we cover the full region.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceAreas.map((area) => (
              <div key={area.city} className="luxury-card p-6 flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-[#1E1A0A] flex items-center justify-center shrink-0">
                  <MapPin size={15} className="text-[#C9A84C]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1">{area.city}</h3>
                  <p className="text-xs text-[#999] leading-relaxed">{area.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/locations"
              className="text-xs text-[#C9A84C] font-medium tracking-widest uppercase inline-flex items-center gap-2 hover:opacity-75 transition-opacity"
            >
              View All Locations
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────── */}
      <section className="section-dark py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Done Gambling with
            <br />
            <span className="text-gold-gradient">Rideshares?</span>
          </h2>
          <p className="text-[#999] text-lg mb-4 leading-relaxed">
            Email or text us once. We&apos;ll handle everything from there.
          </p>
          <p className="text-sm text-[#555] mb-10">
            Flat rates · No surge · {SITE.experienceYears} years of experience · NYC, Long Island, CT &amp; NJ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="btn-gold px-10 py-4 rounded-lg text-sm uppercase tracking-widest font-bold inline-flex items-center justify-center gap-2"
            >
              Reserve Your Chauffeur
              <ChevronRight size={16} />
            </Link>
            <a
              href={`mailto:${SITE.email}`}
              className="btn-outline-gold px-10 py-4 rounded-lg text-sm uppercase tracking-widest inline-flex items-center justify-center gap-2"
            >
              <Mail size={15} />
              {SITE.email}
            </a>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────── */}
      <section className="section-darker py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C9A84C] mb-3">
              Common Questions
            </p>
            <h2 className="text-4xl font-black mb-4">Frequently Asked Questions</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="luxury-card group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="text-sm font-semibold pr-4">{faq.q}</span>
                  <ChevronRight
                    size={16}
                    className="text-[#C9A84C] shrink-0 transition-transform group-open:rotate-90"
                  />
                </summary>
                <div className="px-6 pb-6 text-sm text-[#999] leading-relaxed border-t border-[#2A2A2A] pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
          <p className="text-center text-xs text-[#555] mt-8">
            Still have questions?{" "}
            <a href={`mailto:${SITE.email}`} className="text-[#C9A84C] hover:underline">
              Email us at {SITE.email}
            </a>
            {hasPhone ? " or call us." : "."}
          </p>
        </div>
      </section>
    </>
  );
}
