import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Sognefjord Adventures from Skjolden | Fjord Shore Excursions",
  description:
    "Sognefjord shore excursions from Skjolden: fjord RIB adventures, waterfall hikes, private Sognefjord tours, Lustrafjord scenery, and cruise-friendly Skjolden fjord adventures.",
  path: "/sognefjord-adventures",
  ogImage: siteImages.sognefjordAdventures,
  ogImageAlt: imageAlts.sognefjordAdventures,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Sognefjord Adventures" },
] as const;

const relatedLinks = [
  {
    label: "Fjord RIB Adventure",
    href: "/excursions/fjord-rib-adventure",
  },
  {
    label: "Private Sognefjord Adventure",
    href: "/excursions/private-sognefjord-adventure",
  },
  { label: "All excursions", href: "/excursions" },
] as const;

const faqs = [
  {
    question: "What Sognefjord shore excursions depart from Skjolden?",
    answer:
      "Fjord RIB Adventure, RIB and Waterfall Hike, Private Sognefjord Adventure, and Village and Fjord Discovery all explore the inner Sognefjord from Skjolden.",
  },
  {
    question: "What is the best Skjolden fjord adventure for cruise passengers?",
    answer:
      "Fjord RIB Adventure is the main adventure tour for 3 to 6 hour port calls. Active passengers with 6+ hours should consider the RIB and waterfall hike combination.",
  },
  {
    question: "Can I see Feigumfossen waterfall from Skjolden excursions?",
    answer:
      "Yes. Fjord RIB Adventure and the RIB Waterfall Hike both include Feigumfossen waterfall stops on Lustrafjord.",
  },
] as const;

export default function SognefjordAdventuresPage() {
  return (
    <ContentPage
      title="Sognefjord Adventures from Skjolden"
      lead="Guide to Sognefjord shore excursions and Skjolden fjord adventures for cruise passengers: RIB tours, waterfall hikes, private routes, Lustrafjord scenery, and cruise-friendly Sognefjord cruise excursions."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      breadcrumbs={breadcrumbs}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Sognefjord shore excursions from Skjolden</h2>
        <p>
          Skjolden sits at the innermost point of Lustrafjord on the Sognefjord,
          Norway&apos;s longest and deepest fjord. Shore excursions from
          Skjolden harbour explore turquoise glacial water, steep mountain walls,
          Feigumfossen waterfall, and wildlife including porpoises and seals.
        </p>
      </section>

      <section>
        <h2>Skjolden fjord adventures by type</h2>
        <p>
          <strong>RIB adventures:</strong> The{" "}
          <Link href="/excursions/fjord-rib-adventure">
            Fjord RIB Adventure
          </Link>{" "}
          is the main group tour for 3 to 6 hour port calls. High-speed fjord
          travel with waterfall and history stops.
        </p>
        <p>
          <strong>Active combinations:</strong> The{" "}
          <Link href="/excursions/fjord-rib-waterfall-hike">
            RIB and Waterfall Hike
          </Link>{" "}
          adds a guided hiking section at Feigumfossen for passengers with 6+
          hours ashore.
        </p>
        <p>
          <strong>Private tours:</strong> The{" "}
          <Link href="/excursions/private-sognefjord-adventure">
            Private Sognefjord Adventure
          </Link>{" "}
          offers flexible fjord viewpoints, village stops, and photography
          pacing for couples and families.
        </p>
      </section>

      <section>
        <h2>Sognefjord cruise excursions timing</h2>
        <p>
          Match your adventure to your port call using the{" "}
          <Link href="/#planner">Cruise Smart Planner</Link>. RIB tours suit 3
          to 6 hours; waterfall hike combos and private tours need 6+ hours.
          Village discovery suits shorter calls.
        </p>
      </section>

      <section>
        <h2>Lustrafjord and inner Sognefjord scenery</h2>
        <p>
          Lustrafjord water often appears milky turquoise from glacial sediment.
          Mountain walls rise directly from the water, creating dramatic
          backdrops for RIB photography and private viewpoint stops. Skjolden
          delivers this scenery without the crowds of larger Sognefjord ports.
        </p>
      </section>

      <section>
        <h2>Plan your Sognefjord adventure</h2>
        <p>
          Browse all{" "}
          <Link href="/excursions">Skjolden shore excursions</Link>, read the{" "}
          <Link href="/skjolden-port-guide">port guide</Link>, or compare with
          the signature{" "}
          <Link href="/excursions/walk-with-llamas">llama walk</Link> for a
          complete Skjolden port day.
        </p>
      </section>
    </ContentPage>
  );
}
