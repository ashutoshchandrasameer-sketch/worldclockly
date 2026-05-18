// Country registry for programmatic SEO routes (/countries/$country)
import { CITIES, type CityInfo } from "./cities";

export interface CountryInfo {
  slug: string;
  name: string;
  code: string; // ISO 3166-1 alpha-2
  flag: string;
  primaryTz: string;
  capital?: string; // city slug
  about?: string;
}

export const COUNTRIES: CountryInfo[] = [
{ slug: "italy", name: "Italy", code: "IT", flag: "🇮🇹", primaryTz: "Europe/Rome", capital: "rome", about: "Italy observes Central European Time (CET, UTC+1) and Central European Summer Time (CEST, UTC+2) during summer." },
{ slug: "canada", name: "Canada", code: "CA", flag: "🇨🇦", primaryTz: "America/Toronto", capital: "toronto", about: "Canada spans six primary time zones from Pacific to Atlantic, with most provinces observing daylight saving time." },
{ slug: "spain", name: "Spain", code: "ES", flag: "🇪🇸", primaryTz: "Europe/Madrid", capital: "madrid", about: "Mainland Spain follows Central European Time despite its western geography and observes daylight saving time." },

{ slug: "netherlands", name: "Netherlands", code: "NL", flag: "🇳🇱", primaryTz: "Europe/Amsterdam", capital: "amsterdam", about: "The Netherlands uses Central European Time (CET) and shifts to CEST during summer." },

{ slug: "belgium", name: "Belgium", code: "BE", flag: "🇧🇪", primaryTz: "Europe/Brussels", capital: "brussels", about: "Belgium observes Central European Time (CET, UTC+1) and daylight saving during summer months." },

{ slug: "austria", name: "Austria", code: "AT", flag: "🇦🇹", primaryTz: "Europe/Vienna", capital: "vienna", about: "Austria follows Central European Time and observes daylight saving as CEST." },

{ slug: "switzerland", name: "Switzerland", code: "CH", flag: "🇨🇭", primaryTz: "Europe/Zurich", capital: "zurich", about: "Switzerland uses Central European Time (CET) with daylight saving transitions to CEST." },

{ slug: "sweden", name: "Sweden", code: "SE", flag: "🇸🇪", primaryTz: "Europe/Stockholm", capital: "stockholm", about: "Sweden observes Central European Time and advances clocks during summer." },

{ slug: "norway", name: "Norway", code: "NO", flag: "🇳🇴", primaryTz: "Europe/Oslo", capital: "oslo", about: "Norway uses Central European Time and observes daylight saving time." },

{ slug: "finland", name: "Finland", code: "FI", flag: "🇫🇮", primaryTz: "Europe/Helsinki", capital: "helsinki", about: "Finland follows Eastern European Time (EET, UTC+2) and daylight saving in summer." },
{ 
  slug: "bangladesh", name: "Bangladesh", code: "BD", flag: "🇧🇩", primaryTz: "Asia/Dhaka", capital: "dhaka", about: "Bangladesh follows Bangladesh Standard Time (BST), which is UTC+6 with no daylight saving adjustments." },

{ slug: "denmark", name: "Denmark", code: "DK", flag: "🇩🇰", primaryTz: "Europe/Copenhagen", capital: "copenhagen", about: "Denmark uses Central European Time and observes daylight saving time." },

{ slug: "greece", name: "Greece", code: "GR", flag: "🇬🇷", primaryTz: "Europe/Athens", capital: "athens", about: "Greece follows Eastern European Time (EET) with summer daylight saving adjustments." },

{ slug: "poland", name: "Poland", code: "PL", flag: "🇵🇱", primaryTz: "Europe/Warsaw", capital: "warsaw", about: "Poland observes Central European Time and daylight saving as CEST." },

{ slug: "czech-republic", name: "Czech Republic", code: "CZ", flag: "🇨🇿", primaryTz: "Europe/Prague", capital: "prague", about: "The Czech Republic uses Central European Time with daylight saving during summer." },

{ slug: "hungary", name: "Hungary", code: "HU", flag: "🇭🇺", primaryTz: "Europe/Budapest", capital: "budapest", about: "Hungary follows Central European Time and observes summer daylight saving." },

{ slug: "portugal", name: "Portugal", code: "PT", flag: "🇵🇹", primaryTz: "Europe/Lisbon", capital: "lisbon", about: "Portugal uses Western European Time (WET) and shifts to WEST during daylight saving." },

{ slug: "ireland", name: "Ireland", code: "IE", flag: "🇮🇪", primaryTz: "Europe/Dublin", capital: "dublin", about: "Ireland uses GMT in winter and Irish Standard Time (UTC+1) during summer." },

{ slug: "argentina", name: "Argentina", code: "AR", flag: "🇦🇷", primaryTz: "America/Argentina/Buenos_Aires", capital: "buenos-aires", about: "Argentina Standard Time (ART) is UTC-3 year-round with no daylight saving." },

{ slug: "peru", name: "Peru", code: "PE", flag: "🇵🇪", primaryTz: "America/Lima", capital: "lima", about: "Peru Time (PET) is UTC-5 year-round without daylight saving." },

{ slug: "colombia", name: "Colombia", code: "CO", flag: "🇨🇴", primaryTz: "America/Bogota", capital: "bogota", about: "Colombia Standard Time is UTC-5 year-round." },

{ slug: "chile", name: "Chile", code: "CL", flag: "🇨🇱", primaryTz: "America/Santiago", capital: "santiago", about: "Chile observes Chile Standard Time and daylight saving changes seasonally." },

{ slug: "indonesia", name: "Indonesia", code: "ID", flag: "🇮🇩", primaryTz: "Asia/Jakarta", capital: "jakarta", about: "Indonesia spans three time zones from UTC+7 to UTC+9 across its islands." },

{ slug: "philippines", name: "Philippines", code: "PH", flag: "🇵🇭", primaryTz: "Asia/Manila", capital: "manila", about: "Philippine Time (PHT) is UTC+8 year-round with no daylight saving." },

{ slug: "vietnam", name: "Vietnam", code: "VN", flag: "🇻🇳", primaryTz: "Asia/Ho_Chi_Minh", capital: "hanoi", about: "Vietnam uses Indochina Time (ICT, UTC+7) year-round." },

{ slug: "malaysia", name: "Malaysia", code: "MY", flag: "🇲🇾", primaryTz: "Asia/Kuala_Lumpur", capital: "kuala-lumpur", about: "Malaysia Time (MYT) is UTC+8 year-round across Peninsular and East Malaysia." },

{ slug: "qatar", name: "Qatar", code: "QA", flag: "🇶🇦", primaryTz: "Asia/Qatar", capital: "doha", about: "Qatar Standard Time is UTC+3 year-round without daylight saving." },

{ slug: "kuwait", name: "Kuwait", code: "KW", flag: "🇰🇼", primaryTz: "Asia/Kuwait", capital: "kuwait-city", about: "Kuwait follows Arabia Standard Time (UTC+3) year-round." },

{ slug: "iran", name: "Iran", code: "IR", flag: "🇮🇷", primaryTz: "Asia/Tehran", capital: "tehran", about: "Iran Standard Time is UTC+3:30; daylight saving was abolished in 2022." },

{ slug: "iraq", name: "Iraq", code: "IQ", flag: "🇮🇶", primaryTz: "Asia/Baghdad", capital: "baghdad", about: "Iraq observes Arabia Standard Time (UTC+3) year-round." },

{ slug: "kenya", name: "Kenya", code: "KE", flag: "🇰🇪", primaryTz: "Africa/Nairobi", capital: "nairobi", about: "East Africa Time (EAT) is UTC+3 year-round in Kenya." },

{ slug: "nigeria", name: "Nigeria", code: "NG", flag: "🇳🇬", primaryTz: "Africa/Lagos", capital: "lagos", about: "Nigeria follows West Africa Time (WAT, UTC+1) year-round." },

{ slug: "morocco", name: "Morocco", code: "MA", flag: "🇲🇦", primaryTz: "Africa/Casablanca", capital: "casablanca", about: "Morocco primarily observes UTC+1 year-round except temporary Ramadan adjustments." },

{ slug: "algeria", name: "Algeria", code: "DZ", flag: "🇩🇿", primaryTz: "Africa/Algiers", capital: "algiers", about: "Algeria uses Central European Time (UTC+1) throughout the year." },

{ slug: "mexico", name: "Mexico", code: "MX", flag: "🇲🇽", primaryTz: "America/Mexico_City", capital: "mexico-city", about: "Mexico spans multiple time zones, with most regions ending daylight saving time in recent years." },

{ slug: "australia", name: "Australia", code: "AU", flag: "🇦🇺", primaryTz: "Australia/Sydney", capital: "sydney", about: "Australia spans several time zones, with some states observing daylight saving while others do not." },

{ slug: "brazil", name: "Brazil", code: "BR", flag: "🇧🇷", primaryTz: "America/Sao_Paulo", capital: "sao-paulo", about: "Brazil spans multiple time zones and no longer observes daylight saving time nationally." },

{ slug: "iran", name: "Iran", code: "IR", flag: "🇮🇷", primaryTz: "Asia/Tehran", capital: "tehran", about: "Iran uses Iran Standard Time (IRST, UTC+3:30) throughout the year." }
];

export function getCountryBySlug(slug: string): CountryInfo | undefined {
  return COUNTRIES.find((c) => c.slug === slug);
}

export function getCountryByCode(code: string): CountryInfo | undefined {
  return COUNTRIES.find((c) => c.code === code);
}

export function getCitiesInCountry(code: string): CityInfo[] {
  return CITIES.filter((c) => c.countryCode === code);
}

export function getUniqueTimezonesInCountry(code: string): string[] {
  const tzs = new Set<string>();
  for (const c of CITIES) if (c.countryCode === code) tzs.add(c.tz);
  return Array.from(tzs);
}
