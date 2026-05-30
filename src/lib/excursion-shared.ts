import type { ExcursionRelatedLink } from "@/lib/excursion-types";

export const skjoldenExcursionRelatedLinks: readonly ExcursionRelatedLink[] = [
  { label: "Skjolden port guide", href: "/skjolden-port-guide" },
  { label: "One day in Skjolden", href: "/one-day-in-skjolden" },
  { label: "Cruise Smart Planner", href: "/#planner" },
];

export const skjoldenExcursionBreadcrumbs = (tourLabel: string) =>
  [
    { label: "Home", href: "/" },
    { label: "Excursions", href: "/excursions" },
    { label: tourLabel },
  ] as const;

export const standardNotIncluded = [
  "Food, drinks, and personal purchases unless stated",
  "Optional gratuities",
  "Independent time beyond the tour schedule",
] as const;

export const standardTimingAdvice = [
  "Confirm your cruise line's all-aboard time the morning you arrive in Skjolden.",
  "Disembark promptly on busy Sognefjord cruise days.",
  "Keep 30 to 45 minutes before all aboard to reach the pier or tender point.",
  "Fjord weather can change quickly, pack waterproof layers and sturdy footwear.",
] as const;
