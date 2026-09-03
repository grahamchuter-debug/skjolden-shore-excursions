import type { ExcursionData } from "@/lib/excursion-types";
import {
  skjoldenExcursionBreadcrumbs,
  skjoldenExcursionRelatedLinks,
  standardNotIncluded,
  standardTimingAdvice,
} from "@/lib/excursion-shared";
import { imageAlts, siteImages } from "@/lib/site-images";

const title = "Skjolden Village and Fjord Discovery";

export const skjoldenVillageFjordDiscoveryExcursion: ExcursionData = {
  slug: "skjolden-village-fjord-discovery",
  path: "/excursions/skjolden-village-fjord-discovery",
  title,
  headline: `${title} for Cruise Passengers`,
  lead: "The relaxed Skjolden short-port option covering village, harbour area, local history, Sognefjord scenery, and easy walking for passengers with limited time ashore.",
  metaTitle: title,
  metaDescription:
    "Relaxed Skjolden village and fjord discovery shore excursion with harbour walk, local history, Sognefjord scenery, and easy activity level. Ideal for short port calls.",
  heroImage: siteImages.villageDiscoveryTour,
  heroImageAlt: imageAlts.villageDiscoveryTourCard,
  heroBadge: "Relaxed short-port option",
  summary: {
    duration: "Approx. 2 hours",
    meetingPoint: "Skjolden village near cruise pier",
    returnReassurance:
      "Short tour with generous return margins for tight schedules",
    bestFor:
      "Passengers with under 3 hours who want an easy introduction to Skjolden",
  },
  snapshotCards: [
    { label: "Activity level", value: "Easy village and harbour walking" },
    { label: "Highlights", value: "Village, harbour, Sognefjord views" },
    { label: "Duration", value: "Approx. 2 hours" },
    { label: "Port call fit", value: "Ideal for under 3 hour visits" },
  ],
  gallery: [
    {
      src: siteImages.villageDiscoveryTour,
      alt: imageAlts.villageDiscoveryTourCard,
    },
    { src: siteImages.skjoldenVillage, alt: imageAlts.skjoldenVillage },
    { src: siteImages.lustrafjord, alt: imageAlts.lustrafjord },
    { src: siteImages.sognefjord, alt: imageAlts.sognefjord },
  ],
  highlights: [
    "Skjolden village and harbour area",
    "Local history and culture introduction",
    "Sognefjord scenery from village viewpoints",
    "Easy walking throughout",
    "Relaxed pace for short port calls",
    "Return-to-ship friendly timing",
  ],
  description: [
    "Not every Skjolden port call allows time for RIB adventures or valley hikes. This village and fjord discovery tour gives you the essentials: harbour walks, local history, and Sognefjord panoramas without leaving the village area.",
    "Skjolden sits at the innermost point of the Sognefjord, and even a gentle stroll reveals why this tiny village punches above its weight. Guides share stories of fjord life, cruise history, and the landscapes that surround you.",
    "Perfect for passengers with under three hours ashore or anyone who prefers a relaxed, easy walking experience.",
  ],
  included: [
    "Guided Skjolden village and harbour walk",
    "Local history commentary",
    "Sognefjord viewpoint stops",
    "Route paced for short port call schedules",
  ],
  notIncluded: standardNotIncluded,
  timingAdvice: standardTimingAdvice,
  faqs: [
    {
      question: "How long is the village discovery tour?",
      answer:
        "Most departures run approximately two hours, keeping generous return margins for short port calls.",
    },
    {
      question: "Is this suitable for mobility-limited passengers?",
      answer:
        "Yes. This is an easy walking tour on mostly flat village paths and harbour areas.",
    },
    {
      question: "Can I combine this with independent village time?",
      answer:
        "Yes. The short duration leaves room for café stops or additional harbour photos before returning to your ship.",
    },
  ],
  breadcrumbs: skjoldenExcursionBreadcrumbs(title),
  relatedLinks: skjoldenExcursionRelatedLinks,
  bookingHref: "/excursions",
  bookingLabel: "Explore this excursion",
};
