/**
 * Central business info. Update here once the client confirms the
 * remaining open items (phone number, purchased domain, TLC license #).
 */
export const SITE = {
  name: "BLACKCARLI",
  // TODO: confirm the registered legal entity name — may still be "SG Limo Inc."
  // until the client files a DBA / renames the LLC to match the new brand.
  legalName: "BLACKCARLI Inc.",
  tagline: "Private Chauffeured Transportation",
  description:
    "Private chauffeured sedans and SUVs serving the five boroughs, Long Island, Connecticut, and New Jersey. Flat-rate pricing, corporate accounts, and airport transfers — driven by 14 years of experience.",

  // TODO: no domain purchased yet — update once the client buys one.
  domain: "blackcarli.com",
  url: "https://blackcarli.com",

  // TODO: this inbox is tied to the old "SG Limo" brand — confirm whether the
  // client wants a new email address to match BLACKCARLI before launch.
  email: "sglimo646@gmail.com",

  // TODO: client has not provided a business phone number yet.
  phone: "",
  phoneHref: "",

  insuranceLabel: "$1.5M Combined Single Limit (CSL) Insurance",
  experienceYears: 14,

  // TODO: client has not provided a TLC base license number yet.
  tlcLicense: "",

  serviceAreas: [
    "The Five Boroughs of NYC",
    "Long Island",
    "Connecticut",
    "New Jersey",
  ],
} as const;

export const hasPhone = SITE.phone.length > 0;
