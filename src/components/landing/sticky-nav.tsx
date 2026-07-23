"use client";

import { useEffect, useState } from "react";

import { LogoMark } from "@/components/brand/logo-mark";
import { LogoWordmark } from "@/components/brand/logo-wordmark";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#club", label: "The Club" },
  { href: "#membership", label: "Membership" },
  { href: "#play", label: "Programs" },
  { href: "#location", label: "Location" },
];

/**
 * White pill nav.
 * - Hidden at the very top (the hero's own transparent menu bar shows there).
 * - Reveals once you start scrolling: PS mark (ink), links, terracotta CTA.
 * - Scrolling further over the hero collapses it to a small pill holding only
 *   a large "The Padel Society" wordmark, which scrolls back to top on click.
 */
export function StickyNav() {
  const [show, setShow] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setShow(y > 90);
      setCompact(y > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-40 px-4 py-4 transition-all duration-300 ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-full opacity-0"
      }`}
    >
      <div
        className={`mx-auto flex items-center rounded-full border border-border bg-card/95 shadow-[0_16px_44px_-22px_rgba(17,16,15,0.55)] backdrop-blur transition-all duration-300 ${
          compact
            ? "max-w-max justify-center px-9 py-3"
            : "max-w-5xl justify-between gap-5 py-2.5 pl-6 pr-2.5"
        }`}
      >
        {compact ? (
          <a
            href="#top"
            aria-label="The Padel Society — back to top"
            className="flex items-center transition-opacity hover:opacity-70"
          >
            <LogoWordmark className="h-9 w-auto text-ink dark:text-ivory sm:h-10" />
          </a>
        ) : (
          <>
            <a href="#top" className="flex items-center" aria-label="The Padel Society">
              <LogoMark className="h-7 w-auto text-ink dark:text-terracotta" />
            </a>
            <nav className="hidden items-center gap-7 md:flex">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm font-medium opacity-85 transition hover:text-primary hover:opacity-100"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <Button asChild size="pill" className="h-10 px-5">
              <a href="#waitlist">Become a Member</a>
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
