"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** One-time, small reveals. Content is always readable without JS or an observer. */
export default function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !("IntersectionObserver" in window)) return;
    const candidates = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".section-head, .capability-rows > a, .application-list > article, .process-diagram, .human-split > *, .work-preview, .scope-grid > div, .offer-path, .offer-detail",
      ),
    );
    const targets = candidates.filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight * 0.95,
    );
    const timers = new Set<number>();
    const clear = () => {
      targets.forEach((el) => el.classList.remove("motion-visible"));
      timers.forEach((timer) => window.clearTimeout(timer));
      timers.clear();
    };
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          const el = entry.target as HTMLElement;
          el.classList.add("motion-visible");
          const timer = window.setTimeout(() => {
            el.classList.remove("motion-visible");
            timers.delete(timer);
          }, 650);
          timers.add(timer);
        }
      },
      { threshold: 0.08 },
    );
    targets.forEach((el) => observer.observe(el));
    const onPreference = () => {
      if (preference.matches) {
        observer.disconnect();
        clear();
      }
    };
    preference.addEventListener("change", onPreference);
    return () => {
      observer.disconnect();
      clear();
      preference.removeEventListener("change", onPreference);
    };
  }, [pathname]);
  return null;
}
