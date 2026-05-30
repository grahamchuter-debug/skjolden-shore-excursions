import type { ExcursionData } from "@/lib/excursion-types";
import {
  skjoldenExcursionBreadcrumbs,
  skjoldenExcursionRelatedLinks,
  standardNotIncluded,
  standardTimingAdvice,
} from "@/lib/excursion-shared";
import { imageAlts, siteImages } from "@/lib/site-images";

const title = "Fjord RIB Adventure";

export const fjordRibAdventureExcursion: ExcursionData = {
  slug: "fjord-rib-adventure",
  path: "/excursions/fjord-rib-adventure",
  title,
  headline: `${title} from Skjolden for Cruise Passengers`,
  lead: "The main Skjolden adventure tour on Lustrafjord with Sognefjord scenery, waterfalls, local history stops, Feigumfossen waterfall, and wildlife possibilities including porpoises and seals.",
  metaTitle: `${title} from Skjolden | Lustrafjord RIB Tour`,
  metaDescription:
    "Fjord RIB adventure from Skjolden on Lustrafjord with Sognefjord scenery, Feigumfossen waterfall, local history stops, and wildlife sightings. Exciting but cruise-friendly.",
  heroImage: siteImages.ribAdventureTour,
  heroImageAlt: imageAlts.ribAdventureTourCard,
  heroBadge: "Main Skjolden adventure tour",
  summary: {
    duration: "Approx. 3 hours",
    meetingPoint: "Skjolden harbour RIB departure point",
    returnReassurance:
      "RIB timings designed for typical Skjolden port schedules",
    bestFor:
      "Adventurous passengers who want fjord speed, scenery, and wildlife",
  },
  snapshotCards: [
    { label: "Activity level", value: "Moderate, RIB boat with short stops" },
    { label: "Highlights", value: "Lustrafjord, Feigumfossen, wildlife" },
    { label: "Wildlife", value: "Porpoises and seals possible" },
    { label: "Port call fit", value: "Ideal for 3 to 6 hour visits" },
  ],
  gallery: [
    { src: siteImages.ribAdventureTour, alt: imageAlts.ribAdventureTourCard },
    { src: siteImages.lustrafjord, alt: imageAlts.lustrafjord },
    { src: siteImages.feigumfossen, alt: imageAlts.feigumfossen },
    { src: siteImages.sognefjord, alt: imageAlts.sognefjord },
  ],
  highlights: [
    "RIB boat adventure on Lustrafjord",
    "Sognefjord mountain scenery",
    "Feigumfossen waterfall viewpoint",
    "Local history stops along the fjord",
    "Wildlife possibilities including porpoises and seals",
    "Exciting but cruise-friendly pacing",
  ],
  description: [
    "Skjolden's fjord RIB adventure puts you at water level on Lustrafjord, the innermost arm of the Sognefjord. From the harbour, the RIB cuts through turquoise glacial water toward steep mountain walls, hidden bays, and the dramatic Feigumfossen waterfall.",
    "Local guides share Sognefjord history at scenic stops while keeping the tour exciting without compromising return-to-ship timing. Wildlife sightings of porpoises and seals add to the adventure on many departures.",
    "This is the main adventure option for cruise passengers who want more than a village walk but need a tour that fits typical 3 to 6 hour port calls.",
  ],
  included: [
    "Guided RIB fjord adventure from Skjolden",
    "Lustrafjord and Sognefjord scenery route",
    "Feigumfossen waterfall stop",
    "Local history commentary",
    "Safety equipment and route paced for cruise timings",
  ],
  notIncluded: standardNotIncluded,
  timingAdvice: standardTimingAdvice,
  faqs: [
    {
      question: "How long is the fjord RIB adventure from Skjolden?",
      answer:
        "Most departures run approximately three hours, including RIB travel, waterfall stop, and history commentary.",
    },
    {
      question: "Can I see wildlife on the RIB tour?",
      answer:
        "Porpoises and seals are frequently spotted on Lustrafjord, though wildlife sightings are never guaranteed.",
    },
    {
      question: "Is the RIB tour suitable for short port calls?",
      answer:
        "Yes, when you have at least three hours ashore. It is the best adventure fit for 3 to 4 hour port windows.",
    },
  ],
  breadcrumbs: skjoldenExcursionBreadcrumbs(title),
  relatedLinks: [
    ...skjoldenExcursionRelatedLinks,
    {
      label: "RIB and waterfall hike combo",
      href: "/excursions/fjord-rib-waterfall-hike",
    },
    { label: "Sognefjord adventures guide", href: "/sognefjord-adventures" },
  ],
  bookingHref: "/excursions",
  bookingLabel: "Book this excursion",
};
