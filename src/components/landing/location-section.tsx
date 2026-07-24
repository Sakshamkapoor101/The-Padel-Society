"use client";

import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerTooltip,
} from "@/components/ui/map";
import { Button } from "@/components/ui/button";

const LNG = 144.9387;
const LAT = -37.8246;

export function LocationSection() {
  return (
    <section id="location" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* info */}
          <div className="flex flex-col">
            <span className="eyebrow text-primary">Location</span>
            <h2 className="mt-3.5 max-w-[16ch] text-balance font-serif text-3xl font-semibold leading-[1.06] tracking-tight sm:text-4xl md:text-[42px]">
              Find us in Port Melbourne.
            </h2>
            <p className="mt-6 font-serif text-xl leading-snug text-foreground">
              42 Boundary Street
              <br />
              Port Melbourne VIC 3207
            </p>
            <div className="mt-8 grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
              <div>
                <h3 className="eyebrow mb-3">Reach Us</h3>
                <ul className="flex flex-col gap-1.5 text-[15px] text-muted-foreground">
                  <li>15 minutes from the CBD</li>
                  <li>Tram &amp; bike-friendly location</li>
                </ul>
              </div>
              <div>
                <h3 className="eyebrow mb-3">Hours</h3>
                <p className="text-[15px] text-muted-foreground">
                  6am – 10pm, daily
                </p>
              </div>
            </div>
            <Button
              asChild
              size="pill"
              variant="outline"
              className="mt-9 self-start"
            >
              <a
                href="https://www.google.com/maps/search/?api=1&query=42+Boundary+Street+Port+Melbourne+VIC+3207"
                target="_blank"
                rel="noreferrer"
              >
                Get directions →
              </a>
            </Button>
          </div>

          {/* map */}
          <div className="h-[400px] overflow-hidden rounded-2xl border border-border lg:h-[520px]">
            <Map center={[LNG, LAT]} zoom={15}>
              <MapMarker longitude={LNG} latitude={LAT}>
                <MarkerContent>
                  <div className="size-4 rounded-full border-2 border-white bg-primary shadow-lg" />
                </MarkerContent>
                <MarkerTooltip>The Padel Society</MarkerTooltip>
              </MapMarker>
            </Map>
          </div>
        </div>
      </div>
    </section>
  );
}
