import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { ArrowLeftRight } from "lucide-react";
import { u as useNow } from "./use-now-lQUalFFF.js";
import { a as getTimeInZone, g as getOffsetMinutes, T as TIMEZONES, f as formatOffset } from "./timezones-CdSu_6TQ.js";
function CitySelect({
  value,
  onChange,
  label
}) {
  return /* @__PURE__ */ jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx("select", { value, onChange: (e) => onChange(e.target.value), className: "mt-1 w-full rounded-xl border border-border bg-card px-3 py-2 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/40", children: TIMEZONES.map((t) => /* @__PURE__ */ jsxs("option", { value: t.tz, children: [
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
  const [a, setA] = useState("Asia/Kolkata");
  const [b, setB] = useState("America/New_York");
  const ta = getTimeInZone(a, now);
  const tb = getTimeInZone(b, now);
  const oa = getOffsetMinutes(a, now);
  const ob = getOffsetMinutes(b, now);
  const diff = oa - ob;
  const diffStr = useMemo(() => {
    const sign = diff >= 0 ? "ahead of" : "behind";
    const abs = Math.abs(diff);
    const h = Math.floor(abs / 60);
    const m = abs % 60;
    return `${h}h ${m}m ${sign}`;
  }, [diff]);
  const ia = TIMEZONES.find((t) => t.tz === a);
  const ib = TIMEZONES.find((t) => t.tz === b);
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-4 py-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl font-bold tracking-tight md:text-5xl", children: "Time Difference" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: "Compare any two cities — live, accurate, instant." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto mt-10 grid max-w-3xl gap-4 md:grid-cols-[1fr_auto_1fr] md:items-end", children: [
      /* @__PURE__ */ jsx(CitySelect, { value: a, onChange: setA, label: "From" }),
      /* @__PURE__ */ jsx("button", { onClick: () => {
        const t = a;
        setA(b);
        setB(t);
      }, "aria-label": "Swap", className: "mx-auto h-10 w-10 rounded-full border border-border bg-card text-foreground transition hover:bg-accent", children: /* @__PURE__ */ jsx(ArrowLeftRight, { className: "mx-auto h-4 w-4" }) }),
      /* @__PURE__ */ jsx(CitySelect, { value: b, onChange: setB, label: "To" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsx(ClockBlock, { flag: ia?.flag ?? "", title: `${ia?.city}, ${ia?.country}`, time: ta, offset: oa }),
      /* @__PURE__ */ jsx(ClockBlock, { flag: ib?.flag ?? "", title: `${ib?.city}, ${ib?.country}`, time: tb, offset: ob })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 rounded-2xl border border-border bg-card p-6 text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
      ia?.city,
      " is",
      " ",
      /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: diffStr }),
      " ",
      ib?.city,
      "."
    ] }) })
  ] });
}
function ClockBlock({
  flag,
  title,
  time,
  offset
}) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", children: [
      /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2 font-medium", children: [
        /* @__PURE__ */ jsx("span", { className: "text-lg", children: flag }),
        title
      ] }),
      /* @__PURE__ */ jsx("span", { className: "font-mono text-xs text-muted-foreground", children: formatOffset(offset) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 font-mono text-5xl font-semibold tabular-nums", children: [
      time.hour,
      ":",
      time.minute,
      /* @__PURE__ */ jsxs("span", { className: "text-2xl text-muted-foreground", children: [
        ":",
        time.second
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-2 text-sm text-muted-foreground", children: [
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
