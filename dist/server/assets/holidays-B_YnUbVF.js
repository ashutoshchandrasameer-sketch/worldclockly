import { Q as reactExports, H as jsxRuntimeExports } from "./server-Dl1L1aMT.js";
import { u as useNow } from "./use-now-B6ZuzukQ.js";
import { H as HOLIDAYS } from "./router-B5j1iYdu.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function daysUntil(iso, now) {
  const t = (/* @__PURE__ */ new Date(iso + "T00:00:00")).getTime();
  return Math.ceil((t - +now) / 864e5);
}
function HolidaysPage() {
  const now = useNow(6e4);
  const [country, setCountry] = reactExports.useState("IN");
  const [type, setType] = reactExports.useState("all");
  const [query, setQuery] = reactExports.useState("");
  const [showPast, setShowPast] = reactExports.useState(false);
  const data = HOLIDAYS[country];
  const list = reactExports.useMemo(() => {
    const q = query.trim().toLowerCase();
    return [...data.holidays].sort((a, b) => +new Date(a.date) - +new Date(b.date)).filter((h) => type === "all" ? true : h.type === type).filter((h) => q ? h.name.toLowerCase().includes(q) : true).filter((h) => showPast ? true : daysUntil(h.date, now) >= 0);
  }, [data, type, query, showPast, now]);
  const upcoming = reactExports.useMemo(() => [...data.holidays].sort((a, b) => +new Date(a.date) - +new Date(b.date)).find((h) => daysUntil(h.date, now) >= 0), [data, now]);
  const counts = reactExports.useMemo(() => {
    const c = {
      all: 0,
      national: 0,
      religious: 0,
      festival: 0,
      observance: 0
    };
    data.holidays.forEach((h) => {
      c.all++;
      c[h.type]++;
    });
    return c;
  }, [data]);
  const TYPES = [{
    key: "all",
    label: "All"
  }, {
    key: "national",
    label: "National"
  }, {
    key: "religious",
    label: "Religious"
  }, {
    key: "festival",
    label: "Festival"
  }, {
    key: "observance",
    label: "Observance"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold tracking-tight md:text-5xl", children: "Public Holidays" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Pick a country to see all holidays for the year, with live countdowns." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap justify-center gap-2", children: Object.entries(HOLIDAYS).map(([code, c]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setCountry(code), className: `rounded-full border px-4 py-2 text-sm transition ${country === code ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:bg-accent"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-1", children: c.flag }),
      " ",
      c.name
    ] }, code)) }),
    upcoming && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 rounded-2xl border border-primary/40 bg-primary/5 p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs uppercase tracking-wider text-primary", children: [
        "Next holiday in ",
        data.name
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl font-semibold", children: upcoming.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: new Date(upcoming.date).toDateString() })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-3xl font-bold tabular-nums", children: [
          daysUntil(upcoming.date, now),
          "d"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-col gap-3 sm:flex-row sm:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "search", placeholder: "Search holidays…", value: query, onChange: (e) => setQuery(e.target.value), "aria-label": "Search holidays", className: "w-full flex-1 rounded-xl border border-border bg-card px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: showPast, onChange: (e) => setShowPast(e.target.checked), className: "h-4 w-4 rounded border-border" }),
        "Show past"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: TYPES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setType(t.key), className: `rounded-full border px-3 py-1.5 text-xs transition ${type === t.key ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:bg-accent"}`, children: [
      t.label,
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "opacity-60", children: [
        "(",
        counts[t.key],
        ")"
      ] })
    ] }, t.key)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card", children: [
      list.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "px-5 py-8 text-center text-sm text-muted-foreground", children: "No holidays match your filters." }),
      list.map((h) => {
        const d = daysUntil(h.date, now);
        const past = d < 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: `flex items-center justify-between px-5 py-4 ${past ? "opacity-50" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: h.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              new Date(h.date).toLocaleDateString(void 0, {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
              }),
              " · ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "capitalize", children: h.type })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm text-muted-foreground", children: past ? "passed" : d === 0 ? "today" : `${d}d` })
        ] }, h.date + h.name);
      })
    ] })
  ] });
}
export {
  HolidaysPage as component
};
