"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  value: string;
  label: string;
  delay?: number;
}

export default function StatCard({ value, label, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center px-6 py-8"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`,
      }}
    >
      <span className="font-serif text-5xl md:text-6xl text-primary font-bold leading-none mb-3">
        {value}
      </span>
      <span className="font-sans text-sm md:text-base text-ink/70 max-w-[180px] leading-snug">
        {label}
      </span>
    </div>
  );
}
