import { Q as reactExports, H as jsxRuntimeExports } from "./server-Dl1L1aMT.js";
import { u as useNow } from "./use-now-B6ZuzukQ.js";
import { c as createLucideIcon, H as HOLIDAYS } from "./router-B5j1iYdu.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$5 = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
];
const Pause = createLucideIcon("pause", __iconNode$5);
const __iconNode$4 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
const Pencil = createLucideIcon("pencil", __iconNode$4);
const __iconNode$3 = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
];
const Play = createLucideIcon("play", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
];
const RotateCcw = createLucideIcon("rotate-ccw", __iconNode$1);
const __iconNode = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);
const STORAGE_KEY = "worldclockly-custom-events";
const GLOBAL_PRESETS = [{
  name: "New Year 2027",
  date: "2027-01-01T00:00:00"
}, {
  name: "Summer Solstice 2026",
  date: "2026-06-21T00:00:00"
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
function loadCustomEvents() {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}
function CountdownPage() {
  const now = useNow(1e3);
  const [country, setCountry] = reactExports.useState("IN");
  const [target, setTarget] = reactExports.useState(GLOBAL_PRESETS[0].date);
  const [label, setLabel] = reactExports.useState(GLOBAL_PRESETS[0].name);
  const [custom, setCustom] = reactExports.useState("");
  const [customLabel, setCustomLabel] = reactExports.useState("");
  const [customEvents, setCustomEvents] = reactExports.useState([]);
  reactExports.useEffect(() => {
    setCustomEvents(loadCustomEvents());
  }, []);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(customEvents));
  }, [customEvents]);
  const countryData = HOLIDAYS[country];
  const countryPresets = reactExports.useMemo(() => countryData.holidays.map((h) => ({
    name: h.name,
    date: `${h.date}T00:00:00`
  })).filter((p) => new Date(p.date).getTime() >= +now - 864e5).slice(0, 8), [countryData, now]);
  const targetMs = reactExports.useMemo(() => new Date(target).getTime(), [target]);
  const parts = diffParts(targetMs, +now);
  function addCustomEvent(e) {
    e.preventDefault();
    if (!custom) return;
    const name = customLabel.trim() || "Custom event";
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const evt = {
      id,
      name,
      date: custom
    };
    setCustomEvents((list) => [...list, evt]);
    setTarget(custom);
    setLabel(name);
    setCustom("");
    setCustomLabel("");
  }
  function removeCustomEvent(id) {
    setCustomEvents((list) => list.filter((e) => e.id !== id));
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold tracking-tight md:text-5xl", children: "Countdowns & Timers" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Track every moment until what matters next." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 rounded-3xl border border-border bg-card p-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm uppercase tracking-wider text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-4 gap-3 md:gap-6", children: [{
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
      }].map((u) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-background p-4 md:p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-3xl font-bold tabular-nums md:text-6xl", children: String(u.v).padStart(2, "0") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs uppercase tracking-wider text-muted-foreground", children: u.l })
      ] }, u.l)) }),
      parts.done && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 text-primary", children: "It's time! 🎉" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-semibold", children: "Pick a country" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Loads public holidays as presets" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: Object.entries(HOLIDAYS).map(([code, c]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setCountry(code), className: `rounded-full border px-4 py-2 text-sm transition ${country === code ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:bg-accent"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-1", children: c.flag }),
        " ",
        c.name
      ] }, code)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-2xl border border-border bg-card p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 text-xs uppercase tracking-wider text-muted-foreground", children: [
        "Upcoming holidays in ",
        countryData.name
      ] }),
      countryPresets.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No upcoming holidays for this country in our dataset." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: countryPresets.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
        setTarget(p.date);
        setLabel(`${p.name} · ${countryData.name}`);
      }, className: `rounded-full border px-4 py-2 text-sm transition ${target === p.date ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:bg-accent"}`, children: [
        p.name,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-xs opacity-70", children: new Date(p.date).toLocaleDateString(void 0, {
          day: "numeric",
          month: "short"
        }) })
      ] }, p.name + p.date)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Global:" }),
      GLOBAL_PRESETS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        setTarget(p.date);
        setLabel(p.name);
      }, className: `rounded-full border px-3 py-1.5 text-xs transition ${target === p.date ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:bg-accent"}`, children: p.name }, p.name))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "mx-auto mt-8 flex max-w-xl flex-col gap-2 rounded-2xl border border-border bg-card p-5", onSubmit: addCustomEvent, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Add a custom event" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-stretch gap-2 sm:flex-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Event name (e.g. Anniversary)", "aria-label": "Custom event name", value: customLabel, onChange: (e) => setCustomLabel(e.target.value), className: "flex-1 rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "datetime-local", "aria-label": "Countdown target date and time", value: custom, onChange: (e) => setCustom(e.target.value), className: "flex-1 rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "inline-flex items-center justify-center gap-1 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
        " Save & start countdown"
      ] })
    ] }),
    customEvents.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mt-4 max-w-xl rounded-2xl border border-border bg-card p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 text-xs uppercase tracking-wider text-muted-foreground", children: "Your saved events" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border", children: customEvents.map((e) => {
        const d = diffParts(new Date(e.date).getTime(), +now);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between gap-3 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
            setTarget(e.date);
            setLabel(e.name);
          }, className: "flex-1 text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3.5 w-3.5 text-muted-foreground" }),
              e.name
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-0.5 text-xs text-muted-foreground", children: [
              new Date(e.date).toLocaleString(),
              " · ",
              d.done ? "passed" : `${d.days}d ${d.hours}h ${d.minutes}m`
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => removeCustomEvent(e.id), "aria-label": `Delete ${e.name}`, className: "rounded-full p-2 text-muted-foreground transition hover:bg-accent hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
        ] }, e.id);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Pomodoro, {})
  ] });
}
function Pomodoro() {
  const [seconds, setSeconds] = reactExports.useState(25 * 60);
  const [running, setRunning] = reactExports.useState(false);
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 rounded-3xl border border-border bg-card p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-semibold", children: "Pomodoro Timer" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "25 minute focus sprints — pick what works." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-col items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-7xl font-bold tabular-nums", children: [
        String(m).padStart(2, "0"),
        ":",
        String(s).padStart(2, "0")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setRunning((r) => !r), className: "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90", children: running ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { className: "h-4 w-4" }),
          " Pause"
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-4 w-4" }),
          " Start"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
          setRunning(false);
          setSeconds(25 * 60);
        }, className: "inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2 text-sm font-medium hover:bg-accent", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-4 w-4" }),
          " Reset"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex gap-2", children: [15, 25, 45, 60].map((min) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
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
