import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { fjordRibAdventureExcursion } from "@/lib/excursions/fjord-rib-adventure";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: fjordRibAdventureExcursion.metaTitle,
  description: fjordRibAdventureExcursion.metaDescription,
  path: fjordRibAdventureExcursion.path,
  ogImage: fjordRibAdventureExcursion.heroImage,
  ogImageAlt: fjordRibAdventureExcursion.heroImageAlt,
});

export default function Page() {
  return <ExcursionDetailPage excursion={fjordRibAdventureExcursion} />;
}
