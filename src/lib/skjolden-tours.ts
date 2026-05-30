import { imageAlts, siteImages } from "@/lib/site-images";

export type SkjoldenTourCard = {
  href: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  badge: string;
};

export const skjoldenTourCards: readonly SkjoldenTourCard[] = [
  {
    href: "/excursions/walk-with-llamas",
    image: siteImages.llamaTourCard,
    imageAlt: imageAlts.llamaTourCard,
    title: "Walk with Llamas in Skjolden",
    description:
      "Signature Skjolden experience with Skjolden Llamas, guided llama walk through Mørkrid Valley, river scenery, local farm experience, family-friendly and easy activity level, unique Norway cruise excursion.",
    badge: "Signature Experience",
  },
  {
    href: "/excursions/fjord-rib-adventure",
    image: siteImages.ribAdventureTour,
    imageAlt: imageAlts.ribAdventureTourCard,
    title: "Fjord RIB Adventure",
    description:
      "Main adventure tour on Lustrafjord with Sognefjord scenery, waterfalls, local history stops, Feigumfossen waterfall, wildlife possibilities including porpoises and seals, exciting but cruise-friendly.",
    badge: "Adventure Tour",
  },
  {
    href: "/excursions/fjord-rib-waterfall-hike",
    image: siteImages.ribWaterfallHikeTour,
    imageAlt: imageAlts.ribWaterfallHikeTourCard,
    title: "Fjord RIB Adventure and Waterfall Hike",
    description:
      "Active option combining RIB boat, Feigumfossen waterfall, hiking section, fjord scenery, designed for active cruise passengers with longer port calls.",
    badge: "Active Option",
  },
  {
    href: "/excursions/skjolden-village-fjord-discovery",
    image: siteImages.villageDiscoveryTour,
    imageAlt: imageAlts.villageDiscoveryTourCard,
    title: "Skjolden Village and Fjord Discovery",
    description:
      "Relaxed short-port option covering Skjolden village, harbour area, local history, Sognefjord scenery, and easy walking for passengers with limited time ashore.",
    badge: "Relaxed Option",
  },
  {
    href: "/excursions/private-sognefjord-adventure",
    image: siteImages.privateSognefjordTour,
    imageAlt: imageAlts.privateSognefjordTourCard,
    title: "Private Sognefjord Adventure",
    description:
      "Premium private guide with flexible itinerary, fjord viewpoints, village stops, waterfall opportunities, best for couples and families seeking a tailored Sognefjord day.",
    badge: "Premium Private",
  },
  {
    href: "/excursions/bike-and-hike-adventure",
    image: siteImages.bikeHikeTour,
    imageAlt: imageAlts.bikeHikeTourCard,
    title: "Bike and Hike Adventure from Skjolden",
    description:
      "Active experience combining cycling, waterfall routes, scenic countryside, and local nature for passengers who want to explore beyond the village on two wheels and foot.",
    badge: "Active Experience",
  },
] as const;

export const skjoldenTourListItems = skjoldenTourCards.map((tour) => ({
  name: tour.title,
  description: tour.description,
}));
