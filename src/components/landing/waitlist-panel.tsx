"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

type Row = {
  r: number;
  who: string;
  inv: string;
  pts: string;
  tone: "top" | "free" | "you";
};

const topRows: Row[] = [
  { r: 1, who: "Mara V.", inv: "18 invites", pts: "1,820", tone: "top" },
  { r: 2, who: "Jonas K.", inv: "15 invites", pts: "1,510", tone: "free" },
  { r: 3, who: "Priya S.", inv: "14 invites", pts: "1,395", tone: "free" },
];

const nearRows: Row[] = [
  { r: 48, who: "Tom B.", inv: "4 invites", pts: "420", tone: "free" },
  { r: 49, who: "Lena R.", inv: "4 invites", pts: "410", tone: "free" },
];

const inputClass =
  "w-full rounded-lg border border-white/15 bg-white/[0.04] px-3.5 py-2.5 text-[15px] text-ivory placeholder:text-ivory/40 outline-none transition focus:border-terracotta-300 focus:ring-2 focus:ring-terracotta-300/25";

export function WaitlistPanel() {
  const [joined, setJoined] = useState(false);
  const [firstName, setFirstName] = useState("");

  if (joined) {
    return <Leaderboard youName={firstName.trim() || "You"} />;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setJoined(true);
      }}
      className="rounded-[18px] border border-white/10 bg-ink-soft p-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] sm:p-7"
    >
      <span className="eyebrow text-terracotta-300">Reserve your spot</span>
      <h3 className="mt-2 font-serif text-2xl font-semibold text-ivory">
        Join the waitlist
      </h3>
      <p className="mt-2 text-sm text-ivory/60">
        Sign up to unlock the live leaderboard and see your rank instantly.
      </p>

      <div className="mt-6 flex flex-col gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="wl-first" className="text-xs font-medium text-ivory/60">
              First name
            </label>
            <input
              id="wl-first"
              name="firstName"
              type="text"
              required
              autoComplete="given-name"
              placeholder="Mara"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="wl-last" className="text-xs font-medium text-ivory/60">
              Last name
            </label>
            <input
              id="wl-last"
              name="lastName"
              type="text"
              required
              autoComplete="family-name"
              placeholder="Vermeer"
              className={inputClass}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="wl-email" className="text-xs font-medium text-ivory/60">
            Email
          </label>
          <input
            id="wl-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@email.com"
            className={inputClass}
          />
        </div>

        <label className="mt-1 flex items-start gap-3 text-sm text-ivory/70">
          <input
            type="checkbox"
            required
            className="mt-0.5 size-4 shrink-0 rounded accent-[#c55a48]"
          />
          <span>
            Add me to the newsletter — notify me about early-bird tickets,
            openings and member events.
          </span>
        </label>
      </div>

      <Button type="submit" size="pill" className="mt-6 w-full justify-center">
        Join the waitlist
      </Button>
      <p className="mt-3 text-center text-xs text-ivory/40">
        No spam. Unsubscribe anytime.
      </p>
    </form>
  );
}

function Leaderboard({ youName }: { youName: string }) {
  return (
    <div className="rounded-[18px] border border-white/10 bg-ink-soft p-2.5 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
      <div className="flex items-center justify-between px-4 pb-3 pt-3.5">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ivory/50">
          Live leaderboard
        </span>
        <span className="flex items-center gap-2 text-xs text-terracotta-300">
          <span className="size-1.5 animate-pulse rounded-full bg-terracotta-300" />
          2,141 in line
        </span>
      </div>
      {topRows.map((row) => (
        <LeaderRow key={row.r} {...row} />
      ))}
      <div className="flex items-center gap-3 px-4 py-2">
        <span className="whitespace-nowrap text-[11px] uppercase tracking-[0.14em] text-terracotta-300">
          Free membership · top 50
        </span>
        <span className="h-px flex-1 bg-terracotta-300/30" />
      </div>
      {nearRows.map((row) => (
        <LeaderRow key={row.r} {...row} />
      ))}
      <LeaderRow
        r={73}
        who={youName}
        inv="invite 2 more to break the top 50"
        pts="180"
        tone="you"
      />
    </div>
  );
}

function LeaderRow({ r, who, inv, pts, tone }: Row) {
  const bg =
    tone === "you"
      ? "bg-terracotta-300/20 border border-dashed border-terracotta-300/55"
      : tone === "free"
        ? "bg-terracotta-500/[0.14]"
        : "";
  return (
    <div
      className={`flex items-center gap-3.5 rounded-xl px-4 py-2.5 text-[15px] text-ivory/90 ${bg}`}
    >
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
