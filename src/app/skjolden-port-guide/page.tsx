import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Skjolden Cruise Port Guide",
  description:
    "Skjolden cruise port guide for passengers: pier information, walking distance into village, Sognefjord facts, local transport, weather and clothing advice, return-to-ship buffer guidance.",
  path: "/skjolden-port-guide",
  ogImage: siteImages.portGuide,
  ogImageAlt: imageAlts.portGuide,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Skjolden Port Guide" },
] as const;

const relatedLinks = [
  { label: "Shore excursions", href: "/excursions" },
  { label: "One day in Skjolden", href: "/one-day-in-skjolden" },
  {
    label: "Is Skjolden worth visiting?",
    href: "/is-skjolden-worth-visiting",
  },
  { label: "Best time to visit", href: "/best-time-to-visit-skjolden" },
] as const;

const faqs = [
  {
    question: "Does Skjolden have a cruise pier or is it a tender port?",
    answer:
      "Skjolden typically accommodates cruise ships at a dedicated pier in the village harbour. Smaller vessels may tender on busy days. Confirm your arrangement on the cruise app the night before arrival.",
  },
  {
    question: "How far is Skjolden village from the cruise pier?",
    answer:
      "The village centre and harbour are within a few minutes on foot from most cruise piers. Excursion meeting points are typically minutes from where you come ashore.",
  },
  {
    question: "Why does Skjolden feel different from larger Norway cruise ports?",
    answer:
      "Skjolden is the innermost village on the Sognefjord with a population under 500. You get dramatic fjord scenery without the crowds, coach queues, and commercial bustle of Bergen, Geiranger, or Flam.",
  },
  {
    question: "How early should cruise passengers return to the ship in Skjolden?",
    answer:
      "Plan to be back at the pier at least 30 to 45 minutes before all aboard. Even in a compact village, excursion return times can compress that buffer on peak summer days.",
  },
] as const;

export default function SkjoldenPortGuidePage() {
  return (
    <ContentPage
      title="Skjolden Port Guide for Cruise Passengers"
      lead="Everything you need to navigate Skjolden cruise port, pier access, walking distances into the village, Sognefjord facts, local transport, weather advice, return-to-ship buffer guidance, and why Skjolden feels different from larger Norway ports."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      breadcrumbs={breadcrumbs}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Skjolden cruise port location</h2>
        <p>
          Skjolden sits at the head of Lustrafjord, the innermost navigable arm
          of the Sognefjord, Norway&apos;s longest and deepest fjord. Most
          cruise passengers arrive at a compact village pier where the harbour,
          cafés, and excursion meeting points are within easy walking distance.
        </p>
        <p>
          Unlike larger Norway cruise hubs, Skjolden offers a peaceful,
          nature-focused atmosphere. The village population is under 500, yet
          the surrounding mountains, waterfalls, and fjord arms deliver scenery
          that rivals any port on your itinerary.
        </p>
      </section>

      <section>
        <h2>Skjolden cruise pier information</h2>
        <p>
          Most cruise ships dock at the Skjolden pier directly in the village
          harbour. The pier is typically a short walk from the main road,
          harbourfront, and excursion coach pickup points. On busy days with
          multiple ships, tender operations may be used for smaller vessels.
        </p>
        <p>
          Check your cruise line&apos;s app for pier assignment and
          disembarkation procedures. Skjolden is not a sprawling port complex,
          so navigation from ship to village is straightforward once ashore.
        </p>
      </section>

      <section>
        <h2>Walking distance into the village</h2>
        <p>
          Skjolden village is compact and walkable. From the cruise pier, you
          can reach the harbour area, local shops, and cafés within five to ten
          minutes on foot. The llama farm and RIB departure points are a short
          drive or organised transfer from the village centre.
        </p>
        <p>
          For passengers with limited mobility, the harbour and village
          waterfront offer flat, easy walking with excellent Sognefjord views
          without needing an excursion.
        </p>
      </section>

      <section>
        <h2>Sognefjord facts</h2>
        <p>
          The Sognefjord stretches over 200 kilometres inland and reaches depths
          exceeding 1,300 metres, making it Norway&apos;s longest and deepest
          fjord. Skjolden sits at the innermost point of Lustrafjord, where
          steep mountain walls, glacier-fed rivers, and waterfalls including
          Feigumfossen create dramatic scenery.
        </p>
        <p>
          Lustrafjord water often appears milky turquoise from glacial sediment,
          a distinctive visual feature of the inner Sognefjord region.
        </p>
      </section>

      <section>
        <h2>Local transport from Skjolden</h2>
        <p>
          Organised shore excursions provide the most reliable transport for
          RIB tours, llama walks, and waterfall hikes. Local bus services are
          limited in this remote fjord village. Taxis may be available but
          should be pre-booked on cruise days.
        </p>
        <p>
          For independent exploration, the village and harbour are best explored
          on foot. Cycling and hiking routes extend into Mørkrid Valley and
          surrounding countryside.
        </p>
      </section>

      <section>
        <h2>Weather and clothing advice</h2>
        <p>
          Skjolden weather can change quickly. Even on sunny days, fjord breezes
          and mountain shade bring cooler temperatures. Pack waterproof layers, a
          warm mid-layer, and sturdy footwear for excursions.
        </p>
        <p>
          RIB tours require windproof clothing. Llama walks and hiking routes
          need comfortable walking shoes. Summer temperatures typically range
          from 12 to 22°C, but feel cooler on the water and at elevation.
        </p>
      </section>

      <section>
        <h2>Return-to-ship buffer advice</h2>
        <p>
          Always confirm your cruise line&apos;s official all-aboard time. Plan
          to be back at the pier at least 30 to 45 minutes before that deadline.
          Use the{" "}
          <Link href="/#planner">Cruise Smart Planner</Link> to match excursions
          to your actual hours ashore.
        </p>
        <p>
          Skjolden&apos;s compact layout makes return straightforward, but
          organised excursions still need buffer time for coach transfers and
          pier queues on busy summer days.
        </p>
      </section>

      <section>
        <h2>Why Skjolden feels different from larger Norway cruise ports</h2>
        <p>
          Skjolden lacks the coach queues, souvenir sprawl, and crowds of Bergen,
          Geiranger, or Flam. Instead you get authentic fjord village life,
          signature llama walks, RIB adventures, and mountain scenery in a
          peaceful setting. Many passengers rank Skjolden among their favourite
          unexpected discoveries on a Norway cruise.
        </p>
        <p>
          Browse <Link href="/excursions">Skjolden shore excursions</Link> or
          read{" "}
          <Link href="/is-skjolden-worth-visiting">
            is Skjolden worth visiting
          </Link>{" "}
          for help deciding how to spend your port day.
        </p>
      </section>
    </ContentPage>
  );
}
