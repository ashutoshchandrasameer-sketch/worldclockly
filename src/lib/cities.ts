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
  { slug: "new delhi", city: "New Delhi", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 28.7041, lon: 77.1025, population: 33000000 },
  { slug: "mumbai", city: "Mumbai", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 19.076, lon: 72.8777, population: 20400000 },
  { slug: "bengaluru", city: "Bengaluru", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 12.9716, lon: 77.5946, population: 13600000 },
  { slug: "hyderabad", city: "Hyderabad", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 17.385, lon: 78.4867, population: 10600000 },
  { slug: "ahmedabad", city: "Ahmedabad", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 23.0225, lon: 72.5714, population: 8500000 },
  { slug: "chennai", city: "Chennai", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 13.0827, lon: 80.2707, population: 11300000 },
  { slug: "kolkata", city: "Kolkata", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 22.5726, lon: 88.3639, population: 14900000 },
  { slug: "pune", city: "Pune", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 18.5204, lon: 73.8567, population: 7500000 },
  { slug: "jaipur", city: "Jaipur", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 26.9124, lon: 75.7873, population: 4200000 },
  { slug: "surat", city: "Surat", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 21.1702, lon: 72.8311, population: 7000000 },
  { slug: "lucknow", city: "Lucknow", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 26.8467, lon: 80.9462, population: 3800000 },
  { slug: "kanpur", city: "Kanpur", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 26.4499, lon: 80.3319, population: 3200000 },
  { slug: "nagpur", city: "Nagpur", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 21.1458, lon: 79.0882, population: 3100000 },
  { slug: "indore", city: "Indore", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 22.7196, lon: 75.8577, population: 3300000 },
  { slug: "thane", city: "Thane", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 19.2183, lon: 72.9781, population: 2500000 },
  { slug: "bhopal", city: "Bhopal", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 23.2599, lon: 77.4126, population: 2500000 },
  { slug: "visakhapatnam", city: "Visakhapatnam", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 17.6868, lon: 83.2185, population: 2300000 },
  { slug: "patna", city: "Patna", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 25.5941, lon: 85.1376, population: 2400000 },
  { slug: "vadodara", city: "Vadodara", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 22.3072, lon: 73.1812, population: 2100000 },
  { slug: "ghaziabad", city: "Ghaziabad", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 28.6692, lon: 77.4538, population: 2400000 },
  { slug: "ludhiana", city: "Ludhiana", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 30.901, lon: 75.8573, population: 1800000 },
  { slug: "agra", city: "Agra", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 27.1767, lon: 78.0081, population: 1700000 },
  { slug: "nashik", city: "Nashik", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 19.9975, lon: 73.7898, population: 1700000 },
  { slug: "faridabad", city: "Faridabad", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 28.4089, lon: 77.3178, population: 1900000 },
  { slug: "meerut", city: "Meerut", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 28.9845, lon: 77.7064, population: 1600000 },
  { slug: "rajkot", city: "Rajkot", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 22.3039, lon: 70.8022, population: 1500000 },
  { slug: "varanasi", city: "Varanasi", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 25.3176, lon: 82.9739, population: 1400000 },
  { slug: "srinagar", city: "Srinagar", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 34.0837, lon: 74.7973, population: 1200000 },
  { slug: "aurangabad", city: "Aurangabad", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 19.8762, lon: 75.3433, population: 1300000 },
  { slug: "dhanbad", city: "Dhanbad", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 23.7957, lon: 86.4304, population: 1200000 },
  { slug: "amritsar", city: "Amritsar", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 31.634, lon: 74.8723, population: 1200000 },
  { slug: "allahabad", city: "Prayagraj", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 25.4358, lon: 81.8463, population: 1100000 },
  { slug: "ranchi", city: "Ranchi", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 23.3441, lon: 85.3096, population: 1500000 },
  { slug: "howrah", city: "Howrah", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 22.5958, lon: 88.2636, population: 1100000 },
  { slug: "coimbatore", city: "Coimbatore", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 11.0168, lon: 76.9558, population: 2200000 },
  { slug: "jabalpur", city: "Jabalpur", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 23.1815, lon: 79.9864, population: 1300000 },
  { slug: "gwalior", city: "Gwalior", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 26.2183, lon: 78.1828, population: 1100000 },
  { slug: "vijayawada", city: "Vijayawada", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 16.5062, lon: 80.648 },
  { slug: "jodhpur", city: "Jodhpur", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 26.2389, lon: 73.0243 },
  { slug: "madurai", city: "Madurai", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 9.9252, lon: 78.1198 },
  { slug: "raipur", city: "Raipur", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 21.2514, lon: 81.6296 },
  { slug: "kota", city: "Kota", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 25.2138, lon: 75.8648 },
  { slug: "guwahati", city: "Guwahati", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 26.1445, lon: 91.7362 },
  { slug: "chandigarh", city: "Chandigarh", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 30.7333, lon: 76.7794 },
  { slug: "solapur", city: "Solapur", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 17.6599, lon: 75.9064 },
  { slug: "hubli", city: "Hubli", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 15.3647, lon: 75.124 },
  { slug: "tiruchirappalli", city: "Tiruchirappalli", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 10.7905, lon: 78.7047 },
  { slug: "bareilly", city: "Bareilly", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 28.367, lon: 79.4304 },
  { slug: "mysuru", city: "Mysuru", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 12.2958, lon: 76.6394 },
  { slug: "tiruppur", city: "Tiruppur", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 11.1085, lon: 77.3411 },
  { slug: "gurgaon", city: "Gurgaon", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 28.4595, lon: 77.0266 },
  { slug: "aligarh", city: "Aligarh", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 27.8974, lon: 78.088 },
  { slug: "jalandhar", city: "Jalandhar", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 31.326, lon: 75.5762 },
  { slug: "bhubaneswar", city: "Bhubaneswar", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 20.2961, lon: 85.8245 },
  { slug: "salem", city: "Salem", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 11.6643, lon: 78.146 },
  { slug: "warangal", city: "Warangal", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 17.9689, lon: 79.5941 },
  { slug: "mira-bhayandar", city: "Mira Bhayandar", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 19.2952, lon: 72.8544 },
  { slug: "thiruvananthapuram", city: "Thiruvananthapuram", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 8.5241, lon: 76.9366 },
  { slug: "bhiwandi", city: "Bhiwandi", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 19.2813, lon: 73.0483 },
  { slug: "saharanpur", city: "Saharanpur", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 29.968, lon: 77.5552 },
  { slug: "guntur", city: "Guntur", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 16.3067, lon: 80.4365 },
  { slug: "bikaner", city: "Bikaner", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 28.0229, lon: 73.3119 },
  { slug: "noida", city: "Noida", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 28.5355, lon: 77.391 },
  { slug: "kochi", city: "Kochi", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 9.9312, lon: 76.2673, population: 2100000 },
  { slug: "dehradun", city: "Dehradun", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 30.3165, lon: 78.0322, population: 800000 },
  { slug: "udaipur", city: "Udaipur", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 24.5854, lon: 73.7125, population: 700000 },

  { slug: "new-york", city: "New York", country: "USA", countryCode: "US", tz: "America/New_York", flag: "🇺🇸", lat: 40.7128, lon: -74.006, population: 18800000 },

  { slug: "los-angeles", city: "Los Angeles", country: "USA", countryCode: "US", tz: "America/Los_Angeles", flag: "🇺🇸", lat: 34.0522, lon: -118.2437, population: 12500000 },

  { slug: "chicago", city: "Chicago", country: "USA", countryCode: "US", tz: "America/Chicago", flag: "🇺🇸", lat: 41.8781, lon: -87.6298, population: 8600000 },

  { slug: "houston", city: "Houston", country: "USA", countryCode: "US", tz: "America/Chicago", flag: "🇺🇸", lat: 29.7604, lon: -95.3698, population: 7100000 },

  { slug: "phoenix", city: "Phoenix", country: "USA", countryCode: "US", tz: "America/Phoenix", flag: "🇺🇸", lat: 33.4484, lon: -112.074, population: 5000000 },

  { slug: "philadelphia", city: "Philadelphia", country: "USA", countryCode: "US", tz: "America/New_York", flag: "🇺🇸", lat: 39.9526, lon: -75.1652, population: 6200000 },

  { slug: "san-antonio", city: "San Antonio", country: "USA", countryCode: "US", tz: "America/Chicago", flag: "🇺🇸", lat: 29.4241, lon: -98.4936, population: 2600000 },

  { slug: "san-diego", city: "San Diego", country: "USA", countryCode: "US", tz: "America/Los_Angeles", flag: "🇺🇸", lat: 32.7157, lon: -117.1611, population: 3300000 },

  { slug: "dallas", city: "Dallas", country: "USA", countryCode: "US", tz: "America/Chicago", flag: "🇺🇸", lat: 32.7767, lon: -96.797, population: 6500000 },

  { slug: "san-jose", city: "San Jose", country: "USA", countryCode: "US", tz: "America/Los_Angeles", flag: "🇺🇸", lat: 37.3382, lon: -121.8863, population: 2000000 },

  { slug: "austin", city: "Austin", country: "USA", countryCode: "US", tz: "America/Chicago", flag: "🇺🇸", lat: 30.2672, lon: -97.7431, population: 2400000 },

  { slug: "jacksonville", city: "Jacksonville", country: "USA", countryCode: "US", tz: "America/New_York", flag: "🇺🇸", lat: 30.3322, lon: -81.6557, population: 1700000 },

  { slug: "fort-worth", city: "Fort Worth", country: "USA", countryCode: "US", tz: "America/Chicago", flag: "🇺🇸", lat: 32.7555, lon: -97.3308, population: 1100000 },

  { slug: "columbus", city: "Columbus", country: "USA", countryCode: "US", tz: "America/New_York", flag: "🇺🇸", lat: 39.9612, lon: -82.9988, population: 2100000 },

  { slug: "charlotte", city: "Charlotte", country: "USA", countryCode: "US", tz: "America/New_York", flag: "🇺🇸", lat: 35.2271, lon: -80.8431, population: 2800000 },

  { slug: "san-francisco", city: "San Francisco", country: "USA", countryCode: "US", tz: "America/Los_Angeles", flag: "🇺🇸", lat: 37.7749, lon: -122.4194, population: 4700000 },

  { slug: "indianapolis", city: "Indianapolis", country: "USA", countryCode: "US", tz: "America/Indiana/Indianapolis", flag: "🇺🇸", lat: 39.7684, lon: -86.1581, population: 2100000 },

  { slug: "seattle", city: "Seattle", country: "USA", countryCode: "US", tz: "America/Los_Angeles", flag: "🇺🇸", lat: 47.6062, lon: -122.3321, population: 4100000 },

  { slug: "denver", city: "Denver", country: "USA", countryCode: "US", tz: "America/Denver", flag: "🇺🇸", lat: 39.7392, lon: -104.9903, population: 3000000 },

  { slug: "washington-dc", city: "Washington DC", country: "USA", countryCode: "US", tz: "America/New_York", flag: "🇺🇸", lat: 38.9072, lon: -77.0369, population: 6300000 },

  { slug: "boston", city: "Boston", country: "USA", countryCode: "US", tz: "America/New_York", flag: "🇺🇸", lat: 42.3601, lon: -71.0589, population: 4800000 },

  { slug: "el-paso", city: "El Paso", country: "USA", countryCode: "US", tz: "America/Denver", flag: "🇺🇸", lat: 31.7619, lon: -106.485, population: 870000 },

  { slug: "nashville", city: "Nashville", country: "USA", countryCode: "US", tz: "America/Chicago", flag: "🇺🇸", lat: 36.1627, lon: -86.7816, population: 2100000 },

  { slug: "detroit", city: "Detroit", country: "USA", countryCode: "US", tz: "America/Detroit", flag: "🇺🇸", lat: 42.3314, lon: -83.0458, population: 3500000 },

  { slug: "oklahoma-city", city: "Oklahoma City", country: "USA", countryCode: "US", tz: "America/Chicago", flag: "🇺🇸", lat: 35.4676, lon: -97.5164, population: 1500000 },

  { slug: "portland", city: "Portland", country: "USA", countryCode: "US", tz: "America/Los_Angeles", flag: "🇺🇸", lat: 45.5152, lon: -122.6784, population: 2500000 },

  { slug: "las-vegas", city: "Las Vegas", country: "USA", countryCode: "US", tz: "America/Los_Angeles", flag: "🇺🇸", lat: 36.1699, lon: -115.1398, population: 2300000 },

  { slug: "memphis", city: "Memphis", country: "USA", countryCode: "US", tz: "America/Chicago", flag: "🇺🇸", lat: 35.1495, lon: -90.049, population: 1300000 },

  { slug: "louisville", city: "Louisville", country: "USA", countryCode: "US", tz: "America/Kentucky/Louisville", flag: "🇺🇸", lat: 38.2527, lon: -85.7585, population: 1300000 },

  { slug: "baltimore", city: "Baltimore", country: "USA", countryCode: "US", tz: "America/New_York", flag: "🇺🇸", lat: 39.2904, lon: -76.6122, population: 2800000 },

  { slug: "milwaukee", city: "Milwaukee", country: "USA", countryCode: "US", tz: "America/Chicago", flag: "🇺🇸", lat: 43.0389, lon: -87.9065, population: 1500000 },

  { slug: "albuquerque", city: "Albuquerque", country: "USA", countryCode: "US", tz: "America/Denver", flag: "🇺🇸", lat: 35.0844, lon: -106.6504, population: 920000 },

  { slug: "tucson", city: "Tucson", country: "USA", countryCode: "US", tz: "America/Phoenix", flag: "🇺🇸", lat: 32.2226, lon: -110.9747, population: 1100000 },

  { slug: "fresno", city: "Fresno", country: "USA", countryCode: "US", tz: "America/Los_Angeles", flag: "🇺🇸", lat: 36.7378, lon: -119.7871, population: 1000000 },

  { slug: "sacramento", city: "Sacramento", country: "USA", countryCode: "US", tz: "America/Los_Angeles", flag: "🇺🇸", lat: 38.5816, lon: -121.4944, population: 2400000 },

  { slug: "mesa", city: "Mesa", country: "USA", countryCode: "US", tz: "America/Phoenix", flag: "🇺🇸", lat: 33.4152, lon: -111.8315, population: 520000 },

  { slug: "atlanta", city: "Atlanta", country: "USA", countryCode: "US", tz: "America/New_York", flag: "🇺🇸", lat: 33.749, lon: -84.388, population: 6200000 },

  { slug: "kansas-city", city: "Kansas City", country: "USA", countryCode: "US", tz: "America/Chicago", flag: "🇺🇸", lat: 39.0997, lon: -94.5786, population: 1700000 },

  { slug: "miami", city: "Miami", country: "USA", countryCode: "US", tz: "America/New_York", flag: "🇺🇸", lat: 25.7617, lon: -80.1918, population: 6200000 },

  { slug: "orlando", city: "Orlando", country: "USA", countryCode: "US", tz: "America/New_York", flag: "🇺🇸", lat: 28.5383, lon: -81.3792, population: 2700000 },
  { slug: "london", city: "London", country: "United Kingdom", countryCode: "GB", tz: "Europe/London", flag: "🇬🇧", lat: 51.5072, lon: -0.1276, population: 9500000 },

  { slug: "paris", city: "Paris", country: "France", countryCode: "FR", tz: "Europe/Paris", flag: "🇫🇷", lat: 48.8566, lon: 2.3522, population: 11000000 },

  { slug: "berlin", city: "Berlin", country: "Germany", countryCode: "DE", tz: "Europe/Berlin", flag: "🇩🇪", lat: 52.52, lon: 13.405, population: 3700000 },

  { slug: "madrid", city: "Madrid", country: "Spain", countryCode: "ES", tz: "Europe/Madrid", flag: "🇪🇸", lat: 40.4168, lon: -3.7038, population: 6700000 },

  { slug: "rome", city: "Rome", country: "Italy", countryCode: "IT", tz: "Europe/Rome", flag: "🇮🇹", lat: 41.9028, lon: 12.4964, population: 4300000 },

  { slug: "barcelona", city: "Barcelona", country: "Spain", countryCode: "ES", tz: "Europe/Madrid", flag: "🇪🇸", lat: 41.3851, lon: 2.1734, population: 5600000 },

  { slug: "amsterdam", city: "Amsterdam", country: "Netherlands", countryCode: "NL", tz: "Europe/Amsterdam", flag: "🇳🇱", lat: 52.3676, lon: 4.9041, population: 2500000 },

  { slug: "vienna", city: "Vienna", country: "Austria", countryCode: "AT", tz: "Europe/Vienna", flag: "🇦🇹", lat: 48.2082, lon: 16.3738, population: 2000000 },

  { slug: "warsaw", city: "Warsaw", country: "Poland", countryCode: "PL", tz: "Europe/Warsaw", flag: "🇵🇱", lat: 52.2297, lon: 21.0122, population: 1800000 },

  { slug: "budapest", city: "Budapest", country: "Hungary", countryCode: "HU", tz: "Europe/Budapest", flag: "🇭🇺", lat: 47.4979, lon: 19.0402, population: 1700000 },

  { slug: "prague", city: "Prague", country: "Czech Republic", countryCode: "CZ", tz: "Europe/Prague", flag: "🇨🇿", lat: 50.0755, lon: 14.4378, population: 1400000 },

  { slug: "dublin", city: "Dublin", country: "Ireland", countryCode: "IE", tz: "Europe/Dublin", flag: "🇮🇪", lat: 53.3498, lon: -6.2603, population: 1400000 },

  { slug: "lisbon", city: "Lisbon", country: "Portugal", countryCode: "PT", tz: "Europe/Lisbon", flag: "🇵🇹", lat: 38.7223, lon: -9.1393, population: 2900000 },

  { slug: "brussels", city: "Brussels", country: "Belgium", countryCode: "BE", tz: "Europe/Brussels", flag: "🇧🇪", lat: 50.8503, lon: 4.3517, population: 2100000 },

  { slug: "stockholm", city: "Stockholm", country: "Sweden", countryCode: "SE", tz: "Europe/Stockholm", flag: "🇸🇪", lat: 59.3293, lon: 18.0686, population: 1700000 },

  { slug: "copenhagen", city: "Copenhagen", country: "Denmark", countryCode: "DK", tz: "Europe/Copenhagen", flag: "🇩🇰", lat: 55.6761, lon: 12.5683, population: 1400000 },

  { slug: "oslo", city: "Oslo", country: "Norway", countryCode: "NO", tz: "Europe/Oslo", flag: "🇳🇴", lat: 59.9139, lon: 10.7522, population: 1100000 },

  { slug: "helsinki", city: "Helsinki", country: "Finland", countryCode: "FI", tz: "Europe/Helsinki", flag: "🇫🇮", lat: 60.1699, lon: 24.9384, population: 1300000 },

  { slug: "athens", city: "Athens", country: "Greece", countryCode: "GR", tz: "Europe/Athens", flag: "🇬🇷", lat: 37.9838, lon: 23.7275, population: 3100000 },

  { slug: "zurich", city: "Zurich", country: "Switzerland", countryCode: "CH", tz: "Europe/Zurich", flag: "🇨🇭", lat: 47.3769, lon: 8.5417, population: 1500000 },

  { slug: "munich", city: "Munich", country: "Germany", countryCode: "DE", tz: "Europe/Berlin", flag: "🇩🇪", lat: 48.1351, lon: 11.582, population: 1500000 },

  { slug: "hamburg", city: "Hamburg", country: "Germany", countryCode: "DE", tz: "Europe/Berlin", flag: "🇩🇪", lat: 53.5511, lon: 9.9937, population: 1900000 },

  { slug: "milan", city: "Milan", country: "Italy", countryCode: "IT", tz: "Europe/Rome", flag: "🇮🇹", lat: 45.4642, lon: 9.19, population: 3200000 },

  { slug: "naples", city: "Naples", country: "Italy", countryCode: "IT", tz: "Europe/Rome", flag: "🇮🇹", lat: 40.8518, lon: 14.2681, population: 3000000 },

  { slug: "valencia", city: "Valencia", country: "Spain", countryCode: "ES", tz: "Europe/Madrid", flag: "🇪🇸", lat: 39.4699, lon: -0.3763, population: 2500000 },

  { slug: "seville", city: "Seville", country: "Spain", countryCode: "ES", tz: "Europe/Madrid", flag: "🇪🇸", lat: 37.3891, lon: -5.9845, population: 1500000 },

  { slug: "manchester", city: "Manchester", country: "United Kingdom", countryCode: "GB", tz: "Europe/London", flag: "🇬🇧", lat: 53.4808, lon: -2.2426, population: 2800000 },

  { slug: "birmingham", city: "Birmingham", country: "United Kingdom", countryCode: "GB", tz: "Europe/London", flag: "🇬🇧", lat: 52.4862, lon: -1.8904, population: 2600000 },

  { slug: "glasgow", city: "Glasgow", country: "United Kingdom", countryCode: "GB", tz: "Europe/London", flag: "🇬🇧", lat: 55.8642, lon: -4.2518, population: 1700000 },

  { slug: "edinburgh", city: "Edinburgh", country: "United Kingdom", countryCode: "GB", tz: "Europe/London", flag: "🇬🇧", lat: 55.9533, lon: -3.1883, population: 900000 },

  { slug: "lyon", city: "Lyon", country: "France", countryCode: "FR", tz: "Europe/Paris", flag: "🇫🇷", lat: 45.764, lon: 4.8357, population: 2300000 },

  { slug: "marseille", city: "Marseille", country: "France", countryCode: "FR", tz: "Europe/Paris", flag: "🇫🇷", lat: 43.2965, lon: 5.3698, population: 1800000 },

  { slug: "nice", city: "Nice", country: "France", countryCode: "FR", tz: "Europe/Paris", flag: "🇫🇷", lat: 43.7102, lon: 7.262, population: 1000000 },

  { slug: "frankfurt", city: "Frankfurt", country: "Germany", countryCode: "DE", tz: "Europe/Berlin", flag: "🇩🇪", lat: 50.1109, lon: 8.6821, population: 2300000 },

  { slug: "stuttgart", city: "Stuttgart", country: "Germany", countryCode: "DE", tz: "Europe/Berlin", flag: "🇩🇪", lat: 48.7758, lon: 9.1829, population: 1400000 },

  { slug: "cologne", city: "Cologne", country: "Germany", countryCode: "DE", tz: "Europe/Berlin", flag: "🇩🇪", lat: 50.9375, lon: 6.9603, population: 1100000 },

  { slug: "rotterdam", city: "Rotterdam", country: "Netherlands", countryCode: "NL", tz: "Europe/Amsterdam", flag: "🇳🇱", lat: 51.9244, lon: 4.4777, population: 1200000 },

  { slug: "the-hague", city: "The Hague", country: "Netherlands", countryCode: "NL", tz: "Europe/Amsterdam", flag: "🇳🇱", lat: 52.0705, lon: 4.3007, population: 900000 },

  { slug: "antwerp", city: "Antwerp", country: "Belgium", countryCode: "BE", tz: "Europe/Brussels", flag: "🇧🇪", lat: 51.2194, lon: 4.4025, population: 1200000 },

  { slug: "geneva", city: "Geneva", country: "Switzerland", countryCode: "CH", tz: "Europe/Zurich", flag: "🇨🇭", lat: 46.2044, lon: 6.1432, population: 650000 },

  { slug: "basel", city: "Basel", country: "Switzerland", countryCode: "CH", tz: "Europe/Zurich", flag: "🇨🇭", lat: 47.5596, lon: 7.5886, population: 550000 },

  { slug: "krakow", city: "Kraków", country: "Poland", countryCode: "PL", tz: "Europe/Warsaw", flag: "🇵🇱", lat: 50.0647, lon: 19.945, population: 800000 },

  { slug: "gdansk", city: "Gdańsk", country: "Poland", countryCode: "PL", tz: "Europe/Warsaw", flag: "🇵🇱", lat: 54.352, lon: 18.6466, population: 750000 },

  { slug: "bucharest", city: "Bucharest", country: "Romania", countryCode: "RO", tz: "Europe/Bucharest", flag: "🇷🇴", lat: 44.4268, lon: 26.1025, population: 2200000 },

  { slug: "sofia", city: "Sofia", country: "Bulgaria", countryCode: "BG", tz: "Europe/Sofia", flag: "🇧🇬", lat: 42.6977, lon: 23.3219, population: 1300000 },

  { slug: "belgrade", city: "Belgrade", country: "Serbia", countryCode: "RS", tz: "Europe/Belgrade", flag: "🇷🇸", lat: 44.7866, lon: 20.4489, population: 1400000 },

  { slug: "zagreb", city: "Zagreb", country: "Croatia", countryCode: "HR", tz: "Europe/Zagreb", flag: "🇭🇷", lat: 45.815, lon: 15.9819, population: 800000 },

  { slug: "ljubljana", city: "Ljubljana", country: "Slovenia", countryCode: "SI", tz: "Europe/Ljubljana", flag: "🇸🇮", lat: 46.0569, lon: 14.5058, population: 300000 },

  { slug: "bratislava", city: "Bratislava", country: "Slovakia", countryCode: "SK", tz: "Europe/Bratislava", flag: "🇸🇰", lat: 48.1486, lon: 17.1077, population: 700000 },

  { slug: "kyiv", city: "Kyiv", country: "Ukraine", countryCode: "UA", tz: "Europe/Kyiv", flag: "🇺🇦", lat: 50.4501, lon: 30.5234, population: 3000000 },

  { slug: "odessa", city: "Odessa", country: "Ukraine", countryCode: "UA", tz: "Europe/Kyiv", flag: "🇺🇦", lat: 46.4825, lon: 30.7233, population: 1000000 },

  { slug: "istanbul", city: "Istanbul", country: "Turkey", countryCode: "TR", tz: "Europe/Istanbul", flag: "🇹🇷", lat: 41.0082, lon: 28.9784, population: 15600000 },

  { slug: "ankara", city: "Ankara", country: "Turkey", countryCode: "TR", tz: "Europe/Istanbul", flag: "🇹🇷", lat: 39.9334, lon: 32.8597, population: 5700000 },

  { slug: "izmir", city: "Izmir", country: "Turkey", countryCode: "TR", tz: "Europe/Istanbul", flag: "🇹🇷", lat: 38.4237, lon: 27.1428, population: 4300000 },
  
  { slug: "dubai", city: "Dubai", country: "UAE", countryCode: "AE", tz: "Asia/Dubai", flag: "🇦🇪", lat: 25.2048, lon: 55.2708, population: 3600000 },

  { slug: "abu-dhabi", city: "Abu Dhabi", country: "UAE", countryCode: "AE", tz: "Asia/Dubai", flag: "🇦🇪", lat: 24.4539, lon: 54.3773, population: 1500000 },

  { slug: "riyadh", city: "Riyadh", country: "Saudi Arabia", countryCode: "SA", tz: "Asia/Riyadh", flag: "🇸🇦", lat: 24.7136, lon: 46.6753, population: 7700000 },

  { slug: "jeddah", city: "Jeddah", country: "Saudi Arabia", countryCode: "SA", tz: "Asia/Riyadh", flag: "🇸🇦", lat: 21.4858, lon: 39.1925, population: 4800000 },

  { slug: "mecca", city: "Mecca", country: "Saudi Arabia", countryCode: "SA", tz: "Asia/Riyadh", flag: "🇸🇦", lat: 21.3891, lon: 39.8579, population: 2400000 },

  { slug: "doha", city: "Doha", country: "Qatar", countryCode: "QA", tz: "Asia/Qatar", flag: "🇶🇦", lat: 25.2854, lon: 51.531, population: 2400000 },

  { slug: "kuwait-city", city: "Kuwait City", country: "Kuwait", countryCode: "KW", tz: "Asia/Kuwait", flag: "🇰🇼", lat: 29.3759, lon: 47.9774, population: 3000000 },

  { slug: "manama", city: "Manama", country: "Bahrain", countryCode: "BH", tz: "Asia/Bahrain", flag: "🇧🇭", lat: 26.2235, lon: 50.5876, population: 700000 },

  { slug: "muscat", city: "Muscat", country: "Oman", countryCode: "OM", tz: "Asia/Muscat", flag: "🇴🇲", lat: 23.588, lon: 58.3829, population: 1700000 },

  { slug: "tehran", city: "Tehran", country: "Iran", countryCode: "IR", tz: "Asia/Tehran", flag: "🇮🇷", lat: 35.6892, lon: 51.389, population: 9500000 },

  { slug: "mashhad", city: "Mashhad", country: "Iran", countryCode: "IR", tz: "Asia/Tehran", flag: "🇮🇷", lat: 36.2605, lon: 59.6168, population: 3400000 },

  { slug: "baghdad", city: "Baghdad", country: "Iraq", countryCode: "IQ", tz: "Asia/Baghdad", flag: "🇮🇶", lat: 33.3152, lon: 44.3661, population: 8700000 },

  { slug: "basra", city: "Basra", country: "Iraq", countryCode: "IQ", tz: "Asia/Baghdad", flag: "🇮🇶", lat: 30.5085, lon: 47.7804, population: 2600000 },

  { slug: "amman", city: "Amman", country: "Jordan", countryCode: "JO", tz: "Asia/Amman", flag: "🇯🇴", lat: 31.9454, lon: 35.9284, population: 4000000 },

  { slug: "beirut", city: "Beirut", country: "Lebanon", countryCode: "LB", tz: "Asia/Beirut", flag: "🇱🇧", lat: 33.8938, lon: 35.5018, population: 2400000 },

  { slug: "jerusalem", city: "Jerusalem", country: "Israel", countryCode: "IL", tz: "Asia/Jerusalem", flag: "🇮🇱", lat: 31.7683, lon: 35.2137, population: 970000 },

  { slug: "tel-aviv", city: "Tel Aviv", country: "Israel", countryCode: "IL", tz: "Asia/Jerusalem", flag: "🇮🇱", lat: 32.0853, lon: 34.7818, population: 460000 },

    { slug: "tokyo", city: "Tokyo", country: "Japan", countryCode: "JP", tz: "Asia/Tokyo", flag: "🇯🇵", lat: 35.6762, lon: 139.6503, population: 37400000 },

  { slug: "osaka", city: "Osaka", country: "Japan", countryCode: "JP", tz: "Asia/Tokyo", flag: "🇯🇵", lat: 34.6937, lon: 135.5023, population: 19200000 },

  { slug: "nagoya", city: "Nagoya", country: "Japan", countryCode: "JP", tz: "Asia/Tokyo", flag: "🇯🇵", lat: 35.1815, lon: 136.9066, population: 9200000 },

  { slug: "beijing", city: "Beijing", country: "China", countryCode: "CN", tz: "Asia/Shanghai", flag: "🇨🇳", lat: 39.9042, lon: 116.4074, population: 21500000 },

  { slug: "shanghai", city: "Shanghai", country: "China", countryCode: "CN", tz: "Asia/Shanghai", flag: "🇨🇳", lat: 31.2304, lon: 121.4737, population: 28700000 },

  { slug: "shenzhen", city: "Shenzhen", country: "China", countryCode: "CN", tz: "Asia/Shanghai", flag: "🇨🇳", lat: 22.5431, lon: 114.0579, population: 17600000 },

  { slug: "guangzhou", city: "Guangzhou", country: "China", countryCode: "CN", tz: "Asia/Shanghai", flag: "🇨🇳", lat: 23.1291, lon: 113.2644, population: 18800000 },

  { slug: "chengdu", city: "Chengdu", country: "China", countryCode: "CN", tz: "Asia/Shanghai", flag: "🇨🇳", lat: 30.5728, lon: 104.0668, population: 16300000 },

  { slug: "seoul", city: "Seoul", country: "South Korea", countryCode: "KR", tz: "Asia/Seoul", flag: "🇰🇷", lat: 37.5665, lon: 126.978, population: 9700000 },

  { slug: "busan", city: "Busan", country: "South Korea", countryCode: "KR", tz: "Asia/Seoul", flag: "🇰🇷", lat: 35.1796, lon: 129.0756, population: 3400000 },

  { slug: "singapore", city: "Singapore", country: "Singapore", countryCode: "SG", tz: "Asia/Singapore", flag: "🇸🇬", lat: 1.3521, lon: 103.8198, population: 5900000 },

  { slug: "bangkok", city: "Bangkok", country: "Thailand", countryCode: "TH", tz: "Asia/Bangkok", flag: "🇹🇭", lat: 13.7563, lon: 100.5018, population: 10700000 },

  { slug: "jakarta", city: "Jakarta", country: "Indonesia", countryCode: "ID", tz: "Asia/Jakarta", flag: "🇮🇩", lat: -6.2088, lon: 106.8456, population: 10700000 },

  { slug: "surabaya", city: "Surabaya", country: "Indonesia", countryCode: "ID", tz: "Asia/Jakarta", flag: "🇮🇩", lat: -7.2575, lon: 112.7521, population: 3000000 },

  { slug: "manila", city: "Manila", country: "Philippines", countryCode: "PH", tz: "Asia/Manila", flag: "🇵🇭", lat: 14.5995, lon: 120.9842, population: 13900000 },

  { slug: "cebu", city: "Cebu", country: "Philippines", countryCode: "PH", tz: "Asia/Manila", flag: "🇵🇭", lat: 10.3157, lon: 123.8854, population: 1000000 },

  { slug: "hanoi", city: "Hanoi", country: "Vietnam", countryCode: "VN", tz: "Asia/Ho_Chi_Minh", flag: "🇻🇳", lat: 21.0278, lon: 105.8342, population: 8500000 },

  { slug: "ho-chi-minh-city", city: "Ho Chi Minh City", country: "Vietnam", countryCode: "VN", tz: "Asia/Ho_Chi_Minh", flag: "🇻🇳", lat: 10.8231, lon: 106.6297, population: 9300000 },

  { slug: "kuala-lumpur", city: "Kuala Lumpur", country: "Malaysia", countryCode: "MY", tz: "Asia/Kuala_Lumpur", flag: "🇲🇾", lat: 3.139, lon: 101.6869, population: 8000000 },

  { slug: "penang", city: "Penang", country: "Malaysia", countryCode: "MY", tz: "Asia/Kuala_Lumpur", flag: "🇲🇾", lat: 5.4164, lon: 100.3327, population: 1800000 },

   { slug: "sao-paulo", city: "São Paulo", country: "Brazil", countryCode: "BR", tz: "America/Sao_Paulo", flag: "🇧🇷", lat: -23.5505, lon: -46.6333, population: 22400000 },

  { slug: "rio-de-janeiro", city: "Rio de Janeiro", country: "Brazil", countryCode: "BR", tz: "America/Sao_Paulo", flag: "🇧🇷", lat: -22.9068, lon: -43.1729, population: 13500000 },

  { slug: "buenos-aires", city: "Buenos Aires", country: "Argentina", countryCode: "AR", tz: "America/Argentina/Buenos_Aires", flag: "🇦🇷", lat: -34.6037, lon: -58.3816, population: 15300000 },

  { slug: "mexico-city", city: "Mexico City", country: "Mexico", countryCode: "MX", tz: "America/Mexico_City", flag: "🇲🇽", lat: 19.4326, lon: -99.1332, population: 22000000 },

  { slug: "bogota", city: "Bogotá", country: "Colombia", countryCode: "CO", tz: "America/Bogota", flag: "🇨🇴", lat: 4.711, lon: -74.0721, population: 11000000 },

  { slug: "lima", city: "Lima", country: "Peru", countryCode: "PE", tz: "America/Lima", flag: "🇵🇪", lat: -12.0464, lon: -77.0428, population: 11000000 },

  { slug: "santiago", city: "Santiago", country: "Chile", countryCode: "CL", tz: "America/Santiago", flag: "🇨🇱", lat: -33.4489, lon: -70.6693, population: 6200000 },

  { slug: "medellin", city: "Medellín", country: "Colombia", countryCode: "CO", tz: "America/Bogota", flag: "🇨🇴", lat: 6.2442, lon: -75.5812, population: 4100000 },

  { slug: "monterrey", city: "Monterrey", country: "Mexico", countryCode: "MX", tz: "America/Monterrey", flag: "🇲🇽", lat: 25.6866, lon: -100.3161, population: 5300000 },

  { slug: "guadalajara", city: "Guadalajara", country: "Mexico", countryCode: "MX", tz: "America/Mexico_City", flag: "🇲🇽", lat: 20.6597, lon: -103.3496, population: 5200000 },

  { slug: "quito", city: "Quito", country: "Ecuador", countryCode: "EC", tz: "America/Guayaquil", flag: "🇪🇨", lat: -0.1807, lon: -78.4678, population: 2800000 },

  { slug: "caracas", city: "Caracas", country: "Venezuela", countryCode: "VE", tz: "America/Caracas", flag: "🇻🇪", lat: 10.4806, lon: -66.9036, population: 2900000 },

  { slug: "panama-city", city: "Panama City", country: "Panama", countryCode: "PA", tz: "America/Panama", flag: "🇵🇦", lat: 8.9824, lon: -79.5199, population: 1800000 },

  { slug: "san-jose", city: "San José", country: "Costa Rica", countryCode: "CR", tz: "America/Costa_Rica", flag: "🇨🇷", lat: 9.9281, lon: -84.0907, population: 2200000 },

  { slug: "montevideo", city: "Montevideo", country: "Uruguay", countryCode: "UY", tz: "America/Montevideo", flag: "🇺🇾", lat: -34.9011, lon: -56.1645, population: 1700000 },

  { slug: "asuncion", city: "Asunción", country: "Paraguay", countryCode: "PY", tz: "America/Asuncion", flag: "🇵🇾", lat: -25.2637, lon: -57.5759, population: 2300000 },

  { slug: "guayaquil", city: "Guayaquil", country: "Ecuador", countryCode: "EC", tz: "America/Guayaquil", flag: "🇪🇨", lat: -2.1709, lon: -79.9224, population: 2800000 },

  { slug: "cordoba", city: "Córdoba", country: "Argentina", countryCode: "AR", tz: "America/Argentina/Cordoba", flag: "🇦🇷", lat: -31.4201, lon: -64.1888, population: 1600000 },

  { slug: "salvador", city: "Salvador", country: "Brazil", countryCode: "BR", tz: "America/Bahia", flag: "🇧🇷", lat: -12.9777, lon: -38.5016, population: 4000000 },

  { slug: "fortaleza", city: "Fortaleza", country: "Brazil", countryCode: "BR", tz: "America/Fortaleza", flag: "🇧🇷", lat: -3.7319, lon: -38.5267, population: 3900000 },
  { slug: "recife", city: "Recife", country: "Brazil", countryCode: "BR", tz: "America/Recife", flag: "🇧🇷", lat: -8.0476, lon: -34.877, population: 1600000 }, 
  // Pakistan
  { slug: "karachi", city: "Karachi", country: "Pakistan", countryCode: "PK", tz: "Asia/Karachi", flag: "🇵🇰", lat: 24.8607, lon: 67.0011, population: 16000000 },

  { slug: "lahore", city: "Lahore", country: "Pakistan", countryCode: "PK", tz: "Asia/Karachi", flag: "🇵🇰", lat: 31.5204, lon: 74.3587, population: 13000000 },

  { slug: "islamabad", city: "Islamabad", country: "Pakistan", countryCode: "PK", tz: "Asia/Karachi", flag: "🇵🇰", lat: 33.6844, lon: 73.0479, population: 1200000 },

  { slug: "rawalpindi", city: "Rawalpindi", country: "Pakistan", countryCode: "PK", tz: "Asia/Karachi", flag: "🇵🇰", lat: 33.5651, lon: 73.0169, population: 2100000 },

  { slug: "faisalabad", city: "Faisalabad", country: "Pakistan", countryCode: "PK", tz: "Asia/Karachi", flag: "🇵🇰", lat: 31.4504, lon: 73.135, population: 3800000 },

  // Bangladesh
  { slug: "dhaka", city: "Dhaka", country: "Bangladesh", countryCode: "BD", tz: "Asia/Dhaka", flag: "🇧🇩", lat: 23.8103, lon: 90.4125, population: 22000000 },

  { slug: "chittagong", city: "Chittagong", country: "Bangladesh", countryCode: "BD", tz: "Asia/Dhaka", flag: "🇧🇩", lat: 22.3569, lon: 91.7832, population: 5300000 },

  { slug: "khulna", city: "Khulna", country: "Bangladesh", countryCode: "BD", tz: "Asia/Dhaka", flag: "🇧🇩", lat: 22.8456, lon: 89.5403, population: 1500000 },

  { slug: "rajshahi", city: "Rajshahi", country: "Bangladesh", countryCode: "BD", tz: "Asia/Dhaka", flag: "🇧🇩", lat: 24.3745, lon: 88.6042, population: 900000 },

  { slug: "sylhet", city: "Sylhet", country: "Bangladesh", countryCode: "BD", tz: "Asia/Dhaka", flag: "🇧🇩", lat: 24.8949, lon: 91.8687, population: 700000 },

  // Nepal
  { slug: "kathmandu", city: "Kathmandu", country: "Nepal", countryCode: "NP", tz: "Asia/Kathmandu", flag: "🇳🇵", lat: 27.7172, lon: 85.324, population: 1500000 },

  { slug: "pokhara", city: "Pokhara", country: "Nepal", countryCode: "NP", tz: "Asia/Kathmandu", flag: "🇳🇵", lat: 28.2096, lon: 83.9856, population: 500000 },

  { slug: "lalitpur", city: "Lalitpur", country: "Nepal", countryCode: "NP", tz: "Asia/Kathmandu", flag: "🇳🇵", lat: 27.6644, lon: 85.3188, population: 300000 },

  { slug: "bharatpur", city: "Bharatpur", country: "Nepal", countryCode: "NP", tz: "Asia/Kathmandu", flag: "🇳🇵", lat: 27.6833, lon: 84.4333, population: 280000 },

  { slug: "biratnagar", city: "Biratnagar", country: "Nepal", countryCode: "NP", tz: "Asia/Kathmandu", flag: "🇳🇵", lat: 26.4525, lon: 87.2718, population: 250000 },

  // Sri Lanka
  { slug: "colombo", city: "Colombo", country: "Sri Lanka", countryCode: "LK", tz: "Asia/Colombo", flag: "🇱🇰", lat: 6.9271, lon: 79.8612, population: 750000 },

  { slug: "kandy", city: "Kandy", country: "Sri Lanka", countryCode: "LK", tz: "Asia/Colombo", flag: "🇱🇰", lat: 7.2906, lon: 80.6337, population: 125000 },

  { slug: "galle", city: "Galle", country: "Sri Lanka", countryCode: "LK", tz: "Asia/Colombo", flag: "🇱🇰", lat: 6.0535, lon: 80.221, population: 100000 },

  { slug: "jaffna", city: "Jaffna", country: "Sri Lanka", countryCode: "LK", tz: "Asia/Colombo", flag: "🇱🇰", lat: 9.6615, lon: 80.0255, population: 90000 },

  { slug: "negombo", city: "Negombo", country: "Sri Lanka", countryCode: "LK", tz: "Asia/Colombo", flag: "🇱🇰", lat: 7.2083, lon: 79.8358, population: 140000 },

  // Bhutan
  { slug: "thimphu", city: "Thimphu", country: "Bhutan", countryCode: "BT", tz: "Asia/Thimphu", flag: "🇧🇹", lat: 27.4728, lon: 89.639, population: 115000 },

  { slug: "phuntsholing", city: "Phuntsholing", country: "Bhutan", countryCode: "BT", tz: "Asia/Thimphu", flag: "🇧🇹", lat: 26.8516, lon: 89.3885, population: 30000 },

  { slug: "paro", city: "Paro", country: "Bhutan", countryCode: "BT", tz: "Asia/Thimphu", flag: "🇧🇹", lat: 27.4286, lon: 89.4167, population: 20000 },

  { slug: "punakha", city: "Punakha", country: "Bhutan", countryCode: "BT", tz: "Asia/Thimphu", flag: "🇧🇹", lat: 27.5914, lon: 89.877, population: 10000 },

  { slug: "gelephu", city: "Gelephu", country: "Bhutan", countryCode: "BT", tz: "Asia/Thimphu", flag: "🇧🇹", lat: 26.8717, lon: 90.4856, population: 10000 },

  // Myanmar
  { slug: "yangon", city: "Yangon", country: "Myanmar", countryCode: "MM", tz: "Asia/Yangon", flag: "🇲🇲", lat: 16.8409, lon: 96.1735, population: 5200000 },

  { slug: "mandalay", city: "Mandalay", country: "Myanmar", countryCode: "MM", tz: "Asia/Yangon", flag: "🇲🇲", lat: 21.9588, lon: 96.0891, population: 1500000 },

  { slug: "naypyidaw", city: "Naypyidaw", country: "Myanmar", countryCode: "MM", tz: "Asia/Yangon", flag: "🇲🇲", lat: 19.7633, lon: 96.0785, population: 900000 },

  { slug: "bago", city: "Bago", country: "Myanmar", countryCode: "MM", tz: "Asia/Yangon", flag: "🇲🇲", lat: 17.3364, lon: 96.4797, population: 500000 },

  { slug: "mawlamyine", city: "Mawlamyine", country: "Myanmar", countryCode: "MM", tz: "Asia/Yangon", flag: "🇲🇲", lat: 16.4543, lon: 97.6256, population: 300000 },
   { slug: "lagos", city: "Lagos", country: "Nigeria", countryCode: "NG", tz: "Africa/Lagos", flag: "🇳🇬", lat: 6.5244, lon: 3.3792, population: 15000000 },

  { slug: "cairo", city: "Cairo", country: "Egypt", countryCode: "EG", tz: "Africa/Cairo", flag: "🇪🇬", lat: 30.0444, lon: 31.2357, population: 22000000 },

  { slug: "johannesburg", city: "Johannesburg", country: "South Africa", countryCode: "ZA", tz: "Africa/Johannesburg", flag: "🇿🇦", lat: -26.2041, lon: 28.0473, population: 9600000 },

  { slug: "cape-town", city: "Cape Town", country: "South Africa", countryCode: "ZA", tz: "Africa/Johannesburg", flag: "🇿🇦", lat: -33.9249, lon: 18.4241, population: 4600000 },

  { slug: "nairobi", city: "Nairobi", country: "Kenya", countryCode: "KE", tz: "Africa/Nairobi", flag: "🇰🇪", lat: -1.2921, lon: 36.8219, population: 5000000 },

  { slug: "casablanca", city: "Casablanca", country: "Morocco", countryCode: "MA", tz: "Africa/Casablanca", flag: "🇲🇦", lat: 33.5731, lon: -7.5898, population: 3700000 },

  { slug: "algiers", city: "Algiers", country: "Algeria", countryCode: "DZ", tz: "Africa/Algiers", flag: "🇩🇿", lat: 36.7538, lon: 3.0588, population: 3500000 },

  { slug: "tunis", city: "Tunis", country: "Tunisia", countryCode: "TN", tz: "Africa/Tunis", flag: "🇹🇳", lat: 36.8065, lon: 10.1815, population: 2700000 },

  { slug: "addis-ababa", city: "Addis Ababa", country: "Ethiopia", countryCode: "ET", tz: "Africa/Addis_Ababa", flag: "🇪🇹", lat: 8.9806, lon: 38.7578, population: 5500000 },

  { slug: "accra", city: "Accra", country: "Ghana", countryCode: "GH", tz: "Africa/Accra", flag: "🇬🇭", lat: 5.6037, lon: -0.187, population: 2600000 },

  { slug: "dar-es-salaam", city: "Dar es Salaam", country: "Tanzania", countryCode: "TZ", tz: "Africa/Dar_es_Salaam", flag: "🇹🇿", lat: -6.7924, lon: 39.2083, population: 6700000 },

  { slug: "kampala", city: "Kampala", country: "Uganda", countryCode: "UG", tz: "Africa/Kampala", flag: "🇺🇬", lat: 0.3476, lon: 32.5825, population: 1700000 },

  { slug: "kigali", city: "Kigali", country: "Rwanda", countryCode: "RW", tz: "Africa/Kigali", flag: "🇷🇼", lat: -1.9441, lon: 30.0619, population: 1200000 },

  { slug: "luanda", city: "Luanda", country: "Angola", countryCode: "AO", tz: "Africa/Luanda", flag: "🇦🇴", lat: -8.839, lon: 13.2894, population: 8900000 },

  { slug: "khartoum", city: "Khartoum", country: "Sudan", countryCode: "SD", tz: "Africa/Khartoum", flag: "🇸🇩", lat: 15.5007, lon: 32.5599, population: 6000000 },

  { slug: "dakar", city: "Dakar", country: "Senegal", countryCode: "SN", tz: "Africa/Dakar", flag: "🇸🇳", lat: 14.7167, lon: -17.4677, population: 3800000 },

  { slug: "maputo", city: "Maputo", country: "Mozambique", countryCode: "MZ", tz: "Africa/Maputo", flag: "🇲🇿", lat: -25.9692, lon: 32.5732, population: 1800000 },

  { slug: "harare", city: "Harare", country: "Zimbabwe", countryCode: "ZW", tz: "Africa/Harare", flag: "🇿🇼", lat: -17.8252, lon: 31.0335, population: 1600000 },

  { slug: "lusaka", city: "Lusaka", country: "Zambia", countryCode: "ZM", tz: "Africa/Lusaka", flag: "🇿🇲", lat: -15.3875, lon: 28.3228, population: 3200000 },

  { slug: "gaborone", city: "Gaborone", country: "Botswana", countryCode: "BW", tz: "Africa/Gaborone", flag: "🇧🇼", lat: -24.6282, lon: 25.9231, population: 280000 },
    { slug: "sydney", city: "Sydney", country: "Australia", countryCode: "AU", tz: "Australia/Sydney", flag: "🇦🇺", lat: -33.8688, lon: 151.2093, population: 5300000 },

  { slug: "melbourne", city: "Melbourne", country: "Australia", countryCode: "AU", tz: "Australia/Melbourne", flag: "🇦🇺", lat: -37.8136, lon: 144.9631, population: 5100000 },

  { slug: "brisbane", city: "Brisbane", country: "Australia", countryCode: "AU", tz: "Australia/Brisbane", flag: "🇦🇺", lat: -27.4698, lon: 153.0251, population: 2600000 },

  { slug: "perth", city: "Perth", country: "Australia", countryCode: "AU", tz: "Australia/Perth", flag: "🇦🇺", lat: -31.9505, lon: 115.8605, population: 2200000 },

  { slug: "adelaide", city: "Adelaide", country: "Australia", countryCode: "AU", tz: "Australia/Adelaide", flag: "🇦🇺", lat: -34.9285, lon: 138.6007, population: 1400000 },

  { slug: "canberra", city: "Canberra", country: "Australia", countryCode: "AU", tz: "Australia/Sydney", flag: "🇦🇺", lat: -35.2809, lon: 149.13, population: 470000 },

  { slug: "gold-coast", city: "Gold Coast", country: "Australia", countryCode: "AU", tz: "Australia/Brisbane", flag: "🇦🇺", lat: -28.0167, lon: 153.4, population: 720000 },

  { slug: "newcastle", city: "Newcastle", country: "Australia", countryCode: "AU", tz: "Australia/Sydney", flag: "🇦🇺", lat: -32.9283, lon: 151.7817, population: 500000 },

  { slug: "central-coast", city: "Central Coast", country: "Australia", countryCode: "AU", tz: "Australia/Sydney", flag: "🇦🇺", lat: -33.3, lon: 151.2, population: 350000 },

  { slug: "wollongong", city: "Wollongong", country: "Australia", countryCode: "AU", tz: "Australia/Sydney", flag: "🇦🇺", lat: -34.4278, lon: 150.8931, population: 310000 },

  { slug: "hobart", city: "Hobart", country: "Australia", countryCode: "AU", tz: "Australia/Hobart", flag: "🇦🇺", lat: -42.8821, lon: 147.3272, population: 250000 },

  { slug: "geelong", city: "Geelong", country: "Australia", countryCode: "AU", tz: "Australia/Melbourne", flag: "🇦🇺", lat: -38.1499, lon: 144.3617, population: 270000 },

  { slug: "townsville", city: "Townsville", country: "Australia", countryCode: "AU", tz: "Australia/Brisbane", flag: "🇦🇺", lat: -19.2589, lon: 146.8169, population: 180000 },

  { slug: "cairns", city: "Cairns", country: "Australia", countryCode: "AU", tz: "Australia/Brisbane", flag: "🇦🇺", lat: -16.9186, lon: 145.7781, population: 160000 },

  { slug: "darwin", city: "Darwin", country: "Australia", countryCode: "AU", tz: "Australia/Darwin", flag: "🇦🇺", lat: -12.4634, lon: 130.8456, population: 150000 },

  { slug: "toowoomba", city: "Toowoomba", country: "Australia", countryCode: "AU", tz: "Australia/Brisbane", flag: "🇦🇺", lat: -27.5598, lon: 151.9507, population: 145000 },

  { slug: "ballarat", city: "Ballarat", country: "Australia", countryCode: "AU", tz: "Australia/Melbourne", flag: "🇦🇺", lat: -37.5622, lon: 143.8503, population: 120000 },

  { slug: "bendigo", city: "Bendigo", country: "Australia", countryCode: "AU", tz: "Australia/Melbourne", flag: "🇦🇺", lat: -36.757, lon: 144.2794, population: 115000 },

  { slug: "albury", city: "Albury", country: "Australia", countryCode: "AU", tz: "Australia/Sydney", flag: "🇦🇺", lat: -36.0805, lon: 146.9161, population: 95000 },

  { slug: "launceston", city: "Launceston", country: "Australia", countryCode: "AU", tz: "Australia/Hobart", flag: "🇦🇺", lat: -41.4332, lon: 147.1441, population: 90000 },

  { slug: "mackay", city: "Mackay", country: "Australia", countryCode: "AU", tz: "Australia/Brisbane", flag: "🇦🇺", lat: -21.1411, lon: 149.186, population: 85000 },

  { slug: "rockhampton", city: "Rockhampton", country: "Australia", countryCode: "AU", tz: "Australia/Brisbane", flag: "🇦🇺", lat: -23.3781, lon: 150.51, population: 80000 },

  { slug: "bunbury", city: "Bunbury", country: "Australia", countryCode: "AU", tz: "Australia/Perth", flag: "🇦🇺", lat: -33.3271, lon: 115.6414, population: 76000 },

  { slug: "hervey-bay", city: "Hervey Bay", country: "Australia", countryCode: "AU", tz: "Australia/Brisbane", flag: "🇦🇺", lat: -25.2882, lon: 152.768, population: 74000 },

  { slug: "wagga-wagga", city: "Wagga Wagga", country: "Australia", countryCode: "AU", tz: "Australia/Sydney", flag: "🇦🇺", lat: -35.1082, lon: 147.3598, population: 70000 },

  { slug: "port-macquarie", city: "Port Macquarie", country: "Australia", countryCode: "AU", tz: "Australia/Sydney", flag: "🇦🇺", lat: -31.4333, lon: 152.9, population: 67000 },

  { slug: "tamworth", city: "Tamworth", country: "Australia", countryCode: "AU", tz: "Australia/Sydney", flag: "🇦🇺", lat: -31.0905, lon: 150.9291, population: 65000 },

  { slug: "orange", city: "Orange", country: "Australia", countryCode: "AU", tz: "Australia/Sydney", flag: "🇦🇺", lat: -33.283, lon: 149.1, population: 43000 },

  { slug: "broome", city: "Broome", country: "Australia", countryCode: "AU", tz: "Australia/Perth", flag: "🇦🇺", lat: -17.9614, lon: 122.2359, population: 15000 },

  { slug: "alice-springs", city: "Alice Springs", country: "Australia", countryCode: "AU", tz: "Australia/Darwin", flag: "🇦🇺", lat: -23.698, lon: 133.8807, population: 26000 },

  { slug: "kalgoorlie", city: "Kalgoorlie", country: "Australia", countryCode: "AU", tz: "Australia/Perth", flag: "🇦🇺", lat: -30.7489, lon: 121.4656, population: 30000},
    { slug: "toronto", city: "Toronto", country: "Canada", countryCode: "CA", tz: "America/Toronto", flag: "🇨🇦", lat: 43.6532, lon: -79.3832, population: 2930000 },

  { slug: "montreal", city: "Montreal", country: "Canada", countryCode: "CA", tz: "America/Toronto", flag: "🇨🇦", lat: 45.5017, lon: -73.5673, population: 1780000 },

  { slug: "vancouver", city: "Vancouver", country: "Canada", countryCode: "CA", tz: "America/Vancouver", flag: "🇨🇦", lat: 49.2827, lon: -123.1207, population: 2670000 },

  { slug: "calgary", city: "Calgary", country: "Canada", countryCode: "CA", tz: "America/Edmonton", flag: "🇨🇦", lat: 51.0447, lon: -114.0719, population: 1600000 },

  { slug: "edmonton", city: "Edmonton", country: "Canada", countryCode: "CA", tz: "America/Edmonton", flag: "🇨🇦", lat: 53.5461, lon: -113.4938, population: 1500000 },

  { slug: "ottawa", city: "Ottawa", country: "Canada", countryCode: "CA", tz: "America/Toronto", flag: "🇨🇦", lat: 45.4215, lon: -75.6972, population: 1400000 },

  { slug: "winnipeg", city: "Winnipeg", country: "Canada", countryCode: "CA", tz: "America/Winnipeg", flag: "🇨🇦", lat: 49.8951, lon: -97.1384, population: 850000 },

  { slug: "quebec-city", city: "Quebec City", country: "Canada", countryCode: "CA", tz: "America/Toronto", flag: "🇨🇦", lat: 46.8139, lon: -71.208, population: 840000 },

  { slug: "hamilton", city: "Hamilton", country: "Canada", countryCode: "CA", tz: "America/Toronto", flag: "🇨🇦", lat: 43.2557, lon: -79.8711, population: 790000 },

  { slug: "kitchener", city: "Kitchener", country: "Canada", countryCode: "CA", tz: "America/Toronto", flag: "🇨🇦", lat: 43.4516, lon: -80.4925, population: 575000 },

  { slug: "london", city: "London", country: "Canada", countryCode: "CA", tz: "America/Toronto", flag: "🇨🇦", lat: 42.9849, lon: -81.2453, population: 545000 },

  { slug: "victoria", city: "Victoria", country: "Canada", countryCode: "CA", tz: "America/Vancouver", flag: "🇨🇦", lat: 48.4284, lon: -123.3656, population: 400000 },

  { slug: "halifax", city: "Halifax", country: "Canada", countryCode: "CA", tz: "America/Halifax", flag: "🇨🇦", lat: 44.6488, lon: -63.5752, population: 480000 },

  { slug: "oshawa", city: "Oshawa", country: "Canada", countryCode: "CA", tz: "America/Toronto", flag: "🇨🇦", lat: 43.8971, lon: -78.8658, population: 415000 },

  { slug: "windsor", city: "Windsor", country: "Canada", countryCode: "CA", tz: "America/Toronto", flag: "🇨🇦", lat: 42.3149, lon: -83.0364, population: 425000 },

  { slug: "saskatoon", city: "Saskatoon", country: "Canada", countryCode: "CA", tz: "America/Regina", flag: "🇨🇦", lat: 52.1579, lon: -106.6702, population: 335000 },

  { slug: "regina", city: "Regina", country: "Canada", countryCode: "CA", tz: "America/Regina", flag: "🇨🇦", lat: 50.4452, lon: -104.6189, population: 250000 },

  { slug: "st-johns", city: "St. John's", country: "Canada", countryCode: "CA", tz: "America/St_Johns", flag: "🇨🇦", lat: 47.5615, lon: -52.7126, population: 220000 },

  { slug: "kelowna", city: "Kelowna", country: "Canada", countryCode: "CA", tz: "America/Vancouver", flag: "🇨🇦", lat: 49.888, lon: -119.496, population: 230000 },

  { slug: "barrie", city: "Barrie", country: "Canada", countryCode: "CA", tz: "America/Toronto", flag: "🇨🇦", lat: 44.3894, lon: -79.6903, population: 225000 },

  { slug: "abbotsford", city: "Abbotsford", country: "Canada", countryCode: "CA", tz: "America/Vancouver", flag: "🇨🇦", lat: 49.0504, lon: -122.3045, population: 200000 },

  { slug: "kingston", city: "Kingston", country: "Canada", countryCode: "CA", tz: "America/Toronto", flag: "🇨🇦", lat: 44.2312, lon: -76.486, population: 170000 },

  { slug: "trois-rivieres", city: "Trois-Rivières", country: "Canada", countryCode: "CA", tz: "America/Toronto", flag: "🇨🇦", lat: 46.343, lon: -72.543, population: 140000 },

  { slug: "guelph", city: "Guelph", country: "Canada", countryCode: "CA", tz: "America/Toronto", flag: "🇨🇦", lat: 43.5448, lon: -80.2482, population: 165000 },

  { slug: "moncton", city: "Moncton", country: "Canada", countryCode: "CA", tz: "America/Moncton", flag: "🇨🇦", lat: 46.0878, lon: -64.7782, population: 160000 },

  { slug: "brantford", city: "Brantford", country: "Canada", countryCode: "CA", tz: "America/Toronto", flag: "🇨🇦", lat: 43.1394, lon: -80.2644, population: 145000 },

  { slug: "thunder-bay", city: "Thunder Bay", country: "Canada", countryCode: "CA", tz: "America/Toronto", flag: "🇨🇦", lat: 48.3809, lon: -89.2477, population: 110000 },

  { slug: "saint-john", city: "Saint John", country: "Canada", countryCode: "CA", tz: "America/Moncton", flag: "🇨🇦", lat: 45.2733, lon: -66.0633, population: 130000 },

  { slug: "whitehorse", city: "Whitehorse", country: "Canada", countryCode: "CA", tz: "America/Whitehorse", flag: "🇨🇦", lat: 60.7212, lon: -135.0568, population: 32000 },

  { slug: "yellowknife", city: "Yellowknife", country: "Canada", countryCode: "CA", tz: "America/Yellowknife", flag: "🇨🇦", lat: 62.454, lon: -114.3718, population: 21000 },

  { slug: "iqaluit", city: "Iqaluit", country: "Canada", countryCode: "CA", tz: "America/Iqaluit", flag: "🇨🇦", lat: 63.7467, lon: -68.517, population: 8000 },

  { slug: "red-deer", city: "Red Deer", country: "Canada", countryCode: "CA", tz: "America/Edmonton", flag: "🇨🇦", lat: 52.2681, lon: -113.8112, population: 110000 },

  { slug: "lethbridge", city: "Lethbridge", country: "Canada", countryCode: "CA", tz: "America/Edmonton", flag: "🇨🇦", lat: 49.6956, lon: -112.8451, population: 105000 },

  { slug: "kamloops", city: "Kamloops", country: "Canada", countryCode: "CA", tz: "America/Vancouver", flag: "🇨🇦", lat: 50.6745, lon: -120.3273, population: 102000 },

  { slug: "prince-george", city: "Prince George", country: "Canada", countryCode: "CA", tz: "America/Vancouver", flag: "🇨🇦", lat: 53.9171, lon: -122.7497, population: 76000 },

  { slug: "medicine-hat", city: "Medicine Hat", country: "Canada", countryCode: "CA", tz: "America/Edmonton", flag: "🇨🇦", lat: 50.0405, lon: -110.6761, population: 65000 },

  { slug: "moose-jaw", city: "Moose Jaw", country: "Canada", countryCode: "CA", tz: "America/Regina", flag: "🇨🇦", lat: 50.3934, lon: -105.5519, population: 34000 },
  { slug: "charlottetown", city: "Charlottetown", country: "Canada", countryCode: "CA", tz: "America/Halifax", flag: "🇨🇦", lat: 46.2382, lon: -63.1311, population: 40000 },
  { slug: "fredericton", city: "Fredericton", country: "Canada", countryCode: "CA", tz: "America/Moncton", flag: "🇨🇦", lat: 45.9636, lon: -66.6431, population: 65000 },
  { slug: "sudbury", city: "Sudbury", country: "Canada", countryCode: "CA", tz: "America/Toronto", flag: "🇨🇦", lat: 46.4917, lon: -80.993, population: 166000 },
  { slug: "north-bay", city: "North Bay", country: "Canada", countryCode: "CA", tz: "America/Toronto", flag: "🇨🇦", lat: 46.3091, lon: -79.4608, population: 52000 }

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
