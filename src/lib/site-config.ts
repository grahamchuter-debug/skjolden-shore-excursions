import { imageAlts, siteImages } from "@/lib/site-images";

export const siteConfig = {
  name: "Skjolden Shore Excursions",
  url: "https://skjoldenshoreexcursions.com",
  locale: "en_GB",
  tagline: "Llamas, RIB, or a quiet village day on the innermost Sognefjord",
  defaultDescription:
    "Independent Skjolden cruise port guides and shore excursion planning for passengers visiting the innermost Sognefjord, llama walks, fjord RIB adventures, waterfalls, and mountain scenery from Skjolden, Norway.",
  defaultOgImage: siteImages.hero,
  defaultOgImageAlt: imageAlts.hero,
  copyrightEntity: "Skjolden Shore Excursions",
  shoreExcursionsPath: "/excursions",
  plannerPath: "/one-day-in-skjolden",
  schedulePath: "/ship-schedule",
  nationalAuthorityUrl: "https://norwayshoreexcursions.com",
  contactEmail: "hello@skjoldenshoreexcursions.com",
  contactEmailVerified: true,
} as const;
