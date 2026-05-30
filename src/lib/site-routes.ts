export const siteRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/excursions", priority: 0.9, changeFrequency: "weekly" as const },
  {
    path: "/excursions/walk-with-llamas",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/fjord-rib-adventure",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/fjord-rib-waterfall-hike",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/skjolden-village-fjord-discovery",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/private-sognefjord-adventure",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/bike-and-hike-adventure",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/skjolden-port-guide",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/one-day-in-skjolden",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/is-skjolden-worth-visiting",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/best-time-to-visit-skjolden",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/llama-tours-skjolden",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/sognefjord-adventures",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
] as const;
