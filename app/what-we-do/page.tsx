import Link from "next/link";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import FinalCta from "@/components/site/FinalCta";
import Arrow from "@/components/site/Arrow";
import OfferLadder from "@/components/site/OfferLadder";
import SectionIntro from "@/components/site/SectionIntro";
import ServiceSchema from "@/components/site/ServiceSchema";
import { offerList } from "@/lib/offers";
import { pageMetadata } from "@/lib/metadata";

const TITLE = "How It Works — Offers, Prices and What Each Includes";
const DESCRIPTION =
  "The Revenue Leak Diagnostic, Build, Run and Embedded Growth Team: what each includes and excludes, how long it takes, what it costs and the number it moves.";

export const metadata = pageMetadata(TITLE, DESCRIPTION, "/what-we-do");

const pathLabel = {
  diagnostic: "Step 1 · Every engagement",
  build: "Path A · Step 2",
  run: "Path A · Step 3",
  "embedded-growth-team": "Path B",
} as const;

const marketing = [
  "How enquiries are captured and routed to the right person.",
  "Follow-up and nurture emails.",
  "Campaigns to win back lapsed customers.",
  "Tracking which sources produce revenue.",
  "Reporting.",
];

export default function WhatWeDo() {
  return (
    <PageShell>
      <ServiceSchema
        name="Revenue operations"
        description={DESCRIPTION}
        path="/what-we-do"
        offers={offerList}
      />
      <PageHero
        eyebrow="What We Do · How It Works"
        title="Four offers. Public prices. One place to start."
        lead="Every engagement starts with the Revenue Leak Diagnostic. After it, you take one of two paths: Build, then Run, or the Embedded Growth Team."
      />
      <section className="section section--white" id="pricing">
        <div className="container">
          <OfferLadder detailLinks={false} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="In detail"
            title="What is included, and what is not."
            body="For each offer: what you get, what sits outside it, how long it takes, what it costs and the number it moves."
          />
          <div className="offer-detail-list">
            {offerList.map((o, i) => (
              <article className="offer-detail" id={o.id} key={o.id}>
                <span className="index">0{i + 1}</span>
                <div>
                  <p className="label">{pathLabel[o.id]}</p>
                  <h2 className="h3">{o.name}</h2>
                  <p className="lead">{o.summary}</p>
                  <dl className="offer-facts">
                    <div>
                      <dt>How long</dt>
                      <dd>{o.duration}</dd>
                    </div>
                    <div>
                      <dt>What it costs</dt>
                      <dd>{o.cost}</dd>
                    </div>
                    <div>
                      <dt>The number it moves</dt>
                      <dd>{o.moves}</dd>
                    </div>
                  </dl>
                  {o.id === "embedded-growth-team" && (
                    <Link className="arrow-link" href="/embedded-growth-team">
                      More on the Embedded Growth Team
                      <Arrow />
                    </Link>
                  )}
                </div>
                <div>
                  <h3 className="label">Included</h3>
                  <ul className="check-list">
                    {o.includes.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                  <h3 className="label offer-excludes-head">Not included</h3>
                  <ul className="exclude-list">
                    {o.excludes.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--white">
        <div className="container split">
          <div>
            <p className="eyebrow">Marketing, in our terms</p>
            <h2 className="h2">
              Marketing is part of the system.
              <br />
              We are not an agency.
            </h2>
          </div>
          <div>
            <p className="lead">
              We do the parts of marketing that connect directly to revenue:
            </p>
            <ul className="check-list marketing-list">
              {marketing.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
            <p className="muted">
              We do not run SEO, paid advertising, content production or social
              media management ourselves. Where you need them, we plan them and
              manage the specialists who do them.
            </p>
          </div>
        </div>
      </section>
      <FinalCta />
    </PageShell>
  );
}
