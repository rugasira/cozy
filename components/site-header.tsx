"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "#story", label: "Our Story" },
  { href: "#menu", label: "Menu" },
  { href: "#visit", label: "Visit Us" },
];

function CupMark() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="h-9 w-9">
      <circle cx="16" cy="16" r="16" fill="#2b1a12" />
      <path
        d="M9 13.5h12V19a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5v-5.5z"
        fill="#faf6f0"
      />
      <path
        d="M21.5 14.5h2a2.5 2.5 0 0 1 0 5h-2"
        stroke="#faf6f0"
        strokeWidth="1.6"
        fill="none"
      />
      <path
        d="M13 10c0-1.6 1.6-1.6 1.6-3.2M16.6 10c0-1.6 1.6-1.6 1.6-3.2"
        stroke="#c89563"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-espresso/10 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-20">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5"
        >
          <CupMark />
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-semibold tracking-tight text-espresso">
              Cozy
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-coffee">
              Coffee House
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-coffee transition-colors hover:text-espresso"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#visit"
            className="rounded-full bg-espresso px-5 py-2.5 text-sm font-semibold text-foam transition-colors hover:bg-coffee"
          >
            Order Ahead
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-espresso/15 text-espresso md:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            {open ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-espresso/10 bg-foam px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-coffee transition-colors hover:bg-cream hover:text-espresso"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#visit"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-espresso px-5 py-3 text-center text-sm font-semibold text-foam transition-colors hover:bg-coffee"
            >
              Order Ahead
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
