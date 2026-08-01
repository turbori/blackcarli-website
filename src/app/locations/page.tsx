import Link from "next/link";
import { MapPin, ChevronRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas — NYC, Long Island, Connecticut & New Jersey",
  description: `${SITE.name} serves the five boroughs of New York City, Long Island, Connecticut, and New Jersey. Private chauffeured transportation across the tri-state area.`,
};

const boroughs = [
  { name: "Manhattan", slug: "manhattan", desc: "Fast, discreet black car service across Midtown, Lower Manhattan, and the Upper East and West Sides." },
  { name: "Brooklyn", slug: "brooklyn", desc: "Point-to-point and airport transfers across Brooklyn's neighborhoods." },
  { name: "Queens", slug: "queens", desc: "Home to JFK and LaGuardia — our most requested airport transfer borough." },
  { name: "The Bronx", slug: "bronx", desc: "Reliable transportation across the Bronx and into Manhattan or Westchester." },
  { name: "Staten Island", slug: "staten-island", desc: "Airport and city transfers for Staten Island residents and businesses." },
];

const longIsland = [
  { name: "Garden City", slug: "garden-city", desc: "Corporate and airport transportation for Nassau County's business hub." },
  { name: "Great Neck", slug: "great-neck", desc: "Executive travel and airport transfers close to Manhattan and JFK." },
  { name: "Melville", slug: "melville", desc: "Corporate account service for Suffolk County's office corridor." },
  { name: "Huntington", slug: "huntington", desc: "Point-to-point and event transportation on the North Shore." },
];

const connecticut = [
  { name: "Greenwich", slug: "greenwich", desc: "Executive black car service for Fairfield County's most affluent community." },
  { name: "Stamford", slug: "stamford", desc: "Corporate travel and airport transfers for Stamford's business district." },
];

const newJersey = [
  { name: "Jersey City", slug: "jersey-city", desc: "Cross-Hudson transportation for Jersey City professionals and travelers." },
  { name: "Hoboken", slug: "hoboken", desc: "Fast, flat-rate service into Manhattan and to all three area airports." },
];

function CityCard({ name, slug, desc }: { name: string; slug: string; desc: string }) {
  return (
    <Link href={`/locations/${slug}`} className="luxury-card p-7 group flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-lg bg-[#1E1A0A] flex items-center justify-center shrink-0">
          <MapPin size={14} className="text-[#C9A84C]" />
        </div>
        <h2 className="font-bold text-base group-hover:text-[#C9A84C] transition-colors">
          {name}
        </h2>
      </div>
      <p className="text-xs text-[#999] leading-relaxed flex-1">{desc}</p>
      <div className="flex items-center gap-1 text-xs text-[#C9A84C] mt-5 font-medium">
        View Service <ChevronRight size={12} />
      </div>
    </Link>
  );
}

function Group({ region, title, cities }: { region: string; title: string; cities: typeof boroughs }) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <div>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C9A84C]">{region}</p>
          <h2 className="text-2xl font-black">{title}</h2>
        </div>
        <div className="flex-1 h-px bg-[#2A2A2A]" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {cities.map((city) => (
          <CityCard key={city.slug} {...city} />
        ))}
      </div>
    </div>
  );
}

export default function LocationsPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#111]/80 to-[#0A0A0A]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Breadcrumbs crumbs={[{ label: "Home", href: "/" }, { label: "Locations" }]} />
          <p className="text-xs font-semibold tracking-[0.4em] uppercase text-[#C9A84C] mb-4">
            Where We Operate
          </p>
          <h1 className="text-5xl md:text-6xl font-black mb-6">Our Service Areas</h1>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-[#999] text-lg max-w-2xl mx-auto leading-relaxed">
            {SITE.name} covers the five boroughs of New York City, Long Island, Connecticut, and
            New Jersey.
          </p>
        </div>
      </section>

      <section className="section-darker py-16 px-6 pb-24">
        <div className="max-w-7xl mx-auto space-y-16">
          <Group region="New York City" title="The Five Boroughs" cities={boroughs} />
          <Group region="New York" title="Long Island" cities={longIsland} />
          <Group region="Tri-State" title="Connecticut" cities={connecticut} />
          <Group region="Tri-State" title="New Jersey" cities={newJersey} />

          <div className="luxury-card p-10 text-center">
            <h2 className="text-2xl font-black mb-4">
              Don&apos;t see your town?{" "}
              <span className="text-gold-gradient">We likely still serve you.</span>
            </h2>
            <p className="text-[#999] text-sm max-w-xl mx-auto mb-7 leading-relaxed">
              {SITE.name} covers all of the five boroughs, Long Island, Connecticut, and New
              Jersey. If you&apos;re not sure we cover your area, reach out — we most likely do.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="btn-gold px-8 py-3.5 rounded-lg text-sm uppercase tracking-widest font-bold inline-flex items-center justify-center gap-2"
              >
                Request a Quote
                <ChevronRight size={15} />
              </Link>
              <a
                href={`mailto:${SITE.email}`}
                className="btn-outline-gold px-8 py-3.5 rounded-lg text-sm uppercase tracking-widest inline-flex items-center justify-center"
              >
                {SITE.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
