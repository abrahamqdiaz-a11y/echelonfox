"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const serviceDropdown = [
  { label: "Paid Media & Advertising", href: "/services/paid-media", desc: "Meta, Google, TikTok, YouTube" },
  { label: "SEO & Content Strategy", href: "/services/seo-content", desc: "Rankings, authority, organic growth" },
  { label: "Social Media Management", href: "/services/social-media", desc: "Instagram, LinkedIn, TikTok, X" },
  { label: "Brand Identity & Creative", href: "/services/brand-identity", desc: "Branding, design, video, copy" },
  { label: "Email & CRM Marketing", href: "/services/email-crm", desc: "Klaviyo, HubSpot, automations" },
  { label: "Analytics & Growth Strategy", href: "/services/analytics-growth", desc: "GA4, dashboards, CRO, attribution" },
];

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function ServiceNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(8,8,8,0.95)" : "rgba(8,8,8,0.7)",
        borderBottom: scrolled ? "1px solid #222" : "1px solid transparent",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        className="nav-inner"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
          padding: "0 32px",
        }}
      >
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <Image
            src="/eflogo.logo.png"
            alt="Echelon Fox"
            width={160}
            height={48}
            style={{ objectFit: "contain", height: "36px", width: "auto" }}
            priority
          />
          <span style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 900, fontSize: "1.1rem", letterSpacing: "0.05em", color: "#FFFFFF", textTransform: "uppercase" }}>
            ECHELON<span style={{ color: "#FF5500" }}>FOX</span>
          </span>
        </Link>

        <ul style={{ display: "flex", gap: "40px", listStyle: "none", margin: 0, padding: 0, alignItems: "center" }} className="hidden md:flex">
          {/* Services dropdown */}
          <li ref={dropdownRef} style={{ position: "relative" }}>
            <button
              onClick={() => setServicesOpen((o) => !o)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: servicesOpen ? "#FF5500" : "#CCCCCC",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                padding: 0,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => { if (!servicesOpen) (e.currentTarget as HTMLElement).style.color = "#FF5500"; }}
              onMouseLeave={(e) => { if (!servicesOpen) (e.currentTarget as HTMLElement).style.color = "#CCCCCC"; }}
            >
              Services
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ transition: "transform 0.2s", transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {servicesOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 20px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#111",
                  border: "1px solid #222",
                  padding: "8px",
                  minWidth: "320px",
                  zIndex: 200,
                  boxShadow: "0 24px 48px rgba(0,0,0,0.6)",
                }}
              >
                <div style={{ position: "absolute", top: "-6px", left: "50%", transform: "translateX(-50%)", width: "10px", height: "10px", background: "#111", border: "1px solid #222", borderBottom: "none", borderRight: "none", rotate: "45deg" }} />
                {serviceDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setServicesOpen(false)}
                    style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "12px 16px", textDecoration: "none", transition: "background 0.15s", borderLeft: "2px solid transparent" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#1a1a1a"; (e.currentTarget as HTMLElement).style.borderLeftColor = "#FF5500"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderLeftColor = "transparent"; }}
                  >
                    <span style={{ color: "#fff", fontSize: "0.85rem", fontWeight: 700 }}>{item.label}</span>
                    <span style={{ color: "#555", fontSize: "0.75rem" }}>{item.desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </li>

          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} style={{ color: "#CCCCCC", textDecoration: "none", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#FF5500")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#CCCCCC")}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/#contact" className="hidden md:inline-flex"
          style={{ background: "#FF5500", color: "white", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "10px 24px", textDecoration: "none", clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))", transition: "background 0.2s" }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "#FF7733")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "#FF5500")}
        >
          Start a Project
        </Link>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            width: "44px",
            height: "44px",
            flexShrink: 0,
          }}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ display: "block", width: "24px", height: "2px", background: i === 1 ? "#FF5500" : "#FFFFFF", transition: "all 0.2s",
              transform: menuOpen && i === 0 ? "rotate(45deg) translate(5px, 5px)" : menuOpen && i === 2 ? "rotate(-45deg) translate(5px, -5px)" : menuOpen && i === 1 ? "scaleX(0)" : "none"
            }} />
          ))}
        </button>
      </div>

      {menuOpen && (
        <div
          style={{
            background: "#111111",
            borderTop: "1px solid #222",
            padding: "24px 20px",
            maxHeight: "calc(100dvh - 72px)",
            overflowY: "auto",
          }}
          className="md:hidden"
        >
          <button
            onClick={() => setMobileServicesOpen((o) => !o)}
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", background: "none", border: "none", borderBottom: "1px solid #222", cursor: "pointer", color: "#CCCCCC", fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "12px 0", minHeight: "44px" }}
          >
            Services
            <svg width="14" height="14" viewBox="0 0 10 10" fill="none" style={{ transition: "transform 0.2s", transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}>
              <path d="M2 3.5L5 6.5L8 3.5" stroke="#FF5500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {mobileServicesOpen && (
            <div style={{ paddingLeft: "16px", paddingBottom: "8px", borderBottom: "1px solid #222" }}>
              {serviceDropdown.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                  style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "12px 0", textDecoration: "none", borderBottom: "1px solid #1a1a1a", minHeight: "44px", justifyContent: "center" }}
                >
                  <span style={{ color: "#ccc", fontSize: "0.9rem", fontWeight: 700 }}>{item.label}</span>
                  <span style={{ color: "#444", fontSize: "0.75rem" }}>{item.desc}</span>
                </Link>
              ))}
            </div>
          )}

          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ display: "flex", alignItems: "center", color: "#CCCCCC", textDecoration: "none", fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "12px 0", borderBottom: "1px solid #222", minHeight: "44px" }}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/#contact" onClick={() => setMenuOpen(false)}
            style={{ display: "block", marginTop: "20px", background: "#FF5500", color: "white", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "14px 28px", textDecoration: "none", textAlign: "center" }}
          >
            Start a Project
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-inner { padding: 0 20px !important; }
        }
      `}</style>
    </nav>
  );
}
