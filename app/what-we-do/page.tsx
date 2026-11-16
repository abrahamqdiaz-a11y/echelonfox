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

const TITLE = "GTM Strategy & Revenue Operations — Services and Pricing";
const DESCRIPTION =
  "Our two capabilities are go-to-market strategy and revenue operations. Explore how we diagnose revenue leaks, implement fixes and support growth through four defined engagements.";

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
        name="GTM strategy and revenue operations"
        description={DESCRIPTION}
        path="/what-we-do"
        offers={offerList}
      />
      <PageHero
        eyebrow="GTM Strategy & Revenue Operations"
        title="A clearer route to customers. A stronger system for revenue."
        lead="We advise on who to target and how to win, then improve the processes that convert and retain customers. Every engagement starts with the Revenue Leak Diagnostic, followed by Build and Run or the Embedded Growth Team."
      />
      <section className="section section--white" aria-label="Our core capabilities">
        <div className="container">
          <SectionIntro
            eyebrow="Our core capabilities"
            title="Commercial direction and operational discipline."
            body="GTM and RevOps work together. The Diagnostic remains the fixed starting point; the strategy and implementation work in each subsequent engagement is agreed in scope."
          />
          <div className="gtm-pillars">
            <article className="gtm-pillar" id="gtm-strategy">
              <span className="index">01 / Where to compete</span>
              <h2 className="h3">Go-to-Market Strategy</h2>
              <p className="muted">
                We help you decide which customers and markets to prioritise,
                what makes your offer relevant, and how your sales team should
                reach and win those accounts.
              </p>
              <ul className="gtm-pillar__list">
                <li>ICP and market segmentation</li>
                <li>Positioning, messaging and commercial offer</li>
                <li>Outbound, partner and channel strategy</li>
                <li>Sales motion and account expansion planning</li>
              </ul>
            </article>
            <article className="gtm-pillar" id="revenue-operations">
              <span className="index">02 / How to deliver</span>
              <h2 className="h3">Revenue Operations</h2>
              <p className="muted">
                We make the commercial process visible and repeatable:
                handling enquiries, tracking quotes, maintaining the pipeline
                and retaining customers through connected systems and reporting.
              </p>
              <ul className="gtm-pillar__list">
                <li>CRM, pipeline stages and ownership</li>
                <li>Lead routing, quoting and follow-up</li>
                <li>Automation, attribution and reporting</li>
                <li>Customer retention and reactivation</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
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
