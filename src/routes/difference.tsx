import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeftRight } from "lucide-react";
import { useNow } from "@/hooks/use-now";
import { TIMEZONES, formatOffset, getOffsetMinutes, getTimeInZone } from "@/lib/timezones";

export const Route = createFileRoute("/difference")({
  component: DifferencePage,
  head: () => ({
    meta: [
      { title: "Time Difference Calculator — WorldClockly.com" },
      { name: "description", content: "Compare time between any two cities in the world. India vs USA, India vs UK, and any timezone pair, instantly." },
      { property: "og:title", content: "Time Difference Calculator — WorldClockly.com" },
      { property: "og:description", content: "Compare time across cities worldwide in real time." },
    ],
    links: [{ rel: "canonical", href: "/difference" }],
  }),
});

function CitySelect({
  value,
  onChange,
  label,
}: {
  value: string;
  onChange: (v: string) => void;
  label: string;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-xl border border-border bg-card px-3 py-2 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/40"
      >
        {TIMEZONES.map((t) => (
          <option key={`${t.city}-${t.tz}`} value={t.tz}>
            {t.flag} {t.city}, {t.country}
          </option>
        ))}
      </select>
    </label>
  );
}

function DifferencePage() {
  const now = useNow(1000);
  const [a, setA] = useState("Asia/Kolkata");
  const [b, setB] = useState("America/New_York");

  const ta = getTimeInZone(a, now);
  const tb = getTimeInZone(b, now);
  const oa = getOffsetMinutes(a, now);
  const ob = getOffsetMinutes(b, now);
  const diff = oa - ob; // minutes

  const diffStr = useMemo(() => {
    const sign = diff >= 0 ? "ahead of" : "behind";
    const abs = Math.abs(diff);
    const h = Math.floor(abs / 60);
    const m = abs % 60;
    return `${h}h ${m}m ${sign}`;
  }, [diff]);

  const ia = TIMEZONES.find((t) => t.tz === a);
  const ib = TIMEZONES.find((t) => t.tz === b);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold tracking-tight md:text-5xl">Time Difference</h1>
        <p className="mt-3 text-muted-foreground">Compare any two cities — live, accurate, instant.</p>
      </div>

      <div className="mx-auto mt-10 grid max-w-3xl gap-4 md:grid-cols-[1fr_auto_1fr] md:items-end">
        <CitySelect value={a} onChange={setA} label="From" />
        <button
          onClick={() => { const t = a; setA(b); setB(t); }}
          aria-label="Swap"
          className="mx-auto h-10 w-10 rounded-full border border-border bg-card text-foreground transition hover:bg-accent"
        >
          <ArrowLeftRight className="mx-auto h-4 w-4" />
        </button>
        <CitySelect value={b} onChange={setB} label="To" />
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <ClockBlock flag={ia?.flag ?? ""} title={`${ia?.city}, ${ia?.country}`} time={ta} offset={oa} />
        <ClockBlock flag={ib?.flag ?? ""} title={`${ib?.city}, ${ib?.country}`} time={tb} offset={ob} />
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-card p-6 text-center">
        <p className="text-sm text-muted-foreground">
          {ia?.city} is{" "}
          <span className="font-semibold text-foreground">{diffStr}</span>{" "}
          {ib?.city}.
        </p>
      </div>
    </div>
  );
}

function ClockBlock({
  flag, title, time, offset,
}: {
  flag: string; title: string;
  time: ReturnType<typeof getTimeInZone>; offset: number;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center justify-between text-sm">
        <span className="flex items-center gap-2 font-medium"><span className="text-lg">{flag}</span>{title}</span>
        <span className="font-mono text-xs text-muted-foreground">{formatOffset(offset)}</span>
      </div>
      <div className="mt-4 font-mono text-5xl font-semibold tabular-nums">
        {time.hour}:{time.minute}<span className="text-2xl text-muted-foreground">:{time.second}</span>
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{time.weekday}, {time.day} {time.month} {time.year}</div>
    </div>
  );
}
