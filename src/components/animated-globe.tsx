import { useEffect, useMemo, useRef, useState } from "react";
import { geoOrthographic, geoPath, geoGraticule10, geoCircle } from "d3-geo";
import { feature } from "topojson-client";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import type { Topology } from "topojson-specification";
import worldTopo from "world-atlas/countries-110m.json";

interface AnimatedGlobeProps {
  lat: number;
  lon: number;
  /** ISO-2 country code (e.g. "IN", "US") used to highlight the selected country */
  countryCode?: string;
  /** Country name from data, used as fallback match against the world atlas */
  countryName?: string;
  label?: string;
  size?: number;
}

// ISO-2 → name in Natural Earth / world-atlas data
const NAME_BY_ISO2: Record<string, string> = {
  IN: "India",
  US: "United States of America",
  GB: "United Kingdom",
  FR: "France",
  DE: "Germany",
  AE: "United Arab Emirates",
  SG: "Singapore",
  JP: "Japan",
  CN: "China",
  HK: "Hong Kong S.A.R.",
  AU: "Australia",
  CA: "Canada",
  BR: "Brazil",
  MX: "Mexico",
  RU: "Russia",
  TR: "Turkey",
  EG: "Egypt",
  ZA: "South Africa",
  PK: "Pakistan",
  BD: "Bangladesh",
  TH: "Thailand",
  KR: "South Korea",
  NZ: "New Zealand",
  SA: "Saudi Arabia",
};

interface CountryProps {
  name: string;
}

const topo = worldTopo as unknown as Topology;
const countriesFC = feature(topo, topo.objects.countries) as unknown as FeatureCollection<
  Geometry,
  CountryProps
>;
const ALL_COUNTRIES: Feature<Geometry, CountryProps>[] = countriesFC.features;

export function AnimatedGlobe({
  lat,
  lon,
  countryCode,
  countryName,
  label,
  size = 280,
}: AnimatedGlobeProps) {
  const [rotation, setRotation] = useState<[number, number]>([-lon, -lat * 0.35]);
  const raf = useRef<number | null>(null);
  const last = useRef<number>(0);
  const target = useRef<[number, number]>([-lon, -lat * 0.35]);

  // When city changes, set new target rotation; animate towards it.
  useEffect(() => {
    target.current = [-lon, -lat * 0.35];
  }, [lat, lon]);

  useEffect(() => {
    last.current = performance.now();
    const tick = (t: number) => {
      const dt = (t - last.current) / 1000;
      last.current = t;
      setRotation((r) => {
        const [tλ, tφ] = target.current;
        // ease towards target, plus subtle constant rotation around Y
        const lerp = Math.min(1, dt * 2.4);
        const nλ = r[0] + (tλ - r[0]) * lerp + dt * 4; // 4°/s drift
        const nφ = r[1] + (tφ - r[1]) * lerp;
        // keep target moving with the same drift so we never "catch up" and freeze
        target.current = [tλ + dt * 4, tφ];
        return [nλ, nφ];
      });
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  const projection = useMemo(
    () =>
      geoOrthographic()
        .scale(size / 2 - 4)
        .translate([size / 2, size / 2])
        .rotate([rotation[0], rotation[1], 0])
        .clipAngle(90),
    [rotation, size]
  );
  const path = useMemo(() => geoPath(projection), [projection]);

  const matchName = countryCode ? NAME_BY_ISO2[countryCode] ?? countryName : countryName;
  const selectedFeature = useMemo(
    () => (matchName ? ALL_COUNTRIES.find((f) => f.properties.name === matchName) : undefined),
    [matchName]
  );

  const graticule = useMemo(() => path(geoGraticule10()), [path]);
  const sphereD = `M ${size / 2 - (size / 2 - 4)} ${size / 2} a ${size / 2 - 4} ${size / 2 - 4} 0 1 0 ${size - 8} 0 a ${size / 2 - 4} ${size / 2 - 4} 0 1 0 -${size - 8} 0`;

  // marker projected; only render when on visible hemisphere
  const markerXY = projection([lon, lat]);
  const markerHaloD = useMemo(() => {
    const c = geoCircle().center([lon, lat]).radius(4)();
    return path(c);
  }, [path, lat, lon]);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} aria-hidden className="overflow-visible">
        <defs>
          <radialGradient id="globe-fill" cx="35%" cy="35%" r="75%">
            <stop offset="0%" stopColor="color-mix(in oklab, var(--primary) 30%, transparent)" />
            <stop offset="60%" stopColor="color-mix(in oklab, var(--primary) 10%, transparent)" />
            <stop offset="100%" stopColor="color-mix(in oklab, var(--primary) 4%, transparent)" />
          </radialGradient>
          <radialGradient id="globe-glow" cx="50%" cy="50%" r="50%">
            <stop offset="80%" stopColor="color-mix(in oklab, var(--primary) 0%, transparent)" />
            <stop offset="100%" stopColor="color-mix(in oklab, var(--primary) 28%, transparent)" />
          </radialGradient>
        </defs>

        {/* atmosphere glow */}
        <circle cx={size / 2} cy={size / 2} r={size / 2 - 4 + 6} fill="url(#globe-glow)" />
        {/* sphere */}
        <path
          d={sphereD}
          fill="url(#globe-fill)"
          stroke="color-mix(in oklab, var(--primary) 55%, transparent)"
          strokeWidth={1}
        />

        {/* graticule */}
        {graticule && (
          <path
            d={graticule}
            fill="none"
            stroke="color-mix(in oklab, var(--foreground) 14%, transparent)"
            strokeWidth={0.5}
          />
        )}

        {/* all countries */}
        <g
          fill="color-mix(in oklab, var(--foreground) 18%, transparent)"
          stroke="color-mix(in oklab, var(--background) 70%, transparent)"
          strokeWidth={0.4}
        >
          {ALL_COUNTRIES.map((f, i) => {
            const d = path(f);
            if (!d) return null;
            return <path key={i} d={d} />;
          })}
        </g>

        {/* highlighted country */}
        {selectedFeature &&
          (() => {
            const d = path(selectedFeature);
            if (!d) return null;
            return (
              <path
                d={d}
                fill="color-mix(in oklab, var(--saffron) 75%, transparent)"
                stroke="var(--saffron)"
                strokeWidth={0.8}
              />
            );
          })()}

        {/* marker halo (on-sphere ring) */}
        {markerHaloD && (
          <path
            d={markerHaloD}
            fill="none"
            stroke="color-mix(in oklab, var(--saffron) 90%, transparent)"
            strokeWidth={1.2}
          />
        )}

        {/* marker pin */}
        {markerXY && (
          <g>
            <circle cx={markerXY[0]} cy={markerXY[1]} r={9} fill="color-mix(in oklab, var(--saffron) 45%, transparent)">
              <animate attributeName="r" values="5;13;5" dur="2.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0;0.8" dur="2.2s" repeatCount="indefinite" />
            </circle>
            <circle
              cx={markerXY[0]}
              cy={markerXY[1]}
              r={3.5}
              fill="var(--saffron)"
              stroke="var(--background)"
              strokeWidth={1.2}
            />
          </g>
        )}
      </svg>
      {label && (
        <div className="pointer-events-none absolute inset-x-0 bottom-2 text-center text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          {label}
        </div>
      )}
    </div>
  );
}
