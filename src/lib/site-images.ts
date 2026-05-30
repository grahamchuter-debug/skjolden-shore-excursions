/** Verified Wikimedia Commons URLs (resolved via Commons API) and local hero asset. */

const skjoldenHero = "/images/skjolden-llama-hero.png";

const skjoldenVillage =
  "https://upload.wikimedia.org/wikipedia/commons/3/3a/Skjolden_village.jpg";
const lustrafjord =
  "https://upload.wikimedia.org/wikipedia/commons/5/56/Lustrafjord_%28114939%29.jpg";
const lustrafjordPanorama =
  "https://upload.wikimedia.org/wikipedia/commons/a/a5/Panorama_of_Lustrafjord.jpg";
const sognefjord =
  "https://upload.wikimedia.org/wikipedia/commons/1/1e/Sognefjord-Norway-April-2011.jpg";
const feigumfossen =
  "https://upload.wikimedia.org/wikipedia/commons/9/9e/Feigumfossen_i_Luster%2C_2017-1.jpg";
const feigefossen2023 =
  "https://upload.wikimedia.org/wikipedia/commons/f/fe/Feigefossen_2023_01.jpg";
const skjoldenViewpoint =
  "https://upload.wikimedia.org/wikipedia/commons/1/11/View_from_Skjolden_of_Lustrafjorden_with_a_beach_volley_court_at_dusk%2C_Luster%2C_2006.jpg";
const lustrafjordMountains =
  "https://upload.wikimedia.org/wikipedia/commons/9/9d/Sogn_og_Fjordane_Lustrafjord_13.JPG";
const ribBoat =
  "https://upload.wikimedia.org/wikipedia/commons/0/07/Brann-_og_redningstjenestens_RIB_%288784100710%29.jpg";
const llamaWalk =
  "https://upload.wikimedia.org/wikipedia/commons/3/39/Lama_med_sau_p%C3%A5_Flygansv%C3%A6r.jpg";

export const siteImages = {
  hero: skjoldenHero,
  skjoldenVillage,
  lustrafjord,
  sognefjord,
  feigumfossen,
  feigefossen2023,
  skjoldenViewpoint,
  morKridValley: skjoldenViewpoint,
  mountainScenery: lustrafjordPanorama,
  lustrafjordMountains,
  ribBoat,
  llamaWalk,
  portGuide: skjoldenVillage,
  worthVisiting: lustrafjordPanorama,
  oneDay: sognefjord,
  bestTime: lustrafjordPanorama,
  llamaTours: llamaWalk,
  sognefjordAdventures: lustrafjord,
  llamaTourCard: skjoldenHero,
  ribAdventureTour: ribBoat,
  ribWaterfallHikeTour: feigumfossen,
  villageDiscoveryTour: skjoldenVillage,
  privateSognefjordTour: sognefjord,
  bikeHikeTour: skjoldenViewpoint,
  flamPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/5/56/Fl%C3%A5m_fr%C3%A5_cruiseskip_ved_kai.jpg",
  bergenPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/f/fe/Harbour_Bergen_Norway_2009_5.jpg",
  stavangerPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/3/3a/Stavanger_havn.jpg",
  alesundPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/c/c7/%C3%85lesund_Hafen_lub_2025-07-28_img04.jpg",
  geirangerPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/1/10/Flydalsjuvet_Geiranger_Geirangerfjorden.jpg",
  oldenPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/c/ca/Briksdalsbreen_Glacier_-Norway.jpg",
  eidfjordPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/b/b6/Voringsfossen_waterfall_at_Eidfjord%2C_Norway.jpg",
  moldePortCard:
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Molde_Hafen.jpg",
  honningsvagPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/a/af/Globe_Monument_at_Nordkapp.jpg",
  kristiansandPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/0/0a/Kristiansand_harbour_2015.jpg",
  nordfjordeidPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/Hornindalsvatnet.jpg",
  hellesyltPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/c/c0/Hellesyltfossen_%282%29.jpg",
  trondheimPortCard:
    "https://upload.wikimedia.org/wikipedia/commons/f/f2/Puerto%2C_Trondheim%2C_Noruega%2C_2019-09-06%2C_DD_26.jpg",
} as const;

export const imageAlts = {
  hero: "A white llama wearing a colourful halter stands before a turquoise glacial river and mist-covered mountains in Skjolden, Norway",
  skjoldenVillage:
    "Skjolden village at the head of Lustrafjord on the innermost Sognefjord cruise port",
  lustrafjord:
    "Lustrafjord arm of the Sognefjord with steep mountain walls near Skjolden",
  sognefjord:
    "Sognefjord panorama with dramatic fjord scenery accessible from Skjolden shore excursions",
  feigumfossen:
    "Feigumfossen waterfall cascading into Lustrafjord on Skjolden RIB and hiking tours",
  morKridValley:
    "View from Skjolden over Lustrafjord at dusk, Mørkrid Valley region near Skjolden llama walks",
  mountainScenery:
    "Panorama of Lustrafjord with mountain scenery around Skjolden and the inner Sognefjord",
  lustrafjordMountains:
    "Steep mountain walls along Lustrafjord near Skjolden on Sognefjord shore excursions",
  ribBoat:
    "Norwegian RIB rescue boat on fjord waters, representative of Skjolden RIB adventure tours",
  llamaWalk:
    "Llama with sheep on a Norwegian farm, representative of guided llama walks near Skjolden",
  portGuide:
    "Skjolden village and Lustrafjord waterfront, port guide for cruise passengers",
  worthVisiting:
    "Lustrafjord scenery from Skjolden, is Skjolden worth visiting on a cruise",
  oneDay:
    "Sognefjord views on a one day in Skjolden cruise passenger itinerary",
  bestTime:
    "Mountain and fjord scenery in summer light, best time to visit Skjolden",
  llamaTours:
    "Guided llama walk through Norwegian valley scenery near Skjolden cruise port",
  sognefjordAdventures:
    "Lustrafjord RIB adventure with Sognefjord mountain backdrop from Skjolden",
  llamaTourCard:
    "Walk with llamas in Skjolden signature shore excursion through Mørkrid Valley",
  ribAdventureTourCard:
    "Fjord RIB adventure on Lustrafjord with Sognefjord scenery from Skjolden",
  ribWaterfallHikeTourCard:
    "Fjord RIB adventure combined with Feigumfossen waterfall hike from Skjolden",
  villageDiscoveryTourCard:
    "Skjolden village and fjord discovery relaxed shore excursion for cruise passengers",
  privateSognefjordTourCard:
    "Private Sognefjord adventure with flexible fjord viewpoints from Skjolden",
  bikeHikeTourCard:
    "Bike and hike adventure through waterfall routes and scenic countryside near Skjolden",
  flamPortCard:
    "Flam harbour with cruise ship at the pier, Flam Shore Excursions",
  bergenPortCard:
    "Bergen harbour and waterfront, Bergen Shore Excursions",
  stavangerPortCard:
    "Stavanger harbour with cruise-friendly waterfront, Stavanger Shore Excursions",
  alesundPortCard:
    "Alesund harbour with cruise-friendly waterfront, Alesund Shore Excursions",
  geirangerPortCard:
    "Geirangerfjord viewpoint with cruise ship, Geiranger Shore Excursions",
  oldenPortCard:
    "Briksdal Glacier and Nordfjord scenery, Olden Shore Excursions",
  eidfjordPortCard:
    "Vøringsfossen waterfall and Hardanger scenery, Eidfjord Shore Excursions",
  moldePortCard:
    "Molde harbour and Atlantic coast, Molde Shore Excursions",
  honningsvagPortCard:
    "North Cape Globe Monument, Honningsvag Shore Excursions",
  kristiansandPortCard:
    "Kristiansand harbour waterfront, Kristiansand Shore Excursions",
  nordfjordeidPortCard:
    "Hornindalsvatnet lake and Nordfjord scenery, Nordfjordeid Shore Excursions",
  hellesyltPortCard:
    "Hellesylt waterfall and village, Hellesylt Shore Excursions",
  trondheimPortCard:
    "Trondheim harbour waterfront, Trondheim Shore Excursions",
} as const;
