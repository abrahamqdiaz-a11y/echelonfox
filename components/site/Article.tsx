import Image from "next/image";
import Link from "next/link";
import Arrow from "./Arrow";

export function ArticleHeader({
  crumb,
  category,
  readTime,
  title,
  standfirst,
  date,
  dateTime,
}: {
  crumb: string;
  category: string;
  readTime: string;
  title: string;
  standfirst: string;
  date: string;
  dateTime: string;
}) {
  return (
    <header className="page-hero">
      <div className="container container--narrow">
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/insights">Insights</Link>
            </li>
            <li aria-current="page">{crumb}</li>
          </ol>
        </nav>
        <p className="label" style={{ marginBottom: "1.25rem" }}>
          {category} · {readTime}
        </p>
        <h1 className="h1" style={{ fontSize: "clamp(2.1rem, 1.4rem + 3vw, 3.6rem)" }}>
          {title}
        </h1>
        <p className="lead muted" style={{ marginTop: "1.5rem" }}>
          {standfirst}
        </p>
        <div
          className="person"
          style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--rule)", justifyContent: "space-between", flexWrap: "wrap" }}
        >
          <span className="person">
            <Image src="/images/abe-quinn.jpg" alt="" width={112} height={112} />
            <span className="small">
              <strong style={{ fontWeight: 500 }}>Abe Quinn</strong>
              <br />
              <span className="muted">Founder, EchelonFox</span>
            </span>
          </span>
          <span className="small muted">
            Published <time dateTime={dateTime}>{date}</time>
          </span>
        </div>
      </div>
    </header>
  );
}

export function Toc({ items }: { items: [string, string][] }) {
  return (
    <nav className="toc" aria-labelledby="toc-title" style={{ marginBottom: "3rem" }}>
      <p id="toc-title" className="label">
        In this article
      </p>
      <ol>
        {items.map(([label, href], i) => (
          <li key={href}>
            <a href={href}>
              <span className="label" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              {label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Numbered items with a title and body, used for pillars, steps, and mistakes. */
export function NumberedList({ items, prefix }: { items: { title: string; body: string }[]; prefix?: string }) {
  return (
    <ol className="ruled-list" style={{ borderTopColor: "var(--ink)", listStyle: "none", padding: 0, margin: "1.5rem 0 2rem" }}>
      {items.map((item, i) => (
        <li key={item.title} style={{ display: "grid", gridTemplateColumns: "3rem 1fr", gap: "0.5rem", padding: "1.5rem 0", margin: 0 }}>
          <span className="label" style={{ paddingTop: "0.45rem" }} aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            {prefix && (
              <p className="label" style={{ margin: "0 0 0.25rem" }}>
                {prefix} {String(i + 1).padStart(2, "0")}
              </p>
            )}
            <h3 style={{ margin: "0 0 0.5rem" }}>{item.title}</h3>
            <p style={{ margin: 0 }} className="muted">
              {item.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq" style={{ marginTop: "1.5rem" }}>
      {items.map((item) => (
        <details key={item.q}>
          <summary>{item.q}</summary>
          <div>
            <p style={{ margin: 0 }}>{item.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

export function AuthorBio({ children }: { children: React.ReactNode }) {
  return (
    <aside className="panel" aria-label="About the author" style={{ marginTop: "3.5rem" }}>
      <div className="person" style={{ alignItems: "flex-start" }}>
        <Image src="/images/abe-quinn.jpg" alt="" width={112} height={112} />
        <div>
          <p className="label" style={{ marginBottom: "0.25rem" }}>
            About the author
          </p>
          <p className="serif" style={{ fontSize: "1.35rem", margin: "0 0 0.5rem" }}>
            Abe Quinn
          </p>
          <p className="small muted" style={{ margin: 0 }}>
            {children}
          </p>
        </div>
      </div>
    </aside>
  );
}

export function NextLinks({ items }: { items: { href: string; label: string; desc: string }[] }) {
  return (
    <nav aria-labelledby="next-title" style={{ marginTop: "3.5rem" }}>
      <h2 id="next-title" className="label" style={{ marginBottom: "1rem" }}>
        Where to go next
      </h2>
      <ul className="grid-3" style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {items.map((item) => (
          <li key={item.href} style={{ padding: 0 }}>
            <Link href={item.href} className="cell-link" style={{ padding: "1.5rem", height: "100%" }}>
              <span className="serif" style={{ display: "block", fontSize: "1.25rem", lineHeight: 1.25 }}>
                {item.label}
              </span>
              <span className="small muted" style={{ display: "block", marginTop: "0.5rem" }}>
                {item.desc}
              </span>
              <span className="arrow-link small">
                Go
                <Arrow size={14} />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
