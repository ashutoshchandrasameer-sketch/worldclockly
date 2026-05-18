import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo } from "react";
import { ArrowLeft, Globe2, MapPin, Clock } from "lucide-react";
import { useNow } from "@/hooks/use-now";
import { COUNTRIES, getCountryBySlug, getCitiesInCountry, getUniqueTimezonesInCountry } from "@/lib/countries";
import { formatOffset, getOffsetMinutes, getTimeInZone } from "@/lib/timezones";
import { HOLIDAYS } from "@/lib/holidays";

export const Route = createFileRoute("/countries/$country")({
  loader: ({ params }) => {
    const country = getCountryBySlug(params.country);
    if (!country) throw notFound();
    return { country };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.country;
    if (!c) return {};
    const title = `Current Local Time in ${c.name} — Time Zones & Cities`;
    const description = `Live local time in ${c.name}. ${c.about ?? ""} See current time across all ${c.name} time zones, major cities, UTC offset and public holidays on worldClockly.com.`.trim();
    const url = `/countries/${c.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "keywords", content: `time in ${c.name}, current time ${c.name}, local time ${c.name}, ${c.name} time zone, ${c.name} clock, what time is it in ${c.name}` },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Country",
                name: c.name,
                identifier: c.code,
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "/" },
                  { "@type": "ListItem", position: 2, name: "Countries", item: "/countries" },
                  { "@type": "ListItem", position: 3, name: c.name, item: url },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: `What is the current time in ${c.name}?`,
                    acceptedAnswer: { "@type": "Answer", text: `${c.name} primarily uses the ${c.primaryTz} time zone. The live clock on this page is synchronized with your device and updates every second.` },
                  },
                  {
                    "@type": "Question",
                    name: `What time zone is ${c.name} in?`,
                    acceptedAnswer: { "@type": "Answer", text: `${c.name}'s primary time zone is ${c.primaryTz}. ${c.about ?? ""}` },
                  },
                  {
                    "@type": "Question",
                    name: `Does ${c.name} observe daylight saving time?`,
                    acceptedAnswer: { "@type": "Answer", text: `worldClockly.com uses the IANA time zone database, so any DST transitions for ${c.name} are reflected automatically in the clocks above.` },
                  },
                ],
              },
            ],
          }),
        },
      ],
    };
  },
  component: CountryPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl font-bold">Country not found</h1>
      <Link to="/" className="mt-6 inline-block text-primary underline">Back home</Link>
    </div>
  ),
});

function CountryPage() {
  const { country } = Route.useLoaderData();
  const now = useNow(1000);

  const time = getTimeInZone(country.primaryTz, now);
  const offset = getOffsetMinutes(country.primaryTz, now);
  const cities = useMemo(() => getCitiesInCountry(country.code), [country.code]);
  const timezones = useMemo(() => getUniqueTimezonesInCountry(country.code), [country.code]);
  const holidays = HOLIDAYS[country.code]?.holidays ?? [];
  const otherCountries = useMemo(() => COUNTRIES.filter((c) => c.slug !== country.slug).slice(0, 8), [country.slug]);

  return (
    <div className="relative">
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden />

      <section className="relative mx-auto max-w-6xl px-4 pt-10 pb-6">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-3.5 w-3.5" /> Home
        </Link>

        <div className="mt-6">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {country.flag} {country.code} · {country.primaryTz}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Current local time in <span className="text-primary">{country.name}</span>
          </h1>
          <div className="mt-6 font-mono text-6xl font-bold tabular-nums clock-glow md:text-8xl">
            {time.hour}<span className="text-primary animate-pulse">:</span>{time.minute}
            <span className="text-muted-foreground">:{time.second}</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            {time.weekday}, {time.day} {time.month} {time.year} · {formatOffset(offset)} · {country.primaryTz}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          <Stat icon={<Globe2 className="h-4 w-4" />} label="Primary time zone" value={country.primaryTz} />
          <Stat icon={<MapPin className="h-4 w-4" />} label="UTC offset" value={formatOffset(offset)} />
          <Stat icon={<Clock className="h-4 w-4" />} label="Time zones" value={String(timezones.length || 1)} />
          <Stat icon={<MapPin className="h-4 w-4" />} label="Cities tracked" value={String(cities.length)} />
        </div>
      </section>

      <section className="relative mx-auto max-w-3xl px-4 py-10">
        <h2 className="font-display text-2xl font-bold tracking-tight">About time in {country.name}</h2>
        <p className="mt-4 text-muted-foreground">
          {country.about} The clock above uses the IANA time zone database via your device, so daylight-saving transitions for {country.name} apply automatically. {country.name}'s primary zone is <span className="font-mono text-foreground">{country.primaryTz}</span>, currently {formatOffset(offset)} from UTC.
        </p>
      </section>

      {timezones.length > 1 && (
        <section className="relative mx-auto max-w-6xl px-4 pb-10">
          <h2 className="font-display text-xl font-bold tracking-tight">Time zones in {country.name}</h2>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {timezones.map((tz) => {
              const t = getTimeInZone(tz, now);
              const off = getOffsetMinutes(tz, now);
              return (
                <div key={tz} className="rounded-2xl border border-border bg-card p-4">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{tz}</div>
                  <div className="mt-2 font-mono text-2xl font-semibold tabular-nums">{t.hour}:{t.minute}:{t.second}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{formatOffset(off)}</div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {cities.length > 0 && (
        <section className="relative mx-auto max-w-6xl px-4 pb-10">
          <h2 className="font-display text-xl font-bold tracking-tight">Major cities in {country.name}</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {cities.map((c) => {
              const t = getTimeInZone(c.tz, now);
              return (
                <Link
                  key={c.slug}
                  to="/cities/$city"
                  params={{ city: c.slug }}
                  className="rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{c.city}</span>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{c.tz.split("/")[1]?.replace(/_/g, " ")}</span>
                  </div>
                  <div className="mt-2 font-mono text-xl font-semibold tabular-nums">{t.hour}:{t.minute}</div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {holidays.length > 0 && (
        <section className="relative mx-auto max-w-3xl px-4 pb-10">
          <h2 className="font-display text-xl font-bold tracking-tight">Public holidays in {country.name}</h2>
          <ul className="mt-4 divide-y divide-border rounded-2xl border border-border bg-card">
            {holidays.slice(0, 12).map((h) => (
              <li key={h.date + h.name} className="flex items-center justify-between p-3 text-sm">
                <span className="font-medium">{h.name}</span>
                <span className="font-mono text-muted-foreground">{h.date}</span>
              </li>
            ))}
          </ul>
          <Link to="/holidays" className="mt-3 inline-block text-sm text-primary hover:underline">All holidays →</Link>
        </section>
      )}

      <section className="relative mx-auto max-w-3xl px-4 pb-10">
        <h2 className="font-display text-xl font-bold tracking-tight">FAQ</h2>
        <div className="mt-4 space-y-3">
          {[
            { q: `What is the current time in ${country.name}?`, a: `${country.name} primarily uses the ${country.primaryTz} zone (${formatOffset(offset)}). The clock above updates every second, synced with your device.` },
            { q: `What time zone is ${country.name} in?`, a: `${country.name}'s primary IANA time zone is ${country.primaryTz}. ${country.about ?? ""}` },
            { q: `Does ${country.name} observe daylight saving?`, a: `worldClockly.com uses the IANA time zone database, so any DST changes for ${country.name} are reflected automatically.` },
          ].map((f) => (
            <details key={f.q} className="group rounded-xl border border-border bg-card p-4">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 pb-16">
        <h2 className="font-display text-xl font-bold tracking-tight">Other countries</h2>
        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
          {otherCountries.map((c) => (
            <Link
              key={c.slug}
              to="/countries/$country"
              params={{ country: c.slug }}
              className="rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{c.flag}</span>
                <span className="text-sm font-medium">{c.name}</span>
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">{c.primaryTz}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
        {icon} {label}
      </div>
      <div className="mt-2 truncate font-mono text-sm font-medium">{value}</div>
    </div>
  );
}
