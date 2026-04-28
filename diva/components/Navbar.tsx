"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-bg/95 backdrop-blur-sm border-b border-primary/15">
      <nav
        className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-serif text-2xl tracking-[0.15em] text-primary hover:text-secondary transition-colors"
          aria-label="D.I.V.A — return to homepage"
        >
          D.I.V.A
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="/about" active={pathname === "/about"}>
            About
          </NavLink>
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-primary text-white font-sans font-medium text-sm rounded-full hover:bg-secondary transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-primary/15 bg-bg px-6 py-5 flex flex-col gap-5"
        >
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="font-sans font-medium text-ink hover:text-primary transition-colors py-1"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="inline-block text-center px-5 py-3 bg-primary text-white font-medium text-sm rounded-full hover:bg-secondary transition-colors"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`font-sans text-sm font-medium transition-colors ${
        active ? "text-primary" : "text-ink hover:text-primary"
      }`}
    >
      {children}
    </Link>
  );
}
