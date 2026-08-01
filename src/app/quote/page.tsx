import QuoteForm from "@/components/QuoteForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import type { Metadata } from "next";
import { SITE, hasPhone } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Book a private chauffeured ride across NYC, Long Island, Connecticut, or New Jersey. Request a free quote for airport transfers, corporate travel, or events.",
};

const contactInfo = [
  ...(hasPhone
    ? [{ icon: Phone, label: "Phone", value: SITE.phone, href: SITE.phoneHref }]
    : []),
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Clock, label: "Availability", value: "By appointment · 7 days a week", href: null },
  { icon: MapPin, label: "Service Area", value: "NYC · Long Island · CT · NJ", href: null },
];

export default function QuotePage() {
  return (
    <>
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/50 to-[#0A0A0A]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Breadcrumbs crumbs={[{ label: "Home", href: "/" }, { label: "Request a Quote" }]} />
          <p className="text-xs font-semibold tracking-[0.4em] uppercase text-[#C9A84C] mb-4">
            Free · No Obligation
          </p>
          <h1 className="text-5xl md:text-6xl font-black mb-6">Request a Quote</h1>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-[#999] text-lg max-w-2xl mx-auto leading-relaxed">
            Fill out the form below and we&apos;ll follow up with a confirmed flat rate plus
            tolls, wait time, and gratuity.
          </p>
        </div>
      </section>

      <section className="section-darker py-16 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-28 space-y-5">
                <div className="luxury-card p-7">
                  <h3 className="text-sm font-bold tracking-[0.1em] uppercase mb-6">
                    Contact Info
                  </h3>
                  <ul className="space-y-5">
                    {contactInfo.map((c) => {
                      const Icon = c.icon;
                      return (
                        <li key={c.label} className="flex items-start gap-4">
                          <div className="w-9 h-9 rounded-lg bg-[#1E1A0A] flex items-center justify-center shrink-0">
                            <Icon size={15} className="text-[#C9A84C]" />
                          </div>
                          <div>
                            <div className="text-[10px] text-[#555] uppercase tracking-wider mb-0.5">
                              {c.label}
                            </div>
                            {c.href ? (
                              <a
                                href={c.href}
                                className="text-sm text-[#CCCCCC] hover:text-[#C9A84C] transition-colors font-medium"
                              >
                                {c.value}
                              </a>
                            ) : (
                              <span className="text-sm text-[#CCCCCC] font-medium">{c.value}</span>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="luxury-card p-7">
                  <h3 className="text-sm font-bold mb-3">Transparent Pricing</h3>
                  <p className="text-xs text-[#999] leading-relaxed">
                    Flat rate plus tolls, wait time, and gratuity — confirmed before you book. No
                    surge pricing, ever.
                  </p>
                </div>

                <div className="luxury-card p-7">
                  <h3 className="text-sm font-bold mb-3">Response Time</h3>
                  <p className="text-xs text-[#999] leading-relaxed">
                    We respond to quote requests within a few hours. For same-day bookings, email
                    us directly.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="luxury-card p-8 md:p-10">
                <h2 className="text-xl font-bold mb-2">Trip Details</h2>
                <p className="text-sm text-[#999] mb-8">
                  All fields marked <span className="text-red-400">*</span> are required.
                </p>
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
