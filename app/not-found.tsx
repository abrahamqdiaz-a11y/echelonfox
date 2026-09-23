import Link from "next/link";
import PageShell from "@/components/site/PageShell";
import Arrow from "@/components/site/Arrow";

export default function NotFound() {
  return (
    <PageShell>
      <section className="page-hero" style={{ paddingBottom: "var(--section)" }}>
        <div className="container">
          <p className="eyebrow">404</p>
          <h1 className="h1" style={{ maxWidth: "16ch" }}>
            This page isn&apos;t here.
          </h1>
          <p className="lead muted" style={{ marginTop: "1.5rem" }}>
            It may have moved when the site was reorganised. These are good places to pick up from.
          </p>
          <div className="actions" style={{ marginTop: "2rem" }}>
            <Link href="/" className="btn">
              Go to the homepage
              <Arrow />
            </Link>
            <Link href="/services" className="arrow-link">
              Services
            </Link>
            <Link href="/work" className="arrow-link">
              Work
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
