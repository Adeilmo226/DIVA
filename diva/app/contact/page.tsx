import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | D.I.V.A",
  description:
    "Reach out to Team D.I.V.A — clinicians, researchers, investors, and advocates are all welcome.",
};

export default function ContactPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="bg-bg py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-6">
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4 block text-center">
            Get In Touch
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-ink text-center mb-5 leading-snug">
            Let&apos;s Build Something That Saves Lives
          </h1>
          <p className="font-sans text-lg text-ink/65 text-center mb-12 leading-relaxed">
            Whether you&apos;re a clinician, researcher, investor, or advocate — we
            want to hear from you.
          </p>

          <ContactForm />
        </div>
      </section>

      {/* ── Additional contact info ── */}
      <section className="bg-surface border-t border-primary/15 py-14 md:py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-2xl text-ink mb-6">
            Other ways to reach us
          </h2>
          <div className="space-y-3">
            <p className="font-sans text-ink/70">
              Email:{" "}
              <a
                href="mailto:teamdiva@placeholder.com"
                className="text-primary hover:text-secondary font-medium transition-colors"
              >
                teamdiva@placeholder.com
              </a>
            </p>
            <p className="font-sans text-sm text-ink/45">
              Follow our journey — social links coming soon.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
