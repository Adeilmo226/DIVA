export default function Footer() {
  return (
    <footer className="bg-ink text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-serif text-xl tracking-[0.15em] text-secondary">
            D.I.V.A
          </span>
          <span className="font-sans text-sm text-white/65">
            Driven by Inclusion, Validation, and Advocacy
          </span>
        </div>
        <p className="font-sans text-sm text-white/40">
          © {new Date().getFullYear()} Team D.I.V.A. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
