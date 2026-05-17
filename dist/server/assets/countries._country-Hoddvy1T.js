import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { ArrowLeft, Globe2, MapPin, Clock } from "lucide-react";
import { u as useNow } from "./use-now-lQUalFFF.js";
import { R as Route, g as getCitiesInCountry, c as getUniqueTimezonesInCountry, H as HOLIDAYS, a as COUNTRIES } from "./router-BfuBUzMw.js";
import { a as getTimeInZone, g as getOffsetMinutes, f as formatOffset } from "./timezones-CdSu_6TQ.js";
import "@tanstack/react-query";
function CountryPage() {
  const {
    country
  } = Route.useLoaderData();
  const now = useNow(1e3);
  const time = getTimeInZone(country.primaryTz, now);
  const offset = getOffsetMinutes(country.primaryTz, now);
  const cities = useMemo(() => getCitiesInCountry(country.code), [country.code]);
  const timezones = useMemo(() => getUniqueTimezonesInCountry(country.code), [country.code]);
  const holidays = HOLIDAYS[country.code]?.holidays ?? [];
  const otherCountries = useMemo(() => COUNTRIES.filter((c) => c.slug !== country.slug).slice(0, 8), [country.slug]);
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg pointer-events-none", "aria-hidden": true }),
    /* @__PURE__ */ jsxs("section", { className: "relative mx-auto max-w-6xl px-4 pt-10 pb-6", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "h-3.5 w-3.5" }),
        " Home"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsxs("p", { className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground", children: [
          country.flag,
          " ",
          country.code,
          " · ",
          country.primaryTz
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl", children: [
          "Current local time in ",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: country.name })
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
          formatOffset(offset),
          " · ",
          country.primaryTz
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 grid grid-cols-2 gap-3 md:grid-cols-4", children: [
        /* @__PURE__ */ jsx(Stat, { icon: /* @__PURE__ */ jsx(Globe2, { className: "h-4 w-4" }), label: "Primary time zone", value: country.primaryTz }),
        /* @__PURE__ */ jsx(Stat, { icon: /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" }), label: "UTC offset", value: formatOffset(offset) }),
        /* @__PURE__ */ jsx(Stat, { icon: /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4" }), label: "Time zones", value: String(timezones.length || 1) }),
        /* @__PURE__ */ jsx(Stat, { icon: /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" }), label: "Cities tracked", value: String(cities.length) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "relative mx-auto max-w-3xl px-4 py-10", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-2xl font-bold tracking-tight", children: [
        "About time in ",
        country.name
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mt-4 text-muted-foreground", children: [
        country.about,
        " The clock above uses the IANA time zone database via your device, so daylight-saving transitions for ",
        country.name,
        " apply automatically. ",
        country.name,
        "'s primary zone is ",
        /* @__PURE__ */ jsx("span", { className: "font-mono text-foreground", children: country.primaryTz }),
        ", currently ",
        formatOffset(offset),
        " from UTC."
      ] })
    ] }),
    timezones.length > 1 && /* @__PURE__ */ jsxs("section", { className: "relative mx-auto max-w-6xl px-4 pb-10", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-xl font-bold tracking-tight", children: [
        "Time zones in ",
        country.name
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3", children: timezones.map((tz) => {
        const t = getTimeInZone(tz, now);
        const off = getOffsetMinutes(tz, now);
        return /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-4", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: tz }),
          /* @__PURE__ */ jsxs("div", { className: "mt-2 font-mono text-2xl font-semibold tabular-nums", children: [
            t.hour,
            ":",
            t.minute,
            ":",
            t.second
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: formatOffset(off) })
        ] }, tz);
      }) })
    ] }),
    cities.length > 0 && /* @__PURE__ */ jsxs("section", { className: "relative mx-auto max-w-6xl px-4 pb-10", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-xl font-bold tracking-tight", children: [
        "Major cities in ",
        country.name
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4", children: cities.map((c) => {
        const t = getTimeInZone(c.tz, now);
        return /* @__PURE__ */ jsxs(Link, { to: "/cities/$city", params: {
          city: c.slug
        }, className: "rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:shadow-md", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: c.city }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: c.tz.split("/")[1]?.replace(/_/g, " ") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-2 font-mono text-xl font-semibold tabular-nums", children: [
            t.hour,
            ":",
            t.minute
          ] })
        ] }, c.slug);
      }) })
    ] }),
    holidays.length > 0 && /* @__PURE__ */ jsxs("section", { className: "relative mx-auto max-w-3xl px-4 pb-10", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-xl font-bold tracking-tight", children: [
        "Public holidays in ",
        country.name
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "mt-4 divide-y divide-border rounded-2xl border border-border bg-card", children: holidays.slice(0, 12).map((h) => /* @__PURE__ */ jsxs("li", { className: "flex items-center justify-between p-3 text-sm", children: [
        /* @__PURE__ */ jsx("span", { className: "font-medium", children: h.name }),
        /* @__PURE__ */ jsx("span", { className: "font-mono text-muted-foreground", children: h.date })
      ] }, h.date + h.name)) }),
      /* @__PURE__ */ jsx(Link, { to: "/holidays", className: "mt-3 inline-block text-sm text-primary hover:underline", children: "All holidays →" })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "relative mx-auto max-w-3xl px-4 pb-10", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-xl font-bold tracking-tight", children: "FAQ" }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 space-y-3", children: [{
        q: `What is the current time in ${country.name}?`,
        a: `${country.name} primarily uses the ${country.primaryTz} zone (${formatOffset(offset)}). The clock above updates every second, synced with your device.`
      }, {
        q: `What time zone is ${country.name} in?`,
        a: `${country.name}'s primary IANA time zone is ${country.primaryTz}. ${country.about ?? ""}`
      }, {
        q: `Does ${country.name} observe daylight saving?`,
        a: `Hourly.in uses the IANA time zone database, so any DST changes for ${country.name} are reflected automatically.`
      }].map((f) => /* @__PURE__ */ jsxs("details", { className: "group rounded-xl border border-border bg-card p-4", children: [
        /* @__PURE__ */ jsx("summary", { className: "cursor-pointer font-medium", children: f.q }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: f.a })
      ] }, f.q)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "relative mx-auto max-w-6xl px-4 pb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-xl font-bold tracking-tight", children: "Other countries" }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 grid grid-cols-2 gap-3 md:grid-cols-4", children: otherCountries.map((c) => /* @__PURE__ */ jsxs(Link, { to: "/countries/$country", params: {
        country: c.slug
      }, className: "rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:shadow-md", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-lg", children: c.flag }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: c.name })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-1 text-[10px] uppercase tracking-wider text-muted-foreground", children: c.primaryTz })
      ] }, c.slug)) })
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
export {
  CountryPage as component
};
