import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, MapPin, Sunrise, Sunset, Globe2 } from "lucide-react";
import { useNow } from "@/hooks/use-now";
import { TIMEZONES, formatOffset, getOffsetMinutes, getTimeInZone } from "@/lib/timezones";
import { CITIES, slugifyCity } from "@/lib/cities";
import { AnimatedGlobe } from "@/components/animated-globe";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "WorldClockly - Current Local Time Worldwide" },
      { name: "description", content: "Atomic-accurate Current Local Time, world clocks, time zones, sunrise/sunset and countdowns. India's most trusted time utility." },
      { property: "og:title", content: "WorldClockly — Exact Time Now" },
      { property: "og:description", content: "Live IST clock, world time, holidays and countdowns. Fast. Free. Accurate." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "WorldClockly.com",
          url: "https://worldclockly.com/",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://worldclockly.com/?q={query}",
            "query-input": "required name=query",
          },
        }),
      },
    ],
  }),
});

function greeting(hour: number) {
  if (hour < 5) return "Good night";
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  if (hour < 21) return "Good evening";
  return "Good night";
}

// Approx sunrise/sunset using NOAA-ish formula simplified for IST/India default lat/lon
function sunTimes(date: Date, lat = 28.6139, lon = 77.209) {
  const rad = Math.PI / 180;
  const dayOfYear = Math.floor((+date - +new Date(date.getFullYear(), 0, 0)) / 86400000);
  const decl = 23.44 * rad * Math.sin(((360 / 365) * (dayOfYear - 81)) * rad);
  const latRad = lat * rad;
  const cosH = -Math.tan(latRad) * Math.tan(decl);
  if (cosH > 1 || cosH < -1) return { sunrise: "—", sunset: "—" };
  const H = (Math.acos(cosH) * 180) / Math.PI / 15;
  const solarNoonUTC = 12 - lon / 15;
  const sunriseUTC = solarNoonUTC - H;
  const sunsetUTC = solarNoonUTC + H;
  const fmt = (utcHours: number) => {
    const totalMin = ((utcHours + 5.5) % 24) * 60; // IST
    const h = Math.floor(totalMin / 60);
    const m = Math.floor(totalMin % 60);
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  };
  return { sunrise: fmt(sunriseUTC), sunset: fmt(sunsetUTC) };
}

function Home() {
  const now = useNow(1000);
  const [selectedTz, setSelectedTz] = useState("Asia/Kolkata");
  const [query, setQuery] = useState("");

  const localTz = useMemo(
    () => (typeof Intl !== "undefined" ? Intl.DateTimeFormat().resolvedOptions().timeZone : "Asia/Kolkata"),
    []
  );

  const main = getTimeInZone(selectedTz, now);
  const offset = getOffsetMinutes(selectedTz, now);
  const selectedInfo = TIMEZONES.find((t) => t.tz === selectedTz);
  const sun = sunTimes(now);
  const greet = greeting(parseInt(main.hour, 10));

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return TIMEZONES.filter(
      (t) =>
        t.city.toLowerCase().includes(q) ||
        t.country.toLowerCase().includes(q) ||
        t.tz.toLowerCase().includes(q)
    ).slice(0, 8);
  }, [query]);

  const featured = ["Asia/Kolkata", "America/New_York", "Europe/London", "Asia/Dubai", "Asia/Tokyo", "Australia/Sydney"];

  const selectedCity = useMemo(() => {
    const info = TIMEZONES.find((t) => t.tz === selectedTz);
    if (!info) return CITIES[0];
    return CITIES.find((c) => c.city === info.city) ?? CITIES.find((c) => c.tz === info.tz) ?? CITIES[0];
  }, [selectedTz]);

  return (
    <div className="relative">
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden />

      <section className="relative mx-auto max-w-6xl px-4 pt-12 pb-8 md:pt-16">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div className="text-center md:text-left">
            <h1 className="sr-only">Indian Standard Time & World Clock — Exact Time Now</h1>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {greet} • {selectedInfo?.flag} {selectedInfo?.city ?? selectedTz}
            </p>
            <div
              role="timer"
              aria-live="polite"
              aria-label={`Current time in ${selectedInfo?.city ?? selectedTz}`}
              className="mt-6 font-display text-6xl font-bold tracking-tighter tabular-nums clock-glow md:text-[9rem] md:leading-[0.95]"
            >
              <span className="font-mono">{main.hour}</span>
              <span className="text-primary animate-pulse">:</span>
              <span className="font-mono">{main.minute}</span>
              <span className="text-muted-foreground">:</span>
              <span className="font-mono text-muted-foreground">{main.second}</span>
            </div>
            <p className="mt-6 text-base text-muted-foreground md:text-lg">
              {main.weekday}, {main.day} {main.month} {main.year} · {formatOffset(offset)}
            </p>
            <div className="mt-4">
              <Link
                to="/cities/$city"
                params={{ city: selectedCity.slug }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-accent"
              >
                <Globe2 className="h-4 w-4" /> Open {selectedCity.city} page
              </Link>
            </div>
          </div>

          <div className="mx-auto md:mx-0">
            <AnimatedGlobe lat={selectedCity.lat} lon={selectedCity.lon} countryCode={selectedCity.countryCode} countryName={selectedCity.country} label={`${selectedCity.city} · ${selectedCity.flag}`} size={260} />
          </div>
        </div>

        {/* Search */}
        <div className="relative mx-auto mt-10 max-w-xl">
          <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-3 shadow-sm transition-shadow focus-within:shadow-md">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search any city or country…"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              aria-label="Search city or country"
            />
          </div>
          {results.length > 0 && (
            <div className="absolute left-0 right-0 z-10 mt-2 overflow-hidden rounded-2xl border border-border bg-popover shadow-lg">
              {results.map((r) => {
                const slug = CITIES.find((c) => c.city === r.city)?.slug ?? slugifyCity(r.city);
                return (
                  <button
                    key={`${r.city}-${r.tz}`}
                    onClick={() => {
                      setSelectedTz(r.tz);
                      setQuery("");
                    }}
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-sm hover:bg-accent"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-lg">{r.flag}</span>
                      <span>
                        <span className="font-medium">{r.city}</span>
                        <span className="ml-2 text-muted-foreground">{r.country}</span>
                      </span>
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">{r.tz}</span>
                  </button>
                );
              })}
            </div>
          )}
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Your device timezone: <span className="font-mono text-foreground">{localTz}</span>
          </p>
        </div>

        {/* Info cards */}
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
          <InfoCard icon={<Globe2 className="h-4 w-4" />} label="Timezone" value={selectedTz} />
          <InfoCard icon={<MapPin className="h-4 w-4" />} label="UTC Offset" value={formatOffset(offset)} />
          <InfoCard icon={<Sunrise className="h-4 w-4" />} label="Sunrise (IST)" value={sun.sunrise} />
          <InfoCard icon={<Sunset className="h-4 w-4" />} label="Sunset (IST)" value={sun.sunset} />
        </div>
      </section>

      {/* World clocks */}
      <section className="relative mx-auto max-w-6xl px-4 py-12">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">World Clocks</h2>
            <p className="mt-1 text-sm text-muted-foreground">Live time across major cities. Tap to set as primary.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {featured.map((tz) => {
            const info = TIMEZONES.find((t) => t.tz === tz);
            const time = getTimeInZone(tz, now);
            const off = getOffsetMinutes(tz, now);
            const isActive = tz === selectedTz;
            return (
              <button
                key={tz}
                onClick={() => setSelectedTz(tz)}
                className={`group relative overflow-hidden rounded-2xl border bg-card p-5 text-left transition-all hover:-translate-y-0.5 hover:shadow-lg ${
                  isActive ? "border-primary ring-1 ring-primary/40" : "border-border"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{info?.flag}</span>
                    <div>
                      <div className="font-medium">{info?.city}</div>
                      <div className="text-xs text-muted-foreground">{info?.country}</div>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {formatOffset(off)}
                  </span>
                </div>
                <div className="mt-4 font-mono text-3xl font-semibold tabular-nums">
                  {time.hour}:{time.minute}
                  <span className="text-base text-muted-foreground">:{time.second}</span>
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{time.weekday}, {time.day} {time.month}</div>
              </button>
            );
          })}
        </div>
      </section>

    </div>
  );
}

function InfoCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
        {icon} {label}
      </div>
      <div className="mt-2 truncate font-mono text-sm font-medium">{value}</div>
    </div>
  );
}
