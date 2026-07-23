import type { ReactNode } from "react";
import { ArrowUpRight, Check, Trophy } from "lucide-react";

import { Wordmark } from "@/components/brand/wordmark";
import { Monogram } from "@/components/brand/monogram";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const metadata = {
  title: "The Padel Society — Design System",
  description:
    "Brand foundations and component library for The Padel Society: colour, typography, logo and UI.",
};

/* ---------- Layout helpers ---------- */

function Section({
  id,
  index,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border py-16">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <div className="mb-3 flex items-center gap-3">
            <span className="font-mono text-xs text-muted-foreground">
              {index}
            </span>
            <span className="eyebrow">{eyebrow}</span>
          </div>
          <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
            {title}
          </h2>
        </div>
        {description && (
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}

/* ---------- Colour swatch ---------- */

function Swatch({
  name,
  hex,
  className,
  border,
}: {
  name: string;
  hex: string;
  className: string;
  border?: boolean;
}) {
  return (
    <div className="group">
      <div
        className={`aspect-[4/3] w-full rounded-lg ${className} ${
          border ? "ring-1 ring-inset ring-ivory-linen" : ""
        }`}
      />
      <div className="mt-2.5 flex items-baseline justify-between">
        <span className="text-sm font-medium">{name}</span>
        <span className="font-mono text-xs uppercase text-muted-foreground">
          {hex}
        </span>
      </div>
    </div>
  );
}

const brandColors = [
  { name: "Ivory", hex: "#F4F1EA", className: "bg-ivory", border: true },
  { name: "Ink", hex: "#11100F", className: "bg-ink" },
  { name: "Terracotta", hex: "#C55A48", className: "bg-terracotta" },
];

const terracottaScale = [
  { step: "50", className: "bg-terracotta-50", border: true },
  { step: "100", className: "bg-terracotta-100" },
  { step: "200", className: "bg-terracotta-200" },
  { step: "300", className: "bg-terracotta-300" },
  { step: "400", className: "bg-terracotta-400" },
  { step: "500", className: "bg-terracotta-500" },
  { step: "600", className: "bg-terracotta-600" },
  { step: "700", className: "bg-terracotta-700" },
  { step: "800", className: "bg-terracotta-800" },
  { step: "900", className: "bg-terracotta-900" },
];

const semanticTokens = [
  { name: "background", className: "bg-background", border: true },
  { name: "foreground", className: "bg-foreground" },
  { name: "card", className: "bg-card", border: true },
  { name: "primary", className: "bg-primary" },
  { name: "secondary", className: "bg-secondary" },
  { name: "muted", className: "bg-muted" },
  { name: "accent", className: "bg-accent" },
  { name: "border", className: "bg-border" },
  { name: "ring", className: "bg-ring" },
  { name: "destructive", className: "bg-destructive" },
];

const typeScale = [
  { label: "Display", cls: "text-5xl sm:text-6xl", note: "Fraunces · 60/64" },
  { label: "H1", cls: "text-4xl", note: "Fraunces · 36" },
  { label: "H2", cls: "text-3xl", note: "Fraunces · 30" },
  { label: "H3", cls: "text-2xl", note: "Fraunces · 24" },
  { label: "Title", cls: "text-xl", note: "Fraunces · 20" },
];

/* ---------- Page ---------- */

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <Monogram shape="circle" tone="ink" size={34} />
            <Wordmark className="text-sm sm:text-base" />
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="hidden font-mono sm:inline-flex">
              v1.0
            </Badge>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-6">
        {/* Hero */}
        <section className="py-16 sm:py-24">
          <span className="eyebrow">The Padel Society — Design System</span>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl font-medium leading-[1.05] tracking-tight sm:text-7xl">
            A refined kit for a modern padel club.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            The foundations behind the brand — colour, type, logo and the
            component library — built on Next.js, Tailwind&nbsp;CSS and
            shadcn/ui.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button size="lg" asChild>
              <a href="#colour">
                Explore the system <ArrowUpRight className="size-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#components">View components</a>
            </Button>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            <Monogram shape="capsule" tone="ink" size={220} className="w-full" />
            <Monogram
              shape="capsule"
              tone="terracotta"
              size={220}
              className="w-full"
            />
            <Monogram
              shape="capsule"
              tone="ivory"
              size={220}
              className="w-full"
            />
          </div>
        </section>

        {/* Logo */}
        <Section
          id="logo"
          index="01"
          eyebrow="Identity"
          title="Logo & monogram"
          description="The wordmark and the interlocking PS mark. Give the mark room to breathe and only place it on ivory, ink or terracotta."
        >
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="justify-center">
              <CardContent className="flex flex-col items-center gap-8 py-12">
                <Wordmark stacked className="text-2xl" />
                <Separator className="w-24" />
                <Wordmark className="text-lg" />
              </CardContent>
            </Card>
            <Card className="justify-center">
              <CardContent className="grid grid-cols-3 place-items-center gap-6 py-12">
                <Monogram shape="circle" tone="ink" size={92} />
                <Monogram shape="circle" tone="terracotta" size={92} />
                <Monogram shape="circle" tone="ivory" size={92} />
                <Monogram shape="capsule" tone="ink" size={92} />
                <Monogram shape="capsule" tone="terracotta" size={92} />
                <Monogram shape="capsule" tone="ivory" size={92} />
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Colour */}
        <Section
          id="colour"
          index="02"
          eyebrow="Foundations"
          title="Colour"
          description="Three brand constants — warm ivory, deep ink and a clay terracotta — extended into a working scale and mapped to semantic tokens."
        >
          <div className="space-y-12">
            <div>
              <h3 className="eyebrow mb-4">Brand</h3>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                {brandColors.map((c) => (
                  <Swatch key={c.name} {...c} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="eyebrow mb-4">Terracotta scale</h3>
              <div className="grid grid-cols-5 gap-3 sm:grid-cols-10">
                {terracottaScale.map((c) => (
                  <div key={c.step}>
                    <div
                      className={`aspect-square w-full rounded-md ${c.className} ${
                        c.border ? "ring-1 ring-inset ring-ivory-linen" : ""
                      }`}
                    />
                    <div className="mt-1.5 text-center text-xs font-medium">
                      {c.step}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="eyebrow mb-4">Semantic tokens</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
                {semanticTokens.map((t) => (
                  <div key={t.name} className="flex items-center gap-3">
                    <div
                      className={`size-9 shrink-0 rounded-md ${t.className} ${
                        t.border ? "ring-1 ring-inset ring-ivory-linen" : ""
                      }`}
                    />
                    <span className="truncate font-mono text-xs text-muted-foreground">
                      {t.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Typography */}
        <Section
          id="typography"
          index="03"
          eyebrow="Foundations"
          title="Typography"
          description="Fraunces — a characterful old-style serif — carries every display moment. Inter keeps the interface calm and legible."
        >
          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <Card>
              <CardContent className="divide-y divide-border py-2">
                {typeScale.map((t) => (
                  <div
                    key={t.label}
                    className="flex items-baseline justify-between gap-6 py-4"
                  >
                    <span
                      className={`font-serif font-medium tracking-tight ${t.cls}`}
                    >
                      Padel
                    </span>
                    <div className="text-right">
                      <div className="text-sm font-medium">{t.label}</div>
                      <div className="font-mono text-xs text-muted-foreground">
                        {t.note}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <span className="eyebrow">Eyebrow · Inter</span>
                  <CardTitle className="font-sans text-base">
                    Body copy — Inter
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Padel is the fastest-growing racket sport in the world. The
                    Padel Society brings members a considered place to play,
                    train and gather — designed down to the last hairline rule.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="py-6">
                  <p className="font-serif text-2xl leading-snug tracking-tight">
                    &ldquo;Good design is a quiet advantage on and off the
                    court.&rdquo;
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        {/* Components */}
        <Section
          id="components"
          index="04"
          eyebrow="Library"
          title="Components"
          description="shadcn/ui primitives, re-skinned to the brand. Every element reads from the same tokens, so the whole kit re-themes in one place."
        >
          <div className="space-y-6">
            {/* Buttons + badges */}
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Buttons</CardTitle>
                  <CardDescription>
                    Variants across four sizes.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap items-center gap-3">
                  <Button>Book a court</Button>
                  <Button variant="ink">Ink</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button size="pill">
                    <Trophy className="size-4" /> Join a ladder
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Badges</CardTitle>
                  <CardDescription>Status and metadata.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap items-center gap-2.5">
                  <Badge>Members only</Badge>
                  <Badge variant="ink">Prime time</Badge>
                  <Badge variant="secondary">Beginner</Badge>
                  <Badge variant="outline">Indoor</Badge>
                  <Badge variant="muted">Waitlist</Badge>
                  <Badge>
                    <Check className="size-3" /> Confirmed
                  </Badge>
                </CardContent>
              </Card>
            </div>

            {/* Form + membership card */}
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Join the waitlist</CardTitle>
                  <CardDescription>
                    Form controls with focus rings tuned to the brand.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" placeholder="Alex Moretti" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@club.com" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Request an invite</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Society Membership</CardTitle>
                  <CardDescription>Full access, all courts.</CardDescription>
                  <CardAction>
                    <Badge variant="ink">Popular</Badge>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-4xl font-medium tracking-tight">
                      £129
                    </span>
                    <span className="text-sm text-muted-foreground">
                      / month
                    </span>
                  </div>
                  <ul className="mt-5 space-y-2.5 text-sm">
                    {[
                      "Unlimited off-peak bookings",
                      "Priority on prime-time courts",
                      "Guest passes each month",
                      "Coaching & ladder events",
                    ].map((f) => (
                      <li key={f} className="flex items-center gap-2.5">
                        <Check className="size-4 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="ink" className="w-full">
                    Become a member
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Tabs + accordion */}
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Tabs</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="courts">
                    <TabsList className="w-full">
                      <TabsTrigger value="courts">Courts</TabsTrigger>
                      <TabsTrigger value="coaching">Coaching</TabsTrigger>
                      <TabsTrigger value="events">Events</TabsTrigger>
                    </TabsList>
                    <TabsContent
                      value="courts"
                      className="pt-4 text-sm text-muted-foreground"
                    >
                      Eight panoramic indoor courts, open 06:00–23:00 daily.
                    </TabsContent>
                    <TabsContent
                      value="coaching"
                      className="pt-4 text-sm text-muted-foreground"
                    >
                      Private and group sessions with certified pros.
                    </TabsContent>
                    <TabsContent
                      value="events"
                      className="pt-4 text-sm text-muted-foreground"
                    >
                      Weekly ladders, socials and seasonal tournaments.
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>FAQ</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="1">
                      <AccordionTrigger>
                        Do I need my own racket?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Not at all — premium rackets are complimentary for
                        members and available to hire for guests.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="2">
                      <AccordionTrigger>
                        How far ahead can I book?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Members book up to 14 days in advance; prime-time slots
                        open first to Society tier.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="3">
                      <AccordionTrigger>Can I bring guests?</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Yes. Every membership includes monthly guest passes.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-border bg-ink text-ivory">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 py-14 text-center">
          <Monogram shape="circle" tone="ivory" size={56} />
          <Wordmark stacked className="text-xl text-ivory" />
          <p className="max-w-sm text-sm text-ivory/60">
            Design system · Next.js · Tailwind CSS · shadcn/ui
          </p>
        </div>
      </footer>
    </div>
  );
}
