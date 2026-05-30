import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Llama Tours Skjolden | Walk with Llamas Norway Cruise Excursion",
  description:
    "Skjolden llama tours guide: walk with llamas Norway, llama excursion Skjolden, cruise ship llama tour, Mørkrid Valley walks, family-friendly shore excursions from Skjolden Llamas.",
  path: "/llama-tours-skjolden",
  ogImage: siteImages.llamaTours,
  ogImageAlt: imageAlts.llamaTours,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Llama Tours Skjolden" },
] as const;

const relatedLinks = [
  {
    label: "Walk with Llamas excursion",
    href: "/excursions/walk-with-llamas",
  },
  { label: "All excursions", href: "/excursions" },
  { label: "One day in Skjolden", href: "/one-day-in-skjolden" },
] as const;

const faqs = [
  {
    question: "Can you walk with llamas in Skjolden Norway?",
    answer:
      "Yes. Skjolden Llamas offers guided llama walks through Mørkrid Valley, the only llama excursion available from a Norway cruise port.",
  },
  {
    question: "Is there a cruise ship llama tour in Skjolden?",
    answer:
      "Yes. Walk with Llamas in Skjolden is designed for cruise passengers with return-to-ship friendly timing and an easy activity level.",
  },
  {
    question: "How long is a llama excursion in Skjolden?",
    answer:
      "Most llama walks run approximately two and a half hours, including farm introduction, the valley walk, and return to Skjolden village.",
  },
  {
    question: "Are Skjolden llama tours family-friendly?",
    answer:
      "Yes. The guided llama walk has an easy activity level suitable for children and all ages.",
  },
] as const;

export default function LlamaToursSkjoldenPage() {
  return (
    <ContentPage
      title="Llama Tours in Skjolden"
      lead="Complete guide to Skjolden llama tours for cruise passengers: walk with llamas Norway, llama excursion Skjolden, cruise ship llama tour options, Mørkrid Valley scenery, and why this is Norway's most unique shore excursion."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      breadcrumbs={breadcrumbs}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Skjolden llama tours overview</h2>
        <p>
          Skjolden is the only Norway cruise port where you can book a llama
          excursion. Skjolden Llamas leads guided walks through Mørkrid Valley
          with glacier-fed river scenery, mountain views, and a local farm
          experience that feels authentically Norwegian with a touch of the
          quirky.
        </p>
      </section>

      <section>
        <h2>Walk with llamas Norway</h2>
        <p>
          The{" "}
          <Link href="/excursions/walk-with-llamas">
            Walk with Llamas in Skjolden
          </Link>{" "}
          shore excursion is the definitive llama walk Norway experience for
          cruise passengers. Gentle pacing through riverside paths, easy activity
          level, and family-friendly format make it accessible to all ages.
        </p>
      </section>

      <section>
        <h2>Llama excursion Skjolden details</h2>
        <p>
          Tours depart from Skjolden Llamas near the village, run approximately
          two and a half hours, and include Mørkrid Valley scenery, river
          viewpoints, and farm introduction. The excursion fits under 3 to 4
          hour port calls with comfortable return margins.
        </p>
      </section>

      <section>
        <h2>Cruise ship llama tour timing</h2>
        <p>
          Llama walks are timed for typical Skjolden cruise schedules. The
          Cruise Smart Planner lists Walk with Llamas in the under 3 hours and
          3 to 4 hours tiers. Keep 30 to 45 minutes before all aboard for pier
          return.
        </p>
      </section>

      <section>
        <h2>Why book a llama tour in Skjolden</h2>
        <p>
          No other Norway cruise port offers llama walks. Combined with inner
          Sognefjord scenery, this is the experience that sets Skjolden apart
          from Geiranger, Flam, Bergen, and every other port on your itinerary.
          Browse the full{" "}
          <Link href="/excursions/walk-with-llamas">excursion details</Link> or
          read <Link href="/is-skjolden-worth-visiting">is Skjolden worth visiting</Link>.
        </p>
      </section>
    </ContentPage>
  );
}
