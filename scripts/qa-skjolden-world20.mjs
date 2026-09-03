/**
 * Skjolden World 2.0 destination QA.
 */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function fail(message) {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
}

function pass(message) {
  console.log(`PASS: ${message}`);
}

const dataPath = path.join(
  root,
  "src/data/skjolden-cruise-schedules.generated.json",
);
if (!existsSync(dataPath)) {
  fail("missing skjolden-cruise-schedules.generated.json");
  process.exit(1);
}

const data = JSON.parse(readFileSync(dataPath, "utf8"));
const rows = data.rows || [];
const integrity = data.integrity || {};

const expected = {
  total: 69,
  y2026: 30,
  y2027: 39,
  first: "2026-06-01",
  last: "2027-10-21",
  ships: 28,
  lines: 14,
};

if (data.port !== "skjolden") {
  fail(`generated port ${data.port}, expected skjolden`);
} else {
  pass("generated JSON filtered to port === skjolden");
}

if (integrity.total !== expected.total || rows.length !== expected.total) {
  fail(
    `total calls ${integrity.total}/${rows.length}, expected ${expected.total}`,
  );
} else {
  pass(`total Skjolden calls ${expected.total}`);
}

if ((integrity.byYear?.["2026"] ?? 0) !== expected.y2026) {
  fail(`2026 ${integrity.byYear?.["2026"]}, expected ${expected.y2026}`);
} else {
  pass(`2026 calls ${expected.y2026}`);
}

if ((integrity.byYear?.["2027"] ?? 0) !== expected.y2027) {
  fail(`2027 ${integrity.byYear?.["2027"]}, expected ${expected.y2027}`);
} else {
  pass(`2027 calls ${expected.y2027}`);
}

if (
  integrity.firstDate !== expected.first ||
  integrity.lastDate !== expected.last
) {
  fail(`date range ${integrity.firstDate}..${integrity.lastDate}`);
} else {
  pass(`date range ${expected.first} .. ${expected.last}`);
}

if (integrity.uniqueShips !== expected.ships) {
  fail(`unique ships ${integrity.uniqueShips}, expected ${expected.ships}`);
} else {
  pass(`unique ships ${expected.ships}`);
}

if (integrity.cruiseLines !== expected.lines) {
  fail(`cruise lines ${integrity.cruiseLines}, expected ${expected.lines}`);
} else {
  pass(`cruise lines ${expected.lines}`);
}

if (
  integrity.has2028 ||
  rows.some((r) => String(r.arrival_date).startsWith("2028"))
) {
  fail("2028 schedule data present");
} else {
  pass("no 2028 schedule data");
}

const required = [
  "src/app/about/page.tsx",
  "src/app/contact/page.tsx",
  "src/app/privacy/page.tsx",
  "src/app/terms/page.tsx",
  "src/app/ship-schedule/page.tsx",
  "src/app/ship-schedule/[monthSlug]/page.tsx",
  "src/app/excursions/page.tsx",
  "src/app/skjolden-port-guide/page.tsx",
  "src/app/one-day-in-skjolden/page.tsx",
  "src/app/is-skjolden-worth-visiting/page.tsx",
  "src/app/best-time-to-visit-skjolden/page.tsx",
  "src/app/llama-tours-skjolden/page.tsx",
  "src/app/sognefjord-adventures/page.tsx",
  "src/lib/image-provenance.ts",
];
for (const rel of required) {
  if (!existsSync(path.join(root, rel))) fail(`missing ${rel}`);
  else pass(`exists ${rel}`);
}

const preserved = [
  "src/app/page.tsx",
  "src/app/excursions/walk-with-llamas/page.tsx",
  "src/app/excursions/fjord-rib-adventure/page.tsx",
  "src/app/excursions/fjord-rib-waterfall-hike/page.tsx",
  "src/app/excursions/skjolden-village-fjord-discovery/page.tsx",
  "src/app/excursions/private-sognefjord-adventure/page.tsx",
  "src/app/excursions/bike-and-hike-adventure/page.tsx",
  "src/app/skjolden-port-guide/page.tsx",
  "src/app/best-time-to-visit-skjolden/page.tsx",
  "src/app/llama-tours-skjolden/page.tsx",
  "src/app/sognefjord-adventures/page.tsx",
];
for (const rel of preserved) {
  if (!existsSync(path.join(root, rel))) fail(`preserved route missing ${rel}`);
  else pass(`preserved ${rel}`);
}

pass("no /excursions redirect required; Skjolden hub is already /excursions");

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.(tsx|ts|jsx|js)$/.test(entry.name)) out.push(full);
  }
  return out;
}

const srcFiles = walk(path.join(root, "src"));
const banned = [/BOOK NOW/i, /Book a Tour/, /Book this excursion/];
let bannedHits = 0;
for (const file of srcFiles) {
  const text = readFileSync(file, "utf8");
  for (const pattern of banned) {
    if (pattern.test(text)) {
      bannedHits += 1;
      fail(`banned CTA pattern ${pattern} in ${path.relative(root, file)}`);
    }
  }
  if (/stripe|checkout\.session|payment.?intent/i.test(text)) {
    bannedHits += 1;
    fail(`payment infrastructure ref in ${path.relative(root, file)}`);
  }
}
if (bannedHits === 0) {
  pass(
    "no BOOK NOW / Book a Tour / Book this excursion / payment infra in src",
  );
}

const chromeFiles = [
  "src/components/site-footer.tsx",
  "src/app/page.tsx",
  "src/app/ship-schedule/page.tsx",
];
for (const rel of chromeFiles) {
  const text = readFileSync(path.join(root, rel), "utf8");
  if (
    /Lysefjord|Pulpit Rock|Preikestolen|Bryggen|Mostraumen|Nidaros|Bakklandet|Flamsbana|Stegastein|Dalsnibba|Flydalsjuvet|Voringsfossen|Hardangervidda/.test(
      text,
    )
  ) {
    fail(`sibling-destination remnant in ${rel}`);
  } else {
    pass(`no sibling remnant in ${rel}`);
  }
}

const homepage = readFileSync(path.join(root, "src/app/page.tsx"), "utf8");
if (/ExploreNorwegianPorts|explorePortsFromSkjolden/.test(homepage)) {
  fail("explore-norwegian-ports still used on homepage");
} else {
  pass("explore-norwegian-ports unused on homepage");
}

const config = readFileSync(path.join(root, "src/lib/site-config.ts"), "utf8");
if (!config.includes("skjoldenshoreexcursions.com")) {
  fail("canonical domain missing from site-config");
} else {
  pass("canonical domain skjoldenshoreexcursions.com present");
}

if (!config.includes("contactEmailVerified: true")) {
  fail("contactEmailVerified should be true after Cloudflare routing activation");
} else {
  pass("contact email marked verified");
}

if (!config.includes("hello@skjoldenshoreexcursions.com")) {
  fail("reserved contact email missing from config");
} else {
  pass("reserved contact email present in config");
}

if (/mailto:hello@skjoldenshoreexcursions\.com/.test(config)) {
  fail("mailto on unverified address in site-config");
} else {
  pass("no mailto in site-config");
}

const contactPage = readFileSync(
  path.join(root, "src/app/contact/page.tsx"),
  "utf8",
);
if (
  /mailto:hello@skjoldenshoreexcursions\.com/.test(contactPage) &&
  !/contactEmailVerified/.test(contactPage)
) {
  fail("hardcoded mailto on contact page while email unverified");
} else {
  pass("contact page respects contactEmailVerified gate");
}

const provenance = readFileSync(
  path.join(root, "src/lib/image-provenance.ts"),
  "utf8",
);
if (!/skjolden-llama-hero\.png/.test(provenance) || !/KEEP/.test(provenance)) {
  fail("local llama hero not flagged KEEP in provenance");
} else {
  pass("local llama hero flagged KEEP");
}
if (!/flamPortCard/.test(provenance) || !/sister-port|Sister-port/i.test(provenance)) {
  fail("flamPortCard not flagged as sister-port in provenance");
} else {
  pass("flamPortCard flagged as sister-port not Skjolden local");
}
if (!/ribBoat/.test(provenance) || !/not a Skjolden product/i.test(provenance)) {
  fail("ribBoat rescue-boat honesty note missing from provenance");
} else {
  pass("ribBoat flagged as non-product illustrative imagery");
}

const sitemapSrc = readFileSync(path.join(root, "src/app/sitemap.ts"), "utf8");
if (!sitemapSrc.includes("getSiteRoutes")) {
  fail("sitemap does not use getSiteRoutes");
} else {
  pass("sitemap uses getSiteRoutes including populated months");
}

const monthKeys = [
  ...new Set(rows.map((r) => r.arrival_date.slice(0, 7))),
].sort();
const expectedMonths = [
  "2026-06",
  "2026-07",
  "2026-08",
  "2026-09",
  "2027-04",
  "2027-05",
  "2027-06",
  "2027-07",
  "2027-08",
  "2027-09",
  "2027-10",
];
if (
  monthKeys.length !== 11 ||
  monthKeys.join(",") !== expectedMonths.join(",")
) {
  fail(
    `populated months ${monthKeys.join(",")}, expected ${expectedMonths.join(",")}`,
  );
} else {
  pass("11 populated Skjolden months match authority keys");
}

const byMonth = {};
for (const row of rows) {
  const key = row.arrival_date.slice(0, 7);
  byMonth[key] = (byMonth[key] || 0) + 1;
}
if ((byMonth["2026-06"] ?? 0) !== 9) {
  fail(`busiest June 2026 ${byMonth["2026-06"]}, expected 9`);
} else {
  pass("busiest month 2026-06 has 9 calls");
}
if ((byMonth["2027-10"] ?? 0) !== 1) {
  fail(`light October 2027 ${byMonth["2027-10"]}, expected 1`);
} else {
  pass("light month 2027-10 has 1 call");
}

console.log(
  "\nINFO: sync source = norway-shore-excursions generated JSON, filter port===skjolden",
);
if (process.exitCode) {
  console.error("\nQA FAILED");
  process.exit(1);
}
console.log("\nQA PASSED");
