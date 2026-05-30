import { imageAlts, siteImages } from "@/lib/site-images";

export const siteConfig = {
  name: "Skjolden Shore Excursions",
  url: "https://skjoldenshoreexcursions.com",
  locale: "en_GB",
  defaultDescription:
    "Independent Skjolden cruise port guides and shore excursion planning for passengers visiting the innermost Sognefjord, llama walks, fjord RIB adventures, waterfalls, and mountain scenery from Skjolden, Norway.",
  defaultOgImage: siteImages.hero,
  defaultOgImageAlt: imageAlts.hero,
  copyrightEntity: "Skjolden Shore Excursions",
  shoreExcursionsPath: "/excursions",
} as const;
