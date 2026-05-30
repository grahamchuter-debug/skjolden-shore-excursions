export type PlannerExcursionLink = {
  label: string;
  href?: string;
};

export type PortTimeTier = {
  minHours: number;
  maxHours: number | null;
  label: string;
  confidenceScore: number;
  confidenceLabel: string;
  confidenceMessage: string;
  excursions: readonly PlannerExcursionLink[];
  dayPlan: readonly string[];
  conversionNote?: string;
};

export type CruisePortDayPlannerConfig = {
  portName: string;
  heading: string;
  subtitle: string;
  supportingCopy: string;
  returnBufferNote: string;
  tiers: readonly PortTimeTier[];
};

export const skjoldenPortDayPlannerConfig: CruisePortDayPlannerConfig = {
  portName: "Skjolden",
  heading: "Skjolden Cruise Smart Planner™",
  subtitle: "Plan your shore excursions around your actual time in port.",
  supportingCopy:
    "Built specifically for cruise passengers calling at Skjolden, the innermost village on the Sognefjord.",
  returnBufferNote:
    "Always confirm your cruise line's official all-aboard time, as this may be earlier than the published departure time.",
  tiers: [
    {
      minHours: 0,
      maxHours: 3,
      label: "Under 3 hours",
      confidenceScore: 75,
      confidenceLabel: "Short Port Call",
      confidenceMessage:
        "Ideal for the signature llama walk or a relaxed village and fjord discovery tour with comfortable return margins.",
      excursions: [
        {
          label: "Walk with Llamas in Skjolden",
          href: "/excursions/walk-with-llamas",
        },
        {
          label: "Skjolden Village and Fjord Discovery",
          href: "/excursions/skjolden-village-fjord-discovery",
        },
      ],
      dayPlan: [
        "Disembark promptly and head to your excursion meeting point in Skjolden village",
        "Choose the llama walk or village discovery tour for a relaxed short port day",
        "Allow time for harbour and fjord photos before return",
        "Be back at the gangway by your recommended return time",
      ],
    },
    {
      minHours: 3,
      maxHours: 4,
      label: "3 to 4 hours",
      confidenceScore: 85,
      confidenceLabel: "Good Port Call",
      confidenceMessage:
        "Enough time for a fjord RIB adventure or the signature llama walk with comfortable return margins.",
      excursions: [
        {
          label: "Fjord RIB Adventure",
          href: "/excursions/fjord-rib-adventure",
        },
        {
          label: "Walk with Llamas in Skjolden",
          href: "/excursions/walk-with-llamas",
        },
      ],
      dayPlan: [
        "Arrive in Skjolden and confirm your excursion departure time",
        "Morning or early afternoon: RIB fjord tour or llama walk",
        "Allow brief village time only if return times are confirmed",
        "Keep 45 minutes before all aboard for pier access",
      ],
    },
    {
      minHours: 4,
      maxHours: 6,
      label: "4 to 6 hours",
      confidenceScore: 90,
      confidenceLabel: "Strong Port Call",
      confidenceMessage:
        "Ideal for fjord RIB adventures and the bike and hike active option with mountain and waterfall scenery.",
      excursions: [
        {
          label: "Fjord RIB Adventure",
          href: "/excursions/fjord-rib-adventure",
        },
        {
          label: "Bike and Hike Adventure from Skjolden",
          href: "/excursions/bike-and-hike-adventure",
        },
      ],
      dayPlan: [
        "Confirm your excursion departure near Skjolden village",
        "Morning: RIB fjord tour or bike and hike through waterfall routes",
        "Pack layers for changing fjord weather",
        "Return to port by recommended return time",
      ],
    },
    {
      minHours: 6,
      maxHours: null,
      label: "6+ hours",
      confidenceScore: 95,
      confidenceLabel: "Excellent Full Day",
      confidenceMessage:
        "Ideal for the RIB and waterfall hike combination or a private Sognefjord adventure with flexible pacing.",
      conversionNote:
        "Most cruise passengers with 6+ hours in Skjolden choose the Fjord RIB Adventure and Waterfall Hike or the Private Sognefjord Adventure.",
      excursions: [
        {
          label: "Fjord RIB Adventure and Waterfall Hike",
          href: "/excursions/fjord-rib-waterfall-hike",
        },
        {
          label: "Private Sognefjord Adventure",
          href: "/excursions/private-sognefjord-adventure",
        },
      ],
      dayPlan: [
        "Arrive early and confirm your tour departure",
        "Morning: RIB boat to Feigumfossen with hiking section",
        "Midday: Private fjord viewpoints or village stops on premium tours",
        "Afternoon: Flexible pacing with waterfall and photography time",
        "Keep the final hour free near the cruise port for a calm return",
      ],
    },
  ],
};

export const plannerInterestGroups = [
  {
    title: "Family",
    items: [
      {
        label: "Walk with Llamas in Skjolden",
        href: "/excursions/walk-with-llamas",
      },
      {
        label: "Skjolden Village and Fjord Discovery",
        href: "/excursions/skjolden-village-fjord-discovery",
      },
    ],
  },
  {
    title: "Adventure",
    items: [
      {
        label: "Fjord RIB Adventure",
        href: "/excursions/fjord-rib-adventure",
      },
      {
        label: "Fjord RIB Adventure and Waterfall Hike",
        href: "/excursions/fjord-rib-waterfall-hike",
      },
      {
        label: "Bike and Hike Adventure from Skjolden",
        href: "/excursions/bike-and-hike-adventure",
      },
    ],
  },
  {
    title: "Photography",
    items: [
      {
        label: "Fjord RIB Adventure",
        href: "/excursions/fjord-rib-adventure",
      },
      {
        label: "Private Sognefjord Adventure",
        href: "/excursions/private-sognefjord-adventure",
      },
    ],
  },
] as const;

export const RECOMMENDED_RETURN_BUFFER_MINUTES = 45;
export const LATEST_COMFORTABLE_RETURN_BUFFER_MINUTES = 30;

export function parseTimeToMinutes(time: string): number | null {
  const match = /^(\d{1,2}):(\d{2})$/.exec(time.trim());

  if (!match) {
    return null;
  }

  const hours = Number(match[1]);
  const minutes = Number(match[2]);

  if (hours > 23 || minutes > 59) {
    return null;
  }

  return hours * 60 + minutes;
}

export function formatTimeLabel(time: string): string {
  const minutes = parseTimeToMinutes(time);
  if (minutes === null) {
    return time;
  }

  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
}

export function subtractMinutesFromTime(
  time: string,
  subtractMinutes: number,
): string | null {
  const totalMinutes = parseTimeToMinutes(time);
  if (totalMinutes === null) {
    return null;
  }

  let result = totalMinutes - subtractMinutes;
  if (result < 0) {
    result += 24 * 60;
  }

  const hours = Math.floor(result / 60) % 24;
  const minutes = result % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

export function calculatePortMinutes(
  arrival: string,
  departure: string,
): number | null {
  const arrivalMinutes = parseTimeToMinutes(arrival);
  const departureMinutes = parseTimeToMinutes(departure);

  if (arrivalMinutes === null || departureMinutes === null) {
    return null;
  }

  let diff = departureMinutes - arrivalMinutes;

  if (diff <= 0) {
    diff += 24 * 60;
  }

  return diff;
}

export function formatPortDuration(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours === 0) {
    return `${minutes} minute${minutes === 1 ? "" : "s"}`;
  }

  if (minutes === 0) {
    return `${hours} hour${hours === 1 ? "" : "s"}`;
  }

  return `${hours} hour${hours === 1 ? "" : "s"} ${minutes} minute${minutes === 1 ? "" : "s"}`;
}

export function getTierForPortMinutes(
  totalMinutes: number,
  tiers: readonly PortTimeTier[],
): PortTimeTier {
  const hours = totalMinutes / 60;

  return (
    tiers.find((tier) => {
      const meetsMinimum = hours >= tier.minHours;
      const belowMaximum = tier.maxHours === null || hours < tier.maxHours;
      return meetsMinimum && belowMaximum;
    }) ?? tiers[tiers.length - 1]
  );
}

export function getReturnGuidance(departure: string) {
  return {
    departureLabel: formatTimeLabel(departure),
    recommendedReturn: subtractMinutesFromTime(
      departure,
      RECOMMENDED_RETURN_BUFFER_MINUTES,
    ),
    latestComfortableReturn: subtractMinutesFromTime(
      departure,
      LATEST_COMFORTABLE_RETURN_BUFFER_MINUTES,
    ),
  };
}

export function getConfidenceTone(score: number): {
  badge: string;
  bar: string;
} {
  if (score >= 90) {
    return { badge: "bg-emerald-100 text-emerald-800", bar: "bg-emerald-500" };
  }
  if (score >= 65) {
    return { badge: "bg-amber-100 text-amber-800", bar: "bg-amber-500" };
  }
  return { badge: "bg-orange-100 text-orange-800", bar: "bg-orange-500" };
}
