import { Q as reactExports, H as jsxRuntimeExports } from "./server-Dl1L1aMT.js";
import { u as useNow } from "./use-now-B6ZuzukQ.js";
import { a as getTimeInZone, g as getOffsetMinutes, T as TIMEZONES, f as formatOffset } from "./timezones-Bsv7zqf4.js";
import { c as createLucideIcon } from "./router-B5j1iYdu.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "M8 3 4 7l4 4", key: "9rb6wj" }],
  ["path", { d: "M4 7h16", key: "6tx8e3" }],
  ["path", { d: "m16 21 4-4-4-4", key: "siv7j2" }],
  ["path", { d: "M20 17H4", key: "h6l3hr" }]
];
const ArrowLeftRight = createLucideIcon("arrow-left-right", __iconNode);
function CitySelect({
  value,
  onChange,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value, onChange: (e) => onChange(e.target.value), className: "mt-1 w-full rounded-xl border border-border bg-card px-3 py-2 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/40", children: TIMEZONES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: t.tz, children: [
      t.flag,
      " ",
      t.city,
      ", ",
      t.country
    ] }, `${t.city}-${t.tz}`)) })
  ] });
}
function DifferencePage() {
  const now = useNow(1e3);
  const [a, setA] = reactExports.useState("Asia/Kolkata");
  const [b, setB] = reactExports.useState("America/New_York");
  const ta = getTimeInZone(a, now);
  const tb = getTimeInZone(b, now);
  const oa = getOffsetMinutes(a, now);
  const ob = getOffsetMinutes(b, now);
  const diff = oa - ob;
  const diffStr = reactExports.useMemo(() => {
    const sign = diff >= 0 ? "ahead of" : "behind";
    const abs = Math.abs(diff);
    const h = Math.floor(abs / 60);
    const m = abs % 60;
    return `${h}h ${m}m ${sign}`;
  }, [diff]);
  const ia = TIMEZONES.find((t) => t.tz === a);
  const ib = TIMEZONES.find((t) => t.tz === b);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold tracking-tight md:text-5xl", children: "Time Difference" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Compare any two cities — live, accurate, instant." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mt-10 grid max-w-3xl gap-4 md:grid-cols-[1fr_auto_1fr] md:items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CitySelect, { value: a, onChange: setA, label: "From" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        const t = a;
        setA(b);
        setB(t);
      }, "aria-label": "Swap", className: "mx-auto h-10 w-10 rounded-full border border-border bg-card text-foreground transition hover:bg-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeftRight, { className: "mx-auto h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CitySelect, { value: b, onChange: setB, label: "To" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ClockBlock, { flag: ia?.flag ?? "", title: `${ia?.city}, ${ia?.country}`, time: ta, offset: oa }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ClockBlock, { flag: ib?.flag ?? "", title: `${ib?.city}, ${ib?.country}`, time: tb, offset: ob })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 rounded-2xl border border-border bg-card p-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
      ia?.city,
      " is",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: diffStr }),
      " ",
      ib?.city,
      "."
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MeetingPlanner, { aTz: a, bTz: b, aCity: ia?.city ?? "", bCity: ib?.city ?? "", now }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 rounded-2xl border border-border bg-card p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-semibold", children: "Quick conversions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 grid gap-1 text-sm text-muted-foreground sm:grid-cols-2", children: [9, 12, 15, 18, 21].map((h) => {
        const refDate = new Date(now);
        refDate.setHours(h, 0, 0, 0);
        const converted = getTimeInZone(b, refDate);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "rounded-lg border border-border bg-background px-3 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono", children: [
            String(h).padStart(2, "0"),
            ":00"
          ] }),
          " in ",
          ia?.city,
          " →",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-foreground", children: [
            converted.hour,
            ":",
            converted.minute
          ] }),
          " in ",
          ib?.city
        ] }, h);
      }) })
    ] })
  ] });
}
function MeetingPlanner({
  aTz,
  bTz,
  aCity,
  bCity,
  now
}) {
  const hours = reactExports.useMemo(() => {
    const out = [];
    const base = new Date(now);
    base.setMinutes(0, 0, 0);
    for (let i = 0; i < 24; i++) {
      const d = new Date(base.getTime() + i * 36e5);
      const a = getTimeInZone(aTz, d);
      const b = getTimeInZone(bTz, d);
      const aH = parseInt(a.hour, 10);
      const bH = parseInt(b.hour, 10);
      out.push({
        aHour: aH,
        bHour: bH,
        bDay: b.weekday.slice(0, 3),
        aBusiness: aH >= 9 && aH < 18,
        bBusiness: bH >= 9 && bH < 18
      });
    }
    return out;
  }, [aTz, bTz, now]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 rounded-2xl border border-border bg-card p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-semibold", children: "Meeting planner — next 24h" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Green cells are business hours (09:00–18:00) in both cities." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full min-w-[640px] text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 text-left font-medium", children: aCity }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 text-left font-medium", children: bCity }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 text-left font-medium", children: "Overlap" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: hours.map((h, i) => {
        const both = h.aBusiness && h.bBusiness;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-1.5 font-mono", children: [
            String(h.aHour).padStart(2, "0"),
            ":00"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-1.5 font-mono", children: [
            String(h.bHour).padStart(2, "0"),
            ":00",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-xs text-muted-foreground", children: h.bDay })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center rounded-full px-2 py-0.5 text-xs ${both ? "bg-primary/15 text-primary" : h.aBusiness || h.bBusiness ? "bg-muted text-muted-foreground" : "bg-background text-muted-foreground/60"}`, children: both ? "✓ both working" : h.aBusiness ? `${aCity} only` : h.bBusiness ? `${bCity} only` : "off-hours" }) })
        ] }, i);
      }) })
    ] }) })
  ] });
}
function ClockBlock({
  flag,
  title,
  time,
  offset
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2 font-medium", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: flag }),
        title
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-muted-foreground", children: formatOffset(offset) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 font-mono text-5xl font-semibold tabular-nums", children: [
      time.hour,
      ":",
      time.minute,
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-2xl text-muted-foreground", children: [
        ":",
        time.second
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-sm text-muted-foreground", children: [
      time.weekday,
      ", ",
      time.day,
      " ",
      time.month,
      " ",
      time.year
    ] })
  ] });
}
export {
  DifferencePage as component
};
