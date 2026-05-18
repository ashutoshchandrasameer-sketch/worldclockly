import { Link } from "@tanstack/react-router";
import { Moon, Sun, Clock3 } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

export function SiteHeader() {
  const { theme, toggle } = useTheme();
  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-display font-bold tracking-tight">
          <Clock3 className="h-5 w-5 text-primary" />
          <span className="text-lg">worldClockly<span className="text-primary">.com</span></span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition-colors">Clock</Link>
          <Link to="/difference" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition-colors">Time Difference</Link>
          <Link to="/countdown" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition-colors">Countdown</Link>
          <Link to="/holidays" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition-colors">Holidays</Link>
        </nav>
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="rounded-full border border-border bg-card p-2 text-foreground transition-colors hover:bg-accent"
        >
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/50">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted-foreground">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2 font-display font-bold text-foreground">
              <Clock3 className="h-4 w-4 text-primary" />
              worldClockly<span className="text-primary">.com</span>
            </div>
            <p className="mt-2 max-w-md">Global time platform. Atomic-accurate clocks, world time, holidays and countdowns.</p>
          </div>
          <div className="flex flex-wrap gap-6">
            <Link to="/" className="hover:text-foreground">Clock</Link>
            <Link to="/difference" className="hover:text-foreground">Difference</Link>
            <Link to="/countdown" className="hover:text-foreground">Countdown</Link>
            <Link to="/holidays" className="hover:text-foreground">Holidays</Link>
          </div>
        </div>
        <div className="mt-8 border-t border-border/50 pt-6 text-xs">© {new Date().getFullYear()} worldClockly.com — Precision time for India and the world.</div>
      </div>
    </footer>
  );
}
