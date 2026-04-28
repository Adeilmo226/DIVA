import type { Metadata } from "next";
import TeamCard from "@/components/TeamCard";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "About | D.I.V.A",
  description:
    "Meet the multidisciplinary team behind D.I.V.A — women united by a commitment to improving maternal health outcomes.",
};

const team = [
  {
    name: "Anoosha Adtani",
    focus: "Clinical Care & Operations",
    school: "UT San Antonio",
    photo: "/team-anoosha.png",
  },
  {
    name: "Hadia Mohammadzadah",
    focus: "Maternal and Public Health",
    school: "St. Olaf College",
    photo: "/team-hadia.jpeg",
  },
  {
    name: "Avneet Singh",
    focus: "Health Policy",
    school: "University of Illinois Urbana-Champaign",
    photo: "/anveet-new.png",
  },
  {
    name: "Judith Adomako",
    focus: "Neuroscience & Global Health",
    school: "Northwestern University",
    photo: "/team-judith.jpeg",
  },
];

const values = [
  {
    name: "Inclusion",
    description:
      "Centering underserved and underrepresented communities in every decision we make about maternal health.",
  },
  {
    name: "Validation",
    description:
      "Grounding every step in clinical evidence — because the stakes demand nothing less than rigorous proof.",
  },
  {
    name: "Advocacy",
    description:
      "Speaking up where healthcare systems have been silent, ensuring every voice is heard and every life is counted.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-bg py-20 md:py-28 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4 block">
            About Us
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-ink leading-snug mb-5">
            Our Team
          </h1>
          <p className="font-sans text-lg text-ink/65 leading-relaxed">
            United by a commitment to underserved populations
          </p>
        </div>
      </section>

      {/* ── Mission paragraph ── */}
      <section className="bg-surface border-y border-primary/15 py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6">
          <AnimateIn>
            <p className="font-sans text-base md:text-lg text-ink/80 leading-relaxed text-center">
              We are a multidisciplinary team of women united by one belief —
              that no mother should die from a preventable complication.
              Postpartum hemorrhage claims a life every 2 minutes globally. We
              are here to change that.{" "}
              <strong className="text-primary font-semibold">
                D.I.V.A stands for Driven by Inclusion, Validation, and
                Advocacy.
              </strong>
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── Team Grid ── */}
      <section className="py-20 md:py-28" aria-label="Team members">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {team.map((member, i) => (
              <AnimateIn key={member.name} delay={i * 100}>
                <TeamCard
                  name={member.name}
                  focus={member.focus}
                  school={member.school}
                  photo={member.photo}
                />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-ink py-20 md:py-28" aria-label="Our values">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateIn>
            <h2 className="font-serif text-3xl md:text-4xl text-white text-center mb-14">
              Our Values
            </h2>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {values.map((v, i) => (
              <AnimateIn key={v.name} delay={i * 100}>
                <article className="bg-white/5 border border-primary/35 rounded-2xl p-8 h-full">
                  <span className="font-sans text-xs uppercase tracking-[0.2em] text-secondary font-semibold mb-3 block">
                    {v.name}
                  </span>
                  <h3 className="font-serif text-2xl text-white mb-4">
                    {v.name}
                  </h3>
                  <p className="font-sans text-sm text-white/65 leading-relaxed">
                    {v.description}
                  </p>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
