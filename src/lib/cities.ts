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
  { slug: "new-delhi", city: "New Delhi", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 28.6139, lon: 77.209, population: 32900000, about: "Capital of India and seat of the central government." },
  { slug: "mumbai", city: "Mumbai", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 19.076, lon: 72.8777, population: 20400000, about: "India's financial capital on the Arabian Sea." },
  { slug: "bengaluru", city: "Bengaluru", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 12.9716, lon: 77.5946, population: 13600000, about: "India's tech capital and global software hub." },
  { slug: "kolkata", city: "Kolkata", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 22.5726, lon: 88.3639, population: 14800000, about: "Cultural capital of eastern India." },
  { slug: "chennai", city: "Chennai", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 13.0827, lon: 80.2707, population: 11000000, about: "Major coastal city on the Bay of Bengal." },
  { slug: "hyderabad", city: "Hyderabad", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 17.385, lon: 78.4867, population: 10500000, about: "City of pearls and a major IT hub." },
  { slug: "new-york", city: "New York", country: "USA", countryCode: "US", tz: "America/New_York", flag: "🇺🇸", lat: 40.7128, lon: -74.006, population: 8400000, about: "The largest city in the United States." },
  { slug: "los-angeles", city: "Los Angeles", country: "USA", countryCode: "US", tz: "America/Los_Angeles", flag: "🇺🇸", lat: 34.0522, lon: -118.2437, population: 3900000, about: "Entertainment capital on the US west coast." },
  { slug: "chicago", city: "Chicago", country: "USA", countryCode: "US", tz: "America/Chicago", flag: "🇺🇸", lat: 41.8781, lon: -87.6298, population: 2700000 },
  { slug: "london", city: "London", country: "UK", countryCode: "GB", tz: "Europe/London", flag: "🇬🇧", lat: 51.5074, lon: -0.1278, population: 9000000, about: "Capital of the United Kingdom on the River Thames." },
  { slug: "paris", city: "Paris", country: "France", countryCode: "FR", tz: "Europe/Paris", flag: "🇫🇷", lat: 48.8566, lon: 2.3522, population: 2100000 },
  { slug: "berlin", city: "Berlin", country: "Germany", countryCode: "DE", tz: "Europe/Berlin", flag: "🇩🇪", lat: 52.52, lon: 13.405, population: 3700000 },
  { slug: "dubai", city: "Dubai", country: "UAE", countryCode: "AE", tz: "Asia/Dubai", flag: "🇦🇪", lat: 25.2048, lon: 55.2708, population: 3500000, about: "Global business and tourism hub in the Gulf." },
  { slug: "singapore", city: "Singapore", country: "Singapore", countryCode: "SG", tz: "Asia/Singapore", flag: "🇸🇬", lat: 1.3521, lon: 103.8198, population: 5900000 },
  { slug: "tokyo", city: "Tokyo", country: "Japan", countryCode: "JP", tz: "Asia/Tokyo", flag: "🇯🇵", lat: 35.6762, lon: 139.6503, population: 13900000, about: "Capital of Japan and the world's largest metropolitan area." },
  { slug: "shanghai", city: "Shanghai", country: "China", countryCode: "CN", tz: "Asia/Shanghai", flag: "🇨🇳", lat: 31.2304, lon: 121.4737, population: 24800000 },
  { slug: "hong-kong", city: "Hong Kong", country: "Hong Kong", countryCode: "HK", tz: "Asia/Hong_Kong", flag: "🇭🇰", lat: 22.3193, lon: 114.1694, population: 7400000 },
  { slug: "sydney", city: "Sydney", country: "Australia", countryCode: "AU", tz: "Australia/Sydney", flag: "🇦🇺", lat: -33.8688, lon: 151.2093, population: 5300000 },
  { slug: "melbourne", city: "Melbourne", country: "Australia", countryCode: "AU", tz: "Australia/Melbourne", flag: "🇦🇺", lat: -37.8136, lon: 144.9631, population: 5100000 },
  { slug: "toronto", city: "Toronto", country: "Canada", countryCode: "CA", tz: "Canada/Toronto", flag: "🇨🇦", lat: 43.6532, lon: -79.3832, population: 2900000 },
  { slug: "montreal", city: "Montreal", country: "Canada", countryCode: "CA", tz: "Canada/Montreal", flag: "🇨🇦", lat: 45.5088, lon: -73.5879, population: 1762949 },
  { slug: "vancouver", city: "Vancouver", country: "Canada", countryCode: "CA", tz: "Canada/Vancouver", flag: "🇨🇦", lat: 49.2827, lon: -123.1207, population: 675000 },
  { slug: "sao-paulo", city: "São Paulo", country: "Brazil", countryCode: "BR", tz: "America/Sao_Paulo", flag: "🇧🇷", lat: -23.5505, lon: -46.6333, population: 12300000 },
  { slug: "mexico-city", city: "Mexico City", country: "Mexico", countryCode: "MX", tz: "America/Mexico_City", flag: "🇲🇽", lat: 19.4326, lon: -99.1332, population: 9200000 },
  { slug: "moscow", city: "Moscow", country: "Russia", countryCode: "RU", tz: "Europe/Moscow", flag: "🇷🇺", lat: 55.7558, lon: 37.6173, population: 12500000 },
  { slug: "istanbul", city: "Istanbul", country: "Turkey", countryCode: "TR", tz: "Europe/Istanbul", flag: "🇹🇷", lat: 41.0082, lon: 28.9784, population: 15500000 },
  { slug: "cairo", city: "Cairo", country: "Egypt", countryCode: "EG", tz: "Africa/Cairo", flag: "🇪🇬", lat: 30.0444, lon: 31.2357, population: 9500000 },
  { slug: "johannesburg", city: "Johannesburg", country: "South Africa", countryCode: "ZA", tz: "Africa/Johannesburg", flag: "🇿🇦", lat: -26.2041, lon: 28.0473, population: 5600000 },
  { slug: "karachi", city: "Karachi", country: "Pakistan", countryCode: "PK", tz: "Asia/Karachi", flag: "🇵🇰", lat: 24.8607, lon: 67.0011, population: 16000000 },
  { slug: "dhaka", city: "Dhaka", country: "Bangladesh", countryCode: "BD", tz: "Asia/Dhaka", flag: "🇧🇩", lat: 23.8103, lon: 90.4125, population: 22000000 },
  { slug: "bangkok", city: "Bangkok", country: "Thailand", countryCode: "TH", tz: "Asia/Bangkok", flag: "🇹🇭", lat: 13.7563, lon: 100.5018, population: 10500000 },
  { slug: "seoul", city: "Seoul", country: "South Korea", countryCode: "KR", tz: "Asia/Seoul", flag: "🇰🇷", lat: 37.5665, lon: 126.978, population: 9700000 },
  { slug: "auckland", city: "Auckland", country: "New Zealand", countryCode: "NZ", tz: "Pacific/Auckland", flag: "🇳🇿", lat: -36.8485, lon: 174.7633, population: 1700000 },
  { slug: "riyadh", city: "Riyadh", country: "Saudi Arabia", countryCode: "SA", tz: "Asia/Riyadh", flag: "🇸🇦", lat: 24.7136, lon: 46.6753, population: 7700000 },
  // Europe
  { slug: "rome", city: "Rome", country: "Italy", countryCode: "IT", tz: "Europe/Rome", flag: "🇮🇹", lat: 41.9028, lon: 12.4964, population: 4300000, about: "Capital of Italy, rich in history and culture." },
  { slug: "madrid", city: "Madrid", country: "Spain", countryCode: "ES", tz: "Europe/Madrid", flag: "🇪🇸", lat: 40.4168, lon: -3.7038, population: 6700000, about: "Spain's capital and largest city." },
  { slug: "amsterdam", city: "Amsterdam", country: "Netherlands", countryCode: "NL", tz: "Europe/Amsterdam", flag: "🇳🇱", lat: 52.3676, lon: 4.9041, population: 1600000, about: "Known for canals, culture, and commerce." },
  { slug: "stockholm", city: "Stockholm", country: "Sweden", countryCode: "SE", tz: "Europe/Stockholm", flag: "🇸🇪", lat: 59.3293, lon: 18.0686, population: 1600000, about: "Capital of Sweden, spread across islands." },
  { slug: "warsaw", city: "Warsaw", country: "Poland", countryCode: "PL", tz: "Europe/Warsaw", flag: "🇵🇱", lat: 52.2297, lon: 21.0122, population: 3100000, about: "Poland's capital and cultural hub." },

  // Middle East
  { slug: "tehran", city: "Tehran", country: "Iran", countryCode: "IR", tz: "Asia/Tehran", flag: "🇮🇷", lat: 35.6892, lon: 51.389, population: 8700000, about: "Capital of Iran, located at the foot of the Alborz mountains." },
  { slug: "tel-aviv", city: "Tel Aviv", country: "Israel", countryCode: "IL", tz: "Asia/Jerusalem", flag: "🇮🇱", lat: 32.0853, lon: 34.7818, population: 4600000, about: "Israel's tech and cultural capital." },
  { slug: "baghdad", city: "Baghdad", country: "Iraq", countryCode: "IQ", tz: "Asia/Baghdad", flag: "🇮🇶", lat: 33.3152, lon: 44.3661, population: 7600000, about: "Historic capital of Iraq on the Tigris River." },

  // Asia-Pacific
  { slug: "jakarta", city: "Jakarta", country: "Indonesia", countryCode: "ID", tz: "Asia/Jakarta", flag: "🇮🇩", lat: -6.2088, lon: 106.8456, population: 10500000, about: "Indonesia's bustling capital city." },
  { slug: "kuala-lumpur", city: "Kuala Lumpur", country: "Malaysia", countryCode: "MY", tz: "Asia/Kuala_Lumpur", flag: "🇲🇾", lat: 3.139, lon: 101.6869, population: 8300000, about: "Malaysia's capital and economic hub." },
  { slug: "manila", city: "Manila", country: "Philippines", countryCode: "PH", tz: "Asia/Manila", flag: "🇵🇭", lat: 14.5995, lon: 120.9842, population: 13800000, about: "Capital of the Philippines, located on Manila Bay." },
  { slug: "hanoi", city: "Hanoi", country: "Vietnam", countryCode: "VN", tz: "Asia/Ho_Chi_Minh", flag: "🇻🇳", lat: 21.0278, lon: 105.8342, population: 8000000, about: "Vietnam's capital with French colonial heritage." },

  // Africa
  { slug: "nairobi", city: "Nairobi", country: "Kenya", countryCode: "KE", tz: "Africa/Nairobi", flag: "🇰🇪", lat: -1.2921, lon: 36.8219, population: 5500000, about: "Kenya's capital and East Africa's business hub." },
  { slug: "lagos", city: "Lagos", country: "Nigeria", countryCode: "NG", tz: "Africa/Lagos", flag: "🇳🇬", lat: 6.5244, lon: 3.3792, population: 21000000, about: "Nigeria's largest city and economic powerhouse." },
  { slug: "casablanca", city: "Casablanca", country: "Morocco", countryCode: "MA", tz: "Africa/Casablanca", flag: "🇲🇦", lat: 33.5731, lon: -7.5898, population: 4300000, about: "Morocco's largest city and port." },

  // Americas
  { slug: "buenos-aires", city: "Buenos Aires", country: "Argentina", countryCode: "AR", tz: "America/Argentina/Buenos_Aires", flag: "🇦🇷", lat: -34.6037, lon: -58.3816, population: 15000000, about: "Argentina's capital and cultural center." },
  { slug: "santiago", city: "Santiago", country: "Chile", countryCode: "CL", tz: "America/Santiago", flag: "🇨🇱", lat: -33.4489, lon: -70.6693, population: 7000000, about: "Chile's capital in the Andes foothills." },
  { slug: "bogota", city: "Bogotá", country: "Colombia", countryCode: "CO", tz: "America/Bogota", flag: "🇨🇴", lat: 4.711, lon: -74.0721, population: 11000000, about: "Colombia's capital high in the Andes." },
  { slug: "lima", city: "Lima", country: "Peru", countryCode: "PE", tz: "America/Lima", flag: "🇵🇪", lat: -12.0464, lon: -77.0428, population: 10000000, about: "Peru's capital on the Pacific coast." },
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
