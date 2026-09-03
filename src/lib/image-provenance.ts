/**
 * Image provenance registry for Skjolden Shore Excursions.
 * NEW IMAGE SOURCING IS NOT AUTHORISED without verified rights.
 */

export type ImageProvenance = {
  key: string;
  urlOrPath: string;
  status:
    | "KEEP"
    | "REPLACE"
    | "WRONG_LOCATION"
    | "DUPLICATE"
    | "PROVENANCE_UNKNOWN"
    | "BROKEN";
  notes: string;
};

export const skjoldenImageProvenance: readonly ImageProvenance[] = [
  {
    key: "hero",
    urlOrPath: "/images/skjolden-llama-hero.png",
    status: "KEEP",
    notes:
      "Local Skjolden llama hero asset. Primary homepage and OG image. Do not replace with Flåm or generic fjord stock.",
  },
  {
    key: "skjoldenVillage",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/Skjolden_village.jpg",
    status: "KEEP",
    notes: "Wikimedia Commons. Skjolden village. Rights later-hardening.",
  },
  {
    key: "lustrafjord",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/5/56/Lustrafjord_%28114939%29.jpg",
    status: "KEEP",
    notes: "Wikimedia Commons. Lustrafjord near Skjolden. Rights later-hardening.",
  },
  {
    key: "sognefjord",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/1/1e/Sognefjord-Norway-April-2011.jpg",
    status: "KEEP",
    notes: "Wikimedia Commons. Sognefjord scenery. Rights later-hardening.",
  },
  {
    key: "feigumfossen",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Feigumfossen_i_Luster%2C_2017-1.jpg",
    status: "KEEP",
    notes:
      "Wikimedia Commons. Feigumfossen in Luster, relevant to Skjolden RIB/hike products. Rights later-hardening.",
  },
  {
    key: "skjoldenViewpoint",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/1/11/View_from_Skjolden_of_Lustrafjorden_with_a_beach_volley_court_at_dusk%2C_Luster%2C_2006.jpg",
    status: "KEEP",
    notes: "Wikimedia Commons. View from Skjolden. Rights later-hardening.",
  },
  {
    key: "llamaWalk",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/3/39/Lama_med_sau_p%C3%A5_Flygansv%C3%A6r.jpg",
    status: "KEEP",
    notes:
      "Wikimedia Commons llama farm photo (Flygansvær, not Skjolden farm). Used as illustrative stand-in for llama-walk hub cards only. Local hero remains the Skjolden llama asset. Rights later-hardening.",
  },
  {
    key: "ribBoat",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/0/07/Brann-_og_redningstjenestens_RIB_%288784100710%29.jpg",
    status: "KEEP",
    notes:
      "Wikimedia Commons Norwegian fire-and-rescue RIB, not a Skjolden product or Lustrafjord tour photo. Kept with honest alt text until a rights-cleared Skjolden RIB asset is authorised. Do not label as Skjolden excursion photography.",
  },
  {
    key: "flamPortCard",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/5/56/Fl%C3%A5m_fr%C3%A5_cruiseskip_ved_kai.jpg",
    status: "KEEP",
    notes:
      "Sister-port Flåm harbour card for explore-norwegian-ports only. Not Skjolden local imagery. Component is unused on the homepage. Do not use labelled as Skjolden.",
  },
  {
    key: "sisterPortCards",
    urlOrPath:
      "src/lib/site-images.ts bergen/stavanger/alesund/geiranger/olden/eidfjord/molde/honningsvag/kristiansand/nordfjordeid/hellesylt/trondheim cards",
    status: "KEEP",
    notes:
      "Unused related-port assets in explore-norwegian-ports.tsx. Not labelled as Skjolden local. Component is not on the homepage.",
  },
] as const;
