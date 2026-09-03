import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { siteConfig } from "@/lib/site-config";
import { imageAlts, siteImages } from "@/lib/site-images";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Contact Skjolden Shore Excursions for help planning a cruise day around llama walks, fjord RIB adventures and Skjolden village on the innermost Sognefjord.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <ContentPage
      title="Contact"
      lead="Questions about planning a Skjolden cruise day? Use the planning tools on this site, or write when the destination concierge email is active."
      heroImage={siteImages.hero}
      heroImageAlt={imageAlts.hero}
      pagePath="/contact"
      pageDescription={metadata.description as string}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Contact" },
      ]}
      ctaTitle="Prefer to plan yourself first?"
      ctaText="Use the ship schedule, one-day guide and excursion pages for immediate answers."
      ctaHref="/ship-schedule"
      ctaButtonLabel="Check ship schedule"
      showShipReassurance={false}
      relatedLinks={[
        { label: "About", href: "/about" },
        { label: "Excursions", href: "/excursions" },
        { label: "Privacy", href: "/privacy" },
      ]}
    >
      <section>
        <h2>How we can help</h2>
        <ul>
          <li>Understanding a Skjolden cruise call and time ashore</li>
          <li>
            Choosing between llama walks, RIB fjord days, village discovery and
            bike-and-hike options
          </li>
          <li>Finding the right guide page for your day</li>
        </ul>
      </section>

      <section>
        <h2>Skjolden planning concierge</h2>
        {siteConfig.contactEmailVerified ? (
          <>
            <p>
              Email{" "}
              <a href={`mailto:${siteConfig.contactEmail}`}>
                {siteConfig.contactEmail}
              </a>
            </p>
            <p>
              We help with Skjolden port-day planning questions. Include your
              cruise dates and approximate hours ashore where relevant.
            </p>
          </>
        ) : (
          <p>
            A destination concierge email for Skjolden Shore Excursions is being
            prepared. In the meantime, use the planning tools on this site: the{" "}
            <Link href="/ship-schedule">ship schedule</Link>,{" "}
            <Link href="/one-day-in-skjolden">one-day guide</Link> and{" "}
            <Link href="/excursions">excursion options</Link>.
          </p>
        )}
      </section>

      <section>
        <h2>What we cannot do</h2>
        <ul>
          <li>Confirm your ship&apos;s official arrival or all aboard time</li>
          <li>
            Guarantee llama-farm availability, RIB departures or coach operation
          </li>
          <li>Process bookings or payments on this site</li>
        </ul>
      </section>
    </ContentPage>
  );
}
