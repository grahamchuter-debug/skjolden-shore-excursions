import type { ExcursionData } from "@/lib/excursion-types";
import {
  skjoldenExcursionBreadcrumbs,
  skjoldenExcursionRelatedLinks,
  standardNotIncluded,
  standardTimingAdvice,
} from "@/lib/excursion-shared";
import { imageAlts, siteImages } from "@/lib/site-images";

const title = "Walk with Llamas in Skjolden";

export const walkWithLlamasExcursion: ExcursionData = {
  slug: "walk-with-llamas",
  path: "/excursions/walk-with-llamas",
  title,
  headline: `${title} for Cruise Passengers`,
  lead: "The signature Skjolden shore excursion with Skjolden Llamas, a guided llama walk through Mørkrid Valley, river scenery, local farm experience, and family-friendly easy walking.",
  metaTitle: title,
  metaDescription:
    "Walk with llamas in Skjolden on a guided llama tour through Mørkrid Valley with river scenery, local farm experience, family-friendly easy activity level. Unique Norway cruise excursion.",
  heroImage: siteImages.llamaTourCard,
  heroImageAlt: imageAlts.llamaTourCard,
  heroBadge: "Signature Skjolden shore excursion",
  summary: {
    duration: "Approx. 2 hours 30 minutes",
    meetingPoint: "Skjolden Llamas farm near Skjolden village",
    returnReassurance:
      "Tour timings designed for typical Skjolden port schedules",
    bestFor:
      "Families and first-time visitors seeking a unique, gentle nature experience",
  },
  snapshotCards: [
    { label: "Activity level", value: "Easy, gentle walking with llamas" },
    { label: "Highlights", value: "Mørkrid Valley, river scenery, farm visit" },
    { label: "Operator", value: "Skjolden Llamas guided experience" },
    { label: "Port call fit", value: "Ideal for under 3 to 4 hour visits" },
  ],
  gallery: [
    { src: siteImages.llamaTourCard, alt: imageAlts.llamaTourCard },
    { src: siteImages.morKridValley, alt: imageAlts.morKridValley },
    { src: siteImages.llamaWalk, alt: imageAlts.llamaWalk },
    { src: siteImages.mountainScenery, alt: imageAlts.mountainScenery },
  ],
  highlights: [
    "Skjolden Llamas guided llama walk",
    "Mørkrid Valley with river scenery",
    "Local farm experience",
    "Family-friendly easy activity level",
    "Unique Norway cruise excursion",
    "Gentle pace suited to all ages",
  ],
  description: [
    "Walking with llamas through Mørkrid Valley is the experience that sets Skjolden apart from every other Norway cruise port. Skjolden Llamas leads small groups along riverside paths where glacier-fed water, mountain walls, and meadow scenery create an unforgettable backdrop.",
    "This is not a rushed coach tour. The llamas set a gentle pace through the valley, giving you time to photograph the landscape, learn about local farming, and enjoy one of Norway's most unexpectedly charming shore excursions.",
    "Designed for cruise passengers with easy activity levels, the walk suits families, couples, and anyone who wants something genuinely different from standard fjord sightseeing.",
  ],
  included: [
    "Guided llama walk with Skjolden Llamas",
    "Mørkrid Valley riverside route",
    "Local farm experience introduction",
    "Route paced for typical cruise port timings",
  ],
  notIncluded: standardNotIncluded,
  timingAdvice: standardTimingAdvice,
  faqs: [
    {
      question: "How long is the llama walk from Skjolden?",
      answer:
        "Most departures run approximately two and a half hours, including farm introduction, the valley walk, and return.",
    },
    {
      question: "Is the llama walk suitable for children?",
      answer:
        "Yes. This is a family-friendly experience with an easy activity level and gentle walking pace.",
    },
    {
      question: "Why is this the signature Skjolden excursion?",
      answer:
        "Llama walks are unique to Skjolden among Norway cruise ports, combining authentic farm culture with dramatic Mørkrid Valley scenery.",
    },
  ],
  breadcrumbs: skjoldenExcursionBreadcrumbs(title),
  relatedLinks: [
    ...skjoldenExcursionRelatedLinks,
    { label: "Llama tours Skjolden guide", href: "/llama-tours-skjolden" },
  ],
  bookingHref: "/excursions",
  bookingLabel: "Explore this excursion",
};
