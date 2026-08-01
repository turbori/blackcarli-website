/**
 * Central business info. Update here once the client confirms the
 * remaining open items (phone number, purchased domain, TLC license #).
 */
export const SITE = {
  name: "SG Limo",
  shortName: "SG",
  legalName: "SG Limo Inc.",
  tagline: "Private Chauffeured Transportation",
  description:
    "Private chauffeured sedans and SUVs serving the five boroughs, Long Island, Connecticut, and New Jersey. Flat-rate pricing, corporate accounts, and airport transfers — driven by 14 years of experience.",

  // TODO: no domain purchased yet — update once the client buys one.
  domain: "sglimo.com",
  url: "https://sglimo.com",

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
