import { siteConfig } from "@/lib/site-config";

export const siteNavLinks = [
  { label: "Excursions", href: "/excursions" },
  { label: "Port Guide", href: "/skjolden-port-guide" },
  { label: "One Day", href: "/one-day-in-skjolden" },
  { label: "Worth Visiting?", href: "/is-skjolden-worth-visiting" },
  { label: "Book a Tour", href: siteConfig.shoreExcursionsPath },
] as const;
