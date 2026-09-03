import type { Metadata } from "next";
import Link from "next/link";

import { CruisePortDayPlanner } from "@/components/cruise-port-day-planner";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { TourCard } from "@/components/tour-card";
import {
  formatScheduleDate,
  skjoldenScheduleIntegrity,
} from "@/lib/skjolden-schedules";
import {
  skjoldenTourCards,
  skjoldenTourListItems,
} from "@/lib/skjolden-tours";
import { siteConfig } from "@/lib/site-config";
import { imageAlts, siteImages } from "@/lib/site-images";
import { buildPageMetadata } from "@/lib/site-metadata";
import {
  buildFaqSchema,
  buildItemListSchema,
  buildWebPageSchema,
} from "@/lib/site-schema";

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

const homeFaqs = [
  {
    question: "Is this site for cruise passengers calling at Skjolden?",
    answer:
      "Yes. This is an independent Skjolden cruise-port planning site. It helps you choose between llama walks, RIB fjord adventures, village discovery or bike-and-hike, check published ship calls, and leave a return buffer. Confirm final timings with your cruise line.",
  },
  {
    question: "Should I walk with llamas, take a RIB, or stay in the village?",
    answer:
      "Stay near the village on a short call. Walk with Llamas is the signature Skjolden outing already on this site. Fjord RIB Adventure is the main water option. Bike and hike suits longer, active days. Pick one main outing unless tickets and timing are already confirmed.",
  },
  {
    question: "Can I stack a RIB tour and a long hike because my ship stays all day?",
    answer:
      "Published hours ashore are not enough. Combining a RIB with a serious hike needs confirmed departures and a generous buffer. This site does not invent operator schedules.",
  },
  {
    question: "Can I book shore excursions on this site?",
    answer:
      "This site is for planning and discovery. There is no live booking checkout here. Use the excursion pages and guides to understand options, then arrange tours through operators or your usual booking channel.",
  },
] as const;

export default function Home() {
  const firstLabel = skjoldenScheduleIntegrity.firstDate
    ? formatScheduleDate(skjoldenScheduleIntegrity.firstDate)
    : "";
  const lastLabel = skjoldenScheduleIntegrity.lastDate
    ? formatScheduleDate(skjoldenScheduleIntegrity.lastDate)
    : "";
  const featured = skjoldenTourCards.slice(0, 3);
  const remaining = skjoldenTourCards.slice(3);

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
      <main>
        <PageHero
          image={siteImages.hero}
          imageAlt={imageAlts.hero}
          className="min-h-[28rem] md:min-h-[32rem]"
        >
          <p className="hero-eyebrow mb-3 text-xs font-semibold uppercase tracking-[0.2em]">
            {siteConfig.name}
          </p>
          <h1 className="font-display mb-5 max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
            Your ship is in Skjolden. Llamas, RIB, or a quiet village day?
          </h1>
          <p className="max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
            Innermost Sognefjord character: meadow valleys, Lustrafjord water and
            a tiny village at the head of Norway&apos;s longest fjord. Choose one
            main direction, then keep time to get back to the pier.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/excursions"
              className="btn-primary w-full justify-center sm:w-auto"
            >
              Explore Skjolden excursions
            </Link>
            <Link
              href="/ship-schedule"
              className="btn-secondary w-full justify-center sm:w-auto"
            >
              Check your ship schedule
            </Link>
          </div>
        </PageHero>

        <section className="border-b border-[var(--border-light)] bg-[var(--surface)] py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Three Skjolden days</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Llama walk, RIB fjord, or stay local
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              The inventory on this site already splits that way, with bike-and-hike
              and private options when you want more pace control. No extra
              decision URL. Use the one-day guide for hours, not as proof that
              every outing will stack.
            </p>
            <div className="mt-10 grid gap-10 md:grid-cols-3">
              <div>
                <h3 className="font-display text-xl font-semibold text-slate-900">
                  Walk with llamas
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Signature Skjolden outing through Mørkrid Valley with Skjolden
                  Llamas. Distinct from Flåm railway days or Olden glacier calls.
                </p>
                <Link
                  href="/excursions/walk-with-llamas"
                  className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--fjord)] underline-offset-4 hover:underline"
                >
                  Walk with Llamas in Skjolden
                </Link>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-slate-900">
                  Fjord RIB adventure
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Lustrafjord water time with waterfall stops when adventure is
                  the priority. Confirm the day&apos;s departures with the
                  operator.
                </p>
                <Link
                  href="/excursions/fjord-rib-adventure"
                  className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--fjord)] underline-offset-4 hover:underline"
                >
                  Fjord RIB Adventure
                </Link>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-slate-900">
                  Quiet village day
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Harbour and village discovery when you want innermost-fjord
                  atmosphere without a long outing. Still one main plan, not a
                  guarantee that every stop will fit.
                </p>
                <Link
                  href="/excursions/skjolden-village-fjord-discovery"
                  className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--fjord)] underline-offset-4 hover:underline"
                >
                  Village and fjord discovery
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--border-light)] bg-surface-muted py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Find your ship</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Check when your ship is in Skjolden
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              {skjoldenScheduleIntegrity.total} published Skjolden calls from{" "}
              {firstLabel} to {lastLabel}. Arrival and departure times shape what
              is realistic ashore. Always confirm with your cruise line.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/ship-schedule" className="btn-outline-dark">
                Open Skjolden ship schedule
              </Link>
              <Link
                href="/one-day-in-skjolden"
                className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--fjord)] underline-offset-4 hover:underline"
              >
                Then plan your hours
              </Link>
            </div>
          </div>
        </section>

        <section id="tours" className="scroll-mt-24 py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Excursion options</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Experiences already on this site
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              No invented products or prices. Durations are approximate. Keep a
              return buffer. This site does not sell tickets.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {featured.map((tour) => (
                <TourCard key={tour.href} {...tour} />
              ))}
            </div>
            {remaining.length > 0 ? (
              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {remaining.map((tour) => (
                  <TourCard key={tour.href} {...tour} />
                ))}
              </div>
            ) : null}
            <p className="mt-8">
              <Link
                href="/excursions"
                className="text-sm font-semibold text-[var(--fjord)] underline-offset-4 hover:underline"
              >
                Compare all Skjolden excursions
              </Link>
            </p>
          </div>
        </section>

        <section className="border-y border-[var(--border-light)] bg-[var(--surface)] py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">RIB and hike stacking</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Two big outings is a stretch, not a timetable result
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Existing one-day notes already treat stacking a RIB with a long
              hike as something that needs a long, confirmed day. Ship duration
              alone cannot prove it. Confirm each outing separately.
            </p>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">First time in Skjolden</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Useful planning guides
            </h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  href: "/skjolden-port-guide",
                  title: "Cruise port guide",
                  text: "Village layout from the pier toward llama, RIB and valley outings.",
                },
                {
                  href: "/one-day-in-skjolden",
                  title: "One day in Skjolden",
                  text: "Sample shapes for short, classic and longer port calls.",
                },
                {
                  href: "/is-skjolden-worth-visiting",
                  title: "Is Skjolden worth visiting?",
                  text: "Honest context if you are deciding how to spend hours ashore.",
                },
                {
                  href: "/best-time-to-visit-skjolden",
                  title: "Best time to visit",
                  text: "Seasonal context for cruise months already published here.",
                },
                {
                  href: "/llama-tours-skjolden",
                  title: "Llama tours in Skjolden",
                  text: "Editorial hub for the signature llama-walk experience.",
                },
                {
                  href: "/sognefjord-adventures",
                  title: "Sognefjord adventures",
                  text: "RIB and fjord outing context from the innermost Sognefjord.",
                },
              ].map((item) => (
                <li
                  key={item.href}
                  className="border-t border-[var(--border-light)] pt-5"
                >
                  <h3 className="font-display text-lg font-semibold text-slate-900">
                    <Link
                      href={item.href}
                      className="underline-offset-4 hover:underline"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="planner"
          className="scroll-mt-24 border-y border-[var(--border-light)] bg-surface-muted py-14 sm:py-16"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Port-day planning</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Think in hours, valley light and return buffer
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Use published times as a planning start. This planner helps you
              think through the day. It does not invent llama-farm or RIB
              departure hours.
            </p>
            <div className="mt-8">
              <CruisePortDayPlanner />
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Norway beyond Skjolden</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Planning other Norwegian ports?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              For multi-port itineraries, the national planning site covers the
              wider Norway cruise picture.
            </p>
            <a
              href={siteConfig.nationalAuthorityUrl}
              className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--fjord)] underline-offset-4 hover:underline"
            >
              Norway Shore Excursions
            </a>
          </div>
        </section>

        <section className="border-y border-[var(--border-light)] bg-[var(--surface)] py-14 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <p className="section-eyebrow">FAQ</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Skjolden cruise questions
            </h2>
            <dl className="mt-8 space-y-6">
              {homeFaqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="font-semibold text-slate-900">{faq.question}</dt>
                  <dd className="mt-2 text-sm leading-6 text-slate-600">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="bg-navy py-14 text-white sm:py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Skjolden planning concierge
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
              {siteConfig.contactEmailVerified
                ? `Questions about shaping a Skjolden port day? Email ${siteConfig.contactEmail}.`
                : "A destination email is being prepared. Until then, use the schedule, one-day guide and excursion pages on this site."}
            </p>
            <Link href="/contact" className="btn-primary mt-6">
              Contact
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
