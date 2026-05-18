import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useNow } from "@/hooks/use-now";
import { HOLIDAYS } from "@/lib/holidays";

export const Route = createFileRoute("/holidays")({
  component: HolidaysPage,
  head: () => ({
    meta: [
      { title: "Public Holidays 2026 — worldClockly.com" },
      { name: "description", content: "Complete list of public, religious and festival holidays for India and major countries — auto-updated, with live countdowns." },
      { property: "og:title", content: "Public Holidays — worldClockly.com" },
      { property: "og:description", content: "All holidays for the year, with countdowns." },
    ],
    links: [{ rel: "canonical", href: "/holidays" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Public Holidays",
          description: "Public, religious and festival holidays for India and major countries.",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: Object.values(HOLIDAYS).flatMap((c) =>
              c.holidays.map((h, i) => ({
                "@type": "ListItem",
                position: i + 1,
                item: {
                  "@type": "Event",
                  name: `${h.name} (${c.name})`,
                  startDate: h.date,
                  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
                  eventStatus: "https://schema.org/EventScheduled",
                  location: { "@type": "Country", name: c.name },
                },
              }))
            ),
          },
        }),
      },
    ],
  }),
});

function daysUntil(iso: string, now: Date) {
  const t = new Date(iso + "T00:00:00").getTime();
  return Math.ceil((t - +now) / 86400000);
}

type HolidayType = "all" | "national" | "religious" | "festival" | "observance";

function HolidaysPage() {
  const now = useNow(60000);
  const [country, setCountry] = useState<keyof typeof HOLIDAYS>("IN");
  const [type, setType] = useState<HolidayType>("all");
  const [query, setQuery] = useState("");
  const [showPast, setShowPast] = useState(false);
  const data = HOLIDAYS[country];

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return [...data.holidays]
      .sort((a, b) => +new Date(a.date) - +new Date(b.date))
      .filter((h) => (type === "all" ? true : h.type === type))
      .filter((h) => (q ? h.name.toLowerCase().includes(q) : true))
      .filter((h) => (showPast ? true : daysUntil(h.date, now) >= 0));
  }, [data, type, query, showPast, now]);

  const upcoming = useMemo(
    () =>
      [...data.holidays]
        .sort((a, b) => +new Date(a.date) - +new Date(b.date))
        .find((h) => daysUntil(h.date, now) >= 0),
    [data, now]
  );

  const counts = useMemo(() => {
    const c: Record<HolidayType, number> = { all: 0, national: 0, religious: 0, festival: 0, observance: 0 };
    data.holidays.forEach((h) => { c.all++; c[h.type]++; });
    return c;
  }, [data]);

  const TYPES: { key: HolidayType; label: string }[] = [
    { key: "all", label: "All" },
    { key: "national", label: "National" },
    { key: "religious", label: "Religious" },
    { key: "festival", label: "Festival" },
    { key: "observance", label: "Observance" },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold tracking-tight md:text-5xl">Public Holidays</h1>
        <p className="mt-3 text-muted-foreground">Pick a country to see all holidays for the year, with live countdowns.</p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {Object.entries(HOLIDAYS).map(([code, c]) => (
          <button
            key={code}
            onClick={() => setCountry(code as keyof typeof HOLIDAYS)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              country === code ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:bg-accent"
            }`}
          >
            <span className="mr-1">{c.flag}</span> {c.name}
          </button>
        ))}
      </div>

      {upcoming && (
        <div className="mt-8 rounded-2xl border border-primary/40 bg-primary/5 p-5">
          <div className="text-xs uppercase tracking-wider text-primary">Next holiday in {data.name}</div>
          <div className="mt-1 flex items-center justify-between">
            <div>
              <div className="font-display text-xl font-semibold">{upcoming.name}</div>
              <div className="text-sm text-muted-foreground">{new Date(upcoming.date).toDateString()}</div>
            </div>
            <div className="font-mono text-3xl font-bold tabular-nums">
              {daysUntil(upcoming.date, now)}d
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          type="search"
          placeholder="Search holidays…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search holidays"
          className="w-full flex-1 rounded-xl border border-border bg-card px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40"
        />
        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          <input
            type="checkbox"
            checked={showPast}
            onChange={(e) => setShowPast(e.target.checked)}
            className="h-4 w-4 rounded border-border"
          />
          Show past
        </label>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {TYPES.map((t) => (
          <button
            key={t.key}
            onClick={() => setType(t.key)}
            className={`rounded-full border px-3 py-1.5 text-xs transition ${
              type === t.key ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:bg-accent"
            }`}
          >
            {t.label} <span className="opacity-60">({counts[t.key]})</span>
          </button>
        ))}
      </div>

      <ul className="mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
        {list.length === 0 && (
          <li className="px-5 py-8 text-center text-sm text-muted-foreground">
            No holidays match your filters.
          </li>
        )}
        {list.map((h) => {
          const d = daysUntil(h.date, now);
          const past = d < 0;
          return (
            <li key={h.date + h.name} className={`flex items-center justify-between px-5 py-4 ${past ? "opacity-50" : ""}`}>
              <div>
                <div className="font-medium">{h.name}</div>
                <div className="text-xs text-muted-foreground">
                  {new Date(h.date).toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long", year: "numeric" })} · <span className="capitalize">{h.type}</span>
                </div>
              </div>
              <div className="font-mono text-sm text-muted-foreground">
                {past ? "passed" : d === 0 ? "today" : `${d}d`}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
