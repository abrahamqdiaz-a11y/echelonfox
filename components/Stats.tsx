"use client";
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const stats = [
  { value: 500, suffix: "+", label: "Campaigns Launched", sub: "Across every major platform" },
  { value: 2400, prefix: "$", suffix: "M+", label: "Revenue Generated", sub: "For our clients combined" },
  { value: 98, suffix: "%", label: "Client Retention Rate", sub: "They stay because we deliver" },
  { value: 150, suffix: "+", label: "Brands Transformed", sub: "From startups to enterprises" },
];

function StatCard({ s, animate }: { s: typeof stats[0]; animate: boolean }) {
  const count = useCountUp(s.value, 1800, animate);
  return (
    <div
      style={{
        textAlign: "center",
        padding: "48px 32px",
        position: "relative",
        borderRight: "1px solid #1a1a1a",
      }}
    >
      <div
        style={{
          fontSize: "clamp(3rem, 7vw, 5.5rem)",
          fontWeight: 900,
          letterSpacing: "-0.03em",
          lineHeight: 1,
          marginBottom: "12px",
          color: "#fff",
        }}
      >
        {s.prefix && <span style={{ color: "#FF5500" }}>{s.prefix}</span>}
        {animate ? count.toLocaleString() : 0}
        <span style={{ color: "#FF5500" }}>{s.suffix}</span>
      </div>
      <div
        style={{
          fontSize: "1rem",
          fontWeight: 700,
          color: "#fff",
          marginBottom: "6px",
          letterSpacing: "-0.01em",
        }}
      >
        {s.label}
      </div>
      <div style={{ fontSize: "0.8rem", color: "#555", letterSpacing: "0.02em" }}>{s.sub}</div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="results"
      ref={ref}
      style={{
        background: "#080808",
        borderTop: "1px solid #1a1a1a",
        borderBottom: "1px solid #1a1a1a",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Orange accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, transparent, #FF5500, transparent)",
        }}
      />

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 32px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          {stats.map((s) => (
            <StatCard key={s.label} s={s} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  );
}
