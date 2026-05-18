import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeftRight } from "lucide-react";
import { useNow } from "@/hooks/use-now";
import { TIMEZONES, formatOffset, getOffsetMinutes, getTimeInZone } from "@/lib/timezones";

export const Route = createFileRoute("/difference")({
  component: DifferencePage,
  head: () => ({
    meta: [
      { title: "Time Difference Calculator — worldClockly.com" },
      { name: "description", content: "Compare time between any two cities in the world. India vs USA, India vs UK, and any timezone pair, instantly." },
      { property: "og:title", content: "Time Difference Calculator — worldClockly.com" },
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

      <MeetingPlanner aTz={a} bTz={b} aCity={ia?.city ?? ""} bCity={ib?.city ?? ""} now={now} />

      <div className="mt-8 rounded-2xl border border-border bg-card p-6">
        <h2 className="font-display text-lg font-semibold">Quick conversions</h2>
        <ul className="mt-3 grid gap-1 text-sm text-muted-foreground sm:grid-cols-2">
          {[9, 12, 15, 18, 21].map((h) => {
            const refDate = new Date(now);
            refDate.setHours(h, 0, 0, 0);
            const converted = getTimeInZone(b, refDate);
            return (
              <li key={h} className="rounded-lg border border-border bg-background px-3 py-2">
                <span className="font-mono">{String(h).padStart(2, "0")}:00</span> in {ia?.city} →{" "}
                <span className="font-mono text-foreground">{converted.hour}:{converted.minute}</span> in {ib?.city}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function MeetingPlanner({
  aTz, bTz, aCity, bCity, now,
}: {
  aTz: string; bTz: string; aCity: string; bCity: string; now: Date;
}) {
  const hours = useMemo(() => {
    const out: { aHour: number; bHour: number; bDay: string; aBusiness: boolean; bBusiness: boolean }[] = [];
    const base = new Date(now);
    base.setMinutes(0, 0, 0);
    for (let i = 0; i < 24; i++) {
      const d = new Date(base.getTime() + i * 3600_000);
      const a = getTimeInZone(aTz, d);
      const b = getTimeInZone(bTz, d);
      const aH = parseInt(a.hour, 10);
      const bH = parseInt(b.hour, 10);
      out.push({
        aHour: aH,
        bHour: bH,
        bDay: b.weekday.slice(0, 3),
        aBusiness: aH >= 9 && aH < 18,
        bBusiness: bH >= 9 && bH < 18,
      });
    }
    return out;
  }, [aTz, bTz, now]);

  return (
    <div className="mt-8 rounded-2xl border border-border bg-card p-6">
      <h2 className="font-display text-lg font-semibold">Meeting planner — next 24h</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Green cells are business hours (09:00–18:00) in both cities.
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[640px] text-sm">
          <thead>
            <tr className="text-xs uppercase tracking-wider text-muted-foreground">
              <th className="py-2 text-left font-medium">{aCity}</th>
              <th className="py-2 text-left font-medium">{bCity}</th>
              <th className="py-2 text-left font-medium">Overlap</th>
            </tr>
          </thead>
          <tbody>
            {hours.map((h, i) => {
              const both = h.aBusiness && h.bBusiness;
              return (
                <tr key={i} className="border-t border-border">
                  <td className="py-1.5 font-mono">{String(h.aHour).padStart(2, "0")}:00</td>
                  <td className="py-1.5 font-mono">
                    {String(h.bHour).padStart(2, "0")}:00
                    <span className="ml-2 text-xs text-muted-foreground">{h.bDay}</span>
                  </td>
                  <td className="py-1.5">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs ${
                        both
                          ? "bg-primary/15 text-primary"
                          : h.aBusiness || h.bBusiness
                          ? "bg-muted text-muted-foreground"
                          : "bg-background text-muted-foreground/60"
                      }`}
                    >
                      {both ? "✓ both working" : h.aBusiness ? `${aCity} only` : h.bBusiness ? `${bCity} only` : "off-hours"}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
