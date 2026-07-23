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
 * Pill navigation.
 * - At the top of the hero it shows the full bar: PS mark (ink) on the left,
 *   the links, and a terracotta "Become a Member" button.
 * - Once you scroll past the hero it collapses to a small pill that only holds
 *   the "The Padel Society" wordmark, which scrolls back to the top on click.
 */
export function StickyNav() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setCompact(window.scrollY > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-40 px-4 py-4">
      <div
        className={`mx-auto flex items-center rounded-full border border-border bg-card/95 shadow-[0_16px_44px_-22px_rgba(17,16,15,0.55)] backdrop-blur transition-all duration-300 ${
          compact
            ? "max-w-max justify-center gap-0 px-7 py-2.5"
            : "max-w-5xl justify-between gap-5 py-2.5 pl-6 pr-2.5"
        }`}
      >
        {compact ? (
          <a
            href="#top"
            aria-label="The Padel Society — back to top"
            className="flex items-center transition-opacity hover:opacity-70"
          >
            <LogoWordmark className="h-[18px] w-auto text-ink dark:text-ivory" />
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
