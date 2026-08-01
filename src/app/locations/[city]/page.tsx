import Link from "next/link";
import { CheckCircle, ChevronRight, MapPin, Mail, Clock, Shield } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE, hasPhone } from "@/lib/site";

type Params = { city: string };

type CityInfo = {
  name: string;
  region: string;
  headline: string;
  subheadline: string;
  intro: string[];
  nearby: string[];
  airports: string[];
  useCases: string[];
};

const cityData: Record<string, CityInfo> = {
  manhattan: {
    name: "Manhattan",
    region: "New York City",
    headline: "Private Chauffeur Service in Manhattan, NY",
    subheadline: "Midtown, Lower Manhattan, and everywhere between — a driver who knows the city.",
    intro: [
      "Manhattan traffic, avenue timing, and tunnel congestion punish anyone relying on a rideshare app's estimate. SG Limo clients in Manhattan use us for corporate travel, airport transfers, and evening transportation where a confirmed pickup time actually matters.",
      "Flat-rate pricing plus tolls, wait time, and gratuity means your cost is confirmed before you book — regardless of bridge traffic or a late meeting.",
    ],
    nearby: ["Brooklyn", "Queens", "The Bronx", "Jersey City, NJ"],
    airports: ["LaGuardia (LGA) — ~25 min", "JFK International (JFK) — ~40 min", "Newark Liberty (EWR) — ~35 min"],
    useCases: [
      "Corporate travel across Midtown and Lower Manhattan",
      "Airport transfers to JFK, LGA, and EWR",
      "Evening events and dinners",
      "Client pickup and drop-off",
      "Hourly, as-directed chauffeur service",
    ],
  },
  brooklyn: {
    name: "Brooklyn",
    region: "New York City",
    headline: "Private Chauffeur Service in Brooklyn, NY",
    subheadline: "From Downtown Brooklyn to the waterfront, reliable transportation across the borough.",
    intro: [
      "Brooklyn's mix of residential neighborhoods and business districts means a wide range of pickup points — SG Limo covers all of them with the same flat-rate standard.",
      "Whether it's a JFK run from Park Slope or a corporate pickup in Downtown Brooklyn, your rate is confirmed before you book.",
    ],
    nearby: ["Manhattan", "Queens", "Staten Island"],
    airports: ["JFK International (JFK) — ~25 min", "LaGuardia (LGA) — ~30 min", "Newark Liberty (EWR) — ~45 min"],
    useCases: [
      "Airport transfers to JFK and LGA",
      "Corporate travel into Manhattan",
      "Evening and weekend events",
      "Point-to-point rides across the borough",
    ],
  },
  queens: {
    name: "Queens",
    region: "New York City",
    headline: "Airport & Car Service in Queens, NY",
    subheadline: "Home to JFK and LaGuardia — our most requested airport transfer borough.",
    intro: [
      "Queens sits at the center of the region's air travel, with both JFK and LaGuardia inside the borough. SG Limo provides flat-rate transfers to and from both, with flight status tracked so pickup timing adjusts automatically.",
      "We also serve Queens residents and businesses for corporate travel and point-to-point rides across the city.",
    ],
    nearby: ["Manhattan", "Brooklyn", "Nassau County, NY"],
    airports: ["JFK International (JFK) — on-borough", "LaGuardia (LGA) — on-borough", "Newark Liberty (EWR) — ~45 min"],
    useCases: [
      "JFK and LaGuardia airport transfers",
      "Corporate travel into Manhattan",
      "Point-to-point rides across Queens",
      "Family and group transportation",
    ],
  },
  bronx: {
    name: "The Bronx",
    region: "New York City",
    headline: "Private Car Service in The Bronx, NY",
    subheadline: "Reliable transportation across the Bronx and into Manhattan or Westchester.",
    intro: [
      "SG Limo covers the Bronx for airport transfers, corporate travel, and point-to-point rides, with the same flat-rate pricing used across the rest of the tri-state area.",
    ],
    nearby: ["Manhattan", "Westchester County, NY", "Connecticut"],
    airports: ["LaGuardia (LGA) — ~20 min", "JFK International (JFK) — ~35 min", "Newark Liberty (EWR) — ~40 min"],
    useCases: [
      "Airport transfers to LGA and JFK",
      "Corporate travel into Manhattan",
      "Local point-to-point rides",
    ],
  },
  "staten-island": {
    name: "Staten Island",
    region: "New York City",
    headline: "Private Car Service in Staten Island, NY",
    subheadline: "Airport and city transfers for Staten Island residents and businesses.",
    intro: [
      "SG Limo provides flat-rate transportation for Staten Island clients heading into Manhattan, out to the airports, or across into New Jersey.",
    ],
    nearby: ["Brooklyn", "Jersey City, NJ", "Manhattan"],
    airports: ["Newark Liberty (EWR) — ~35 min", "JFK International (JFK) — ~50 min", "LaGuardia (LGA) — ~55 min"],
    useCases: [
      "Airport transfers via the Verrazzano or through NJ",
      "Corporate travel into Manhattan",
      "Event and wedding transportation",
    ],
  },
  "garden-city": {
    name: "Garden City",
    region: "Long Island, NY",
    headline: "Corporate Car Service in Garden City, NY",
    subheadline: "Nassau County's business hub, served with flat-rate precision.",
    intro: [
      "Garden City's concentration of corporate offices and law firms makes it a natural fit for our corporate account service — recurring airport runs, client pickups, and executive travel with a single point of contact.",
      "We also handle point-to-point trips into Manhattan and airport transfers for Garden City residents.",
    ],
    nearby: ["Great Neck", "Manhattan", "Queens"],
    airports: ["JFK International (JFK) — ~25 min", "LaGuardia (LGA) — ~25 min", "Newark Liberty (EWR) — ~40 min"],
    useCases: [
      "Corporate account transportation",
      "Airport transfers to JFK and LGA",
      "Client pickup and drop-off",
      "Manhattan commute",
    ],
  },
  "great-neck": {
    name: "Great Neck",
    region: "Long Island, NY",
    headline: "Private Chauffeur Service in Great Neck, NY",
    subheadline: "Close to Manhattan and JFK — executive travel done right.",
    intro: [
      "Great Neck's proximity to both Manhattan and JFK makes it a frequent pickup point for our airport and corporate clients. SG Limo offers flat-rate service with a confirmed price before you book.",
    ],
    nearby: ["Garden City", "Queens", "Manhattan"],
    airports: ["JFK International (JFK) — ~20 min", "LaGuardia (LGA) — ~20 min", "Newark Liberty (EWR) — ~45 min"],
    useCases: [
      "Airport transfers to JFK and LGA",
      "Executive commute into Manhattan",
      "Evening events and dinners",
    ],
  },
  melville: {
    name: "Melville",
    region: "Long Island, NY",
    headline: "Corporate Transportation in Melville, NY",
    subheadline: "Suffolk County's office corridor, covered by a dependable car service.",
    intro: [
      "Melville's dense concentration of corporate campuses makes it a strong fit for our corporate account clients — recurring airport transfers and executive travel across Suffolk County.",
    ],
    nearby: ["Huntington", "Garden City", "Manhattan"],
    airports: ["JFK International (JFK) — ~45 min", "LaGuardia (LGA) — ~40 min", "Islip (ISP) — ~25 min"],
    useCases: [
      "Corporate account transportation",
      "Airport transfers across Long Island",
      "Client and visitor pickup",
    ],
  },
  huntington: {
    name: "Huntington",
    region: "Long Island, NY",
    headline: "Private Car Service in Huntington, NY",
    subheadline: "Point-to-point and event transportation on the North Shore.",
    intro: [
      "Huntington clients use SG Limo for weddings, events, and airport transfers — flat-rate pricing with a driver who knows the North Shore.",
    ],
    nearby: ["Melville", "Great Neck", "Manhattan"],
    airports: ["JFK International (JFK) — ~50 min", "LaGuardia (LGA) — ~45 min", "Islip (ISP) — ~30 min"],
    useCases: [
      "Wedding and event transportation",
      "Airport transfers",
      "Point-to-point rides across the North Shore",
    ],
  },
  greenwich: {
    name: "Greenwich",
    region: "Connecticut",
    headline: "Executive Car Service in Greenwich, CT",
    subheadline: "Fairfield County's most affluent community, served with the same flat-rate standard.",
    intro: [
      "Greenwich clients expect discretion and consistency — SG Limo provides flat-rate chauffeured transportation for executive travel, airport transfers, and events, with a driver you can rely on for every trip.",
    ],
    nearby: ["Stamford, CT", "Westchester County, NY", "The Bronx, NY"],
    airports: ["Westchester County (HPN) — ~25 min", "LaGuardia (LGA) — ~45 min", "JFK International (JFK) — ~60 min"],
    useCases: [
      "Executive and corporate travel",
      "Airport transfers to HPN, LGA, and JFK",
      "Event and gala transportation",
    ],
  },
  stamford: {
    name: "Stamford",
    region: "Connecticut",
    headline: "Corporate Car Service in Stamford, CT",
    subheadline: "Fairfield County's business district, covered for corporate travel and airport transfers.",
    intro: [
      "Stamford's corporate offices make it a strong fit for our corporate account service — recurring travel between Connecticut and the NYC metro area, billed with flat-rate consistency.",
    ],
    nearby: ["Greenwich, CT", "Westchester County, NY", "Manhattan"],
    airports: ["Westchester County (HPN) — ~25 min", "LaGuardia (LGA) — ~50 min", "JFK International (JFK) — ~65 min"],
    useCases: [
      "Corporate account transportation",
      "Airport transfers",
      "Manhattan travel for business",
    ],
  },
  "jersey-city": {
    name: "Jersey City",
    region: "New Jersey",
    headline: "Private Car Service in Jersey City, NJ",
    subheadline: "Cross-Hudson transportation for professionals and travelers.",
    intro: [
      "Jersey City's density of finance and corporate professionals makes it a regular pickup point for our Manhattan commuters and airport travelers. SG Limo covers Jersey City with the same flat-rate pricing used across the rest of our service area.",
    ],
    nearby: ["Hoboken, NJ", "Manhattan", "Staten Island, NY"],
    airports: ["Newark Liberty (EWR) — ~15 min", "LaGuardia (LGA) — ~40 min", "JFK International (JFK) — ~45 min"],
    useCases: [
      "Newark Airport transfers",
      "Manhattan corporate commute",
      "Evening and weekend NYC trips",
    ],
  },
  hoboken: {
    name: "Hoboken",
    region: "New Jersey",
    headline: "Private Car Service in Hoboken, NJ",
    subheadline: "Fast, flat-rate service into Manhattan and to all three area airports.",
    intro: [
      "Hoboken's proximity to Newark Airport and Manhattan makes it one of our most efficient pickup points in New Jersey. SG Limo covers Hoboken for corporate travel, airport transfers, and evening transportation.",
    ],
    nearby: ["Jersey City, NJ", "Manhattan", "Newark, NJ"],
    airports: ["Newark Liberty (EWR) — ~15 min", "LaGuardia (LGA) — ~35 min", "JFK International (JFK) — ~40 min"],
    useCases: [
      "Newark Airport transfers",
      "Manhattan corporate travel",
      "Evening and weekend NYC trips",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { city } = await params;
  const data = cityData[city];
  if (!data) return { title: "Location Not Found" };
  return {
    title: data.headline,
    description: `${data.intro[0].slice(0, 155)}...`,
  };
}

export default async function CityPage({ params }: { params: Promise<Params> }) {
  const { city } = await params;
  const data = cityData[city];
  if (!data) notFound();

  return (
    <>
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#111]/80 to-[#0A0A0A]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 text-xs text-[#999] hover:text-[#C9A84C] transition-colors mb-8"
          >
            ← All Service Areas
          </Link>
          <Breadcrumbs
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Locations", href: "/locations" },
              { label: data.name },
            ]}
          />
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={14} className="text-[#C9A84C]" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C9A84C]">
              {data.region}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">{data.headline}</h1>
          <div className="gold-divider mb-6" />
          <p className="text-[#999] text-lg leading-relaxed max-w-2xl">{data.subheadline}</p>
        </div>
      </section>

      <section className="section-darker py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              {data.intro.map((p, i) => (
                <p key={i} className="text-[#AAAAAA] text-base leading-relaxed">
                  {p}
                </p>
              ))}

              <div className="luxury-card p-8 mt-8">
                <h2 className="text-lg font-bold mb-5">
                  Common Reasons {data.name} Clients Book with {SITE.name}
                </h2>
                <ul className="space-y-3">
                  {data.useCases.map((u) => (
                    <li key={u} className="flex items-center gap-3 text-sm text-[#CCCCCC]">
                      <CheckCircle size={14} className="text-[#C9A84C] shrink-0" />
                      {u}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="luxury-card p-8">
                <h2 className="text-lg font-bold mb-5">Airport Access from {data.name}</h2>
                <ul className="space-y-3">
                  {data.airports.map((a) => (
                    <li key={a} className="flex items-center gap-3 text-sm text-[#CCCCCC]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[#555] mt-4">
                  * Approximate drive times under normal traffic conditions.
                </p>
              </div>

              <div className="luxury-card p-8">
                <h2 className="text-lg font-bold mb-3">Also Serving Nearby Areas</h2>
                <div className="flex flex-wrap gap-2 mt-4">
                  {data.nearby.map((n) => (
                    <span
                      key={n}
                      className="text-xs text-[#999] border border-[#2A2A2A] px-3 py-1.5 rounded-full"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="luxury-card p-7 border-[#C9A84C]/30">
                <h3 className="text-sm font-bold mb-5">Book Your Ride from {data.name}</h3>
                <div className="space-y-4 mb-6">
                  {[
                    { icon: Clock, text: "Flexible scheduling, 7 days a week" },
                    { icon: Shield, text: "Commercially insured" },
                    { icon: Mail, text: "Direct line to your driver" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3 text-xs text-[#999]">
                      <Icon size={13} className="text-[#C9A84C] shrink-0" />
                      {text}
                    </div>
                  ))}
                </div>
                <Link
                  href="/quote"
                  className="btn-gold w-full py-3.5 rounded-lg text-sm uppercase tracking-widest font-bold flex items-center justify-center gap-2"
                >
                  Reserve Now
                  <ChevronRight size={14} />
                </Link>
              </div>

              <div className="luxury-card p-7">
                <h3 className="text-sm font-bold mb-3">Email or Text</h3>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-base font-black text-[#C9A84C] hover:opacity-80 transition-opacity break-all"
                >
                  {SITE.email}
                </a>
                {hasPhone && (
                  <p className="text-xs text-[#555] mt-2">
                    <a href={SITE.phoneHref} className="text-[#C9A84C]">
                      {SITE.phone}
                    </a>
                  </p>
                )}
              </div>

              <div className="luxury-card p-7">
                <h3 className="text-sm font-bold mb-3">Flat-Rate Promise</h3>
                <p className="text-xs text-[#999] leading-relaxed">
                  Your rate from {data.name} is flat rate plus tolls, wait time, and gratuity —
                  confirmed at booking.
                </p>
              </div>
              <div className="luxury-card p-7">
                <h3 className="text-sm font-bold mb-4">Explore More</h3>
                <div className="space-y-2">
                  <Link href="/services" className="block text-xs text-[#999] hover:text-[#C9A84C] transition-colors">
                    → View All Services
                  </Link>
                  <Link href="/corporate" className="block text-xs text-[#999] hover:text-[#C9A84C] transition-colors">
                    → Corporate Accounts
                  </Link>
                  <Link href="/locations" className="block text-xs text-[#999] hover:text-[#C9A84C] transition-colors">
                    → All Service Areas
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4">
            Ready for a <span className="text-gold-gradient">Reliable Ride</span> in {data.name}?
          </h2>
          <p className="text-[#999] text-sm mb-8 leading-relaxed">
            Flat rates · No surge · {SITE.name}&apos;s private chauffeur service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="btn-gold px-10 py-4 rounded-lg text-sm uppercase tracking-widest font-bold inline-flex items-center justify-center gap-2"
            >
              Get a Quote
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
