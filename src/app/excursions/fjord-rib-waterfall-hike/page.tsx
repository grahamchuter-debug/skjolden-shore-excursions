import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { fjordRibWaterfallHikeExcursion } from "@/lib/excursions/fjord-rib-waterfall-hike";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: fjordRibWaterfallHikeExcursion.metaTitle,
  description: fjordRibWaterfallHikeExcursion.metaDescription,
  path: fjordRibWaterfallHikeExcursion.path,
  ogImage: fjordRibWaterfallHikeExcursion.heroImage,
  ogImageAlt: fjordRibWaterfallHikeExcursion.heroImageAlt,
});

export default function Page() {
  return <ExcursionDetailPage excursion={fjordRibWaterfallHikeExcursion} />;
}
