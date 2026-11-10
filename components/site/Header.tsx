"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PRIMARY_NAV } from "@/lib/site";
import { coreCapabilities } from "@/lib/capabilities";
import Arrow from "./Arrow";
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menu = useRef<HTMLButtonElement>(null);
  const dropdown = useRef<HTMLDetailsElement>(null);
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }
  useEffect(() => {
    if (dropdown.current) dropdown.current.open = false;
  }, [pathname]);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (dropdown.current?.open) {
          dropdown.current.open = false;
          dropdown.current.querySelector("summary")?.focus();
        }
        if (open) {
          setOpen(false);
          menu.current?.focus();
        }
      }
    };
    const outside = (e: PointerEvent) => {
      if (dropdown.current && !dropdown.current.contains(e.target as Node))
        dropdown.current.open = false;
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);
  const current = (href: string) =>
    href === "/"
      ? pathname === href
      : pathname === href || pathname.startsWith(`${href}/`);
  return (
    <header className="site-header">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="container site-header__inner">
        <Link href="/" className="brand" aria-label="EchelonFox, home">
          {/* eslint-disable-next-line @next/next/no-img-element -- preserved small brand asset */}
          <img src="/images/fox-mark.png" width={192} height={76} alt="" />
          <span>
            EchelonFox<small>SOLUTIONS</small>
          </span>
        </Link>
        <nav className="site-nav" aria-label="Main">
          <ul>
            {PRIMARY_NAV.map((item) => (
              <li key={item.href}>
                {item.href === "/services" ? (
                  <details className="nav-dropdown" ref={dropdown}>
                    <summary className={current(item.href) ? "is-current" : ""}>
                      AI Services <span aria-hidden="true">⌄</span>
                    </summary>
                    <div className="nav-dropdown__panel">
                      <Link href="/services">
                        Explore our capabilities <Arrow />
                      </Link>
                      {coreCapabilities.map((c) => (
                        <Link key={c.slug} href={`/services/${c.slug}`}>
                          {c.name}
                        </Link>
                      ))}
                      <div className="nav-dropdown__support">
                        <Link href="/services#business-systems">
                          Supporting business systems
                        </Link>
                        <Link href="/services/websites-digital-infrastructure">
                          Websites &amp; Digital Infrastructure
                        </Link>
                      </div>
                    </div>
                  </details>
                ) : (
                  <Link
                    href={item.href}
                    aria-current={current(item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="btn btn--small"
                aria-current={current("/contact") ? "page" : undefined}
              >
                Let’s Talk <Arrow />
              </Link>
            </li>
          </ul>
        </nav>
        <button
          ref={menu}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
      </div>
      <nav
        id="mobile-nav"
        className="mobile-nav"
        aria-label="Mobile main"
        hidden={!open}
      >
        <div className="container">
          <ul>
            {PRIMARY_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={current(item.href) ? "page" : undefined}
                >
                  {item.label}
                  <Arrow />
                </Link>
                {item.href === "/services" && (
                  <details>
                    <summary>Explore capabilities</summary>
                    <ul>
                      {coreCapabilities.map((c) => (
                        <li key={c.slug}>
                          <Link href={`/services/${c.slug}`}>{c.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                )}
              </li>
            ))}
            <li>
              <Link href="/contact" className="btn">
                Let’s Talk <Arrow />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
