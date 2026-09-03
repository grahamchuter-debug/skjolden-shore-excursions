import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { ShipScheduleMonthCards } from "@/components/ship-schedule-month-cards";
import {
  formatScheduleDate,
  getSkjoldenMonthSummaries,
  scheduleDisclaimer,
  shipScheduleHubPath,
  skjoldenScheduleIntegrity,
} from "@/lib/skjolden-schedules";
import { imageAlts, siteImages } from "@/lib/site-images";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Skjolden Cruise Ship Schedule",
  description:
    "Browse Skjolden cruise ship schedules by month. View arrival times, departure times, and cruise lines visiting Skjolden, Norway to plan your shore day on the innermost Sognefjord.",
  path: shipScheduleHubPath,
});

export default function ShipScheduleHubPage() {
  const months = getSkjoldenMonthSummaries();
  const firstLabel = skjoldenScheduleIntegrity.firstDate
    ? formatScheduleDate(skjoldenScheduleIntegrity.firstDate)
    : "";
  const lastLabel = skjoldenScheduleIntegrity.lastDate
    ? formatScheduleDate(skjoldenScheduleIntegrity.lastDate)
    : "";

  return (
    <ContentPage
      title="Skjolden cruise ship schedule"
      lead={`Published calls for Skjolden from ${firstLabel} to ${lastLabel}. Find your month, check arrival and departure times, then decide whether llamas, a RIB fjord day, village discovery or bike-and-hike fits.`}
      heroImage={siteImages.hero}
      heroImageAlt={imageAlts.hero}
      pagePath={shipScheduleHubPath}
      pageDescription={metadata.description as string}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ship schedule" },
      ]}
      ctaTitle="Plan your Skjolden port day"
      ctaText="Once you know your hours ashore, compare llama walks, RIB adventures and village options with a clear return buffer."
      ctaHref="/one-day-in-skjolden"
      ctaButtonLabel="Plan your Skjolden day"
      relatedLinks={[
        { label: "Skjolden shore excursions", href: "/excursions" },
        { label: "One day in Skjolden", href: "/one-day-in-skjolden" },
        { label: "Port guide", href: "/skjolden-port-guide" },
        {
          label: "Is Skjolden worth visiting?",
          href: "/is-skjolden-worth-visiting",
        },
      ]}
    >
      <section>
        <p className="rounded border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          {scheduleDisclaimer}
        </p>
        <p className="mt-4 text-base leading-7 text-slate-700">
          This local timetable is filtered from the Norway Shore Excursions
          master schedule: {skjoldenScheduleIntegrity.total} Skjolden calls,{" "}
          {skjoldenScheduleIntegrity.byYear["2026"] ?? 0} in 2026 and{" "}
          {skjoldenScheduleIntegrity.byYear["2027"] ?? 0} in 2027, across{" "}
          {skjoldenScheduleIntegrity.uniqueShips} ships.
        </p>
      </section>

      <section>
        <h2>Browse by month</h2>
        <ShipScheduleMonthCards months={months} />
      </section>

      <section>
        <h2>Why ship times matter in Skjolden</h2>
        <p>
          A short call usually suits the llama walk or village discovery. RIB
          adventures and bike-and-hike routes need more hours and confirmed
          departures. A longer day still does not prove every outing will stack.
          Always leave a clear buffer before all aboard.
        </p>
        <p>
          Continue to <Link href="/one-day-in-skjolden">one day in Skjolden</Link>
          , <Link href="/excursions">excursion options</Link>, the{" "}
          <Link href="/skjolden-port-guide">port guide</Link>, or{" "}
          <Link href="/is-skjolden-worth-visiting">
            is Skjolden worth visiting?
          </Link>
          .
        </p>
      </section>
    </ContentPage>
  );
}
