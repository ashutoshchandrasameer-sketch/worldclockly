import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, Globe2, MapPin, Share2, Sunrise, Sunset, Check } from "lucide-react";
import { useNow } from "@/hooks/use-now";
import { CITIES, getCityBySlug } from "@/lib/cities";
import { formatOffset, getOffsetMinutes, getTimeInZone } from "@/lib/timezones";
import { AnimatedGlobe } from "@/components/animated-globe";

export const Route = createFileRoute("/cities/$city")({
  loader: ({ params }) => {
    const city = getCityBySlug(params.city);
    if (!city) throw notFound();
    return { city };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.city;
    if (!c) return {};
    const title = `Time in ${c.city}, ${c.country} — Current Local Time`;
    const description = `Exact current time in ${c.city}, ${c.country}. Live clock, UTC offset, sunrise & sunset, and time zone (${c.tz}). Atomic-accurate via worldClockly.com.`;
    const url = `/cities/${c.slug}`;
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
        { name: "keywords", content: `time in ${c.city}, ${c.city} time, ${c.city} clock, ${c.country} time, ${c.tz}, current time ${c.city}` },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Place",
                name: `${c.city}, ${c.country}`,
                geo: { "@type": "GeoCoordinates", latitude: c.lat, longitude: c.lon },
                address: { "@type": "PostalAddress", addressLocality: c.city, addressCountry: c.countryCode },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "/" },
                  { "@type": "ListItem", position: 2, name: "Cities", item: "/cities" },
                  { "@type": "ListItem", position: 3, name: c.city, item: url },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: `What is the current time in ${c.city}?`,
                    acceptedAnswer: { "@type": "Answer", text: `${c.city} uses the ${c.tz} time zone. worldClockly.com displays the exact local time, synchronized with your device clock.` },
                  },
                  {
                    "@type": "Question",
                    name: `What time zone is ${c.city} in?`,
                    acceptedAnswer: { "@type": "Answer", text: `${c.city}, ${c.country} observes the ${c.tz} time zone.` },
                  },
                ],
              },
            ],
          }),
        },
      ],
    };
  },
  component: CityPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl font-bold">City not found</h1>
      <p className="mt-2 text-muted-foreground">Try one from the list below.</p>
      <Link to="/" className="mt-6 inline-block text-primary underline">Back home</Link>
    </div>
  ),
});

function sunTimes(date: Date, lat: number, lon: number, tzOffsetMin: number) {
  const rad = Math.PI / 180;
  const dayOfYear = Math.floor((+date - +new Date(date.getFullYear(), 0, 0)) / 86400000);
  const decl = 23.44 * rad * Math.sin(((360 / 365) * (dayOfYear - 81)) * rad);
  const latRad = lat * rad;
  const cosH = -Math.tan(latRad) * Math.tan(decl);
  if (cosH > 1 || cosH < -1) return { sunrise: "—", sunset: "—" };
  const H = (Math.acos(cosH) * 180) / Math.PI / 15;
  const solarNoonUTC = 12 - lon / 15;
  const fmt = (utcHours: number) => {
    const totalMin = (((utcHours + tzOffsetMin / 60) % 24) + 24) % 24 * 60;
    const h = Math.floor(totalMin / 60);
    const m = Math.floor(totalMin % 60);
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  };
  return { sunrise: fmt(solarNoonUTC - H), sunset: fmt(solarNoonUTC + H) };
}

function CityPage() {
  const { city } = Route.useLoaderData();
  const now = useNow(1000);
  const [copied, setCopied] = useState(false);

  const time = getTimeInZone(city.tz, now);
  const offset = getOffsetMinutes(city.tz, now);
  const sun = sunTimes(now, city.lat, city.lon, offset);

  const related = useMemo(
    () => CITIES.filter((c) => c.country === city.country && c.slug !== city.slug).slice(0, 6),
    [city]
  );
  const elsewhere = useMemo(
    () => CITIES.filter((c) => c.country !== city.country).slice(0, 8),
    [city]
  );

  const share = async () => {
    const url = typeof window !== "undefined" ? window.location.href : `/cities/${city.slug}`;
    const text = `It's ${time.hour}:${time.minute} in ${city.city} right now — worldClockly.com`;
    if (typeof navigator !== "undefined" && (navigator as Navigator & { share?: (d: ShareData) => Promise<void> }).share) {
      try {
        await (navigator as Navigator & { share: (d: ShareData) => Promise<void> }).share({ title: `Time in ${city.city}`, text, url });
        return;
      } catch { /* fall through to copy */ }
    }
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden />

      <section className="relative mx-auto max-w-6xl px-4 pt-10 pb-6">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-3.5 w-3.5" /> All cities
        </Link>

        <div className="mt-6 grid items-center gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {city.flag} {city.country} · {city.tz}
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Time in <span className="text-primary">{city.city}</span>
            </h1>
            <div className="mt-6 font-mono text-6xl font-bold tabular-nums clock-glow md:text-8xl">
              {time.hour}<span className="text-primary animate-pulse">:</span>{time.minute}
              <span className="text-muted-foreground">:{time.second}</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground md:text-base">
              {time.weekday}, {time.day} {time.month} {time.year} · {formatOffset(offset)}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <button
                onClick={share}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-accent"
              >
                {copied ? <Check className="h-4 w-4 text-india-green" /> : <Share2 className="h-4 w-4" />}
                {copied ? "Link copied" : "Share this clock"}
              </button>
              <Link
                to="/difference"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-accent"
              >
                <Globe2 className="h-4 w-4" /> Compare time zones
              </Link>
            </div>
          </div>

          <div className="mx-auto md:mx-0">
            <AnimatedGlobe lat={city.lat} lon={city.lon} countryCode={city.countryCode} countryName={city.country} label={`${city.city} · ${city.flag}`} size={300} />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          <Stat icon={<Globe2 className="h-4 w-4" />} label="Time zone" value={city.tz} />
          <Stat icon={<MapPin className="h-4 w-4" />} label="UTC offset" value={formatOffset(offset)} />
          <Stat icon={<Sunrise className="h-4 w-4" />} label="Sunrise" value={sun.sunrise} />
          <Stat icon={<Sunset className="h-4 w-4" />} label="Sunset" value={sun.sunset} />
        </div>
      </section>

      <section className="relative mx-auto max-w-3xl px-4 py-12">
        <h2 className="font-display text-2xl font-bold tracking-tight">About time in {city.city}</h2>
        <p className="mt-4 text-muted-foreground">
          {city.about ? `${city.about} ` : ""}{city.city} observes the <span className="font-mono text-foreground">{city.tz}</span> time zone with a current UTC offset of {formatOffset(offset)}. Located at {city.lat.toFixed(2)}°, {city.lon.toFixed(2)}°, the local clock above stays atomically synced through your device and the IANA time zone database, automatically accounting for any daylight saving transitions.
        </p>

        <div className="mt-8 space-y-3">
          {[
            { q: `What is the current time in ${city.city}?`, a: `${city.city} is in the ${city.tz} zone (${formatOffset(offset)}). The clock at the top of this page updates every second, synced with your device.` },
            { q: `Does ${city.city} observe Daylight Saving Time?`, a: `worldClockly.com uses the IANA time zone database, so any DST changes for ${city.city} are reflected automatically.` },
            { q: `How far is ${city.city} from UTC?`, a: `${city.city} is currently ${formatOffset(offset)} from Coordinated Universal Time.` },
          ].map((f) => (
            <details key={f.q} className="group rounded-xl border border-border bg-card p-4">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="relative mx-auto max-w-6xl px-4 pb-8">
          <h2 className="font-display text-xl font-bold tracking-tight">More cities in {city.country}</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
            {related.map((c) => (
              <CityCard key={c.slug} slug={c.slug} flag={c.flag} city={c.city} country={c.country} tz={c.tz} now={now} />
            ))}
          </div>
        </section>
      )}

      <section className="relative mx-auto max-w-6xl px-4 pb-16">
        <h2 className="font-display text-xl font-bold tracking-tight">Other major cities</h2>
        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
          {elsewhere.map((c) => (
            <CityCard key={c.slug} slug={c.slug} flag={c.flag} city={c.city} country={c.country} tz={c.tz} now={now} />
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

function CityCard({ slug, flag, city, country, tz, now }: { slug: string; flag: string; city: string; country: string; tz: string; now: Date }) {
  const t = getTimeInZone(tz, now);
  return (
    <Link
      to="/cities/$city"
      params={{ city: slug }}
      className="rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2">
          <span className="text-lg">{flag}</span>
          <span className="text-sm font-medium">{city}</span>
        </span>
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{country}</span>
      </div>
      <div className="mt-2 font-mono text-xl font-semibold tabular-nums">
        {t.hour}:{t.minute}
      </div>
    </Link>
  );
}
