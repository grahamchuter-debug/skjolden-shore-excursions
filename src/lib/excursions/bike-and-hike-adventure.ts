import type { ExcursionData } from "@/lib/excursion-types";
import {
  skjoldenExcursionBreadcrumbs,
  skjoldenExcursionRelatedLinks,
  standardNotIncluded,
  standardTimingAdvice,
} from "@/lib/excursion-shared";
import { imageAlts, siteImages } from "@/lib/site-images";

const title = "Bike and Hike Adventure from Skjolden";

export const bikeAndHikeAdventureExcursion: ExcursionData = {
  slug: "bike-and-hike-adventure",
  path: "/excursions/bike-and-hike-adventure",
  title,
  headline: `${title} for Cruise Passengers`,
  lead: "Active Skjolden experience combining cycling, waterfall routes, scenic countryside, and local nature for passengers who want to explore beyond the village.",
  metaTitle: title,
  metaDescription:
    "Bike and hike adventure from Skjolden combining cycling, waterfall routes, scenic countryside, and local nature. Active shore excursion for 4 to 6 hour port calls.",
  heroImage: siteImages.bikeHikeTour,
  heroImageAlt: imageAlts.bikeHikeTourCard,
  heroBadge: "Active Skjolden shore excursion",
  summary: {
    duration: "Approx. 4 to 5 hours",
    meetingPoint: "Skjolden village bike hire point",
    returnReassurance:
      "Active tour timed for 4 to 6 hour port call schedules",
    bestFor:
      "Fit, active passengers who enjoy cycling and hiking",
  },
  snapshotCards: [
    { label: "Activity level", value: "Active cycling and hiking" },
    { label: "Highlights", value: "Waterfall routes, countryside, nature" },
    { label: "Duration", value: "Approx. 4 to 5 hours" },
    { label: "Port call fit", value: "Ideal for 4 to 6 hour visits" },
  ],
  gallery: [
    { src: siteImages.bikeHikeTour, alt: imageAlts.bikeHikeTourCard },
    { src: siteImages.morKridValley, alt: imageAlts.morKridValley },
    { src: siteImages.feigumfossen, alt: imageAlts.feigumfossen },
    { src: siteImages.mountainScenery, alt: imageAlts.mountainScenery },
  ],
  highlights: [
    "Cycling through scenic Skjolden countryside",
    "Waterfall routes with mountain views",
    "Guided hiking sections",
    "Local nature and valley scenery",
    "Active experience for fit passengers",
    "Best for 4 to 6 hour port calls",
  ],
  description: [
    "Skjolden's quiet roads and valley paths make it ideal for a bike and hike combination. This active tour starts with cycling through countryside lanes before transitioning to guided hiking on waterfall routes with mountain panoramas.",
    "The mix of two wheels and footpaths covers more ground than walking alone while keeping the experience intimate and nature-focused. Expect moderate fitness requirements and rewarding views at every stop.",
    "Designed for cruise passengers with four to six hours ashore who want an active alternative to RIB tours or village walks.",
  ],
  included: [
    "Bike hire and guided cycling route",
    "Guided hiking on waterfall paths",
    "Scenic countryside and nature commentary",
    "Safety equipment and route paced for cruise timings",
  ],
  notIncluded: standardNotIncluded,
  timingAdvice: [
    ...standardTimingAdvice,
    "Moderate fitness required for cycling and hiking sections.",
    "Wear comfortable active clothing and bring water.",
  ],
  faqs: [
    {
      question: "How long is the bike and hike adventure?",
      answer:
        "Most departures run approximately four to five hours, including cycling, hiking, and return to Skjolden.",
    },
    {
      question: "What fitness level is required?",
      answer:
        "Moderate fitness is recommended. You will cycle on country roads and hike on uneven waterfall paths.",
    },
    {
      question: "Is bike experience required?",
      answer:
        "Basic cycling ability is needed. The routes use quiet country lanes rather than busy roads.",
    },
  ],
  breadcrumbs: skjoldenExcursionBreadcrumbs(title),
  relatedLinks: skjoldenExcursionRelatedLinks,
  bookingHref: "/excursions",
  bookingLabel: "Book this excursion",
};
