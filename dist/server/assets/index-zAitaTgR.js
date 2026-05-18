import { Q as reactExports, H as jsxRuntimeExports } from "./server-Dl1L1aMT.js";
import { c as createLucideIcon, C as CITIES, L as Link, s as slugifyCity } from "./router-B5j1iYdu.js";
import { u as useNow } from "./use-now-B6ZuzukQ.js";
import { a as getTimeInZone, g as getOffsetMinutes, T as TIMEZONES, f as formatOffset } from "./timezones-Bsv7zqf4.js";
import { A as AnimatedGlobe, S as Sunrise, a as Sunset } from "./animated-globe-w_Esn10I.js";
import { E as Earth, M as MapPin } from "./map-pin-C2EpkQKf.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode);
function greeting(hour) {
  if (hour < 5) return "Good night";
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  if (hour < 21) return "Good evening";
  return "Good night";
}
function sunTimes(date, lat = 28.6139, lon = 77.209) {
  const rad = Math.PI / 180;
  const dayOfYear = Math.floor((+date - +new Date(date.getFullYear(), 0, 0)) / 864e5);
  const decl = 23.44 * rad * Math.sin(360 / 365 * (dayOfYear - 81) * rad);
  const latRad = lat * rad;
  const cosH = -Math.tan(latRad) * Math.tan(decl);
  if (cosH > 1 || cosH < -1) return {
    sunrise: "—",
    sunset: "—"
  };
  const H = Math.acos(cosH) * 180 / Math.PI / 15;
  const solarNoonUTC = 12 - lon / 15;
  const sunriseUTC = solarNoonUTC - H;
  const sunsetUTC = solarNoonUTC + H;
  const fmt = (utcHours) => {
    const totalMin = (utcHours + 5.5) % 24 * 60;
    const h = Math.floor(totalMin / 60);
    const m = Math.floor(totalMin % 60);
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  };
  return {
    sunrise: fmt(sunriseUTC),
    sunset: fmt(sunsetUTC)
  };
}
function Home() {
  const now = useNow(1e3);
  const [selectedTz, setSelectedTz] = reactExports.useState("Asia/Kolkata");
  const [query, setQuery] = reactExports.useState("");
  const localTz = reactExports.useMemo(() => typeof Intl !== "undefined" ? Intl.DateTimeFormat().resolvedOptions().timeZone : "Asia/Kolkata", []);
  const main = getTimeInZone(selectedTz, now);
  const offset = getOffsetMinutes(selectedTz, now);
  const selectedInfo = TIMEZONES.find((t) => t.tz === selectedTz);
  const sun = sunTimes(now);
  const greet = greeting(parseInt(main.hour, 10));
  const results = reactExports.useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return TIMEZONES.filter((t) => t.city.toLowerCase().includes(q) || t.country.toLowerCase().includes(q) || t.tz.toLowerCase().includes(q)).slice(0, 8);
  }, [query]);
  const featured = ["Asia/Kolkata", "America/New_York", "Europe/London", "Asia/Dubai", "Asia/Tokyo", "Australia/Sydney"];
  const selectedCity = reactExports.useMemo(() => {
    const info = TIMEZONES.find((t) => t.tz === selectedTz);
    if (!info) return CITIES[0];
    return CITIES.find((c) => c.city === info.city) ?? CITIES.find((c) => c.tz === info.tz) ?? CITIES[0];
  }, [selectedTz]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg pointer-events-none", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative mx-auto max-w-6xl px-4 pt-12 pb-8 md:pt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-8 md:grid-cols-[1fr_auto]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center md:text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "sr-only", children: "Indian Standard Time & World Clock — Exact Time Now" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground", children: [
            greet,
            " • ",
            selectedInfo?.flag,
            " ",
            selectedInfo?.city ?? selectedTz
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { role: "timer", "aria-live": "polite", "aria-label": `Current time in ${selectedInfo?.city ?? selectedTz}`, className: "mt-6 font-display text-6xl font-bold tracking-tighter tabular-nums clock-glow md:text-[9rem] md:leading-[0.95]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: main.hour }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary animate-pulse", children: ":" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: main.minute }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: ":" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-muted-foreground", children: main.second })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-base text-muted-foreground md:text-lg", children: [
            main.weekday,
            ", ",
            main.day,
            " ",
            main.month,
            " ",
            main.year,
            " · ",
            formatOffset(offset)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/cities/$city", params: {
            city: selectedCity.slug
          }, className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-accent", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Earth, { className: "h-4 w-4" }),
            " Open ",
            selectedCity.city,
            " page"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto md:mx-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedGlobe, { lat: selectedCity.lat, lon: selectedCity.lon, countryCode: selectedCity.countryCode, countryName: selectedCity.country, label: `${selectedCity.city} · ${selectedCity.flag}`, size: 260 }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto mt-10 max-w-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-full border border-border bg-card px-4 py-3 shadow-sm transition-shadow focus-within:shadow-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: query, onChange: (e) => setQuery(e.target.value), placeholder: "Search any city or country…", className: "w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground", "aria-label": "Search city or country" })
        ] }),
        results.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 right-0 z-10 mt-2 overflow-hidden rounded-2xl border border-border bg-popover shadow-lg", children: results.map((r) => {
          CITIES.find((c) => c.city === r.city)?.slug ?? slugifyCity(r.city);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
            setSelectedTz(r.tz);
            setQuery("");
          }, className: "flex w-full items-center justify-between px-4 py-3 text-left text-sm hover:bg-accent", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: r.flag }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: r.city }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-muted-foreground", children: r.country })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-muted-foreground", children: r.tz })
          ] }, `${r.city}-${r.tz}`);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-center text-xs text-muted-foreground", children: [
          "Your device timezone: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-foreground", children: localTz })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(InfoCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Earth, { className: "h-4 w-4" }), label: "Timezone", value: selectedTz }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(InfoCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4" }), label: "UTC Offset", value: formatOffset(offset) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(InfoCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sunrise, { className: "h-4 w-4" }), label: "Sunrise (IST)", value: sun.sunrise }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(InfoCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sunset, { className: "h-4 w-4" }), label: "Sunset (IST)", value: sun.sunset })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative mx-auto max-w-6xl px-4 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 flex items-end justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold tracking-tight md:text-3xl", children: "World Clocks" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Live time across major cities. Tap to set as primary." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 md:grid-cols-3", children: featured.map((tz) => {
        const info = TIMEZONES.find((t) => t.tz === tz);
        const time = getTimeInZone(tz, now);
        const off = getOffsetMinutes(tz, now);
        const isActive = tz === selectedTz;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setSelectedTz(tz), className: `group relative overflow-hidden rounded-2xl border bg-card p-5 text-left transition-all hover:-translate-y-0.5 hover:shadow-lg ${isActive ? "border-primary ring-1 ring-primary/40" : "border-border"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: info?.flag }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: info?.city }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: info?.country })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground", children: formatOffset(off) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 font-mono text-3xl font-semibold tabular-nums", children: [
            time.hour,
            ":",
            time.minute,
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-base text-muted-foreground", children: [
              ":",
              time.second
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-xs text-muted-foreground", children: [
            time.weekday,
            ", ",
            time.day,
            " ",
            time.month
          ] })
        ] }, tz);
      }) })
    ] })
  ] });
}
function InfoCard({
  icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground", children: [
      icon,
      " ",
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 truncate font-mono text-sm font-medium", children: value })
  ] });
}
export {
  Home as component
};
