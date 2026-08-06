import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import Image from "next/image";
import { Shield, Clock, Wrench, Award, Mail, ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `${SITE.name} is a private chauffeur service serving NYC, Long Island, Connecticut, and New Jersey. ${SITE.experienceYears} years of professional driving experience, backed by a background in engineering.`,
};

const values = [
  {
    icon: Shield,
    title: "Insured & Prepared",
    desc: `Commercially insured with ${SITE.insuranceLabel}. Every ride is covered.`,
  },
  {
    icon: Clock,
    title: "Punctuality",
    desc: "Flights are tracked and routes are planned in advance, so you're never left waiting.",
  },
  {
    icon: Wrench,
    title: "An Engineer's Precision",
    desc: "A background in engineering shapes how every trip is planned — logistics, timing, and routing done right.",
  },
  {
    icon: Award,
    title: `${SITE.experienceYears} Years of Experience`,
    desc: "Over a decade of professional driving across the tri-state area — the routes, shortcuts, and traffic patterns are second nature.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: "url('/fleet/executive-suvs.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/50 to-[#0A0A0A]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Breadcrumbs crumbs={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <p className="text-xs font-semibold tracking-[0.4em] uppercase text-[#C9A84C] mb-4">
            Our Story
          </p>
          <h1 className="text-5xl md:text-6xl font-black mb-6">About {SITE.name}</h1>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-[#999] text-lg max-w-2xl mx-auto leading-relaxed">
            A private chauffeur service built on one standard: be the driver clients across the
            tri-state area actually trust.
          </p>
        </div>
      </section>

      <section className="section-darker py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C9A84C] mb-4">
                Who We Are
              </p>
              <h2 className="text-4xl font-black leading-tight mb-6">
                {SITE.experienceYears} Years Behind the Wheel.
                <br />
                <span className="text-gold-gradient">An Engineer&apos;s Mindset.</span>
              </h2>
              <div className="gold-divider mb-8" />
              <div className="space-y-5 text-[#999] text-base leading-relaxed">
                <p>
                  {SITE.name} was built for one type of client: someone who has used rideshare
                  apps, knows what&apos;s missing, and is ready for something more dependable.
                  We serve the five boroughs of New York City, Long Island, Connecticut, and New
                  Jersey with a standard of service that matches the rest of a demanding schedule.
                </p>
                <p>
                  Our founder has spent over {SITE.experienceYears} years driving professionally
                  across the tri-state area, with a background in engineering that shapes how
                  every trip is handled — planned routes, realistic timing, and no improvisation.
                  Whether it&apos;s an early airport departure or an evening event, the same
                  precision applies every time.
                </p>
                <p>
                  We are commercially insured and built around relationships, not transactions.
                  When you book with {SITE.name}, you know exactly who is driving — no app, no
                  algorithm, no uncertainty.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="luxury-card overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80"
                  alt={`Professional chauffeured vehicle — ${SITE.name}`}
                  width={900}
                  height={320}
                  className="w-full h-80 object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-4 luxury-card p-5 max-w-[190px] hidden lg:block">
                <div className="text-3xl font-black text-gold-gradient mb-1">
                  {SITE.experienceYears}+
                </div>
                <div className="text-xs text-[#999] leading-tight">
                  Years of professional driving experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C9A84C] mb-3">
              Our Principles
            </p>
            <h2 className="text-4xl font-black mb-4">What We Stand For</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="luxury-card p-7 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#1E1A0A] border border-[#C9A84C]/30 flex items-center justify-center mx-auto mb-5">
                    <Icon size={22} className="text-[#C9A84C]" />
                  </div>
                  <h3 className="font-bold text-base mb-3">{v.title}</h3>
                  <p className="text-xs text-[#999] leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-darker py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="luxury-card p-10 md:p-14 text-center">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C9A84C] mb-4">
              Where We Operate
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Proudly Serving the <span className="text-gold-gradient">Tri-State Area</span>
            </h2>
            <p className="text-[#999] max-w-2xl mx-auto text-sm leading-relaxed mb-8">
              From Manhattan to Montauk, and Greenwich to Jersey City — we know the routes, the
              airports, and the traffic patterns across the region.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-[#999] mb-8">
              {SITE.serviceAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 justify-center border border-[#2A2A2A] rounded-lg px-4 py-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0" />
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">
            Let&apos;s Ride <span className="text-gold-gradient">Together</span>
          </h2>
          <p className="text-[#999] text-base mb-8 leading-relaxed">
            Have questions or ready to book? Reach out — we&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="btn-gold px-10 py-4 rounded-lg text-sm uppercase tracking-widest font-bold inline-flex items-center justify-center gap-2"
            >
              Book a Ride
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
    </>
  );
}
