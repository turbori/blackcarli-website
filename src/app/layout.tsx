import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | Private Chauffeur Service — NYC, Long Island, CT & NJ`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "private car service NYC",
    "black car service Long Island",
    "chauffeur service Manhattan",
    "corporate car service NYC",
    "airport car service JFK LGA",
    "limo service Connecticut",
    "black car service New Jersey",
    "Uber Black alternative NYC",
    "private driver Long Island",
    "sg limo",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Private Chauffeur Service — NYC, Long Island, CT & NJ`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Private Chauffeur Service`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  metadataBase: new URL(SITE.url),
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LimousineService",
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  description: SITE.description,
  areaServed: [
    { "@type": "City", name: "Manhattan, NY" },
    { "@type": "City", name: "Brooklyn, NY" },
    { "@type": "City", name: "Queens, NY" },
    { "@type": "City", name: "The Bronx, NY" },
    { "@type": "City", name: "Staten Island, NY" },
    { "@type": "AdministrativeArea", name: "Long Island, NY" },
    { "@type": "AdministrativeArea", name: "Connecticut" },
    { "@type": "AdministrativeArea", name: "New Jersey" },
  ],
  priceRange: "$$$",
  openingHours: "Mo-Su 00:00-24:00",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Chauffeured Transportation Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Airport Transportation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Transportation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Point-to-Point Transportation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hourly Chauffeur Service" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding & Event Transportation" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
