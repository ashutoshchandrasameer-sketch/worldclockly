import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Link, createRootRouteWithContext, useRouter, Outlet, HeadContent, ScriptOnce, Scripts, createFileRoute, lazyRouteComponent, notFound, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Clock3, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
const appCss = "/assets/styles-xCV8jv-z.css";
function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    const stored = localStorage.getItem("time-in-theme");
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("time-in-theme", theme);
  }, [theme]);
  return { theme, toggle: () => setTheme((t) => t === "dark" ? "light" : "dark") };
}
function SiteHeader() {
  const { theme, toggle } = useTheme();
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-40 border-b border-border/50 bg-background/70 backdrop-blur-xl", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex h-14 max-w-6xl items-center justify-between px-4", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2 font-display font-bold tracking-tight", children: [
      /* @__PURE__ */ jsx(Clock3, { className: "h-5 w-5 text-primary" }),
      /* @__PURE__ */ jsxs("span", { className: "text-lg", children: [
        "worldClockly",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: ".com" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("nav", { className: "hidden items-center gap-6 text-sm text-muted-foreground md:flex", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", activeOptions: { exact: true }, activeProps: { className: "text-foreground" }, className: "hover:text-foreground transition-colors", children: "Clock" }),
      /* @__PURE__ */ jsx(Link, { to: "/difference", activeProps: { className: "text-foreground" }, className: "hover:text-foreground transition-colors", children: "Time Difference" }),
      /* @__PURE__ */ jsx(Link, { to: "/countdown", activeProps: { className: "text-foreground" }, className: "hover:text-foreground transition-colors", children: "Countdown" }),
      /* @__PURE__ */ jsx(Link, { to: "/holidays", activeProps: { className: "text-foreground" }, className: "hover:text-foreground transition-colors", children: "Holidays" })
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: toggle,
        "aria-label": "Toggle theme",
        className: "rounded-full border border-border bg-card p-2 text-foreground transition-colors hover:bg-accent",
        children: theme === "dark" ? /* @__PURE__ */ jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Moon, { className: "h-4 w-4" })
      }
    )
  ] }) });
}
function SiteFooter() {
  return /* @__PURE__ */ jsx("footer", { className: "mt-24 border-t border-border/50", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4 py-10 text-sm text-muted-foreground", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 font-display font-bold text-foreground", children: [
          /* @__PURE__ */ jsx(Clock3, { className: "h-4 w-4 text-primary" }),
          "worldclockly",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: ".com" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-md", children: "Global time platform. Atomic-accurate clocks, world time converter, holidays and countdowns." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-6", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-foreground", children: "Clock" }),
        /* @__PURE__ */ jsx(Link, { to: "/difference", className: "hover:text-foreground", children: "Difference" }),
        /* @__PURE__ */ jsx(Link, { to: "/countdown", className: "hover:text-foreground", children: "Countdown" }),
        /* @__PURE__ */ jsx(Link, { to: "/holidays", className: "hover:text-foreground", children: "Holidays" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 border-t border-border/50 pt-6 text-xs", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " WorldClockly.com — Precision time for major countries across the world."
    ] })
  ] }) });
}
const themeScript = `(function(){try{var t=localStorage.getItem("time-in-theme");if(!t){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}if(t==="dark")document.documentElement.classList.add("dark");}catch(e){}})();`;
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0b1020" },
      { property: "og:site_name", content: "Hourly.in" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", suppressHydrationWarning: true, children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(ScriptOnce, { children: themeScript }),
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$7.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] }) });
}
const CITIES = [
  { slug: "new-delhi", city: "New Delhi", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 28.6139, lon: 77.209, population: 329e5, about: "Capital of India and seat of the central government." },
  { slug: "mumbai", city: "Mumbai", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 19.076, lon: 72.8777, population: 204e5, about: "India's financial capital on the Arabian Sea." },
  { slug: "bengaluru", city: "Bengaluru", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 12.9716, lon: 77.5946, population: 136e5, about: "India's tech capital and global software hub." },
  { slug: "kolkata", city: "Kolkata", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 22.5726, lon: 88.3639, population: 148e5, about: "Cultural capital of eastern India." },
  { slug: "chennai", city: "Chennai", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 13.0827, lon: 80.2707, population: 11e6, about: "Major coastal city on the Bay of Bengal." },
  { slug: "hyderabad", city: "Hyderabad", country: "India", countryCode: "IN", tz: "Asia/Kolkata", flag: "🇮🇳", lat: 17.385, lon: 78.4867, population: 105e5, about: "City of pearls and a major IT hub." },
  { slug: "new-york", city: "New York", country: "USA", countryCode: "US", tz: "America/New_York", flag: "🇺🇸", lat: 40.7128, lon: -74.006, population: 84e5, about: "The largest city in the United States." },
  { slug: "los-angeles", city: "Los Angeles", country: "USA", countryCode: "US", tz: "America/Los_Angeles", flag: "🇺🇸", lat: 34.0522, lon: -118.2437, population: 39e5, about: "Entertainment capital on the US west coast." },
  { slug: "chicago", city: "Chicago", country: "USA", countryCode: "US", tz: "America/Chicago", flag: "🇺🇸", lat: 41.8781, lon: -87.6298, population: 27e5 },
  { slug: "london", city: "London", country: "UK", countryCode: "GB", tz: "Europe/London", flag: "🇬🇧", lat: 51.5074, lon: -0.1278, population: 9e6, about: "Capital of the United Kingdom on the River Thames." },
  { slug: "paris", city: "Paris", country: "France", countryCode: "FR", tz: "Europe/Paris", flag: "🇫🇷", lat: 48.8566, lon: 2.3522, population: 21e5 },
  { slug: "berlin", city: "Berlin", country: "Germany", countryCode: "DE", tz: "Europe/Berlin", flag: "🇩🇪", lat: 52.52, lon: 13.405, population: 37e5 },
  { slug: "dubai", city: "Dubai", country: "UAE", countryCode: "AE", tz: "Asia/Dubai", flag: "🇦🇪", lat: 25.2048, lon: 55.2708, population: 35e5, about: "Global business and tourism hub in the Gulf." },
  { slug: "singapore", city: "Singapore", country: "Singapore", countryCode: "SG", tz: "Asia/Singapore", flag: "🇸🇬", lat: 1.3521, lon: 103.8198, population: 59e5 },
  { slug: "tokyo", city: "Tokyo", country: "Japan", countryCode: "JP", tz: "Asia/Tokyo", flag: "🇯🇵", lat: 35.6762, lon: 139.6503, population: 139e5, about: "Capital of Japan and the world's largest metropolitan area." },
  { slug: "shanghai", city: "Shanghai", country: "China", countryCode: "CN", tz: "Asia/Shanghai", flag: "🇨🇳", lat: 31.2304, lon: 121.4737, population: 248e5 },
  { slug: "hong-kong", city: "Hong Kong", country: "Hong Kong", countryCode: "HK", tz: "Asia/Hong_Kong", flag: "🇭🇰", lat: 22.3193, lon: 114.1694, population: 74e5 },
  { slug: "sydney", city: "Sydney", country: "Australia", countryCode: "AU", tz: "Australia/Sydney", flag: "🇦🇺", lat: -33.8688, lon: 151.2093, population: 53e5 },
  { slug: "melbourne", city: "Melbourne", country: "Australia", countryCode: "AU", tz: "Australia/Melbourne", flag: "🇦🇺", lat: -37.8136, lon: 144.9631, population: 51e5 },
  { slug: "toronto", city: "Toronto", country: "Canada", countryCode: "CA", tz: "Canada/Toronto", flag: "🇨🇦", lat: 43.6532, lon: -79.3832, population: 29e5 },
  { slug: "montreal", city: "Montreal", country: "Canada", countryCode: "CA", tz: "Canada/Montreal", flag: "🇨🇦", lat: 45.5088, lon: -73.5879, population: 1762949 },
  { slug: "vancouver", city: "Vancouver", country: "Canada", countryCode: "CA", tz: "Canada/Vancouver", flag: "🇨🇦", lat: 49.2827, lon: -123.1207, population: 675e3 },
  { slug: "sao-paulo", city: "São Paulo", country: "Brazil", countryCode: "BR", tz: "America/Sao_Paulo", flag: "🇧🇷", lat: -23.5505, lon: -46.6333, population: 123e5 },
  { slug: "mexico-city", city: "Mexico City", country: "Mexico", countryCode: "MX", tz: "America/Mexico_City", flag: "🇲🇽", lat: 19.4326, lon: -99.1332, population: 92e5 },
  { slug: "moscow", city: "Moscow", country: "Russia", countryCode: "RU", tz: "Europe/Moscow", flag: "🇷🇺", lat: 55.7558, lon: 37.6173, population: 125e5 },
  { slug: "istanbul", city: "Istanbul", country: "Turkey", countryCode: "TR", tz: "Europe/Istanbul", flag: "🇹🇷", lat: 41.0082, lon: 28.9784, population: 155e5 },
  { slug: "cairo", city: "Cairo", country: "Egypt", countryCode: "EG", tz: "Africa/Cairo", flag: "🇪🇬", lat: 30.0444, lon: 31.2357, population: 95e5 },
  { slug: "johannesburg", city: "Johannesburg", country: "South Africa", countryCode: "ZA", tz: "Africa/Johannesburg", flag: "🇿🇦", lat: -26.2041, lon: 28.0473, population: 56e5 },
  { slug: "karachi", city: "Karachi", country: "Pakistan", countryCode: "PK", tz: "Asia/Karachi", flag: "🇵🇰", lat: 24.8607, lon: 67.0011, population: 16e6 },
  { slug: "dhaka", city: "Dhaka", country: "Bangladesh", countryCode: "BD", tz: "Asia/Dhaka", flag: "🇧🇩", lat: 23.8103, lon: 90.4125, population: 22e6 },
  { slug: "bangkok", city: "Bangkok", country: "Thailand", countryCode: "TH", tz: "Asia/Bangkok", flag: "🇹🇭", lat: 13.7563, lon: 100.5018, population: 105e5 },
  { slug: "seoul", city: "Seoul", country: "South Korea", countryCode: "KR", tz: "Asia/Seoul", flag: "🇰🇷", lat: 37.5665, lon: 126.978, population: 97e5 },
  { slug: "auckland", city: "Auckland", country: "New Zealand", countryCode: "NZ", tz: "Pacific/Auckland", flag: "🇳🇿", lat: -36.8485, lon: 174.7633, population: 17e5 },
  { slug: "riyadh", city: "Riyadh", country: "Saudi Arabia", countryCode: "SA", tz: "Asia/Riyadh", flag: "🇸🇦", lat: 24.7136, lon: 46.6753, population: 77e5 },
  // Europe
  { slug: "rome", city: "Rome", country: "Italy", countryCode: "IT", tz: "Europe/Rome", flag: "🇮🇹", lat: 41.9028, lon: 12.4964, population: 43e5, about: "Capital of Italy, rich in history and culture." },
  { slug: "madrid", city: "Madrid", country: "Spain", countryCode: "ES", tz: "Europe/Madrid", flag: "🇪🇸", lat: 40.4168, lon: -3.7038, population: 67e5, about: "Spain's capital and largest city." },
  { slug: "amsterdam", city: "Amsterdam", country: "Netherlands", countryCode: "NL", tz: "Europe/Amsterdam", flag: "🇳🇱", lat: 52.3676, lon: 4.9041, population: 16e5, about: "Known for canals, culture, and commerce." },
  { slug: "stockholm", city: "Stockholm", country: "Sweden", countryCode: "SE", tz: "Europe/Stockholm", flag: "🇸🇪", lat: 59.3293, lon: 18.0686, population: 16e5, about: "Capital of Sweden, spread across islands." },
  { slug: "warsaw", city: "Warsaw", country: "Poland", countryCode: "PL", tz: "Europe/Warsaw", flag: "🇵🇱", lat: 52.2297, lon: 21.0122, population: 31e5, about: "Poland's capital and cultural hub." },
  // Middle East
  { slug: "tehran", city: "Tehran", country: "Iran", countryCode: "IR", tz: "Asia/Tehran", flag: "🇮🇷", lat: 35.6892, lon: 51.389, population: 87e5, about: "Capital of Iran, located at the foot of the Alborz mountains." },
  { slug: "tel-aviv", city: "Tel Aviv", country: "Israel", countryCode: "IL", tz: "Asia/Jerusalem", flag: "🇮🇱", lat: 32.0853, lon: 34.7818, population: 46e5, about: "Israel's tech and cultural capital." },
  { slug: "baghdad", city: "Baghdad", country: "Iraq", countryCode: "IQ", tz: "Asia/Baghdad", flag: "🇮🇶", lat: 33.3152, lon: 44.3661, population: 76e5, about: "Historic capital of Iraq on the Tigris River." },
  // Asia-Pacific
  { slug: "jakarta", city: "Jakarta", country: "Indonesia", countryCode: "ID", tz: "Asia/Jakarta", flag: "🇮🇩", lat: -6.2088, lon: 106.8456, population: 105e5, about: "Indonesia's bustling capital city." },
  { slug: "kuala-lumpur", city: "Kuala Lumpur", country: "Malaysia", countryCode: "MY", tz: "Asia/Kuala_Lumpur", flag: "🇲🇾", lat: 3.139, lon: 101.6869, population: 83e5, about: "Malaysia's capital and economic hub." },
  { slug: "manila", city: "Manila", country: "Philippines", countryCode: "PH", tz: "Asia/Manila", flag: "🇵🇭", lat: 14.5995, lon: 120.9842, population: 138e5, about: "Capital of the Philippines, located on Manila Bay." },
  { slug: "hanoi", city: "Hanoi", country: "Vietnam", countryCode: "VN", tz: "Asia/Ho_Chi_Minh", flag: "🇻🇳", lat: 21.0278, lon: 105.8342, population: 8e6, about: "Vietnam's capital with French colonial heritage." },
  // Africa
  { slug: "nairobi", city: "Nairobi", country: "Kenya", countryCode: "KE", tz: "Africa/Nairobi", flag: "🇰🇪", lat: -1.2921, lon: 36.8219, population: 55e5, about: "Kenya's capital and East Africa's business hub." },
  { slug: "lagos", city: "Lagos", country: "Nigeria", countryCode: "NG", tz: "Africa/Lagos", flag: "🇳🇬", lat: 6.5244, lon: 3.3792, population: 21e6, about: "Nigeria's largest city and economic powerhouse." },
  { slug: "casablanca", city: "Casablanca", country: "Morocco", countryCode: "MA", tz: "Africa/Casablanca", flag: "🇲🇦", lat: 33.5731, lon: -7.5898, population: 43e5, about: "Morocco's largest city and port." },
  // Americas
  { slug: "buenos-aires", city: "Buenos Aires", country: "Argentina", countryCode: "AR", tz: "America/Argentina/Buenos_Aires", flag: "🇦🇷", lat: -34.6037, lon: -58.3816, population: 15e6, about: "Argentina's capital and cultural center." },
  { slug: "santiago", city: "Santiago", country: "Chile", countryCode: "CL", tz: "America/Santiago", flag: "🇨🇱", lat: -33.4489, lon: -70.6693, population: 7e6, about: "Chile's capital in the Andes foothills." },
  { slug: "bogota", city: "Bogotá", country: "Colombia", countryCode: "CO", tz: "America/Bogota", flag: "🇨🇴", lat: 4.711, lon: -74.0721, population: 11e6, about: "Colombia's capital high in the Andes." },
  { slug: "lima", city: "Lima", country: "Peru", countryCode: "PE", tz: "America/Lima", flag: "🇵🇪", lat: -12.0464, lon: -77.0428, population: 1e7, about: "Peru's capital on the Pacific coast." }
];
function getCityBySlug(slug) {
  return CITIES.find((c) => c.slug === slug);
}
function slugifyCity(name) {
  return name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
const COUNTRIES = [
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
function getCountryBySlug(slug) {
  return COUNTRIES.find((c) => c.slug === slug);
}
function getCitiesInCountry(code) {
  return CITIES.filter((c) => c.countryCode === code);
}
function getUniqueTimezonesInCountry(code) {
  const tzs = /* @__PURE__ */ new Set();
  for (const c of CITIES) if (c.countryCode === code) tzs.add(c.tz);
  return Array.from(tzs);
}
const BASE_URL = "";
const Route$6 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = ["/", "/difference", "/countdown", "/holidays"];
        const cityPaths = CITIES.map((c) => `/cities/${c.slug}`);
        const countryPaths = COUNTRIES.map((c) => `/countries/${c.slug}`);
        const urls = [...paths, ...cityPaths, ...countryPaths].map(
          (p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>daily</changefreq><priority>${p === "/" ? "1.0" : p.startsWith("/cities/") || p.startsWith("/countries/") ? "0.7" : "0.8"}</priority></url>`
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" }
        });
      }
    }
  }
});
const HOLIDAYS = {
  IN: {
    name: "India",
    flag: "🇮🇳",
    holidays: [
      { date: "2026-01-01", name: "New Year's Day", type: "observance" },
      { date: "2026-01-14", name: "Makar Sankranti / Pongal", type: "festival" },
      { date: "2026-01-26", name: "Republic Day", type: "national" },
      { date: "2026-02-15", name: "Maha Shivaratri", type: "religious" },
      { date: "2026-03-04", name: "Holi", type: "festival" },
      { date: "2026-03-21", name: "Eid al-Fitr", type: "religious" },
      { date: "2026-04-03", name: "Good Friday", type: "religious" },
      { date: "2026-04-14", name: "Ambedkar Jayanti", type: "national" },
      { date: "2026-05-27", name: "Eid al-Adha", type: "religious" },
      { date: "2026-08-15", name: "Independence Day", type: "national" },
      { date: "2026-08-26", name: "Janmashtami", type: "festival" },
      { date: "2026-10-02", name: "Gandhi Jayanti", type: "national" },
      { date: "2026-10-20", name: "Dussehra", type: "festival" },
      { date: "2026-11-08", name: "Diwali", type: "festival" },
      { date: "2026-11-24", name: "Guru Nanak Jayanti", type: "religious" },
      { date: "2026-12-25", name: "Christmas Day", type: "religious" }
    ]
  },
  US: {
    name: "United States",
    flag: "🇺🇸",
    holidays: [
      { date: "2026-01-01", name: "New Year's Day", type: "national" },
      { date: "2026-01-19", name: "Martin Luther King Jr. Day", type: "national" },
      { date: "2026-02-16", name: "Presidents' Day", type: "national" },
      { date: "2026-05-25", name: "Memorial Day", type: "national" },
      { date: "2026-06-19", name: "Juneteenth", type: "national" },
      { date: "2026-07-04", name: "Independence Day", type: "national" },
      { date: "2026-09-07", name: "Labor Day", type: "national" },
      { date: "2026-10-12", name: "Columbus Day", type: "national" },
      { date: "2026-11-11", name: "Veterans Day", type: "national" },
      { date: "2026-11-26", name: "Thanksgiving", type: "national" },
      { date: "2026-12-25", name: "Christmas Day", type: "religious" }
    ]
  },
  GB: {
    name: "United Kingdom",
    flag: "🇬🇧",
    holidays: [
      { date: "2026-01-01", name: "New Year's Day", type: "national" },
      { date: "2026-04-03", name: "Good Friday", type: "religious" },
      { date: "2026-04-06", name: "Easter Monday", type: "religious" },
      { date: "2026-05-04", name: "Early May Bank Holiday", type: "national" },
      { date: "2026-05-25", name: "Spring Bank Holiday", type: "national" },
      { date: "2026-08-31", name: "Summer Bank Holiday", type: "national" },
      { date: "2026-12-25", name: "Christmas Day", type: "religious" },
      { date: "2026-12-28", name: "Boxing Day (substitute)", type: "national" }
    ]
  },
  AE: {
    name: "United Arab Emirates",
    flag: "🇦🇪",
    holidays: [
      { date: "2026-01-01", name: "New Year's Day", type: "national" },
      { date: "2026-03-21", name: "Eid al-Fitr", type: "religious" },
      { date: "2026-05-27", name: "Eid al-Adha", type: "religious" },
      { date: "2026-06-16", name: "Islamic New Year", type: "religious" },
      { date: "2026-08-25", name: "Prophet Muhammad's Birthday", type: "religious" },
      { date: "2026-12-02", name: "National Day", type: "national" }
    ]
  },
  AU: {
    name: "Australia",
    flag: "🇦🇺",
    holidays: [
      { date: "2026-01-01", name: "New Year's Day", type: "national" },
      { date: "2026-01-26", name: "Australia Day", type: "national" },
      { date: "2026-04-03", name: "Good Friday", type: "religious" },
      { date: "2026-04-25", name: "ANZAC Day", type: "national" },
      { date: "2026-12-25", name: "Christmas Day", type: "religious" },
      { date: "2026-12-26", name: "Boxing Day", type: "national" }
    ]
  }
};
const $$splitComponentImporter$5 = () => import("./holidays-pCRvzp8n.js");
const Route$5 = createFileRoute("/holidays")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component"),
  head: () => ({
    meta: [{
      title: "Public Holidays 2026 — WorldClockly.com"
    }, {
      name: "description",
      content: "Complete list of public, religious and festival holidays for India and major countries — auto-updated, with live countdowns."
    }, {
      property: "og:title",
      content: "Public Holidays — WorldClockly.com"
    }, {
      property: "og:description",
      content: "All holidays for the year, with countdowns."
    }],
    links: [{
      rel: "canonical",
      href: "/holidays"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Public Holidays",
        description: "Public, religious and festival holidays for India and major countries.",
        mainEntity: {
          "@type": "ItemList",
          itemListElement: Object.values(HOLIDAYS).flatMap((c) => c.holidays.map((h, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Event",
              name: `${h.name} (${c.name})`,
              startDate: h.date,
              eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
              eventStatus: "https://schema.org/EventScheduled",
              location: {
                "@type": "Country",
                name: c.name
              }
            }
          })))
        }
      })
    }]
  })
});
const $$splitComponentImporter$4 = () => import("./difference-Dw4tKm3g.js");
const Route$4 = createFileRoute("/difference")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component"),
  head: () => ({
    meta: [{
      title: "Time Difference Calculator — Hourly.in"
    }, {
      name: "description",
      content: "Compare time between any two cities in the world. India vs USA, India vs UK, and any timezone pair, instantly."
    }, {
      property: "og:title",
      content: "Time Difference Calculator — Hourly.in"
    }, {
      property: "og:description",
      content: "Compare time across cities worldwide in real time."
    }],
    links: [{
      rel: "canonical",
      href: "/difference"
    }]
  })
});
const $$splitComponentImporter$3 = () => import("./countdown-uBdn95vn.js");
const Route$3 = createFileRoute("/countdown")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
  head: () => ({
    meta: [{
      title: "Countdown Timers & Pomodoro — WorldClockly.com"
    }, {
      name: "description",
      content: "Countdown to any event, exam, IPL match or world cup. Built-in Pomodoro focus timer."
    }, {
      property: "og:title",
      content: "Countdowns & Pomodoro — Hourly.in"
    }, {
      property: "og:description",
      content: "Live countdowns and a beautiful Pomodoro timer."
    }],
    links: [{
      rel: "canonical",
      href: "/countdown"
    }]
  })
});
const $$splitComponentImporter$2 = () => import("./index-LwOIG4pZ.js");
const Route$2 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  head: () => ({
    meta: [{
      title: "WorldClockly - Current Local Time Worldwide"
    }, {
      name: "description",
      content: "Atomic-accurate Current Local Time, world clocks, time zones, sunrise/sunset and countdowns. India's most trusted time utility."
    }, {
      property: "og:title",
      content: "WorldClockly — Exact Time Now"
    }, {
      property: "og:description",
      content: "Live IST clock, world time, holidays and countdowns. Fast. Free. Accurate."
    }, {
      property: "og:type",
      content: "website"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "WorldClockly.com",
        url: "https://worldclockly.com/",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://worldclockly.com/?q={query}",
          "query-input": "required name=query"
        }
      })
    }]
  })
});
const $$splitNotFoundComponentImporter$1 = () => import("./countries._country-BLh8NGIF.js");
const $$splitComponentImporter$1 = () => import("./countries._country-Hoddvy1T.js");
const Route$1 = createFileRoute("/countries/$country")({
  loader: ({
    params
  }) => {
    const country = getCountryBySlug(params.country);
    if (!country) throw notFound();
    return {
      country
    };
  },
  head: ({
    loaderData
  }) => {
    const c = loaderData?.country;
    if (!c) return {};
    const title = `Current Local Time in ${c.name} — Time Zones & Cities`;
    const description = `Live local time in ${c.name}. ${c.about ?? ""} See current time across all ${c.name} time zones, major cities, UTC offset and public holidays on Hourly.in.`.trim();
    const url = `/countries/${c.slug}`;
    return {
      meta: [{
        title
      }, {
        name: "description",
        content: description
      }, {
        property: "og:title",
        content: title
      }, {
        property: "og:description",
        content: description
      }, {
        property: "og:type",
        content: "website"
      }, {
        property: "og:url",
        content: url
      }, {
        name: "twitter:title",
        content: title
      }, {
        name: "twitter:description",
        content: description
      }, {
        name: "keywords",
        content: `time in ${c.name}, current time ${c.name}, local time ${c.name}, ${c.name} time zone, ${c.name} clock, what time is it in ${c.name}`
      }],
      links: [{
        rel: "canonical",
        href: url
      }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [{
            "@type": "Country",
            name: c.name,
            identifier: c.code
          }, {
            "@type": "BreadcrumbList",
            itemListElement: [{
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "/"
            }, {
              "@type": "ListItem",
              position: 2,
              name: "Countries",
              item: "/countries"
            }, {
              "@type": "ListItem",
              position: 3,
              name: c.name,
              item: url
            }]
          }, {
            "@type": "FAQPage",
            mainEntity: [{
              "@type": "Question",
              name: `What is the current time in ${c.name}?`,
              acceptedAnswer: {
                "@type": "Answer",
                text: `${c.name} primarily uses the ${c.primaryTz} time zone. The live clock on this page is synchronized with your device and updates every second.`
              }
            }, {
              "@type": "Question",
              name: `What time zone is ${c.name} in?`,
              acceptedAnswer: {
                "@type": "Answer",
                text: `${c.name}'s primary time zone is ${c.primaryTz}. ${c.about ?? ""}`
              }
            }, {
              "@type": "Question",
              name: `Does ${c.name} observe daylight saving time?`,
              acceptedAnswer: {
                "@type": "Answer",
                text: `Hourly.in uses the IANA time zone database, so any DST transitions for ${c.name} are reflected automatically in the clocks above.`
              }
            }]
          }]
        })
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent")
});
const $$splitNotFoundComponentImporter = () => import("./cities._city-Cjw98d3P.js");
const $$splitComponentImporter = () => import("./cities._city-Dnjeaj11.js");
const Route = createFileRoute("/cities/$city")({
  loader: ({
    params
  }) => {
    const city = getCityBySlug(params.city);
    if (!city) throw notFound();
    return {
      city
    };
  },
  head: ({
    loaderData
  }) => {
    const c = loaderData?.city;
    if (!c) return {};
    const title = `Time in ${c.city}, ${c.country} — Current Local Time`;
    const description = `Exact current time in ${c.city}, ${c.country}. Live clock, UTC offset, sunrise & sunset, and time zone (${c.tz}). Atomic-accurate via Hourly.in.`;
    const url = `/cities/${c.slug}`;
    return {
      meta: [{
        title
      }, {
        name: "description",
        content: description
      }, {
        property: "og:title",
        content: title
      }, {
        property: "og:description",
        content: description
      }, {
        property: "og:type",
        content: "website"
      }, {
        property: "og:url",
        content: url
      }, {
        name: "twitter:title",
        content: title
      }, {
        name: "twitter:description",
        content: description
      }, {
        name: "keywords",
        content: `time in ${c.city}, ${c.city} time, ${c.city} clock, ${c.country} time, ${c.tz}, current time ${c.city}`
      }],
      links: [{
        rel: "canonical",
        href: url
      }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [{
            "@type": "Place",
            name: `${c.city}, ${c.country}`,
            geo: {
              "@type": "GeoCoordinates",
              latitude: c.lat,
              longitude: c.lon
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: c.city,
              addressCountry: c.countryCode
            }
          }, {
            "@type": "BreadcrumbList",
            itemListElement: [{
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "/"
            }, {
              "@type": "ListItem",
              position: 2,
              name: "Cities",
              item: "/cities"
            }, {
              "@type": "ListItem",
              position: 3,
              name: c.city,
              item: url
            }]
          }, {
            "@type": "FAQPage",
            mainEntity: [{
              "@type": "Question",
              name: `What is the current time in ${c.city}?`,
              acceptedAnswer: {
                "@type": "Answer",
                text: `${c.city} uses the ${c.tz} time zone. Hourly.in displays the exact local time, synchronized with your device clock.`
              }
            }, {
              "@type": "Question",
              name: `What time zone is ${c.city} in?`,
              acceptedAnswer: {
                "@type": "Answer",
                text: `${c.city}, ${c.country} observes the ${c.tz} time zone.`
              }
            }]
          }]
        })
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
const SitemapDotxmlRoute = Route$6.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$7
});
const HolidaysRoute = Route$5.update({
  id: "/holidays",
  path: "/holidays",
  getParentRoute: () => Route$7
});
const DifferenceRoute = Route$4.update({
  id: "/difference",
  path: "/difference",
  getParentRoute: () => Route$7
});
const CountdownRoute = Route$3.update({
  id: "/countdown",
  path: "/countdown",
  getParentRoute: () => Route$7
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const CountriesCountryRoute = Route$1.update({
  id: "/countries/$country",
  path: "/countries/$country",
  getParentRoute: () => Route$7
});
const CitiesCityRoute = Route.update({
  id: "/cities/$city",
  path: "/cities/$city",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  CountdownRoute,
  DifferenceRoute,
  HolidaysRoute,
  SitemapDotxmlRoute,
  CitiesCityRoute,
  CountriesCountryRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  CITIES as C,
  HOLIDAYS as H,
  Route$1 as R,
  COUNTRIES as a,
  Route as b,
  getUniqueTimezonesInCountry as c,
  getCitiesInCountry as g,
  router as r,
  slugifyCity as s
};
