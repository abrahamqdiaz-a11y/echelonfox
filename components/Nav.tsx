"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(8,8,8,0.95)" : "transparent",
        borderBottom: scrolled ? "1px solid #222" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        padding: "0 32px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              background: "#FF5500",
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2L14 5.5V12.5L9 16L4 12.5V5.5L9 2Z" fill="white" />
              <path d="M6 7.5L9 6L12 7.5V10.5L9 12L6 10.5V7.5Z" fill="#FF5500" />
            </svg>
          </div>
          <span
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 900,
              fontSize: "1.1rem",
              letterSpacing: "0.05em",
              color: "#FFFFFF",
              textTransform: "uppercase",
            }}
          >
            ECHELON<span style={{ color: "#FF5500" }}>FOX</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            gap: "40px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="hidden md:flex"
        >
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{
                  color: "#CCCCCC",
                  textDecoration: "none",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#FF5500")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#CCCCCC")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex"
          style={{
            background: "#FF5500",
            color: "white",
            fontWeight: 700,
            fontSize: "0.8rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "10px 24px",
            textDecoration: "none",
            clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "#FF7733")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "#FF5500")}
        >
          Start a Project
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
          }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: i === 1 ? "#FF5500" : "#FFFFFF",
                transition: "all 0.2s",
                transform:
                  menuOpen && i === 0
                    ? "rotate(45deg) translate(5px, 5px)"
                    : menuOpen && i === 2
                    ? "rotate(-45deg) translate(5px, -5px)"
                    : menuOpen && i === 1
                    ? "scaleX(0)"
                    : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "#111111",
            borderTop: "1px solid #222",
            padding: "24px 32px",
          }}
          className="md:hidden"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                color: "#CCCCCC",
                textDecoration: "none",
                fontSize: "1.1rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "12px 0",
                borderBottom: "1px solid #222",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#FF5500")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#CCCCCC")}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "inline-block",
              marginTop: "20px",
              background: "#FF5500",
              color: "white",
              fontWeight: 700,
              fontSize: "0.9rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "12px 28px",
              textDecoration: "none",
            }}
          >
            Start a Project
          </a>
        </div>
      )}
    </nav>
  );
}
