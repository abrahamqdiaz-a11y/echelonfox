"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Scroll reveal. Blocks that start below the fold fade and rise in as they
 * reach the viewport, staggered among siblings; illustrations inside them hold
 * their draw-in animation until then. Anything already on screen is left
 * alone, and without JavaScript (or with reduced motion) nothing is hidden.
 */
const TARGETS = [
  ".section-head",
  ".statement__title",
  ".statement__body",
  ".split > *",
  ".grid-2 > *",
  ".grid-3 > *",
  ".grid-4 > *",
  ".path-step",
  ".symptoms li",
  ".case-row",
  ".case-card",
  ".panel",
  ".illo-figure",
  ".final-cta__panel",
  ".band .container",
].join(",");

export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const fold = window.innerHeight * 0.92;
    const all = Array.from(document.querySelectorAll<HTMLElement>(TARGETS));
    const set = new Set(all);
    // Reveal the outermost block only, so nested targets don't double-animate.
    const els = all.filter((el) => {
      for (let p = el.parentElement; p; p = p.parentElement) if (set.has(p)) return false;
      return el.getBoundingClientRect().top > fold;
    });

    const done = (el: HTMLElement) => {
      el.classList.remove("reveal", "is-in");
      el.style.removeProperty("--reveal-delay");
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          io.unobserve(el);
          el.classList.add("is-in");
          el.addEventListener("transitionend", () => done(el), { once: true });
          window.setTimeout(() => done(el), 1600);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    for (const el of els) {
      const siblings = el.parentElement ? Array.from(el.parentElement.children) : [el];
      const i = Math.min(siblings.indexOf(el), 5);
      el.style.setProperty("--reveal-delay", `${i * 80}ms`);
      el.classList.add("reveal");
      io.observe(el);
    }

    return () => {
      io.disconnect();
      els.forEach(done);
    };
  }, [pathname]);

  return null;
}
