import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useNow } from "@/hooks/use-now";
import { HOLIDAYS } from "@/lib/holidays";

export const Route = createFileRoute("/holidays")({
  component: HolidaysPage,
  head: () => ({
    meta: [
      { title: "Public Holidays 2026 — WorldClockly.com" },
      { name: "description", content: "Complete list of public, religious and festival holidays for India and major countries — auto-updated, with live countdowns." },
      { property: "og:title", content: "Public Holidays — WorldClockly.com" },
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

function HolidaysPage() {
  const now = useNow(60000);
  const [country, setCountry] = useState<keyof typeof HOLIDAYS>("IN");
  const data = HOLIDAYS[country];
  const list = useMemo(
    () => [...data.holidays].sort((a, b) => +new Date(a.date) - +new Date(b.date)),
    [data]
  );
  const upcoming = list.find((h) => daysUntil(h.date, now) >= 0);

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
          <div className="text-xs uppercase tracking-wider text-primary">Next holiday</div>
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

      <ul className="mt-8 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
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
