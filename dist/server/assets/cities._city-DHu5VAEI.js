import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { ArrowLeft, Check, Share2, Globe2, MapPin, Sunrise, Sunset } from "lucide-react";
import { u as useNow } from "./use-now-lQUalFFF.js";
import { b as Route, C as CITIES } from "./router-X-I99R0f.js";
import { a as getTimeInZone, g as getOffsetMinutes, f as formatOffset } from "./timezones-CdSu_6TQ.js";
import { A as AnimatedGlobe } from "./animated-globe-9wmd9Ebj.js";
import "@tanstack/react-query";
import "d3-geo";
import "topojson-client";
function sunTimes(date, lat, lon, tzOffsetMin) {
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
  const fmt = (utcHours) => {
    const totalMin = ((utcHours + tzOffsetMin / 60) % 24 + 24) % 24 * 60;
    const h = Math.floor(totalMin / 60);
    const m = Math.floor(totalMin % 60);
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  };
  return {
    sunrise: fmt(solarNoonUTC - H),
    sunset: fmt(solarNoonUTC + H)
  };
}
function CityPage() {
  const {
    city
  } = Route.useLoaderData();
  const now = useNow(1e3);
  const [copied, setCopied] = useState(false);
  const time = getTimeInZone(city.tz, now);
  const offset = getOffsetMinutes(city.tz, now);
  const sun = sunTimes(now, city.lat, city.lon, offset);
  const related = useMemo(() => CITIES.filter((c) => c.country === city.country && c.slug !== city.slug).slice(0, 6), [city]);
  const elsewhere = useMemo(() => CITIES.filter((c) => c.country !== city.country).slice(0, 8), [city]);
  const share = async () => {
    const url = typeof window !== "undefined" ? window.location.href : `/cities/${city.slug}`;
    const text = `It's ${time.hour}:${time.minute} in ${city.city} right now — Hourly.in`;
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: `Time in ${city.city}`,
          text,
          url
        });
        return;
      } catch {
      }
    }
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg pointer-events-none", "aria-hidden": true }),
    /* @__PURE__ */ jsxs("section", { className: "relative mx-auto max-w-6xl px-4 pt-10 pb-6", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "h-3.5 w-3.5" }),
        " All cities"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 grid items-center gap-10 md:grid-cols-[1fr_auto]", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("p", { className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground", children: [
            city.flag,
            " ",
            city.country,
            " · ",
            city.tz
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl", children: [
            "Time in ",
            /* @__PURE__ */ jsx("span", { className: "text-primary", children: city.city })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 font-mono text-6xl font-bold tabular-nums clock-glow md:text-8xl", children: [
            time.hour,
            /* @__PURE__ */ jsx("span", { className: "text-primary animate-pulse", children: ":" }),
            time.minute,
            /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground", children: [
              ":",
              time.second
            ] })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "mt-3 text-sm text-muted-foreground md:text-base", children: [
            time.weekday,
            ", ",
            time.day,
            " ",
            time.month,
            " ",
            time.year,
            " · ",
            formatOffset(offset)
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxs("button", { onClick: share, className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-accent", children: [
              copied ? /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-india-green" }) : /* @__PURE__ */ jsx(Share2, { className: "h-4 w-4" }),
              copied ? "Link copied" : "Share this clock"
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/difference", className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-accent", children: [
              /* @__PURE__ */ jsx(Globe2, { className: "h-4 w-4" }),
              " Compare time zones"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mx-auto md:mx-0", children: /* @__PURE__ */ jsx(AnimatedGlobe, { lat: city.lat, lon: city.lon, countryCode: city.countryCode, countryName: city.country, label: `${city.city} · ${city.flag}`, size: 300 }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 grid grid-cols-2 gap-3 md:grid-cols-4", children: [
        /* @__PURE__ */ jsx(Stat, { icon: /* @__PURE__ */ jsx(Globe2, { className: "h-4 w-4" }), label: "Time zone", value: city.tz }),
        /* @__PURE__ */ jsx(Stat, { icon: /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" }), label: "UTC offset", value: formatOffset(offset) }),
        /* @__PURE__ */ jsx(Stat, { icon: /* @__PURE__ */ jsx(Sunrise, { className: "h-4 w-4" }), label: "Sunrise", value: sun.sunrise }),
        /* @__PURE__ */ jsx(Stat, { icon: /* @__PURE__ */ jsx(Sunset, { className: "h-4 w-4" }), label: "Sunset", value: sun.sunset })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "relative mx-auto max-w-3xl px-4 py-12", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-2xl font-bold tracking-tight", children: [
        "About time in ",
        city.city
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mt-4 text-muted-foreground", children: [
        city.about ? `${city.about} ` : "",
        city.city,
        " observes the ",
        /* @__PURE__ */ jsx("span", { className: "font-mono text-foreground", children: city.tz }),
        " time zone with a current UTC offset of ",
        formatOffset(offset),
        ". Located at ",
        city.lat.toFixed(2),
        "°, ",
        city.lon.toFixed(2),
        "°, the local clock above stays atomically synced through your device and the IANA time zone database, automatically accounting for any daylight saving transitions."
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 space-y-3", children: [{
        q: `What is the current time in ${city.city}?`,
        a: `${city.city} is in the ${city.tz} zone (${formatOffset(offset)}). The clock at the top of this page updates every second, synced with your device.`
      }, {
        q: `Does ${city.city} observe Daylight Saving Time?`,
        a: `Hourly.in uses the IANA time zone database, so any DST changes for ${city.city} are reflected automatically.`
      }, {
        q: `How far is ${city.city} from UTC?`,
        a: `${city.city} is currently ${formatOffset(offset)} from Coordinated Universal Time.`
      }].map((f) => /* @__PURE__ */ jsxs("details", { className: "group rounded-xl border border-border bg-card p-4", children: [
        /* @__PURE__ */ jsx("summary", { className: "cursor-pointer font-medium", children: f.q }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: f.a })
      ] }, f.q)) })
    ] }),
    related.length > 0 && /* @__PURE__ */ jsxs("section", { className: "relative mx-auto max-w-6xl px-4 pb-8", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-xl font-bold tracking-tight", children: [
        "More cities in ",
        city.country
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 grid grid-cols-2 gap-3 md:grid-cols-3", children: related.map((c) => /* @__PURE__ */ jsx(CityCard, { slug: c.slug, flag: c.flag, city: c.city, country: c.country, tz: c.tz, now }, c.slug)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "relative mx-auto max-w-6xl px-4 pb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-xl font-bold tracking-tight", children: "Other major cities" }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 grid grid-cols-2 gap-3 md:grid-cols-4", children: elsewhere.map((c) => /* @__PURE__ */ jsx(CityCard, { slug: c.slug, flag: c.flag, city: c.city, country: c.country, tz: c.tz, now }, c.slug)) })
    ] })
  ] });
}
function Stat({
  icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground", children: [
      icon,
      " ",
      label
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-2 truncate font-mono text-sm font-medium", children: value })
  ] });
}
function CityCard({
  slug,
  flag,
  city,
  country,
  tz,
  now
}) {
  const t = getTimeInZone(tz, now);
  return /* @__PURE__ */ jsxs(Link, { to: "/cities/$city", params: {
    city: slug
  }, className: "rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:shadow-md", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-lg", children: flag }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: city })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: country })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-2 font-mono text-xl font-semibold tabular-nums", children: [
      t.hour,
      ":",
      t.minute
    ] })
  ] });
}
export {
  CityPage as component
};
