"use client";

import { useEffect, useRef } from "react";

/**
 * Full-bleed background video for the hero. Forces playback even where
 * autoplay is throttled, retrying on the first user interaction.
 */
export function HeroVideo({ poster }: { poster?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    const tryPlay = () => {
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };
    tryPlay();
    const events = ["click", "touchstart", "keydown", "scroll", "pointermove"];
    events.forEach((e) =>
      window.addEventListener(e, tryPlay, { once: true, passive: true })
    );
    const onVis = () => {
      if (!document.hidden) tryPlay();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      events.forEach((e) => window.removeEventListener(e, tryPlay));
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 z-0 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
    >
      <source src="/padel.mp4" type="video/mp4" />
    </video>
  );
}
