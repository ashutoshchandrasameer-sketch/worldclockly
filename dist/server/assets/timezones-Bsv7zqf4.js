const TIMEZONES = [
  { city: "New Delhi", country: "India", tz: "Asia/Kolkata", flag: "🇮🇳" },
  { city: "Mumbai", country: "India", tz: "Asia/Kolkata", flag: "🇮🇳" },
  { city: "Bengaluru", country: "India", tz: "Asia/Kolkata", flag: "🇮🇳" },
  { city: "Kolkata", country: "India", tz: "Asia/Kolkata", flag: "🇮🇳" },
  { city: "Chennai", country: "India", tz: "Asia/Kolkata", flag: "🇮🇳" },
  { city: "Hyderabad", country: "India", tz: "Asia/Kolkata", flag: "🇮🇳" },
  { city: "Pune", country: "India", tz: "Asia/Kolkata", flag: "🇮🇳" },
  { city: "Ahmedabad", country: "India", tz: "Asia/Kolkata", flag: "🇮🇳" },
  { city: "Surat", country: "India", tz: "Asia/Kolkata", flag: "🇮🇳" },
  { city: "Jaipur", country: "India", tz: "Asia/Kolkata", flag: "🇮🇳" },
  { city: "New York", country: "USA", tz: "America/New_York", flag: "🇺🇸" },
  { city: "Los Angeles", country: "USA", tz: "America/Los_Angeles", flag: "🇺🇸" },
  { city: "Chicago", country: "USA", tz: "America/Chicago", flag: "🇺🇸" },
  { city: "Houston", country: "USA", tz: "America/Chicago", flag: "🇺🇸" },
  { city: "Miami", country: "USA", tz: "America/New_York", flag: "🇺🇸" },
  { city: "San Francisco", country: "USA", tz: "America/Los_Angeles", flag: "🇺🇸" },
  { city: "Boston", country: "USA", tz: "America/New_York", flag: "🇺🇸" },
  { city: "Washington DC", country: "USA", tz: "America/New_York", flag: "🇺🇸" },
  { city: "London", country: "UK", tz: "Europe/London", flag: "🇬🇧" },
  { city: "Paris", country: "France", tz: "Europe/Paris", flag: "🇫🇷" },
  { city: "Berlin", country: "Germany", tz: "Europe/Berlin", flag: "🇩🇪" },
  { city: "Rome", country: "Italy", tz: "Europe/Rome", flag: "🇮🇹" },
  { city: "Madrid", country: "Spain", tz: "Europe/Madrid", flag: "🇪🇸" },
  { city: "Barcelona", country: "Spain", tz: "Europe/Madrid", flag: "🇪🇸" },
  { city: "Amsterdam", country: "Netherlands", tz: "Europe/Amsterdam", flag: "🇳🇱" },
  { city: "Brussels", country: "Belgium", tz: "Europe/Brussels", flag: "🇧🇪" },
  { city: "Vienna", country: "Austria", tz: "Europe/Vienna", flag: "🇦🇹" },
  { city: "Zurich", country: "Switzerland", tz: "Europe/Zurich", flag: "🇨🇭" },
  { city: "Stockholm", country: "Sweden", tz: "Europe/Stockholm", flag: "🇸🇪" },
  { city: "Oslo", country: "Norway", tz: "Europe/Oslo", flag: "🇳🇴" },
  { city: "Helsinki", country: "Finland", tz: "Europe/Helsinki", flag: "🇫🇮" },
  { city: "Copenhagen", country: "Denmark", tz: "Europe/Copenhagen", flag: "🇩🇰" },
  { city: "Athens", country: "Greece", tz: "Europe/Athens", flag: "🇬🇷" },
  { city: "Warsaw", country: "Poland", tz: "Europe/Warsaw", flag: "🇵🇱" },
  { city: "Prague", country: "Czech Republic", tz: "Europe/Prague", flag: "🇨🇿" },
  { city: "Budapest", country: "Hungary", tz: "Europe/Budapest", flag: "🇭🇺" },
  { city: "Lisbon", country: "Portugal", tz: "Europe/Lisbon", flag: "🇵🇹" },
  { city: "Dublin", country: "Ireland", tz: "Europe/Dublin", flag: "🇮🇪" },
  { city: "Dubai", country: "UAE", tz: "Asia/Dubai", flag: "🇦🇪" },
  { city: "Abu Dhabi", country: "UAE", tz: "Asia/Dubai", flag: "🇦🇪" },
  { city: "Riyadh", country: "Saudi Arabia", tz: "Asia/Riyadh", flag: "🇸🇦" },
  { city: "Doha", country: "Qatar", tz: "Asia/Qatar", flag: "🇶🇦" },
  { city: "Kuwait City", country: "Kuwait", tz: "Asia/Kuwait", flag: "🇰🇼" },
  { city: "Tehran", country: "Iran", tz: "Asia/Tehran", flag: "🇮🇷" },
  { city: "Baghdad", country: "Iraq", tz: "Asia/Baghdad", flag: "🇮🇶" },
  { city: "Istanbul", country: "Turkey", tz: "Europe/Istanbul", flag: "🇹🇷" },
  { city: "Singapore", country: "Singapore", tz: "Asia/Singapore", flag: "🇸🇬" },
  { city: "Tokyo", country: "Japan", tz: "Asia/Tokyo", flag: "🇯🇵" },
  { city: "Osaka", country: "Japan", tz: "Asia/Tokyo", flag: "🇯🇵" },
  { city: "Nagoya", country: "Japan", tz: "Asia/Tokyo", flag: "🇯🇵" },
  { city: "Fukuoka", country: "Japan", tz: "Asia/Tokyo", flag: "🇯🇵" },
  { city: "Shanghai", country: "China", tz: "Asia/Shanghai", flag: "🇨🇳" },
  { city: "Beijing", country: "China", tz: "Asia/Shanghai", flag: "🇨🇳" },
  { city: "Guangzhou", country: "China", tz: "Asia/Shanghai", flag: "🇨🇳" },
  { city: "Shenzhen", country: "China", tz: "Asia/Shanghai", flag: "🇨🇳" },
  { city: "Chengdu", country: "China", tz: "Asia/Shanghai", flag: "🇨🇳" },
  { city: "Wuhan", country: "China", tz: "Asia/Shanghai", flag: "🇨🇳" },
  { city: "Hong Kong", country: "Hong Kong", tz: "Asia/Hong_Kong", flag: "🇭🇰" },
  { city: "Seoul", country: "South Korea", tz: "Asia/Seoul", flag: "🇰🇷" },
  { city: "Bangkok", country: "Thailand", tz: "Asia/Bangkok", flag: "🇹🇭" },
  { city: "Jakarta", country: "Indonesia", tz: "Asia/Jakarta", flag: "🇮🇩" },
  { city: "Surabaya", country: "Indonesia", tz: "Asia/Jakarta", flag: "🇮🇩" },
  { city: "Manila", country: "Philippines", tz: "Asia/Manila", flag: "🇵🇭" },
  { city: "Cebu", country: "Philippines", tz: "Asia/Manila", flag: "🇵🇭" },
  { city: "Hanoi", country: "Vietnam", tz: "Asia/Ho_Chi_Minh", flag: "🇻🇳" },
  { city: "Ho Chi Minh City", country: "Vietnam", tz: "Asia/Ho_Chi_Minh", flag: "🇻🇳" },
  { city: "Kuala Lumpur", country: "Malaysia", tz: "Asia/Kuala_Lumpur", flag: "🇲🇾" },
  { city: "Penang", country: "Malaysia", tz: "Asia/Kuala_Lumpur", flag: "🇲🇾" },
  { city: "Karachi", country: "Pakistan", tz: "Asia/Karachi", flag: "🇵🇰" },
  { city: "Lahore", country: "Pakistan", tz: "Asia/Karachi", flag: "🇵🇰" },
  { city: "Islamabad", country: "Pakistan", tz: "Asia/Karachi", flag: "🇵🇰" },
  { city: "Dhaka", country: "Bangladesh", tz: "Asia/Dhaka", flag: "🇧🇩" },
  { city: "Sydney", country: "Australia", tz: "Australia/Sydney", flag: "🇦🇺" },
  { city: "Melbourne", country: "Australia", tz: "Australia/Melbourne", flag: "🇦🇺" },
  { city: "Auckland", country: "New Zealand", tz: "Pacific/Auckland", flag: "🇳🇿" },
  { city: "Toronto", country: "Canada", tz: "America/Toronto", flag: "🇨🇦" },
  { city: "Montreal", country: "Canada", tz: "America/Toronto", flag: "🇨🇦" },
  { city: "Vancouver", country: "Canada", tz: "America/Vancouver", flag: "🇨🇦" },
  { city: "São Paulo", country: "Brazil", tz: "America/Sao_Paulo", flag: "🇧🇷" },
  { city: "Rio de Janeiro", country: "Brazil", tz: "America/Sao_Paulo", flag: "🇧🇷" },
  { city: "Buenos Aires", country: "Argentina", tz: "America/Argentina/Buenos_Aires", flag: "🇦🇷" },
  { city: "Lima", country: "Peru", tz: "America/Lima", flag: "🇵🇪" },
  { city: "Bogotá", country: "Colombia", tz: "America/Bogota", flag: "🇨🇴" },
  { city: "Santiago", country: "Chile", tz: "America/Santiago", flag: "🇨🇱" },
  { city: "Mexico City", country: "Mexico", tz: "America/Mexico_City", flag: "🇲🇽" },
  { city: "Moscow", country: "Russia", tz: "Europe/Moscow", flag: "🇷🇺" },
  { city: "Cairo", country: "Egypt", tz: "Africa/Cairo", flag: "🇪🇬" },
  { city: "Johannesburg", country: "South Africa", tz: "Africa/Johannesburg", flag: "🇿🇦" },
  { city: "Nairobi", country: "Kenya", tz: "Africa/Nairobi", flag: "🇰🇪" },
  { city: "Lagos", country: "Nigeria", tz: "Africa/Lagos", flag: "🇳🇬" },
  { city: "Casablanca", country: "Morocco", tz: "Africa/Casablanca", flag: "🇲🇦" },
  { city: "Algiers", country: "Algeria", tz: "Africa/Algiers", flag: "🇩🇿" }
];
function getOffsetMinutes(tz, date = /* @__PURE__ */ new Date()) {
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone: tz,
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  const parts = dtf.formatToParts(date).reduce((a, p) => {
    if (p.type !== "literal") a[p.type] = p.value;
    return a;
  }, {});
  const asUTC = Date.UTC(
    +parts.year,
    +parts.month - 1,
    +parts.day,
    +parts.hour % 24,
    +parts.minute,
    +parts.second
  );
  return Math.round((asUTC - date.getTime()) / 6e4);
}
function formatOffset(min) {
  const sign = min >= 0 ? "+" : "-";
  const abs = Math.abs(min);
  const h = Math.floor(abs / 60);
  const m = abs % 60;
  return `UTC${sign}${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}
function getTimeInZone(tz, date = /* @__PURE__ */ new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: tz,
    hour12: false,
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).formatToParts(date).reduce((a, p) => {
    if (p.type !== "literal") a[p.type] = p.value;
    return a;
  }, {});
  return {
    hour: parts.hour,
    minute: parts.minute,
    second: parts.second,
    weekday: parts.weekday,
    day: parts.day,
    month: parts.month,
    year: parts.year
  };
}
export {
  TIMEZONES as T,
  getTimeInZone as a,
  formatOffset as f,
  getOffsetMinutes as g
};
