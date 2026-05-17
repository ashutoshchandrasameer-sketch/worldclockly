import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Play, Pause, RotateCcw, Plus } from "lucide-react";
import { useNow } from "@/hooks/use-now";

export const Route = createFileRoute("/countdown")({
  component: CountdownPage,
  head: () => ({
    meta: [
      { title: "Countdown Timers & Pomodoro — WorldClockly.com" },
      { name: "description", content: "Countdown to any event, exam, IPL match or world cup. Built-in Pomodoro focus timer." },
      { property: "og:title", content: "Countdowns & Pomodoro — Hourly.in" },
      { property: "og:description", content: "Live countdowns and a beautiful Pomodoro timer." },
    ],
    links: [{ rel: "canonical", href: "/countdown" }],
  }),
});

const PRESETS = [
  { name: "New Year 2027", date: "2027-01-01T00:00:00+05:30" },
  { name: "Diwali 2026", date: "2026-11-08T18:30:00+05:30" },
  { name: "Independence Day 2026", date: "2026-08-15T00:00:00+05:30" },
  { name: "Republic Day 2027", date: "2027-01-26T00:00:00+05:30" },
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

function CountdownPage() {
  const now = useNow(1000);
  const [target, setTarget] = useState(PRESETS[0].date);
  const [label, setLabel] = useState(PRESETS[0].name);
  const [custom, setCustom] = useState("");
  const [customLabel, setCustomLabel] = useState("");

  const targetMs = useMemo(() => new Date(target).getTime(), [target]);
  const parts = diffParts(targetMs, +now);

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

      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
        {PRESETS.map((p) => (
          <button
            key={p.name}
            onClick={() => { setTarget(p.date); setLabel(p.name); }}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              target === p.date ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:bg-accent"
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      <form
        className="mx-auto mt-6 flex max-w-xl flex-col gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (!custom) return;
          setTarget(custom);
          setLabel(customLabel.trim() || "Custom event");
        }}
      >
        <div className="flex flex-col items-stretch gap-2 sm:flex-row">
          <input
            type="text"
            placeholder="Event name (optional)"
            aria-label="Custom event name"
            value={customLabel}
            onChange={(e) => setCustomLabel(e.target.value)}
            className="flex-1 rounded-xl border border-border bg-card px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40"
          />
          <input
            type="datetime-local"
            aria-label="Countdown target date and time"
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            className="flex-1 rounded-xl border border-border bg-card px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-1 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          <Plus className="h-4 w-4" /> Set countdown
        </button>
      </form>

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
