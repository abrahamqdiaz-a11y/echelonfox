"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Arrow from "./Arrow";
import { PRIMARY_NAV, SITE } from "@/lib/site";
import { capabilities } from "@/lib/capabilities";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close the menu on navigation; the effect only resets UI state.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="container site-header__inner">
        <Link href="/" className="brand" aria-label={`${SITE.name}, home`}>
          {/* eslint-disable-next-line @next/next/no-img-element -- 6 KB mark, sized by CSS */}
          <img src="/images/fox-mark.png" alt="" width={192} height={76} />
          <span>{SITE.name}</span>
        </Link>

        <nav className="site-nav" aria-label="Main">
          <ul>
            {PRIMARY_NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="btn" aria-current={isCurrent("/contact") ? "page" : undefined}>
                Start a conversation
              </Link>
            </li>
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" focusable="false">
            {open ? (
              <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <path d="M2 5.5h14M2 12.5h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      <nav id="mobile-nav" className="mobile-nav" aria-label="Main" hidden={!open}>
        <div className="container">
          <ul>
            {PRIMARY_NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined}>
                  {item.label}
                  <Arrow size={18} />
                </Link>
                {item.href === "/services" && (
                  <ul style={{ padding: 0 }}>
                    {capabilities.map((c) => (
                      <li key={c.slug} className="sub">
                        <Link href={`/services/${c.slug}`}>{c.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <Link href="/contact" className="btn">
                Start a conversation
                <Arrow />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
