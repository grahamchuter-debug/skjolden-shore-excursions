import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { bikeAndHikeAdventureExcursion } from "@/lib/excursions/bike-and-hike-adventure";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: bikeAndHikeAdventureExcursion.metaTitle,
  description: bikeAndHikeAdventureExcursion.metaDescription,
  path: bikeAndHikeAdventureExcursion.path,
  ogImage: bikeAndHikeAdventureExcursion.heroImage,
  ogImageAlt: bikeAndHikeAdventureExcursion.heroImageAlt,
});

export default function Page() {
  return <ExcursionDetailPage excursion={bikeAndHikeAdventureExcursion} />;
}
