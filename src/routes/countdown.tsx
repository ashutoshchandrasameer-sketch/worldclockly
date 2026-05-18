import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Play, Pause, RotateCcw, Plus, Trash2, Pencil } from "lucide-react";
import { useNow } from "@/hooks/use-now";
import { HOLIDAYS } from "@/lib/holidays";

export const Route = createFileRoute("/countdown")({
  component: CountdownPage,
  head: () => ({
    meta: [
      { title: "Countdown Timers & Pomodoro — worldClockly.com" },
      { name: "description", content: "Countdown to any event, exam, IPL match or world cup. Pick a country to load its public holidays, add your own custom events, and use the built-in Pomodoro focus timer." },
      { property: "og:title", content: "Countdowns & Pomodoro — worldClockly.com" },
      { property: "og:description", content: "Live countdowns by country, custom events, and a beautiful Pomodoro timer." },
    ],
    links: [{ rel: "canonical", href: "/countdown" }],
  }),
});

type CountryCode = keyof typeof HOLIDAYS;

interface CustomEvent {
  id: string;
  name: string;
  date: string; // ISO datetime
}

const STORAGE_KEY = "worldclockly-custom-events";

const GLOBAL_PRESETS: { name: string; date: string }[] = [
  { name: "New Year 2027", date: "2027-01-01T00:00:00" },
  { name: "Summer Solstice 2026", date: "2026-06-21T00:00:00" },
];

function diffParts(target: number, now: number) {
  const ms = Math.max(0, target - now);
  const s = Math.floor(ms / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
    done: ms === 0,
  };
}

function loadCustomEvents(): CustomEvent[] {
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
  const now = useNow(1000);
  const [country, setCountry] = useState<CountryCode>("IN");
  const [target, setTarget] = useState(GLOBAL_PRESETS[0].date);
  const [label, setLabel] = useState(GLOBAL_PRESETS[0].name);
  const [custom, setCustom] = useState("");
  const [customLabel, setCustomLabel] = useState("");
  const [customEvents, setCustomEvents] = useState<CustomEvent[]>([]);

  useEffect(() => {
    setCustomEvents(loadCustomEvents());
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(customEvents));
  }, [customEvents]);

  const countryData = HOLIDAYS[country];
  const countryPresets = useMemo(
    () =>
      countryData.holidays
        .map((h) => ({ name: h.name, date: `${h.date}T00:00:00` }))
        .filter((p) => new Date(p.date).getTime() >= +now - 86400000)
        .slice(0, 8),
    [countryData, now]
  );

  const targetMs = useMemo(() => new Date(target).getTime(), [target]);
  const parts = diffParts(targetMs, +now);

  function addCustomEvent(e: React.FormEvent) {
    e.preventDefault();
    if (!custom) return;
    const name = customLabel.trim() || "Custom event";
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const evt: CustomEvent = { id, name, date: custom };
    setCustomEvents((list) => [...list, evt]);
    setTarget(custom);
    setLabel(name);
    setCustom("");
    setCustomLabel("");
  }

  function removeCustomEvent(id: string) {
    setCustomEvents((list) => list.filter((e) => e.id !== id));
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold tracking-tight md:text-5xl">Countdowns & Timers</h1>
        <p className="mt-3 text-muted-foreground">Track every moment until what matters next.</p>
      </div>

      <div className="mt-10 rounded-3xl border border-border bg-card p-8 text-center">
        <div className="text-sm uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="mt-6 grid grid-cols-4 gap-3 md:gap-6">
          {[
            { l: "Days", v: parts.days },
            { l: "Hours", v: parts.hours },
            { l: "Minutes", v: parts.minutes },
            { l: "Seconds", v: parts.seconds },
          ].map((u) => (
            <div key={u.l} className="rounded-2xl border border-border bg-background p-4 md:p-6">
              <div className="font-mono text-3xl font-bold tabular-nums md:text-6xl">
                {String(u.v).padStart(2, "0")}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{u.l}</div>
            </div>
          ))}
        </div>
        {parts.done && <div className="mt-6 text-primary">It's time! 🎉</div>}
      </div>

      {/* Country selector */}
      <div className="mt-10">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold">Pick a country</h2>
          <span className="text-xs text-muted-foreground">Loads public holidays as presets</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {(Object.entries(HOLIDAYS) as [CountryCode, typeof HOLIDAYS[CountryCode]][]).map(([code, c]) => (
            <button
              key={code}
              onClick={() => setCountry(code)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                country === code
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card hover:bg-accent"
              }`}
            >
              <span className="mr-1">{c.flag}</span> {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* Country presets */}
      <div className="mt-6 rounded-2xl border border-border bg-card p-5">
        <div className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">
          Upcoming holidays in {countryData.name}
        </div>
        {countryPresets.length === 0 ? (
          <p className="text-sm text-muted-foreground">No upcoming holidays for this country in our dataset.</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {countryPresets.map((p) => (
              <button
                key={p.name + p.date}
                onClick={() => { setTarget(p.date); setLabel(`${p.name} · ${countryData.name}`); }}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  target === p.date ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:bg-accent"
                }`}
              >
                {p.name}
                <span className="ml-2 text-xs opacity-70">
                  {new Date(p.date).toLocaleDateString(undefined, { day: "numeric", month: "short" })}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Global presets */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="text-xs uppercase tracking-wider text-muted-foreground">Global:</span>
        {GLOBAL_PRESETS.map((p) => (
          <button
            key={p.name}
            onClick={() => { setTarget(p.date); setLabel(p.name); }}
            className={`rounded-full border px-3 py-1.5 text-xs transition ${
              target === p.date ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:bg-accent"
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Custom event form */}
      <form
        className="mx-auto mt-8 flex max-w-xl flex-col gap-2 rounded-2xl border border-border bg-card p-5"
        onSubmit={addCustomEvent}
      >
        <div className="text-sm font-semibold">Add a custom event</div>
        <div className="flex flex-col items-stretch gap-2 sm:flex-row">
          <input
            type="text"
            placeholder="Event name (e.g. Anniversary)"
            aria-label="Custom event name"
            value={customLabel}
            onChange={(e) => setCustomLabel(e.target.value)}
            className="flex-1 rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40"
          />
          <input
            type="datetime-local"
            aria-label="Countdown target date and time"
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            className="flex-1 rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-1 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          <Plus className="h-4 w-4" /> Save & start countdown
        </button>
      </form>

      {/* Saved custom events */}
      {customEvents.length > 0 && (
        <div className="mx-auto mt-4 max-w-xl rounded-2xl border border-border bg-card p-5">
          <div className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">
            Your saved events
          </div>
          <ul className="divide-y divide-border">
            {customEvents.map((e) => {
              const d = diffParts(new Date(e.date).getTime(), +now);
              return (
                <li key={e.id} className="flex items-center justify-between gap-3 py-3">
                  <button
                    onClick={() => { setTarget(e.date); setLabel(e.name); }}
                    className="flex-1 text-left"
                  >
                    <div className="flex items-center gap-2 font-medium">
                      <Pencil className="h-3.5 w-3.5 text-muted-foreground" />
                      {e.name}
                    </div>
                    <div className="mt-0.5 text-xs text-muted-foreground">
                      {new Date(e.date).toLocaleString()} · {d.done ? "passed" : `${d.days}d ${d.hours}h ${d.minutes}m`}
                    </div>
                  </button>
                  <button
                    onClick={() => removeCustomEvent(e.id)}
                    aria-label={`Delete ${e.name}`}
                    className="rounded-full p-2 text-muted-foreground transition hover:bg-accent hover:text-foreground"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <Pomodoro />
    </div>
  );
}

function Pomodoro() {
  const [seconds, setSeconds] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    if (!running) return;
    ref.current = window.setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => { if (ref.current) clearInterval(ref.current); };
  }, [running]);

  const m = Math.floor(seconds / 60);
  const s = seconds % 60;

  return (
    <div className="mt-12 rounded-3xl border border-border bg-card p-8">
      <h2 className="font-display text-xl font-semibold">Pomodoro Timer</h2>
      <p className="mt-1 text-sm text-muted-foreground">25 minute focus sprints — pick what works.</p>
      <div className="mt-6 flex flex-col items-center">
        <div className="font-mono text-7xl font-bold tabular-nums">
          {String(m).padStart(2, "0")}:{String(s).padStart(2, "0")}
        </div>
        <div className="mt-6 flex gap-2">
          <button
            onClick={() => setRunning((r) => !r)}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            {running ? <><Pause className="h-4 w-4" /> Pause</> : <><Play className="h-4 w-4" /> Start</>}
          </button>
          <button
            onClick={() => { setRunning(false); setSeconds(25 * 60); }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2 text-sm font-medium hover:bg-accent"
          >
            <RotateCcw className="h-4 w-4" /> Reset
          </button>
        </div>
        <div className="mt-4 flex gap-2">
          {[15, 25, 45, 60].map((min) => (
            <button
              key={min}
              onClick={() => { setRunning(false); setSeconds(min * 60); }}
              className="rounded-full border border-border bg-background px-3 py-1 text-xs hover:bg-accent"
            >
              {min} min
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
