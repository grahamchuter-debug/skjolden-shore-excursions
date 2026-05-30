import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "One Day in Skjolden, Cruise Port Itineraries",
  description:
    "One day in Skjolden itineraries for cruise passengers: family day, adventure day, scenic fjord day, and short port call plans with return-to-ship timing.",
  path: "/one-day-in-skjolden",
  ogImage: siteImages.oneDay,
  ogImageAlt: imageAlts.oneDay,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "One Day in Skjolden" },
] as const;

const relatedLinks = [
  { label: "Skjolden port guide", href: "/skjolden-port-guide" },
  { label: "All excursions", href: "/excursions" },
  { label: "Cruise Smart Planner", href: "/#planner" },
] as const;

const faqs = [
  {
    question: "What can I do in Skjolden with only 3 hours ashore?",
    answer:
      "Walk with Llamas or Skjolden Village and Fjord Discovery are ideal for short port calls. Both keep generous return margins for tight schedules.",
  },
  {
    question: "What is the best one day itinerary for families in Skjolden?",
    answer:
      "The family day itinerary combines a llama walk with harbour time and an easy village stroll, perfect for all ages with an easy activity level.",
  },
  {
    question: "Can I fit a RIB tour into one day in Skjolden?",
    answer:
      "Yes, with at least 3 to 4 hours ashore. The Fjord RIB Adventure runs approximately three hours with comfortable return margins.",
  },
] as const;

export default function OneDayInSkjoldenPage() {
  return (
    <ContentPage
      title="One Day in Skjolden"
      lead="Practical one day in Skjolden itineraries for cruise passengers: family day, adventure day, scenic fjord day, and short port call plans matched to typical ship schedules."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      breadcrumbs={breadcrumbs}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Family day in Skjolden</h2>
        <p>
          Start with the signature{" "}
          <Link href="/excursions/walk-with-llamas">
            Walk with Llamas in Skjolden
          </Link>
          , a gentle guided walk through Mørkrid Valley that delights children
          and adults alike. After the llama experience, stroll the harbour for
          fjord photos and a café stop before returning to your ship.
        </p>
        <ul>
          <li>Morning: Llama walk with Skjolden Llamas (approx. 2.5 hours)</li>
          <li>Midday: Harbour walk and village exploration</li>
          <li>Afternoon: Return to ship with 45-minute buffer</li>
        </ul>
        <p>
          Alternatively, combine the llama walk with{" "}
          <Link href="/excursions/skjolden-village-fjord-discovery">
            Village and Fjord Discovery
          </Link>{" "}
          on longer port calls.
        </p>
      </section>

      <section>
        <h2>Adventure day in Skjolden</h2>
        <p>
          Active passengers should book the{" "}
          <Link href="/excursions/fjord-rib-adventure">
            Fjord RIB Adventure
          </Link>{" "}
          for high-speed fjord travel, Feigumfossen waterfall stops, and wildlife
          possibilities. With 6 or more hours ashore, upgrade to the{" "}
          <Link href="/excursions/fjord-rib-waterfall-hike">
            RIB and Waterfall Hike
          </Link>{" "}
          combination.
        </p>
        <ul>
          <li>Morning: RIB departure from Skjolden harbour</li>
          <li>Midday: Fjord exploration and waterfall stops</li>
          <li>Afternoon: Hiking section (6+ hour port calls only)</li>
        </ul>
        <p>
          For land-based adventure, the{" "}
          <Link href="/excursions/bike-and-hike-adventure">
            Bike and Hike Adventure
          </Link>{" "}
          suits 4 to 6 hour port calls.
        </p>
      </section>

      <section>
        <h2>Scenic fjord day in Skjolden</h2>
        <p>
          Photographers and scenery lovers should prioritise fjord viewpoints
          and flexible pacing. The{" "}
          <Link href="/excursions/private-sognefjord-adventure">
            Private Sognefjord Adventure
          </Link>{" "}
          offers tailored stops at Lustrafjord viewpoints, village hamlets, and
          waterfall photography locations.
        </p>
        <ul>
          <li>Morning: Private guide pickup in Skjolden village</li>
          <li>Midday: Fjord viewpoints and village stops</li>
          <li>Afternoon: Waterfall and photography time at flexible pace</li>
        </ul>
        <p>
          Group RIB tours also deliver excellent photography opportunities from
          water level on Lustrafjord.
        </p>
      </section>

      <section>
        <h2>Short port call in Skjolden</h2>
        <p>
          With under three hours ashore, choose either the llama walk or{" "}
          <Link href="/excursions/skjolden-village-fjord-discovery">
            Village and Fjord Discovery
          </Link>
          . Both are designed with generous return margins for tight schedules.
        </p>
        <ul>
          <li>Disembark promptly and head to your excursion meeting point</li>
          <li>Single focused tour (llama walk or village discovery)</li>
          <li>Return to pier 45 minutes before all aboard</li>
        </ul>
        <p>
          Avoid RIB waterfall hikes and private full-day tours on short port
          calls. Use the{" "}
          <Link href="/#planner">Cruise Smart Planner</Link> to confirm fit.
        </p>
      </section>
    </ContentPage>
  );
}
