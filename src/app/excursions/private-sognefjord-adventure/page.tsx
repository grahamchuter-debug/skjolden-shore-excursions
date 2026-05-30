import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { privateSognefjordAdventureExcursion } from "@/lib/excursions/private-sognefjord-adventure";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: privateSognefjordAdventureExcursion.metaTitle,
  description: privateSognefjordAdventureExcursion.metaDescription,
  path: privateSognefjordAdventureExcursion.path,
  ogImage: privateSognefjordAdventureExcursion.heroImage,
  ogImageAlt: privateSognefjordAdventureExcursion.heroImageAlt,
});

export default function Page() {
  return <ExcursionDetailPage excursion={privateSognefjordAdventureExcursion} />;
}
