import type { ExcursionData } from "@/lib/excursion-types";
import {
  skjoldenExcursionBreadcrumbs,
  skjoldenExcursionRelatedLinks,
  standardNotIncluded,
  standardTimingAdvice,
} from "@/lib/excursion-shared";
import { imageAlts, siteImages } from "@/lib/site-images";

const title = "Private Sognefjord Adventure";

export const privateSognefjordAdventureExcursion: ExcursionData = {
  slug: "private-sognefjord-adventure",
  path: "/excursions/private-sognefjord-adventure",
  title,
  headline: `${title} from Skjolden for Cruise Passengers`,
  lead: "Premium private guide with flexible itinerary, fjord viewpoints, village stops, waterfall opportunities, best for couples and families seeking a tailored Sognefjord day.",
  metaTitle: `${title} from Skjolden | Private Fjord Tour`,
  metaDescription:
    "Private Sognefjord adventure from Skjolden with flexible itinerary, fjord viewpoints, village stops, and waterfall opportunities. Premium tour for couples and families.",
  heroImage: siteImages.privateSognefjordTour,
  heroImageAlt: imageAlts.privateSognefjordTourCard,
  heroBadge: "Premium private Skjolden tour",
  summary: {
    duration: "Approx. 6 to 8 hours, flexible",
    meetingPoint: "Skjolden village, arranged with your private guide",
    returnReassurance:
      "Private pacing with return margins tailored to your ship schedule",
    bestFor:
      "Couples and families wanting a personalised Sognefjord experience",
  },
  snapshotCards: [
    { label: "Activity level", value: "Flexible, tailored to your group" },
    { label: "Highlights", value: "Fjord viewpoints, villages, waterfalls" },
    { label: "Format", value: "Private guide, custom itinerary" },
    { label: "Port call fit", value: "Ideal for 6+ hour visits" },
  ],
  gallery: [
    {
      src: siteImages.privateSognefjordTour,
      alt: imageAlts.privateSognefjordTourCard,
    },
    { src: siteImages.sognefjord, alt: imageAlts.sognefjord },
    { src: siteImages.lustrafjord, alt: imageAlts.lustrafjord },
    { src: siteImages.feigumfossen, alt: imageAlts.feigumfossen },
  ],
  highlights: [
    "Private guide with flexible itinerary",
    "Fjord viewpoints across Lustrafjord and Sognefjord",
    "Village stops including Skjolden and surrounding hamlets",
    "Waterfall opportunities including Feigumfossen area",
    "Best for couples and families",
    "Photography-friendly pacing",
  ],
  description: [
    "A private Sognefjord adventure lets you design the day around your interests rather than following a fixed coach schedule. Your private guide adapts the route to your group's pace, whether that means extra time at fjord viewpoints, village exploration, or waterfall photography.",
    "Skjolden's position at the innermost Sognefjord gives private tours access to some of Norway's most dramatic scenery without the crowds of larger cruise ports. Couples and families particularly value the flexibility to pause where the light is best.",
    "This premium option suits passengers with six or more hours ashore who want the fullest, most personalised Skjolden experience available.",
  ],
  included: [
    "Private guide for your group",
    "Flexible Sognefjord itinerary",
    "Fjord viewpoint and village stops",
    "Waterfall opportunities as time allows",
    "Route paced to your ship's schedule",
  ],
  notIncluded: standardNotIncluded,
  timingAdvice: standardTimingAdvice,
  faqs: [
    {
      question: "How long is the private Sognefjord adventure?",
      answer:
        "Most private tours run six to eight hours with flexible pacing. Your guide adjusts to your all-aboard time.",
    },
    {
      question: "Can we customise the itinerary?",
      answer:
        "Yes. Private tours are designed around your interests, whether that is photography, village culture, or waterfall hiking.",
    },
    {
      question: "Is this better than group RIB tours?",
      answer:
        "Private tours offer flexibility and personalised pacing. Group RIB tours are more adventurous and faster-paced. Many guests choose based on group size and interests.",
    },
  ],
  breadcrumbs: skjoldenExcursionBreadcrumbs(title),
  relatedLinks: [
    ...skjoldenExcursionRelatedLinks,
    { label: "Sognefjord adventures guide", href: "/sognefjord-adventures" },
  ],
  bookingHref: "/excursions",
  bookingLabel: "Book this excursion",
};
