import { CITIES, CityInfo } from "./cities";

export interface CountryInfo {
  slug: string;
  name: string;
  code: string;
  flag: string;
  primaryTz: string;
  capital: string;
  about: string;
}

export const COUNTRIES: CountryInfo[] = [
  // Asia
  {
    slug: "india",
    name: "India",
    code: "IN",
    flag: "🇮🇳",
    primaryTz: "Asia/Kolkata",
    capital: "new-delhi",
    about: "India Standard Time (IST) is UTC+5:30 year-round with no daylight saving."
  },
  {
    slug: "japan",
    name: "Japan",
    code: "JP",
    flag: "🇯🇵",
    primaryTz: "Asia/Tokyo",
    capital: "tokyo",
    about: "Japan Standard Time (JST) is UTC+9 year-round with no daylight saving."
  },
  {
    slug: "south-korea",
    name: "South Korea",
    code: "KR",
    flag: "🇰🇷",
    primaryTz: "Asia/Seoul",
    capital: "seoul",
    about: "Korea Standard Time (KST) is UTC+9 year-round with no daylight saving."
  },
  {
    slug: "china",
    name: "China",
    code: "CN",
    flag: "🇨🇳",
    primaryTz: "Asia/Shanghai",
    capital: "beijing",
    about: "China Standard Time (CST) is UTC+8 across the entire country."
  },
  {
    slug: "singapore",
    name: "Singapore",
    code: "SG",
    flag: "🇸🇬",
    primaryTz: "Asia/Singapore",
    capital: "singapore",
    about: "Singapore Time (SGT) is UTC+8 year-round."
  },
  {
    slug: "thailand",
    name: "Thailand",
    code: "TH",
    flag: "🇹🇭",
    primaryTz: "Asia/Bangkok",
    capital: "bangkok",
    about: "Thailand follows Indochina Time (ICT), UTC+7 year-round."
  },
  {
    slug: "indonesia",
    name: "Indonesia",
    code: "ID",
    flag: "🇮🇩",
    primaryTz: "Asia/Jakarta",
    capital: "jakarta",
    about: "Indonesia spans multiple time zones, with Jakarta using WIB (UTC+7)."
  },
  {
    slug: "philippines",
    name: "Philippines",
    code: "PH",
    flag: "🇵🇭",
    primaryTz: "Asia/Manila",
    capital: "manila",
    about: "Philippine Time (PHT) is UTC+8 year-round."
  },
  {
    slug: "vietnam",
    name: "Vietnam",
    code: "VN",
    flag: "🇻🇳",
    primaryTz: "Asia/Ho_Chi_Minh",
    capital: "ho-chi-minh-city",
    about: "Vietnam uses Indochina Time (ICT), UTC+7 year-round."
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    code: "MY",
    flag: "🇲🇾",
    primaryTz: "Asia/Kuala_Lumpur",
    capital: "kuala-lumpur",
    about: "Malaysia Time (MYT) is UTC+8 year-round."
  },
  {
    slug: "pakistan",
    name: "Pakistan",
    code: "PK",
    flag: "🇵🇰",
    primaryTz: "Asia/Karachi",
    capital: "karachi",
    about: "Pakistan Standard Time (PKT) is UTC+5 year-round."
  },
  {
    slug: "bangladesh",
    name: "Bangladesh",
    code: "BD",
    flag: "🇧🇩",
    primaryTz: "Asia/Dhaka",
    capital: "dhaka",
    about: "Bangladesh Standard Time (BST) is UTC+6 year-round."
  },
  {
    slug: "sri-lanka",
    name: "Sri Lanka",
    code: "LK",
    flag: "🇱🇰",
    primaryTz: "Asia/Colombo",
    capital: "colombo",
    about: "Sri Lanka Standard Time is UTC+5:30 year-round."
  },
  {
    slug: "nepal",
    name: "Nepal",
    code: "NP",
    flag: "🇳🇵",
    primaryTz: "Asia/Kathmandu",
    capital: "kathmandu",
    about: "Nepal Time (NPT) is UTC+5:45 year-round."
  },

  // Middle East
  {
    slug: "united-arab-emirates",
    name: "United Arab Emirates",
    code: "AE",
    flag: "🇦🇪",
    primaryTz: "Asia/Dubai",
    capital: "abu-dhabi",
    about: "Gulf Standard Time (GST) is UTC+4 year-round."
  },
  {
    slug: "saudi-arabia",
    name: "Saudi Arabia",
    code: "SA",
    flag: "🇸🇦",
    primaryTz: "Asia/Riyadh",
    capital: "riyadh",
    about: "Arabia Standard Time (AST) is UTC+3 year-round."
  },
  {
    slug: "qatar",
    name: "Qatar",
    code: "QA",
    flag: "🇶🇦",
    primaryTz: "Asia/Qatar",
    capital: "doha",
    about: "Qatar Standard Time is UTC+3 year-round."
  },
  {
    slug: "kuwait",
    name: "Kuwait",
    code: "KW",
    flag: "🇰🇼",
    primaryTz: "Asia/Kuwait",
    capital: "kuwait-city",
    about: "Kuwait follows Arabia Standard Time (AST), UTC+3."
  },

  // Europe
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    primaryTz: "Europe/London",
    capital: "london",
    about: "The UK follows GMT in winter and BST (UTC+1) during daylight saving."
  },
  {
    slug: "france",
    name: "France",
    code: "FR",
    flag: "🇫🇷",
    primaryTz: "Europe/Paris",
    capital: "paris",
    about: "France uses Central European Time (CET) and observes daylight saving."
  },
  {
    slug: "germany",
    name: "Germany",
    code: "DE",
    flag: "🇩🇪",
    primaryTz: "Europe/Berlin",
    capital: "berlin",
    about: "Germany follows CET and switches to CEST during daylight saving."
  },
  {
    slug: "spain",
    name: "Spain",
    code: "ES",
    flag: "🇪🇸",
    primaryTz: "Europe/Madrid",
    capital: "madrid",
    about: "Spain follows CET and observes daylight saving time."
  },
  {
    slug: "italy",
    name: "Italy",
    code: "IT",
    flag: "🇮🇹",
    primaryTz: "Europe/Rome",
    capital: "rome",
    about: "Italy follows Central European Time with daylight saving adjustments."
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    code: "NL",
    flag: "🇳🇱",
    primaryTz: "Europe/Amsterdam",
    capital: "amsterdam",
    about: "The Netherlands uses CET and switches to CEST during daylight saving."
  },
  {
    slug: "austria",
    name: "Austria",
    code: "AT",
    flag: "🇦🇹",
    primaryTz: "Europe/Vienna",
    capital: "vienna",
    about: "Austria follows Central European Time with daylight saving."
  },
  {
    slug: "switzerland",
    name: "Switzerland",
    code: "CH",
    flag: "🇨🇭",
    primaryTz: "Europe/Zurich",
    capital: "zurich",
    about: "Switzerland follows CET and observes daylight saving."
  },
  {
    slug: "sweden",
    name: "Sweden",
    code: "SE",
    flag: "🇸🇪",
    primaryTz: "Europe/Stockholm",
    capital: "stockholm",
    about: "Sweden follows CET and observes daylight saving time."
  },
  {
    slug: "ireland",
    name: "Ireland",
    code: "IE",
    flag: "🇮🇪",
    primaryTz: "Europe/Dublin",
    capital: "dublin",
    about: "Ireland uses GMT in winter and Irish Standard Time during summer."
  },
  {
    slug: "portugal",
    name: "Portugal",
    code: "PT",
    flag: "🇵🇹",
    primaryTz: "Europe/Lisbon",
    capital: "lisbon",
    about: "Portugal follows Western European Time and observes daylight saving."
  },
  {
    slug: "czech-republic",
    name: "Czech Republic",
    code: "CZ",
    flag: "🇨🇿",
    primaryTz: "Europe/Prague",
    capital: "prague",
    about: "The Czech Republic follows CET with daylight saving adjustments."
  },
  {
    slug: "turkey",
    name: "Turkey",
    code: "TR",
    flag: "🇹🇷",
    primaryTz: "Europe/Istanbul",
    capital: "istanbul",
    about: "Turkey Time (TRT) is UTC+3 year-round."
  },
  {
    slug: "russia",
    name: "Russia",
    code: "RU",
    flag: "🇷🇺",
    primaryTz: "Europe/Moscow",
    capital: "moscow",
    about: "Russia spans multiple time zones, with Moscow Time at UTC+3."
  },

  // North America
  {
    slug: "united-states",
    name: "United States",
    code: "US",
    flag: "🇺🇸",
    primaryTz: "America/New_York",
    capital: "new-york",
    about: "The United States spans multiple time zones and observes daylight saving in most regions."
  },
  {
    slug: "canada",
    name: "Canada",
    code: "CA",
    flag: "🇨🇦",
    primaryTz: "Amera/Toronto",
    capital: "toronto",
    about: "Canada spans multiple time zones with daylight saving observed in most provinces."
  },
  {
    slug: "canada",
    name: "Canada",
    code: "CA",
    flag: "🇨🇦",
    primaryTz: "America/Montreal",
    capital: "Quebec City",
    about: "Canada spans multiple time zones with daylight saving observed in most provinces."
  },
  {
    slug: "mexico",
    name: "Mexico",
    code: "MX",
    flag: "🇲🇽",
    primaryTz: "America/Mexico_City",
    capital: "mexico-city",
    about: "Mexico spans multiple time zones with regional daylight saving policies."
  },

  // South America
  {
    slug: "brazil",
    name: "Brazil",
    code: "BR",
    flag: "🇧🇷",
    primaryTz: "America/Sao_Paulo",
    capital: "sao-paulo",
    about: "Brazil spans multiple time zones, with São Paulo using UTC−3."
  },
  {
    slug: "argentina",
    name: "Argentina",
    code: "AR",
    flag: "🇦🇷",
    primaryTz: "America/Argentina/Buenos_Aires",
    capital: "buenos-aires",
    about: "Argentina Time (ART) is UTC−3 year-round."
  },
  {
    slug: "chile",
    name: "Chile",
    code: "CL",
    flag: "🇨🇱",
    primaryTz: "America/Santiago",
    capital: "santiago",
    about: "Chile observes daylight saving time in many regions."
  },

  // Africa
  {
    slug: "egypt",
    name: "Egypt",
    code: "EG",
    flag: "🇪🇬",
    primaryTz: "Africa/Cairo",
    capital: "cairo",
    about: "Egypt Standard Time (EET) is UTC+2 with seasonal daylight saving."
  },
  {
    slug: "nigeria",
    name: "Nigeria",
    code: "NG",
    flag: "🇳🇬",
    primaryTz: "Africa/Lagos",
    capital: "lagos",
    about: "West Africa Time (WAT) is UTC+1 year-round."
  },
  {
    slug: "kenya",
    name: "Kenya",
    code: "KE",
    flag: "🇰🇪",
    primaryTz: "Africa/Nairobi",
    capital: "nairobi",
    about: "East Africa Time (EAT) is UTC+3 year-round."
  },
  {
    slug: "south-africa",
    name: "South Africa",
    code: "ZA",
    flag: "🇿🇦",
    primaryTz: "Africa/Johannesburg",
    capital: "johannesburg",
    about: "South Africa Standard Time (SAST) is UTC+2 year-round."
  },

  // Oceania
  {
    slug: "australia",
    name: "Australia",
    code: "AU",
    flag: "🇦🇺",
    primaryTz: "Australia/Sydney",
    capital: "sydney",
    about: "Australia spans multiple time zones with daylight saving in several states."
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    code: "NZ",
    flag: "🇳🇿",
    primaryTz: "Pacific/Auckland",
    capital: "auckland",
    about: "New Zealand Standard Time is UTC+12, shifting to NZDT (UTC+13) during daylight saving."
  }
];

export function getCountryBySlug(slug: string): CountryInfo | undefined {
  return COUNTRIES.find((c) => c.slug === slug);
}

export function getCountryByCode(code: string): CountryInfo | undefined {
  return COUNTRIES.find((c) => c.code === code);
}

export function getCitiesInCountry(code: string): CityInfo[] { 
  return CITIES.filter((c: { countryCode: string }) => c.countryCode === code);
}

export function getUniqueTimezonesInCountry(code: string): string[] {
  const tzs = new Set<string>();
  for (const c of CITIES) if (c.countryCode === code) tzs.add(c.tz);
  return Array.from(tzs);
}

