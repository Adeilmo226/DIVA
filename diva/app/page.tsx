import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import StatCard from "@/components/StatCard";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "D.I.V.A | Driven by Inclusion, Validation, and Advocacy",
};

const problemStats = [
  {
    stat: "15.9%",
    detail:
      "Sensitivity of current visual blood-loss estimation methods used at bedside",
  },
  {
    stat: "30–50%",
    detail:
      "Degree to which clinicians consistently underestimate blood loss, delaying response",
  },
  {
    stat: "15–35 min",
    detail:
      "Detection-to-intervention gap created when hemorrhage goes unrecognized",
  },
  {
    stat: "60–80%",
    detail:
      "Hemorrhage deaths classified as preventable with timely detection and response",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-bg py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-6 block">
              Team D.I.V.A
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.15] mb-6">
              Saving Mothers Starts With Seeing the Problem
            </h1>
            <p className="font-sans text-lg text-ink/70 mb-10 leading-relaxed max-w-md">
              Every 2 minutes, a mother dies from hemorrhage globally. We are
              here to change that.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-white font-sans font-medium rounded-full hover:bg-secondary transition-colors text-base"
            >
              Get in Touch
            </Link>
          </div>

          <div className="relative w-full h-72 md:h-[480px] rounded-2xl overflow-hidden border-2 border-primary/25">
            <Image
              src="/Hero-diva1.jpg"
              alt="Team D.I.V.A members presenting maternal health research"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section
        className="bg-surface border-y border-primary/20 py-4"
        aria-label="Key statistics"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary/20">
            <StatCard
              value="3.6M"
              label="Hospital births per year in the U.S."
              delay={0}
            />
            <StatCard
              value="100K+"
              label="PPH cases annually in the U.S."
              delay={150}
            />
            <StatCard
              value="Every 2 min"
              label="A mother dies from hemorrhage globally"
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* ── Why This Matters ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <AnimateIn>
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4 block">
                Why This Matters
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-ink leading-snug mb-8">
                Postpartum hemorrhage is the leading cause of maternal mortality
                worldwide
              </h2>
              <blockquote className="bg-surface border-l-4 border-primary rounded-r-2xl p-6">
                <p className="font-serif text-lg text-ink/85 italic leading-relaxed">
                  "The issue isn't that we can't treat PPH. It's that we can't
                  see it in time."
                </p>
              </blockquote>
            </AnimateIn>

            <div className="space-y-4">
              {problemStats.map(({ stat, detail }, i) => (
                <AnimateIn key={stat} delay={i * 80}>
                  <div className="bg-surface rounded-2xl border border-primary/20 p-5 flex items-start gap-4">
                    <span className="font-serif text-2xl text-primary font-bold shrink-0 pt-0.5">
                      {stat}
                    </span>
                    <p className="font-sans text-sm text-ink/75 leading-relaxed">
                      {detail}
                    </p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission Block ── */}
      <section className="bg-ink py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimateIn>
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-secondary font-semibold mb-4 block">
              Our Mission
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-white leading-snug mb-6">
              Closing the gap in maternal health outcomes
            </h2>
            <p className="font-sans text-lg text-white/70 leading-relaxed">
              Team D.I.V.A is driven by inclusion, validation, and advocacy. We
              are committed to closing the gap in maternal health outcomes —
              especially for underserved communities. Every conversation we
              have, every connection we build, is in service of the mothers who
              deserve better care.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimateIn>
            <h2 className="font-serif text-2xl md:text-3xl text-ink mb-4">
              Want to learn more or collaborate?
            </h2>
            <p className="font-sans text-ink/60 mb-8 leading-relaxed">
              Whether you&apos;re a clinician, researcher, or advocate — we&apos;d love
              to connect.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-white font-sans font-medium rounded-full hover:bg-secondary transition-colors"
            >
              Get in Touch
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
