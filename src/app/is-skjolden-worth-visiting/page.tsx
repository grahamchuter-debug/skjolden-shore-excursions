import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Is Skjolden Worth Visiting on a Cruise?",
  description:
    "Is Skjolden worth visiting from a cruise ship? Innermost Sognefjord location, mountains, waterfalls, llama experiences, RIB adventures, peaceful atmosphere, and why Skjolden is underrated.",
  path: "/is-skjolden-worth-visiting",
  ogImage: siteImages.worthVisiting,
  ogImageAlt: imageAlts.worthVisiting,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Is Skjolden Worth Visiting?" },
] as const;

const relatedLinks = [
  { label: "Skjolden port guide", href: "/skjolden-port-guide" },
  { label: "One day in Skjolden", href: "/one-day-in-skjolden" },
  { label: "All excursions", href: "/excursions" },
] as const;

const faqs = [
  {
    question: "Is Skjolden worth visiting from a cruise ship?",
    answer:
      "Yes. Skjolden offers innermost Sognefjord scenery, signature llama walks, RIB adventures, and a peaceful atmosphere that many passengers prefer to larger Norway ports.",
  },
  {
    question: "Why is Skjolden underrated compared to Geiranger or Flam?",
    answer:
      "Skjolden lacks the marketing profile of Geiranger or Flam but delivers equal fjord drama with fewer crowds, unique llama experiences, and authentic village charm.",
  },
  {
    question: "What makes Skjolden unique among Norway cruise ports?",
    answer:
      "Walk with llamas through Mørkrid Valley is unique to Skjolden. Combined with inner Sognefjord location and RIB adventures, it offers experiences no other port can match.",
  },
] as const;

export default function IsSkjoldenWorthVisitingPage() {
  return (
    <ContentPage
      title="Is Skjolden Worth Visiting?"
      lead="Honest guide for cruise passengers wondering if Skjolden is worth visiting: innermost Sognefjord location, mountains and waterfalls, llama experiences, RIB adventures, peaceful atmosphere, and why Skjolden is one of Norway's most underrated cruise ports."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      breadcrumbs={breadcrumbs}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Innermost Sognefjord location</h2>
        <p>
          Skjolden sits at the head of Lustrafjord, the innermost navigable arm
          of the Sognefjord. Few cruise ports reach this deep into Norway&apos;s
          longest fjord. The mountain walls, glacier-fed rivers, and turquoise
          water create scenery that rivals Geiranger without the coach queues.
        </p>
      </section>

      <section>
        <h2>Mountains and waterfalls</h2>
        <p>
          Feigumfossen waterfall, Mørkrid Valley, and surrounding peaks deliver
          dramatic natural scenery accessible on RIB tours, hiking routes, and
          private adventures. The inner Sognefjord region is among the most
          photogenic landscapes on any Norway cruise itinerary.
        </p>
      </section>

      <section>
        <h2>Llama experiences</h2>
        <p>
          Skjolden is the only Norway cruise port where you can walk with llamas
          through a mountain valley.{" "}
          <Link href="/excursions/walk-with-llamas">
            Walk with Llamas in Skjolden
          </Link>{" "}
          is a genuinely unique shore excursion that combines local farm culture
          with fjord scenery. Read our{" "}
          <Link href="/llama-tours-skjolden">llama tours guide</Link> for more.
        </p>
      </section>

      <section>
        <h2>RIB adventures</h2>
        <p>
          Fjord RIB tours from Skjolden harbour explore Lustrafjord at speed,
          with Feigumfossen waterfall stops and wildlife possibilities. The{" "}
          <Link href="/excursions/fjord-rib-adventure">
            Fjord RIB Adventure
          </Link>{" "}
          suits adventure seekers who want more than a village walk.
        </p>
      </section>

      <section>
        <h2>Peaceful atmosphere</h2>
        <p>
          With a population under 500, Skjolden feels authentically Norwegian
          rather than commercially overwhelmed. No sprawling souvenir districts,
          no coach congestion, just fjord village life surrounded by mountains.
          Many passengers rank it as their favourite unexpected port discovery.
        </p>
      </section>

      <section>
        <h2>Why Skjolden is one of Norway&apos;s most underrated cruise ports</h2>
        <p>
          Skjolden lacks the fame of Geiranger or Flam but delivers comparable
          fjord drama with unique experiences those ports cannot offer. Llama
          walks, inner Sognefjord location, RIB adventures, and peaceful village
          charm make Skjolden worth visiting on any Norway cruise itinerary.
        </p>
        <p>
          Browse <Link href="/excursions">Skjolden shore excursions</Link> or
          use the <Link href="/#planner">Cruise Smart Planner</Link> to plan
          your port day.
        </p>
      </section>
    </ContentPage>
  );
}
