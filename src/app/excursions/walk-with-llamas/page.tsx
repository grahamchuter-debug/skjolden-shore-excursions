import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { walkWithLlamasExcursion } from "@/lib/excursions/walk-with-llamas";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: walkWithLlamasExcursion.metaTitle,
  description: walkWithLlamasExcursion.metaDescription,
  path: walkWithLlamasExcursion.path,
  ogImage: walkWithLlamasExcursion.heroImage,
  ogImageAlt: walkWithLlamasExcursion.heroImageAlt,
});

export default function Page() {
  return <ExcursionDetailPage excursion={walkWithLlamasExcursion} />;
}
