"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PRIMARY_NAV } from "@/lib/site";
import { PRIMARY_CTA } from "@/lib/offers";
import Arrow from "./Arrow";
import Wordmark from "./Wordmark";
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menu = useRef<HTMLButtonElement>(null);
  const nav = useRef<HTMLElement>(null);
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }
  const dropdowns = () =>
    Array.from(
      nav.current?.querySelectorAll<HTMLDetailsElement>(".nav-dropdown") ?? [],
    );
  useEffect(() => {
    dropdowns().forEach((d) => (d.open = false));
  }, [pathname]);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        const openDropdown = dropdowns().find((d) => d.open);
        if (openDropdown) {
          openDropdown.open = false;
          openDropdown.querySelector("summary")?.focus();
        }
        if (open) {
          setOpen(false);
          menu.current?.focus();
        }
      }
    };
    const outside = (e: PointerEvent) => {
      dropdowns().forEach((d) => {
        if (!d.contains(e.target as Node)) d.open = false;
      });
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);
  /** Opening one dropdown closes the others. */
  const onToggle = (e: React.SyntheticEvent<HTMLDetailsElement>) => {
    const el = e.currentTarget;
    if (el.open) dropdowns().forEach((d) => d !== el && (d.open = false));
  };
  const current = (href: string) =>
    href === "/"
      ? pathname === href
      : pathname === href || pathname.startsWith(`${href}/`);
  const groupCurrent = (item: (typeof PRIMARY_NAV)[number]) =>
    current(item.href) || !!item.children?.some((c) => current(c.href));
  return (
    <header className="site-header">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="container site-header__inner">
        <Link href="/" className="brand" aria-label="EchelonFox, home">
          <Wordmark />
        </Link>
        <nav className="site-nav" aria-label="Main" ref={nav}>
          <ul>
            {PRIMARY_NAV.map((item) => (
              <li key={item.href}>
                {item.children ? (
                  <details className="nav-dropdown" onToggle={onToggle}>
                    <summary className={groupCurrent(item) ? "is-current" : ""}>
                      {item.label} <span aria-hidden="true">⌄</span>
                    </summary>
                    <div className="nav-dropdown__panel">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          aria-current={pathname === c.href ? "page" : undefined}
                        >
                          {c.label} <Arrow />
                        </Link>
                      ))}
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
                href={PRIMARY_CTA.href}
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
                {item.children ? (
                  <details className="mobile-group">
                    <summary>
                      {item.label} <span aria-hidden="true">⌄</span>
                    </summary>
                    <ul>
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            aria-current={
                              pathname === c.href ? "page" : undefined
                            }
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link
                    href={item.href}
                    aria-current={current(item.href) ? "page" : undefined}
                  >
                    {item.label}
                    <Arrow />
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link href={PRIMARY_CTA.href} className="btn">
                Let’s Talk <Arrow />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
