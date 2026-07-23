import type { ReactNode } from "react";
import Image from "next/image";
import { CalendarCheck, LineChart, Users, CreditCard, Check } from "lucide-react";

import { LogoMark } from "@/components/brand/logo-mark";
import { LogoWordmark } from "@/components/brand/logo-wordmark";
import { HeroVideo } from "@/components/landing/hero-video";
import { StickyNav } from "@/components/landing/sticky-nav";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#club", label: "The Club" },
  { href: "#membership", label: "Membership" },
  { href: "#play", label: "Programs" },
  { href: "#location", label: "Location" },
];

const clubStats = [
  { n: "6", l: "Indoor Courts" },
  { n: "2,400m²", l: "Floor Plate" },
  { n: "16hr", l: "Daily Hours" },
];

const features = [
  {
    icon: CalendarCheck,
    title: "Book a court",
    body: "See live availability and lock a slot in two taps. No group chats, no double-bookings.",
  },
  {
    icon: LineChart,
    title: "Track your games",
    body: "Log every match, watch your win streak build, and see your ranking climb across the club.",
  },
  {
    icon: Users,
    title: "Find your four",
    body: "Match with players at your level, join open games, and never be short a partner again.",
  },
  {
    icon: CreditCard,
    title: "Manage membership",
    body: "One place for your plan, payments and perks. Change or pause anytime — no phone calls.",
  },
];

const tiers = [
  {
    name: "Social",
    price: "$29",
    features: ["4 off-peak hours a month", "Full app & game tracking", "Member socials"],
    featured: false,
  },
  {
    name: "Player",
    price: "$59",
    features: [
      "12 hours a month, any time",
      "Priority booking window",
      "Free racket demos",
      "League entry included",
    ],
    featured: true,
  },
  {
    name: "Unlimited",
    price: "$99",
    features: ["Unlimited court access", "Bring a guest free weekly", "Coaching discount"],
    featured: false,
  },
];

function SectionHead({
  label,
  title,
  children,
}: {
  label: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="mb-12 max-w-[60ch]">
      <span className="eyebrow text-primary">{label}</span>
      <h2 className="mt-3.5 text-balance font-serif text-3xl font-semibold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {children && (
        <p className="mt-4 max-w-[52ch] text-muted-foreground">{children}</p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col">
      <StickyNav />

      {/* ===== VIDEO HERO ===== */}
      <header className="relative flex h-[100svh] min-h-[640px] flex-col overflow-hidden bg-[#0b0b0a]">
        <HeroVideo />
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(180deg,rgba(11,11,10,.5) 0%,rgba(11,11,10,.22) 38%,rgba(11,11,10,.5) 100%)",
          }}
        />

        {/* top menu bar — transparent over the video, visible at the top */}
        <nav className="relative z-[3] flex items-center justify-between gap-5 px-6 py-6 text-white sm:px-10">
          <LogoMark className="h-10 w-auto text-white" aria-label="The Padel Society" />
          <div className="hidden items-center gap-9 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[15px] font-medium text-white/90 transition hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>
          <Button
            asChild
            variant="outline"
            size="pill"
            className="border-white/55 bg-white/5 text-white backdrop-blur hover:bg-white/15 hover:text-white"
          >
            <a href="#waitlist">Become a Member</a>
          </Button>
        </nav>

        {/* hero center */}
        <div className="relative z-[3] flex flex-1 flex-col items-center justify-center gap-9 px-6 pb-16 text-center">
          <LogoWordmark
            className="w-[min(80vw,760px)] text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
            aria-label="The Padel Society"
          />
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <Button
              asChild
              size="pill"
              className="border border-white/60 bg-ink/30 text-white backdrop-blur hover:bg-white/20"
            >
              <a href="#waitlist">Join the Waitlist</a>
            </Button>
            <Button
              asChild
              size="pill"
              className="border border-white/60 bg-ink/30 text-white backdrop-blur hover:bg-white/20"
            >
              <a href="#membership">Become a Member</a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 z-[3] flex -translate-x-1/2 flex-col items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/70">
          Scroll
          <span className="h-6 w-px bg-gradient-to-b from-white/70 to-transparent" />
        </div>
      </header>

      <main>
        {/* ===== ABOUT THE CLUB ===== */}
        <section id="club" className="scroll-mt-24 py-20 sm:py-28">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <span className="eyebrow text-primary">Introduction</span>
                <h2 className="mt-3.5 max-w-[20ch] text-balance font-serif text-3xl font-semibold leading-[1.06] tracking-tight sm:text-4xl md:text-[42px]">
                  The fastest-growing sport in the world, given the room it
                  deserves.
                </h2>
                <div className="mt-6 flex max-w-[54ch] flex-col gap-4 leading-relaxed text-muted-foreground">
                  <p>
                    Six indoor courts, built to championship standard. A movement
                    studio for pilates and strength. Recovery, in an infrared
                    sauna and cold plunge. A café-bar that opens with the espresso
                    machine and closes with the last negroni.
                  </p>
                  <p>
                    The Padel Society is designed as a destination, not a
                    drop-in — built for the rituals of European sporting culture
                    and the hours that surround the match.
                  </p>
                </div>
                <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
                  {clubStats.map((s) => (
                    <div key={s.l}>
                      <dt className="font-serif text-3xl font-semibold text-primary sm:text-4xl">
                        {s.n}
                      </dt>
                      <dd className="mt-1 text-sm text-muted-foreground">
                        {s.l}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
                <Image
                  src="/about-club.jpg"
                  alt="Aerial view of The Padel Society courts"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== FEATURES ===== */}
        <section id="play" className="scroll-mt-24 py-20 sm:py-24">
          <div className="mx-auto w-full max-w-6xl px-6">
            <SectionHead label="Everything in one place" title="Your whole padel life, one membership.">
              Padel is the fastest-growing sport in the world because it&apos;s
              social by design — four players, one glass box, endless rallies. We
              made the club, the booking and the community one simple thing.
            </SectionHead>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex min-h-52 flex-col gap-3 rounded-2xl border border-border bg-card px-6 pb-7 pt-6"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-terracotta-50 text-terracotta-600">
                    <f.icon className="size-5" />
                  </span>
                  <h3 className="mt-1 font-serif text-xl font-semibold">
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WAITLIST ===== */}
        <section id="waitlist" className="bg-ink text-ivory">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
            <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <span className="eyebrow text-terracotta-300">The founding fifty</span>
                <h2 className="mt-3.5 text-balance font-serif text-3xl font-semibold leading-[1.03] tracking-tight sm:text-4xl md:text-5xl">
                  The first <em className="italic text-terracotta-300">50</em>{" "}
                  members play the season on us.
                </h2>
                <p className="mt-5 max-w-[44ch] text-ivory/70">
                  We open in November. Join the waitlist now — the higher you
                  climb, the bigger the welcome. Ranks 1–50 get a free founding
                  membership.
                </p>
                <ul className="mb-8 mt-6 flex flex-col gap-3">
                  {[
                    "Drop your name on the waitlist and get your rank instantly.",
                    "Share your invite link — every friend who joins moves you up the board.",
                    "Finish in the top 50 when we open, and your first season is free.",
                  ].map((step, i) => (
                    <li key={i} className="flex items-baseline gap-3.5 text-[15px] text-ivory/85">
                      <span className="min-w-6 font-serif text-terracotta-300">
                        0{i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild size="pill">
                  <a href="#">Join the waitlist →</a>
                </Button>
              </div>

              {/* leaderboard */}
              <div className="rounded-[18px] border border-ink-muted bg-ink-soft p-2.5 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
                <div className="flex items-center justify-between px-4 pb-3 pt-3.5">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ivory/50">
                    Live leaderboard
                  </span>
                  <span className="flex items-center gap-2 text-xs text-terracotta-300">
                    <span className="size-1.5 animate-pulse rounded-full bg-terracotta-300" />
                    2,140 in line
                  </span>
                </div>
                {(
                  [
                    { r: 1, who: "Mara V.", inv: "18 invites", pts: "1,820", tone: "top" },
                    { r: 2, who: "Jonas K.", inv: "15 invites", pts: "1,510", tone: "free" },
                    { r: 3, who: "Priya S.", inv: "14 invites", pts: "1,395", tone: "free" },
                  ] as const
                ).map((row) => (
                  <LeaderRow key={row.r} {...row} />
                ))}
                <div className="flex items-center gap-3 px-4 py-2">
                  <span className="whitespace-nowrap text-[11px] uppercase tracking-[0.14em] text-terracotta-300">
                    Free membership · top 50
                  </span>
                  <span className="h-px flex-1 bg-terracotta-300/30" />
                </div>
                {(
                  [
                    { r: 48, who: "Tom B.", inv: "4 invites", pts: "420", tone: "free" },
                    { r: 49, who: "Lena R.", inv: "4 invites", pts: "410", tone: "free" },
                  ] as const
                ).map((row) => (
                  <LeaderRow key={row.r} {...row} />
                ))}
                <LeaderRow
                  r={73}
                  who="You"
                  inv="invite 2 more to break the top 50"
                  pts="180"
                  tone="you"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== MEMBERSHIP ===== */}
        <section id="membership" className="py-20 sm:py-24">
          <div className="mx-auto w-full max-w-6xl px-6">
            <SectionHead label="Membership" title="Simple plans. Serious court time.">
              Every plan includes app access, game tracking and member events.
              Prices are placeholders — set the real numbers when you launch.
            </SectionHead>
            <div className="grid gap-4 md:grid-cols-3">
              {tiers.map((t) => (
                <div
                  key={t.name}
                  className={`flex flex-col rounded-2xl border p-7 ${
                    t.featured
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card"
                  }`}
                >
                  {t.featured && (
                    <span className="mb-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ivory">
                      Most popular
                    </span>
                  )}
                  <div className="font-serif text-[22px] font-semibold">{t.name}</div>
                  <div className="mb-0.5 mt-2 font-serif text-[42px] font-semibold leading-none">
                    {t.price}
                    <small
                      className={`ml-1 font-sans text-sm font-medium ${
                        t.featured ? "text-ivory/80" : "text-muted-foreground"
                      }`}
                    >
                      /mo
                    </small>
                  </div>
                  <ul className="my-5 flex flex-col gap-2.5 text-[14.5px]">
                    {t.features.map((f) => (
                      <li key={f} className="flex gap-2.5">
                        <Check
                          className={`size-4 shrink-0 translate-y-0.5 ${
                            t.featured ? "text-ivory" : "text-primary"
                          }`}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    size="pill"
                    variant={t.featured ? "secondary" : "outline"}
                    className={`mt-auto w-full justify-center ${
                      t.featured ? "bg-ivory text-terracotta-700 hover:bg-ivory/90" : ""
                    }`}
                  >
                    <a href="#">Choose {t.name}</a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer id="location" className="scroll-mt-24 bg-ink-soft text-ivory/85">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="flex flex-wrap items-start justify-between gap-10">
            <div className="max-w-[30ch]">
              <div className="flex items-center gap-3">
                <LogoMark className="h-9 w-auto text-ivory" />
                <span className="font-serif text-xl font-semibold text-ivory">
                  The Padel Society
                </span>
              </div>
              <p className="mt-4 text-sm text-ivory/60">
                A members&apos; padel club for people who&apos;d rather be on
                court. Opening Melbourne, November 2026.
              </p>
              <Button asChild size="pill" className="mt-5">
                <a href="#waitlist">Join the waitlist →</a>
              </Button>
            </div>
            <div className="flex flex-wrap gap-14">
              <FootCol
                title="Club"
                links={["How it works", "Membership", "Community", "Waitlist"]}
              />
              <FootCol
                title="Members"
                links={["Book a court", "Log in", "Track games", "Find players"]}
              />
              <FootCol
                title="Say hi"
                links={["Instagram", "hello@padelsociety.com", "Visit us"]}
              />
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-ink-muted pt-6 text-xs text-ivory/45">
            <span>© 2026 The Padel Society</span>
            <a href="/design-system" className="hover:text-ivory/80">
              Design system
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function LeaderRow({
  r,
  who,
  inv,
  pts,
  tone,
}: {
  r: number;
  who: string;
  inv: string;
  pts: string;
  tone: "top" | "free" | "you";
}) {
  const bg =
    tone === "you"
      ? "bg-terracotta-300/20 border border-dashed border-terracotta-300/55"
      : tone === "free"
        ? "bg-terracotta-500/[0.14]"
        : "";
  return (
    <div className={`flex items-center gap-3.5 rounded-xl px-4 py-2.5 text-[15px] text-ivory/90 ${bg}`}>
      <span className="w-[30px] font-serif text-base tabular-nums text-ivory/50">
        {r}
      </span>
      <span className="flex-1">
        {who}
        <small className="block text-xs text-ivory/45">{inv}</small>
      </span>
      <span className="text-sm font-semibold tabular-nums text-terracotta-300">
        {pts}
      </span>
    </div>
  );
}

function FootCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="flex flex-col gap-2.5">
      <h4 className="mb-1 text-sm font-semibold text-ivory">{title}</h4>
      {links.map((l) => (
        <a key={l} href="#" className="text-sm text-ivory/60 transition hover:text-ivory">
          {l}
        </a>
      ))}
    </div>
  );
}
