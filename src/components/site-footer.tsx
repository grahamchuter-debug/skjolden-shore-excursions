import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

const planYourVisitLinks = [
  { label: "All Excursions", href: "/excursions" },
  { label: "Skjolden Port Guide", href: "/skjolden-port-guide" },
  { label: "One Day in Skjolden", href: "/one-day-in-skjolden" },
  {
    label: "Is Skjolden Worth Visiting?",
    href: "/is-skjolden-worth-visiting",
  },
  {
    label: "Best Time to Visit Skjolden",
    href: "/best-time-to-visit-skjolden",
  },
  { label: "Llama Tours Skjolden", href: "/llama-tours-skjolden" },
  { label: "Sognefjord Adventures", href: "/sognefjord-adventures" },
] as const;

const cruiseToolsLinks = [
  {
    label: "Walk with Llamas",
    href: "/excursions/walk-with-llamas",
  },
  {
    label: "Fjord RIB Adventure",
    href: "/excursions/fjord-rib-adventure",
  },
  {
    label: "RIB and Waterfall Hike",
    href: "/excursions/fjord-rib-waterfall-hike",
  },
  {
    label: "Village and Fjord Discovery",
    href: "/excursions/skjolden-village-fjord-discovery",
  },
  {
    label: "Private Sognefjord Adventure",
    href: "/excursions/private-sognefjord-adventure",
  },
] as const;

const whyBookWithUs = [
  "Cruise passenger friendly",
  "Return to ship timing guidance",
  "Inner Sognefjord specialists",
] as const;

const trustBullets = [
  "Return-to-ship friendly itineraries",
  "Inner Sognefjord adventure expertise",
  "Llama walks, RIB tours and waterfall planning",
] as const;

const ctaSecondaryLinks = [
  { label: "Skjolden Port Guide", href: "/skjolden-port-guide" },
  { label: "One Day in Skjolden", href: "/one-day-in-skjolden" },
] as const;

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto">
      <section className="border-t border-white/10 bg-navy text-white">
        <div className="mx-auto max-w-3xl px-4 py-10 text-center sm:px-6 sm:py-12">
          <h2 className="text-xl font-bold sm:text-2xl">
            Ready to plan your Skjolden cruise day?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
            Browse shore excursions, port guides, and planning tools designed
            specifically for cruise passengers visiting Skjolden.
          </p>
          <Link
            href={siteConfig.shoreExcursionsPath}
            className="btn-primary mt-6 shadow-lg sm:text-base"
          >
            View Shore Excursions
          </Link>
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
            {ctaSecondaryLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/65 transition hover:text-white"
                >
                  • {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="relative border-t border-white/10 bg-navy-deep text-slate-300">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--warm-wood)]/50 to-transparent"
        />

        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <Link
                href="/"
                className="text-lg font-bold tracking-tight text-white transition hover:text-white/90"
              >
                {siteConfig.name}
              </Link>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/65">
                Independent Skjolden cruise port guides and shore excursion
                planning for passengers visiting the innermost Sognefjord, llama
                walks, fjord RIB adventures, and mountain scenery.
              </p>
              <ul className="mt-4 space-y-2">
                {trustBullets.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-6 text-white/65"
                  >
                    <span aria-hidden="true" className="text-[var(--glacier-turquoise)]">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:col-span-1 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
              <FooterColumn title="Plan Your Visit">
                <ul className="space-y-2">
                  {planYourVisitLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/65 transition hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>

              <FooterColumn title="Featured Tours">
                <ul className="space-y-2">
                  {cruiseToolsLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/65 transition hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>

              <FooterColumn title="Why Book With Us">
                <ul className="space-y-2">
                  {whyBookWithUs.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm leading-6 text-white/65"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--glacier-turquoise)]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>

          <p className="mt-8 border-t border-white/10 pt-6 text-xs leading-5 text-white/45">
            © 2026 {siteConfig.copyrightEntity}. Independent cruise excursion
            guide.
          </p>
        </div>
      </div>
    </footer>
  );
}
