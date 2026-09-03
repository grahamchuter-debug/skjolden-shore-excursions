import type { ExcursionData } from "@/lib/excursion-types";
import {
  skjoldenExcursionBreadcrumbs,
  skjoldenExcursionRelatedLinks,
  standardNotIncluded,
  standardTimingAdvice,
} from "@/lib/excursion-shared";
import { imageAlts, siteImages } from "@/lib/site-images";

const title = "Fjord RIB Adventure and Waterfall Hike";

export const fjordRibWaterfallHikeExcursion: ExcursionData = {
  slug: "fjord-rib-waterfall-hike",
  path: "/excursions/fjord-rib-waterfall-hike",
  title,
  headline: `${title} from Skjolden for Cruise Passengers`,
  lead: "The active Skjolden option combining RIB boat travel, Feigumfossen waterfall, a hiking section, and fjord scenery for passengers with longer port calls.",
  metaTitle: `${title} from Skjolden`,
  metaDescription:
    "Active Skjolden shore excursion combining fjord RIB boat, Feigumfossen waterfall hike, and Sognefjord scenery. Designed for active cruise passengers with 6+ hours ashore.",
  heroImage: siteImages.ribWaterfallHikeTour,
  heroImageAlt: imageAlts.ribWaterfallHikeTourCard,
  heroBadge: "Active Skjolden shore excursion",
  summary: {
    duration: "Approx. 5 to 6 hours",
    meetingPoint: "Skjolden harbour RIB departure point",
    returnReassurance:
      "Full-day pacing with return margins for longer port calls",
    bestFor:
      "Active cruise passengers with 6 or more hours ashore",
  },
  snapshotCards: [
    { label: "Activity level", value: "Moderate to active hiking section" },
    { label: "Highlights", value: "RIB boat, Feigumfossen, fjord hike" },
    { label: "Duration", value: "Approx. 5 to 6 hours" },
    { label: "Port call fit", value: "Requires 6+ hours ashore" },
  ],
  gallery: [
    {
      src: siteImages.ribWaterfallHikeTour,
      alt: imageAlts.ribWaterfallHikeTourCard,
    },
    { src: siteImages.feigumfossen, alt: imageAlts.feigumfossen },
    { src: siteImages.ribBoat, alt: imageAlts.ribBoat },
    { src: siteImages.lustrafjord, alt: imageAlts.lustrafjord },
  ],
  highlights: [
    "RIB boat fjord travel on Lustrafjord",
    "Feigumfossen waterfall close-up",
    "Guided hiking section with fjord views",
    "Sognefjord mountain scenery",
    "Active experience for fit passengers",
    "Best for 6+ hour port calls",
  ],
  description: [
    "This combined RIB and hike tour is Skjolden's most active shore excursion. You start with a high-speed RIB journey across Lustrafjord before disembarking for a guided hike toward Feigumfossen, one of the region's most impressive waterfalls.",
    "The hiking section adds depth to the fjord experience, taking you through forest paths and viewpoints that RIB-only tours cannot reach. Expect moderate terrain with rewarding waterfall and mountain panoramas.",
    "Designed for cruise passengers with six or more hours ashore, this tour demands reasonable fitness but delivers the fullest Sognefjord adventure available from Skjolden.",
  ],
  included: [
    "RIB boat transfer on Lustrafjord",
    "Guided hike to Feigumfossen waterfall area",
    "Fjord and mountain scenery route",
    "Safety equipment and route paced for longer port calls",
  ],
  notIncluded: standardNotIncluded,
  timingAdvice: [
    ...standardTimingAdvice,
    "This tour requires at least six hours ashore. Do not book on short port calls.",
    "Wear sturdy hiking boots and waterproof layers for the waterfall hike section.",
  ],
  faqs: [
    {
      question: "How long is the RIB and waterfall hike tour?",
      answer:
        "Most departures run approximately five to six hours, including RIB travel, the hiking section, and return to Skjolden.",
    },
    {
      question: "What fitness level is required?",
      answer:
        "Moderate fitness is recommended. The hiking section includes uneven terrain near the waterfall.",
    },
    {
      question: "Can I do this tour on a 4-hour port call?",
      answer:
        "No. This active combination requires at least six hours ashore. Consider the standard Fjord RIB Adventure for shorter schedules.",
    },
  ],
  breadcrumbs: skjoldenExcursionBreadcrumbs(title),
  relatedLinks: [
    ...skjoldenExcursionRelatedLinks,
    {
      label: "Fjord RIB Adventure",
      href: "/excursions/fjord-rib-adventure",
    },
  ],
  bookingHref: "/excursions",
  bookingLabel: "Explore this excursion",
};
