import type { Metadata } from "next";
import Link from "next/link";

import { CruisePortDayPlanner } from "@/components/cruise-port-day-planner";
import {
  ExploreNorwegianPorts,
  explorePortsFromSkjolden,
} from "@/components/explore-norwegian-ports";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { PlannerInterestGroups } from "@/components/planner-interest-groups";
import { TourCard } from "@/components/tour-card";
import {
  skjoldenTourCards,
  skjoldenTourListItems,
} from "@/lib/skjolden-tours";
import { buildPageMetadata } from "@/lib/site-metadata";
import {
  buildFaqSchema,
  buildItemListSchema,
  buildWebPageSchema,
} from "@/lib/site-schema";
import { imageAlts, siteImages } from "@/lib/site-images";
import { siteConfig } from "@/lib/site-config";

const pageMeta = {
  title:
    "Skjolden Shore Excursions | Sognefjord Tours & Cruise Port Guides for Passengers",
  description:
    "Plan your Skjolden cruise port day with llama walks, fjord RIB adventures, waterfall tours, port guides, and return-to-ship friendly shore excursion advice on the innermost Sognefjord.",
  path: "/",
} as const;

export const metadata: Metadata = buildPageMetadata({
  ...pageMeta,
  ogImage: siteImages.hero,
  ogImageAlt: imageAlts.hero,
  absoluteTitle: true,
});

const trustBadges = [
  { label: "Return to ship on time", accent: true },
  { label: "Inner Sognefjord adventures", accent: false },
  { label: "Local Skjolden experiences", accent: false },
] as const;

const homeFaqs = [
  {
    question: "Is Skjolden worth visiting from a cruise ship?",
    answer:
      "Yes. Skjolden sits at the innermost point of the Sognefjord with dramatic mountains, waterfalls, llama walks, and RIB adventures. It is one of Norway's most underrated cruise ports with a peaceful atmosphere unlike larger hubs.",
  },
  {
    question: "How long should I spend in Skjolden?",
    answer:
      "Under three hours suits llama walks or village discovery. Three to four hours fits fjord RIB adventures. Four to six hours unlocks bike and hike routes. Six or more hours enables the RIB waterfall hike combo or private Sognefjord tours.",
  },
  {
    question: "Can I walk with llamas in Skjolden?",
    answer:
      "Yes. Walk with Llamas in Skjolden is the signature shore excursion, a guided llama walk through Mørkrid Valley with Skjolden Llamas that is unique among Norway cruise ports.",
  },
  {
    question: "What is the best Skjolden shore excursion?",
    answer:
      "Walk with Llamas is the signature choice for first-time visitors. For adventure seekers, Fjord RIB Adventure is the main tour. Active passengers with 6+ hours should consider the RIB and waterfall hike combination.",
  },
  {
    question: "Is Skjolden walkable from the cruise port?",
    answer:
      "Yes. Skjolden village is compact and the harbour is within easy walking distance of most cruise piers. Excursion meeting points are typically minutes from where you come ashore.",
  },
] as const;

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          buildWebPageSchema({
            path: pageMeta.path,
            title: pageMeta.title,
            description: pageMeta.description,
          }),
          buildItemListSchema(
            skjoldenTourListItems,
            "Popular Skjolden shore excursions for cruise passengers",
          ),
          buildFaqSchema(homeFaqs),
        ]}
      />
      <main className="min-h-screen bg-white text-slate-900">
        <PageHero
          image={siteImages.hero}
          imageAlt={imageAlts.hero}
          centered
          compact
          overlay="light"
          className="min-h-[25rem] md:min-h-[31rem] lg:min-h-[34rem]"
        >
          <h1 className="mb-3 text-2xl font-bold text-white sm:mb-5 sm:text-4xl md:text-5xl lg:text-6xl">
            Skjolden Shore Excursions
          </h1>

          <p className="mx-auto mb-5 max-w-3xl text-sm text-white/95 sm:mb-7 sm:text-lg md:text-xl">
            Explore the innermost reaches of the Sognefjord with llama walks,
            fjord RIB adventures, waterfalls, mountain scenery and unforgettable
            cruise-friendly shore excursions from Skjolden.
          </p>

          <a
            href="#tours"
            className="btn-primary px-6 py-3 text-sm sm:px-8 sm:py-4 sm:text-base"
          >
            View Excursions
          </a>

          <ul className="mx-auto mt-4 flex max-w-2xl flex-wrap items-center justify-center gap-2 sm:mt-6 sm:gap-3">
            {trustBadges.map((badge) => (
              <li
                key={badge.label}
                className={`rounded-full px-3 py-1.5 text-xs font-medium text-white/95 backdrop-blur-sm sm:px-4 sm:text-sm ${
                  badge.accent
                    ? "badge-accent-red"
                    : "border border-white/25 bg-white/10"
                }`}
              >
                {badge.label}
              </li>
            ))}
          </ul>
        </PageHero>

        <section id="tours" className="border-t bg-surface-muted">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <h2 className="mb-2 text-3xl font-bold sm:mb-3 sm:text-4xl">
              Popular Skjolden Tours
            </h2>
            <p className="mb-4 max-w-2xl text-slate-600">
              Cruise-friendly excursions that depart near Skjolden village and
              fit typical port-day schedules, from signature llama walks to
              fjord RIB adventures and private Sognefjord routes.
            </p>
            <p className="mb-8 max-w-2xl rounded-lg border border-slate-200 border-l-[3px] border-l-[var(--warm-wood)] bg-white px-4 py-3 text-sm leading-6 text-slate-700">
              Every excursion featured is selected to fit comfortably within a
              typical Skjolden cruise port call on the innermost Sognefjord.
            </p>

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
            <p className="mt-8">
              <Link
                href="/excursions"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-[var(--norway-blue)] hover:text-[var(--norway-blue)]"
              >
                View all Skjolden excursions
              </Link>
            </p>
          </div>
        </section>

        <section id="why-skjolden" className="border-t bg-white">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Why Skjolden Is Ideal for Cruise Shore Excursions
            </h2>
            <p className="text-base leading-8 text-slate-700 sm:text-lg">
              Skjolden sits at the head of Lustrafjord, the innermost arm of
              Norway&apos;s longest and deepest fjord. Cruise passengers arrive
              at a tiny village surrounded by mountains, then reach llama farms,
              RIB departure points, and waterfall trails on shore excursions
              timed for return-to-ship schedules.
            </p>
            <ul className="mt-6 list-disc space-y-2 pl-5 text-base leading-8 text-slate-700">
              <li>
                Innermost Sognefjord location with dramatic mountain and waterfall
                scenery
              </li>
              <li>
                Signature llama walks through Mørkrid Valley, unique among Norway
                cruise ports
              </li>
              <li>
                Fjord RIB adventures on Lustrafjord with Feigumfossen waterfall
                stops
              </li>
              <li>
                Peaceful atmosphere unlike larger Norway cruise hubs like Bergen
                or Geiranger
              </li>
              <li>
                Compact village with harbour and excursion meeting points minutes
                from the pier
              </li>
              <li>
                Match excursions to your actual hours ashore with our Cruise
                Smart Planner
              </li>
            </ul>
          </div>
        </section>

        <section id="meet-the-llamas" className="border-t bg-surface-muted">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
                  Meet the Llamas
                </h2>
                <p className="text-base leading-8 text-slate-700">
                  Skjolden Llamas offers one of the most unexpectedly delightful
                  shore excursions in Norway. Guided llama walks through
                  Mørkrid Valley combine gentle riverside paths, mountain views,
                  and a local farm experience that feels authentically Norwegian
                  with a touch of the quirky.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Family-friendly and easy-paced, the llama walk is the
                  experience that sets Skjolden apart from every other port on
                  your itinerary.
                </p>
                <p className="mt-6">
                  <Link
                    href="/excursions/walk-with-llamas"
                    className="btn-primary-on-light"
                  >
                    Walk with Llamas in Skjolden
                  </Link>
                </p>
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src={siteImages.llamaTourCard}
                  alt={imageAlts.llamaTourCard}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="sognefjord-adventures" className="border-t bg-white">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
              <div className="order-2 overflow-hidden rounded-xl shadow-lg lg:order-1">
                <img
                  src={siteImages.lustrafjord}
                  alt={imageAlts.lustrafjord}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
                  Sognefjord Adventure
                </h2>
                <p className="text-base leading-8 text-slate-700">
                  From Skjolden harbour, RIB boats launch onto Lustrafjord with
                  turquoise glacial water, steep mountain walls, and waterfalls
                  including Feigumfossen. Wildlife sightings of porpoises and seals
                  add to the thrill on many departures.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  Whether you choose a standard RIB tour, the active waterfall
                  hike combination, or a private Sognefjord adventure, Skjolden
                  delivers fjord excitement without the crowds of larger ports.
                </p>
                <p className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/excursions/fjord-rib-adventure"
                    className="btn-primary-on-light"
                  >
                    Fjord RIB Adventure
                  </Link>
                  <Link
                    href="/sognefjord-adventures"
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-[var(--norway-blue)] hover:text-[var(--norway-blue)]"
                  >
                    Sognefjord Adventures Guide
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="planner" className="border-t bg-surface-muted">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
            <CruisePortDayPlanner />
            <PlannerInterestGroups />
          </div>
        </section>

        <ExploreNorwegianPorts
          config={explorePortsFromSkjolden}
          variant="full"
        />

        <section id="faqs" className="border-t bg-white">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
            <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl">
              Skjolden cruise passenger FAQs
            </h2>
            <dl className="space-y-6">
              {homeFaqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-lg border border-slate-200 border-l-[3px] border-l-[var(--glacier-turquoise)] bg-surface-muted p-5 shadow-sm"
                >
                  <dt className="font-semibold text-slate-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 leading-7 text-slate-700">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="border-t bg-navy text-white">
          <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-16">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Plan your Skjolden port day with confidence
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
              Browse shore excursions, read the port guide, and use the Cruise
              Smart Planner, everything built for cruise passengers who need to
              return on time.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={siteConfig.shoreExcursionsPath}
                className="btn-primary sm:text-base"
              >
                Book a Tour
              </Link>
              <Link
                href="/skjolden-port-guide"
                className="btn-secondary sm:text-base"
              >
                Skjolden Port Guide
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
