import Link from "next/link";
import Image from "next/image";
import {
  Plane,
  Building2,
  MapPinned,
  CalendarDays,
  Heart,
  CheckCircle,
  ChevronRight,
  Clock,
  Users,
  Luggage,
  Star,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Airport transfers, corporate transportation, point-to-point rides, hourly chauffeur service, and wedding/event transportation across NYC, Long Island, Connecticut, and New Jersey.",
};

const services = [
  {
    icon: Plane,
    title: "Airport Transportation",
    subtitle: "JFK · LaGuardia · Newark",
    desc: "Reliable, timely rides to and from all three major airports. Flight status is tracked, so pickup time adjusts automatically for delays or early arrivals.",
    features: [
      "Flight-aware scheduling",
      "Meet & greet at arrivals",
      "JFK, LGA, and EWR covered",
      "Early morning & late night",
    ],
  },
  {
    icon: Building2,
    title: "Corporate Transportation",
    subtitle: "For Businesses & Executives",
    desc: "Dependable black-car service for executives, staff, and visiting clients across the NYC metro area. Corporate account setups available.",
    features: [
      "Executive sedan & SUV fleet",
      "Recurring account billing",
      "Single point of contact",
      "Airport & city coverage",
    ],
  },
  {
    icon: MapPinned,
    title: "Point-to-Point",
    subtitle: "One Rate, One Ride",
    desc: "A straightforward transfer from pickup to destination — flat rate plus tolls, wait time, and gratuity, confirmed before you book.",
    features: [
      "Flat-rate pricing",
      "No surge, ever",
      "Confirmed before booking",
      "All five boroughs, LI, CT & NJ",
    ],
  },
  {
    icon: CalendarDays,
    title: "Hourly / As-Directed",
    subtitle: "Your Driver, Your Schedule",
    desc: "Retain a professional driver by the hour for business meetings, city errands, or a flexible day of multiple stops.",
    features: [
      "Multiple stops welcome",
      "Business or leisure use",
      "Billed by the hour",
      "Flexible scheduling",
    ],
  },
  {
    icon: Heart,
    title: "Weddings & Events",
    subtitle: "Arrive in Style",
    desc: "Weddings, galas, and nights out — arrive composed and on time, in a vehicle that matches the occasion.",
    features: [
      "Special occasion planning",
      "Group coordination available",
      "Professional presentation",
      "On-time, every time",
    ],
  },
];

const vehicleTypes = [
  {
    name: "Executive Sedan",
    passengers: "3",
    luggage: "3",
    image: "/fleet/executive-sedans.jpg",
    tag: "Everyday Rides",
  },
  {
    name: "Executive SUV",
    passengers: "6",
    luggage: "6",
    image: "/fleet/executive-suvs.jpg",
    tag: "Most Requested",
  },
  {
    name: "Van, Limo, or Sprinter",
    passengers: "Varies",
    luggage: "Varies",
    image:
      "https://images.pexels.com/photos/17455633/pexels-photo-17455633.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "By Request",
  },
];

export default function ServicesPage() {
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
          <Breadcrumbs crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]} />
          <p className="text-xs font-semibold tracking-[0.4em] uppercase text-[#C9A84C] mb-4">
            Private Transportation
          </p>
          <h1 className="text-5xl md:text-6xl font-black mb-6">Our Services</h1>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-[#999] text-lg max-w-2xl mx-auto leading-relaxed">
            Flat-rate chauffeured transportation for every occasion — airport transfers, corporate
            travel, and everything in between.
          </p>
        </div>
      </section>

      <section className="section-darker py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="luxury-card p-8 flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-[#1E1A0A] flex items-center justify-center mb-5">
                    <Icon size={22} className="text-[#C9A84C]" />
                  </div>
                  <h2 className="text-xl font-bold mb-1">{s.title}</h2>
                  <p className="text-xs text-[#C9A84C] font-medium tracking-wide mb-4">
                    {s.subtitle}
                  </p>
                  <p className="text-sm text-[#999] leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-2 mt-auto">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-xs text-[#BBBBBB]">
                        <CheckCircle size={13} className="text-[#C9A84C] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-dark py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C9A84C] mb-3">
              Our Fleet
            </p>
            <h2 className="text-4xl font-black mb-4">Vehicles for Every Occasion</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicleTypes.map((v) => (
              <div key={v.name} className="luxury-card overflow-hidden">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={v.image}
                    alt={`${v.name} — ${SITE.name} chauffeured transportation`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-bold tracking-wider uppercase bg-[#C9A84C] text-black px-2.5 py-1 rounded-full">
                    {v.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-base mb-3">{v.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-[#999]">
                      <Users size={11} className="text-[#C9A84C] shrink-0" />
                      <span>
                        Passengers: <span className="text-white">{v.passengers}</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#999]">
                      <Luggage size={11} className="text-[#C9A84C] shrink-0" />
                      <span>
                        Luggage: <span className="text-white">{v.luggage}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-[#555] mt-8 max-w-xl mx-auto">
            Photography above is representative stock imagery, not our actual vehicles. Real fleet
            photos are coming soon.
          </p>
        </div>
      </section>

      <section className="section-darker py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C9A84C] mb-3">
              Simple Process
            </p>
            <h2 className="text-4xl font-black mb-4">How It Works</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: CalendarDays,
                title: "Submit a Request",
                desc: "Fill out our quick quote form with your trip details — pickup, destination, date, and time.",
              },
              {
                step: "02",
                icon: Clock,
                title: "We Confirm & Quote",
                desc: "We respond promptly with a confirmed flat rate plus tolls, wait time, and gratuity.",
              },
              {
                step: "03",
                icon: Star,
                title: "Relax & Ride",
                desc: "Your driver arrives on time. Sit back and enjoy the ride.",
              },
            ].map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="text-center">
                  <div className="text-5xl font-black text-[#1E1A0A] mb-4">{step.step}</div>
                  <div className="w-14 h-14 rounded-full bg-[#1E1A0A] border border-[#C9A84C]/30 flex items-center justify-center mx-auto mb-5">
                    <Icon size={22} className="text-[#C9A84C]" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-sm text-[#999] leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-dark py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">
            Ready to <span className="text-gold-gradient">Book Your Ride?</span>
          </h2>
          <p className="text-[#999] text-base mb-8 leading-relaxed">
            Get a free, no-obligation quote. We serve NYC, Long Island, Connecticut, and New
            Jersey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="btn-gold px-10 py-4 rounded-lg text-sm uppercase tracking-widest font-bold inline-flex items-center justify-center gap-2"
            >
              Get a Free Quote
              <ChevronRight size={16} />
            </Link>
            <a
              href={`mailto:${SITE.email}`}
              className="btn-outline-gold px-10 py-4 rounded-lg text-sm uppercase tracking-widest inline-flex items-center justify-center"
            >
              {SITE.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
