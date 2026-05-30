import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Best Time to Visit Skjolden on a Cruise",
  description:
    "Best time to visit Skjolden on a cruise: seasonal weather, llama walk availability, RIB tour conditions, peak cruise months, and what to expect each season on the innermost Sognefjord.",
  path: "/best-time-to-visit-skjolden",
  ogImage: siteImages.bestTime,
  ogImageAlt: imageAlts.bestTime,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Best Time to Visit Skjolden" },
] as const;

const relatedLinks = [
  { label: "Skjolden port guide", href: "/skjolden-port-guide" },
  { label: "One day in Skjolden", href: "/one-day-in-skjolden" },
  { label: "All excursions", href: "/excursions" },
] as const;

const faqs = [
  {
    question: "When is the best time to visit Skjolden on a cruise?",
    answer:
      "May through September offers the best combination of excursion availability, daylight, and mild weather. June to August is peak cruise season with the longest days.",
  },
  {
    question: "Are llama walks available all year in Skjolden?",
    answer:
      "Llama walks typically operate during the cruise season from May to September. Confirm seasonal availability when booking.",
  },
  {
    question: "What is Skjolden weather like in summer?",
    answer:
      "Summer temperatures range from 12 to 22°C with changeable conditions. Pack waterproof layers even on sunny days, as fjord breezes and mountain shade bring cooler temperatures.",
  },
] as const;

export default function BestTimeToVisitSkjoldenPage() {
  return (
    <ContentPage
      title="Best Time to Visit Skjolden"
      lead="Seasonal guide for cruise passengers planning a Skjolden port call: weather patterns, excursion availability, peak cruise months, and what to expect on the innermost Sognefjord throughout the year."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      breadcrumbs={breadcrumbs}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Peak cruise season (June to August)</h2>
        <p>
          June through August is peak cruise season in Skjolden with the longest
          daylight hours, warmest temperatures, and full excursion availability.
          Llama walks, RIB tours, and hiking routes all operate on regular
          schedules. Expect more ships and busier village cafés on peak days.
        </p>
      </section>

      <section>
        <h2>Shoulder season (May and September)</h2>
        <p>
          May and September offer quieter port days with fewer ships and
          atmospheric autumn or spring light. Most excursions still operate,
          though September evenings shorten quickly. Temperatures are cooler,
          typically 8 to 16°C, so pack warm layers.
        </p>
      </section>

      <section>
        <h2>Weather and clothing by season</h2>
        <p>
          Skjolden weather is changeable year-round. Summer brings the best
          conditions but still requires waterproof layers and sturdy footwear.
          RIB tours need windproof clothing regardless of season. Spring and
          autumn can be wetter with mountain mist adding atmosphere to fjord
          photography.
        </p>
      </section>

      <section>
        <h2>Excursion availability by season</h2>
        <p>
          <Link href="/excursions/walk-with-llamas">Llama walks</Link>,{" "}
          <Link href="/excursions/fjord-rib-adventure">RIB adventures</Link>, and
          village tours typically run May through September. Private tours may
          offer extended season dates. The{" "}
          <Link href="/excursions/fjord-rib-waterfall-hike">
            RIB waterfall hike
          </Link>{" "}
          requires dry trail conditions, best in June through August.
        </p>
      </section>

      <section>
        <h2>Planning your Skjolden port call</h2>
        <p>
          Match your excursion to the season and your ship&apos;s timetable
          using the <Link href="/#planner">Cruise Smart Planner</Link>. Read the{" "}
          <Link href="/skjolden-port-guide">Skjolden port guide</Link> for
          pier information and return-to-ship buffer advice.
        </p>
      </section>
    </ContentPage>
  );
}
