import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useMemo, useRef, useEffect } from "react";
import { Plus, Pause, Play, RotateCcw } from "lucide-react";
import { u as useNow } from "./use-now-lQUalFFF.js";
const PRESETS = [{
  name: "New Year 2027",
  date: "2027-01-01T00:00:00+05:30"
}, {
  name: "Diwali 2026",
  date: "2026-11-08T18:30:00+05:30"
}, {
  name: "Independence Day 2026",
  date: "2026-08-15T00:00:00+05:30"
}, {
  name: "Republic Day 2027",
  date: "2027-01-26T00:00:00+05:30"
}];
function diffParts(target, now) {
  const ms = Math.max(0, target - now);
  const s = Math.floor(ms / 1e3);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor(s % 86400 / 3600),
    minutes: Math.floor(s % 3600 / 60),
    seconds: s % 60,
    done: ms === 0
  };
}
function CountdownPage() {
  const now = useNow(1e3);
  const [target, setTarget] = useState(PRESETS[0].date);
  const [label, setLabel] = useState(PRESETS[0].name);
  const [custom, setCustom] = useState("");
  const [customLabel, setCustomLabel] = useState("");
  const targetMs = useMemo(() => new Date(target).getTime(), [target]);
  const parts = diffParts(targetMs, +now);
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-4 py-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl font-bold tracking-tight md:text-5xl", children: "Countdowns & Timers" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: "Track every moment until what matters next." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 rounded-3xl border border-border bg-card p-8 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "text-sm uppercase tracking-wider text-muted-foreground", children: label }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 grid grid-cols-4 gap-3 md:gap-6", children: [{
        l: "Days",
        v: parts.days
      }, {
        l: "Hours",
        v: parts.hours
      }, {
        l: "Minutes",
        v: parts.minutes
      }, {
        l: "Seconds",
        v: parts.seconds
      }].map((u) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-background p-4 md:p-6", children: [
        /* @__PURE__ */ jsx("div", { className: "font-mono text-3xl font-bold tabular-nums md:text-6xl", children: String(u.v).padStart(2, "0") }),
        /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs uppercase tracking-wider text-muted-foreground", children: u.l })
      ] }, u.l)) }),
      parts.done && /* @__PURE__ */ jsx("div", { className: "mt-6 text-primary", children: "It's time! 🎉" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap items-center justify-center gap-2", children: PRESETS.map((p) => /* @__PURE__ */ jsx("button", { onClick: () => {
      setTarget(p.date);
      setLabel(p.name);
    }, className: `rounded-full border px-4 py-2 text-sm transition ${target === p.date ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:bg-accent"}`, children: p.name }, p.name)) }),
    /* @__PURE__ */ jsxs("form", { className: "mx-auto mt-6 flex max-w-xl flex-col gap-2", onSubmit: (e) => {
      e.preventDefault();
      if (!custom) return;
      setTarget(custom);
      setLabel(customLabel.trim() || "Custom event");
    }, children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-stretch gap-2 sm:flex-row", children: [
        /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Event name (optional)", "aria-label": "Custom event name", value: customLabel, onChange: (e) => setCustomLabel(e.target.value), className: "flex-1 rounded-xl border border-border bg-card px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40" }),
        /* @__PURE__ */ jsx("input", { type: "datetime-local", "aria-label": "Countdown target date and time", value: custom, onChange: (e) => setCustom(e.target.value), className: "flex-1 rounded-xl border border-border bg-card px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40" })
      ] }),
      /* @__PURE__ */ jsxs("button", { type: "submit", className: "inline-flex items-center justify-center gap-1 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90", children: [
        /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }),
        " Set countdown"
      ] })
    ] }),
    /* @__PURE__ */ jsx(Pomodoro, {})
  ] });
}
function Pomodoro() {
  const [seconds, setSeconds] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (!running) return;
    ref.current = window.setInterval(() => {
      setSeconds((s2) => s2 > 0 ? s2 - 1 : 0);
    }, 1e3);
    return () => {
      if (ref.current) clearInterval(ref.current);
    };
  }, [running]);
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return /* @__PURE__ */ jsxs("div", { className: "mt-12 rounded-3xl border border-border bg-card p-8", children: [
    /* @__PURE__ */ jsx("h2", { className: "font-display text-xl font-semibold", children: "Pomodoro Timer" }),
    /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "25 minute focus sprints — pick what works." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-col items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "font-mono text-7xl font-bold tabular-nums", children: [
        String(m).padStart(2, "0"),
        ":",
        String(s).padStart(2, "0")
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex gap-2", children: [
        /* @__PURE__ */ jsx("button", { onClick: () => setRunning((r) => !r), className: "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90", children: running ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Pause, { className: "h-4 w-4" }),
          " Pause"
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Play, { className: "h-4 w-4" }),
          " Start"
        ] }) }),
        /* @__PURE__ */ jsxs("button", { onClick: () => {
          setRunning(false);
          setSeconds(25 * 60);
        }, className: "inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2 text-sm font-medium hover:bg-accent", children: [
          /* @__PURE__ */ jsx(RotateCcw, { className: "h-4 w-4" }),
          " Reset"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 flex gap-2", children: [15, 25, 45, 60].map((min) => /* @__PURE__ */ jsxs("button", { onClick: () => {
        setRunning(false);
        setSeconds(min * 60);
      }, className: "rounded-full border border-border bg-background px-3 py-1 text-xs hover:bg-accent", children: [
        min,
        " min"
      ] }, min)) })
    ] })
  ] });
}
export {
  CountdownPage as component
};
