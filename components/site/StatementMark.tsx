"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Marks a phrase in red pen only when the hero's pen mark can never share the
 * screen with it: the distance from the top of the hero underline to the bottom
 * of this phrase must exceed the viewport height. Recomputed on resize (window
 * size and font loading change both positions). Without JavaScript the phrase
 * stays ink, which never breaks the one-accent-per-screen rule.
 */
export default function StatementMark({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [marked, setMarked] = useState(false);

  useEffect(() => {
    const check = () => {
      const pen = document.querySelector(".pen-mark svg");
      const el = ref.current;
      if (!pen || !el) return setMarked(false);
      const span = el.getBoundingClientRect().bottom - pen.getBoundingClientRect().top;
      setMarked(span > window.innerHeight);
    };
    check();
    const ro = new ResizeObserver(check);
    ro.observe(document.body);
    window.addEventListener("resize", check);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", check);
    };
  }, []);

  return (
    <span ref={ref} className={marked ? "statement__mark is-marked" : "statement__mark"}>
      {children}
    </span>
  );
}
