// City registry with coordinates for programmatic SEO routes (/cities/$city)
export interface CityInfo {
  slug: string;
  city: string;
  country: string;
  countryCode: string;
  tz: string;
  flag: string;
  lat: number;
  lon: number;
  population?: number;
  about?: string;
}

export const CITIES: CityInfo[] = [
  // Additional Top World Cities

{ slug: "beijing", city: "Beijing", country: "China", countryCode: "CN", tz: "Asia/Shanghai", flag: "🇨🇳", lat: 39.9042, lon: 116.4074, population: 21500000, about: "Capital of China and major cultural center." },
{ slug: "guangzhou", city: "Guangzhou", country: "China", countryCode: "CN", tz: "Asia/Shanghai", flag: "🇨🇳", lat: 23.1291, lon: 113.2644, population: 18800000 },
{ slug: "shenzhen", city: "Shenzhen", country: "China", countryCode: "CN", tz: "Asia/Shanghai", flag: "🇨🇳", lat: 22.5431, lon: 114.0579, population: 17600000 },
{ slug: "chengdu", city: "Chengdu", country: "China", countryCode: "CN", tz: "Asia/Shanghai", flag: "🇨🇳", lat: 30.5728, lon: 104.0668, population: 16300000 },
{ slug: "wuhan", city: "Wuhan", country: "China", countryCode: "CN", tz: "Asia/Shanghai", flag: "🇨🇳", lat: 30.5928, lon: 114.3055, population: 12300000 },

{ slug: "osaka", city: "Osaka", country: "Japan", countryCode: "JP", tz: "Asia/Tokyo", flag: "🇯🇵", lat: 34.6937, lon: 135.5023, population: 19200000 },
{ slug: "nagoya", city: "Nagoya", country: "Japan", countryCode: "JP", tz: "Asia/Tokyo", flag: "🇯🇵", lat: 35.1815, lon: 136.9066, population: 9200000 },
{ slug: "fukuoka", city: "Fukuoka", country: "Japan", countryCode: "JP", tz: "Asia/Tokyo", flag: "🇯🇵", lat: 33.5904, lon: 130.4017, population: 2600000 },

{ slug: "delhi", city: "Delhi", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 28.7041, lon: 77.1025, population: 33000000 },
{ slug: "pune", city: "Pune", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 18.5204, lon: 73.8567, population: 7500000, about: "Major IT and education hub in western India." },
{ slug: "ahmedabad", city: "Ahmedabad", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 23.0225, lon: 72.5714, population: 8500000 },
{ slug: "surat", city: "Surat", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 21.1702, lon: 72.8311, population: 7000000 },
{ slug: "jaipur", city: "Jaipur", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 26.9124, lon: 75.7873, population: 4200000 },

{ slug: "lahore", city: "Lahore", country: "Pakistan", countryCode: "PK", tz: "Asia/Karachi", flag: "🇵🇰", lat: 31.5204, lon: 74.3587, population: 13000000 },
{ slug: "islamabad", city: "Islamabad", country: "Pakistan", countryCode: "PK", tz: "Asia/Karachi", flag: "🇵🇰", lat: 33.6844, lon: 73.0479, population: 1200000 },

{ slug: "jakarta", city: "Jakarta", country: "Indonesia", countryCode: "ID", tz: "Asia/Jakarta", flag: "🇮🇩", lat: -6.2088, lon: 106.8456, population: 10700000 },
{ slug: "surabaya", city: "Surabaya", country: "Indonesia", countryCode: "ID", tz: "Asia/Jakarta", flag: "🇮🇩", lat: -7.2575, lon: 112.7521, population: 3000000 },

{ slug: "manila", city: "Manila", country: "Philippines", countryCode: "PH", tz: "Asia/Manila", flag: "🇵🇭", lat: 14.5995, lon: 120.9842, population: 13900000 },
{ slug: "cebu", city: "Cebu", country: "Philippines", countryCode: "PH", tz: "Asia/Manila", flag: "🇵🇭", lat: 10.3157, lon: 123.8854, population: 1000000 },

{ slug: "hanoi", city: "Hanoi", country: "Vietnam", countryCode: "VN", tz: "Asia/Ho_Chi_Minh", flag: "🇻🇳", lat: 21.0278, lon: 105.8342, population: 8500000 },
{ slug: "ho-chi-minh-city", city: "Ho Chi Minh City", country: "Vietnam", countryCode: "VN", tz: "Asia/Ho_Chi_Minh", flag: "🇻🇳", lat: 10.8231, lon: 106.6297, population: 9300000 },

{ slug: "kuala-lumpur", city: "Kuala Lumpur", country: "Malaysia", countryCode: "MY", tz: "Asia/Kuala_Lumpur", flag: "🇲🇾", lat: 3.139, lon: 101.6869, population: 8000000 },
{ slug: "penang", city: "Penang", country: "Malaysia", countryCode: "MY", tz: "Asia/Kuala_Lumpur", flag: "🇲🇾", lat: 5.4164, lon: 100.3327, population: 1800000 },

{ slug: "dhaka",city: "Dhaka",country:"Bangladesh",countryCode:"BD",tz:"Asia/Dhaka",flag:"🇧🇩",lat:23.8103,lon:90.4125,population:8900000,about:"Capital of Bangladesh and major economic center." },

{ slug: "doha", city: "Doha", country: "Qatar", countryCode: "QA", tz: "Asia/Qatar", flag: "🇶🇦", lat: 25.2854, lon: 51.531 },
{ slug: "kuwait-city", city: "Kuwait City", country: "Kuwait", countryCode: "KW", tz: "Asia/Kuwait", flag: "🇰🇼", lat: 29.3759, lon: 47.9774 },

{ slug: "abu-dhabi", city: "Abu Dhabi", country: "UAE", countryCode: "AE", tz: "Asia/Dubai", flag: "🇦🇪", lat: 24.4539, lon: 54.3773, population: 1500000 },

{ slug: "tehran", city: "Tehran", country: "Iran", countryCode: "IR", tz: "Asia/Tehran", flag: "🇮🇷", lat: 35.6892, lon: 51.389, population: 9500000 },

{ slug: "baghdad", city: "Baghdad", country: "Iraq", countryCode: "IQ", tz: "Asia/Baghdad", flag: "🇮🇶", lat: 33.3152, lon: 44.3661, population: 8700000 },

{ slug: "nairobi", city: "Nairobi", country: "Kenya", countryCode: "KE", tz: "Africa/Nairobi", flag: "🇰🇪", lat: -1.2921, lon: 36.8219, population: 5000000 },

{ slug: "lagos", city: "Lagos", country: "Nigeria", countryCode: "NG", tz: "Africa/Lagos", flag: "🇳🇬", lat: 6.5244, lon: 3.3792, population: 15000000 },

{ slug: "casablanca", city: "Casablanca", country: "Morocco", countryCode: "MA", tz: "Africa/Casablanca", flag: "🇲🇦", lat: 33.5731, lon: -7.5898, population: 3700000 },

{ slug: "algiers", city: "Algiers", country: "Algeria", countryCode: "DZ", tz: "Africa/Algiers", flag: "🇩🇿", lat: 36.7538, lon: 3.0588, population: 3500000 },

{ slug: "rome", city: "Rome", country: "Italy", countryCode: "IT", tz: "Europe/Rome", flag: "🇮🇹", lat: 41.9028, lon: 12.4964, population: 4300000 },

{ slug: "madrid", city: "Madrid", country: "Spain", countryCode: "ES", tz: "Europe/Madrid", flag: "🇪🇸", lat: 40.4168, lon: -3.7038, population: 6700000 },

{ slug: "barcelona", city: "Barcelona", country: "Spain", countryCode: "ES", tz: "Europe/Madrid", flag: "🇪🇸", lat: 41.3851, lon: 2.1734, population: 5600000 },

{ slug: "amsterdam", city: "Amsterdam", country: "Netherlands", countryCode: "NL", tz: "Europe/Amsterdam", flag: "🇳🇱", lat: 52.3676, lon: 4.9041, population: 2500000 },

{ slug: "brussels", city: "Brussels", country: "Belgium", countryCode: "BE", tz: "Europe/Brussels", flag: "🇧🇪", lat: 50.8503, lon: 4.3517, population: 2100000 },

{ slug: "vienna", city: "Vienna", country: "Austria", countryCode: "AT", tz: "Europe/Vienna", flag: "🇦🇹", lat: 48.2082, lon: 16.3738, population: 2000000 },

{ slug: "zurich", city: "Zurich", country: "Switzerland", countryCode: "CH", tz: "Europe/Zurich", flag: "🇨🇭", lat: 47.3769, lon: 8.5417, population: 1500000 },

{ slug: "stockholm", city: "Stockholm", country: "Sweden", countryCode: "SE", tz: "Europe/Stockholm", flag: "🇸🇪", lat: 59.3293, lon: 18.0686, population: 1700000 },

{ slug: "oslo", city: "Oslo", country: "Norway", countryCode: "NO", tz: "Europe/Oslo", flag: "🇳🇴", lat: 59.9139, lon: 10.7522, population: 1100000 },

{ slug: "helsinki", city: "Helsinki", country: "Finland", countryCode: "FI", tz: "Europe/Helsinki", flag: "🇫🇮", lat: 60.1699, lon: 24.9384, population: 1300000 },

{ slug: "copenhagen", city: "Copenhagen", country: "Denmark", countryCode: "DK", tz: "Europe/Copenhagen", flag: "🇩🇰", lat: 55.6761, lon: 12.5683, population: 1400000 },

{ slug: "athens", city: "Athens", country: "Greece", countryCode: "GR", tz: "Europe/Athens", flag: "🇬🇷", lat: 37.9838, lon: 23.7275, population: 3100000 },

{ slug: "warsaw", city: "Warsaw", country: "Poland", countryCode: "PL", tz: "Europe/Warsaw", flag: "🇵🇱", lat: 52.2297, lon: 21.0122, population: 1800000 },

{ slug: "prague", city: "Prague", country: "Czech Republic", countryCode: "CZ", tz: "Europe/Prague", flag: "🇨🇿", lat: 50.0755, lon: 14.4378, population: 1400000 },

{ slug: "budapest", city: "Budapest", country: "Hungary", countryCode: "HU", tz: "Europe/Budapest", flag: "🇭🇺", lat: 47.4979, lon: 19.0402, population: 1700000 },

{ slug: "lisbon", city: "Lisbon", country: "Portugal", countryCode: "PT", tz: "Europe/Lisbon", flag: "🇵🇹", lat: 38.7223, lon: -9.1393, population: 2900000 },

{ slug: "dublin", city: "Dublin", country: "Ireland", countryCode: "IE", tz: "Europe/Dublin", flag: "🇮🇪", lat: 53.3498, lon: -6.2603, population: 1400000 },

{ slug: "buenos-aires", city: "Buenos Aires", country: "Argentina", countryCode: "AR", tz: "America/Argentina/Buenos_Aires", flag: "🇦🇷", lat: -34.6037, lon: -58.3816, population: 15300000 },

{ slug: "lima", city: "Lima", country: "Peru", countryCode: "PE", tz: "America/Lima", flag: "🇵🇪", lat: -12.0464, lon: -77.0428, population: 11000000 },

{ slug: "bogota", city: "Bogotá", country: "Colombia", countryCode: "CO", tz: "America/Bogota", flag: "🇨🇴", lat: 4.711, lon: -74.0721, population: 11000000 },

{ slug: "santiago", city: "Santiago", country: "Chile", countryCode: "CL", tz: "America/Santiago", flag: "🇨🇱", lat: -33.4489, lon: -70.6693, population: 6200000 },

{ slug: "rio-de-janeiro", city: "Rio de Janeiro", country: "Brazil", countryCode: "BR", tz: "America/Sao_Paulo", flag: "🇧🇷", lat: -22.9068, lon: -43.1729, population: 13500000 },

{ slug: "miami", city: "Miami", country: "USA", countryCode: "US", tz: "America/New_York", flag: "🇺🇸", lat: 25.7617, lon: -80.1918, population: 6200000 },

{ slug: "houston", city: "Houston", country: "USA", countryCode: "US", tz: "America/Chicago", flag: "🇺🇸", lat: 29.7604, lon: -95.3698, population: 7100000 },

{ slug: "san-francisco", city: "San Francisco", country: "USA", countryCode: "US", tz: "America/Los_Angeles", flag: "🇺🇸", lat: 37.7749, lon: -122.4194, population: 4700000 },
{ slug: "toronto", city: "Toronto", country: "Canada", countryCode: "CA", tz: "America/Toronto", flag: "🇨🇦", lat: 43.6532, lon: -79.3832, population: 2930000 },

{ slug: "montreal", city: "Montreal", country: "Canada", countryCode: "CA", tz: "America/Toronto", flag: "🇨🇦", lat: 45.5017, lon: -73.5673, population: 1780000 },

{ slug: "washington-dc", city: "Washington DC", country: "USA", countryCode: "US", tz: "America/New_York", flag: "🇺🇸", lat: 38.9072, lon: -77.0369, population: 6300000 },

{ slug: "boston", city: "Boston", country: "USA", countryCode: "US", tz: "America/New_York", flag: "🇺🇸", lat: 42.3601, lon: -71.0589, population: 4800000 },
];

export function getCityBySlug(slug: string): CityInfo | undefined {
  return CITIES.find((c) => c.slug === slug);
}

export function slugifyCity(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
