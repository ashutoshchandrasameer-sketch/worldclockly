import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { u as useNow } from "./use-now-lQUalFFF.js";
import { H as HOLIDAYS } from "./router-BfuBUzMw.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "lucide-react";
function daysUntil(iso, now) {
  const t = (/* @__PURE__ */ new Date(iso + "T00:00:00")).getTime();
  return Math.ceil((t - +now) / 864e5);
}
function HolidaysPage() {
  const now = useNow(6e4);
  const [country, setCountry] = useState("IN");
  const data = HOLIDAYS[country];
  const list = useMemo(() => [...data.holidays].sort((a, b) => +new Date(a.date) - +new Date(b.date)), [data]);
  const upcoming = list.find((h) => daysUntil(h.date, now) >= 0);
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-4 py-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl font-bold tracking-tight md:text-5xl", children: "Public Holidays" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: "Pick a country to see all holidays for the year, with live countdowns." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 flex flex-wrap justify-center gap-2", children: Object.entries(HOLIDAYS).map(([code, c]) => /* @__PURE__ */ jsxs("button", { onClick: () => setCountry(code), className: `rounded-full border px-4 py-2 text-sm transition ${country === code ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:bg-accent"}`, children: [
      /* @__PURE__ */ jsx("span", { className: "mr-1", children: c.flag }),
      " ",
      c.name
    ] }, code)) }),
    upcoming && /* @__PURE__ */ jsxs("div", { className: "mt-8 rounded-2xl border border-primary/40 bg-primary/5 p-5", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-primary", children: "Next holiday" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-1 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-display text-xl font-semibold", children: upcoming.name }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: new Date(upcoming.date).toDateString() })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "font-mono text-3xl font-bold tabular-nums", children: [
          daysUntil(upcoming.date, now),
          "d"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("ul", { className: "mt-8 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card", children: list.map((h) => {
      const d = daysUntil(h.date, now);
      const past = d < 0;
      return /* @__PURE__ */ jsxs("li", { className: `flex items-center justify-between px-5 py-4 ${past ? "opacity-50" : ""}`, children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-medium", children: h.name }),
          /* @__PURE__ */ jsxs("div", { className: "text-xs text-muted-foreground", children: [
            new Date(h.date).toLocaleDateString(void 0, {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric"
            }),
            " · ",
            /* @__PURE__ */ jsx("span", { className: "capitalize", children: h.type })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "font-mono text-sm text-muted-foreground", children: past ? "passed" : d === 0 ? "today" : `${d}d` })
      ] }, h.date + h.name);
    }) })
  ] });
}
export {
  HolidaysPage as component
};
