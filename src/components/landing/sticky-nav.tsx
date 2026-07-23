"use client";

import { useEffect, useState } from "react";

import { LogoMark } from "@/components/brand/logo-mark";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#play", label: "Our Story" },
  { href: "#membership", label: "Membership" },
  { href: "#waitlist", label: "Book" },
  { href: "#play", label: "Community" },
];

/**
 * The white pill navigation that reveals once the hero has scrolled past.
 */
export function StickyNav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const trigger = Math.min(window.innerHeight * 0.72, window.innerHeight - 90);
      setShow(window.scrollY > trigger);
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
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-5 rounded-full border border-border bg-card/95 py-2.5 pl-6 pr-2.5 shadow-[0_16px_44px_-22px_rgba(17,16,15,0.55)] backdrop-blur">
        <a href="#top" className="flex items-center gap-3">
          <LogoMark className="h-7 w-auto text-ink dark:text-terracotta" />
          <span className="font-serif text-lg font-semibold tracking-tight">
            The Padel Society
          </span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l, i) => (
            <a
              key={i}
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
      </div>
    </div>
  );
}
