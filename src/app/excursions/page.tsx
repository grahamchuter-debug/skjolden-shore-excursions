import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { JsonLd } from "@/components/json-ld";
import { TourCard } from "@/components/tour-card";
import {
  skjoldenTourCards,
  skjoldenTourListItems,
} from "@/lib/skjolden-tours";
import { buildPageMetadata } from "@/lib/site-metadata";
import { buildItemListSchema } from "@/lib/site-schema";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Skjolden Excursions, All Shore Tours for Cruise Passengers",
  description:
    "Browse all Skjolden shore excursions for cruise passengers: llama walks, fjord RIB adventures, waterfall hikes, village discovery, private Sognefjord tours, and bike and hike routes.",
  path: "/excursions",
  ogImage: siteImages.lustrafjord,
  ogImageAlt: imageAlts.lustrafjord,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Excursions" },
] as const;

const relatedLinks = [
  { label: "Skjolden port guide", href: "/skjolden-port-guide" },
  { label: "One day in Skjolden", href: "/one-day-in-skjolden" },
  {
    label: "Is Skjolden worth visiting?",
    href: "/is-skjolden-worth-visiting",
  },
] as const;

const faqs = [
  {
    question:
      "What is the best Skjolden excursion for first-time cruise visitors?",
    answer:
      "Walk with Llamas in Skjolden is the signature choice for first-time visitors. For adventure seekers, Fjord RIB Adventure is the main tour.",
  },
  {
    question: "How do I choose between Skjolden shore excursions?",
    answer:
      "Match the tour to your hours ashore: llama walks and village discovery suit under 3 hours; RIB adventures suit 3 to 6 hours; RIB waterfall hike and private tours need 6+ hours. Use the Cruise Smart Planner on the homepage.",
  },
  {
    question: "Do all Skjolden excursions depart near the cruise port?",
    answer:
      "Yes. Featured tours meet in Skjolden village near the pier, typically within a few minutes of where you come ashore.",
  },
] as const;

export default function ExcursionsIndexPage() {
  return (
    <>
      <JsonLd
        data={[
          buildItemListSchema(
            skjoldenTourListItems,
            "All Skjolden shore excursions for cruise passengers",
          ),
        ]}
      />
      <ContentPage
        title="Skjolden Excursions"
        lead="Every cruise-friendly shore excursion in Skjolden, llama walks, fjord RIB adventures, waterfall hikes, village discovery, and private Sognefjord touring with return-to-ship timing in mind."
        heroImage={pageMeta.ogImage}
        heroImageAlt={pageMeta.ogImageAlt}
        pagePath={pageMeta.path}
        pageDescription={pageMeta.description}
        breadcrumbs={breadcrumbs}
        relatedLinks={relatedLinks}
        faqs={faqs}
        ctaTitle="Need help choosing a Skjolden tour?"
        ctaText="Use the Cruise Smart Planner on the homepage to match tours to your ship's timetable."
        ctaHref="/#planner"
        ctaButtonLabel="Open Cruise Smart Planner"
        belowHero={
          <section className="border-b bg-surface-muted">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {skjoldenTourCards.map((tour) => (
                  <TourCard
                    key={tour.href}
                    href={tour.href}
                    image={tour.image}
                    imageAlt={tour.imageAlt}
                    title={tour.title}
                    description={tour.description}
                    badge={tour.badge}
                  />
                ))}
              </div>
            </div>
          </section>
        }
      >
        <section>
          <h2>Compare Skjolden shore excursions</h2>
          <p>
            Each tour below is designed for cruise passengers calling at
            Skjolden on the innermost Sognefjord. Llama walks and village
            discovery fit shorter port windows; RIB adventures and bike and
            hike routes need more time; private tours suit full-day port calls.
          </p>
          <p>
            For port-day planning tools and tier-based recommendations, use the{" "}
            <Link href="/#planner">Cruise Smart Planner</Link> on the homepage.
          </p>
        </section>
      </ContentPage>
    </>
  );
}
