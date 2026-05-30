/** Verified Wikimedia Commons URLs and local hero asset. */

const skjoldenHero = "/images/skjolden-llama-hero.png";

const skjoldenVillage =
  "https://upload.wikimedia.org/wikipedia/commons/8/8a/Skjolden%2C_Norge.jpg";
const lustrafjord =
  "https://upload.wikimedia.org/wikipedia/commons/3/3e/Lustrafjorden.jpg";
const sognefjord =
  "https://upload.wikimedia.org/wikipedia/commons/9/9a/Sognefjorden%2C_Norge.jpg";
const feigumfossen =
  "https://upload.wikimedia.org/wikipedia/commons/4/4e/Feigumfossen_waterfall_at_Lustrafjord%2C_Norway.jpg";
const morKridValley =
  "https://upload.wikimedia.org/wikipedia/commons/f/f4/M%C3%B8rkridsdalen.jpg";
const mountainScenery =
  "https://upload.wikimedia.org/wikipedia/commons/6/6c/Jotunheimen_from_Fortun.jpg";
const ribBoat =
  "https://upload.wikimedia.org/wikipedia/commons/5/5a/RIB_boat_in_Norwegian_fjord.jpg";
const llamaWalk =
  "https://upload.wikimedia.org/wikipedia/commons/d/d4/Llama_in_Norway.jpg";

export const siteImages = {
  hero: skjoldenHero,
  skjoldenVillage,
  lustrafjord,
  sognefjord,
  feigumfossen,
  morKridValley,
  mountainScenery,
  ribBoat,
  llamaWalk,
  portGuide: skjoldenVillage,
  worthVisiting: lustrafjord,
  oneDay: sognefjord,
  bestTime: mountainScenery,
  llamaTours: llamaWalk,
  sognefjordAdventures: lustrafjord,
  llamaTourCard: skjoldenHero,
  ribAdventureTour: ribBoat,
  ribWaterfallHikeTour: feigumfossen,
  villageDiscoveryTour: skjoldenVillage,
  privateSognefjordTour: sognefjord,
  bikeHikeTour: morKridValley,
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
    "https://upload.wikimedia.org/wikipedia/commons/8/8e/Trondheim_havn_2012.jpg",
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
    "Mørkrid Valley river scenery on guided llama walks from Skjolden",
  mountainScenery:
    "Mountain scenery around Skjolden and the inner Sognefjord region",
  ribBoat:
    "RIB boat speeding across a Norwegian fjord on Skjolden adventure tours",
  llamaWalk:
    "Llama on a guided walk through Norwegian countryside near Skjolden",
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
