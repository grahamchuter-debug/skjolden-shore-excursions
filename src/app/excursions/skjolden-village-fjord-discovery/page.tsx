import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { skjoldenVillageFjordDiscoveryExcursion } from "@/lib/excursions/skjolden-village-fjord-discovery";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: skjoldenVillageFjordDiscoveryExcursion.metaTitle,
  description: skjoldenVillageFjordDiscoveryExcursion.metaDescription,
  path: skjoldenVillageFjordDiscoveryExcursion.path,
  ogImage: skjoldenVillageFjordDiscoveryExcursion.heroImage,
  ogImageAlt: skjoldenVillageFjordDiscoveryExcursion.heroImageAlt,
});

export default function Page() {
  return <ExcursionDetailPage excursion={skjoldenVillageFjordDiscoveryExcursion} />;
}
