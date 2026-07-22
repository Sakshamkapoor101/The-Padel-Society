import { cn } from "@/lib/utils";

type Shape = "bare" | "circle" | "capsule";
type Tone = "ink" | "terracotta" | "ivory";

type MonogramProps = {
  className?: string;
  shape?: Shape;
  /** Colour of the container fill (bare uses this as the mark colour). */
  tone?: Tone;
  /** Size in pixels of the lockup box. */
  size?: number;
};

const container: Record<Tone, string> = {
  ink: "bg-ink text-ivory",
  terracotta: "bg-terracotta text-ivory",
  ivory: "bg-ivory text-ink ring-1 ring-inset ring-ivory-linen",
};

const bareMark: Record<Tone, string> = {
  ink: "text-ink",
  terracotta: "text-terracotta",
  ivory: "text-ivory",
};

const shapeClass: Record<Shape, string> = {
  bare: "",
  circle: "rounded-full",
  capsule: "rounded-[42%]",
};

/**
 * The "PS" monogram — the two serif capitals tucked into an interlocking
 * ligature, echoing the brand mark. Rendered in Fraunces so it stays crisp
 * at any size and inherits the type system.
 */
export function Monogram({
  className,
  shape = "circle",
  tone = "ink",
  size = 96,
}: MonogramProps) {
  const isBare = shape === "bare";

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center overflow-hidden align-middle",
        isBare ? bareMark[tone] : container[tone],
        shapeClass[shape],
        className
      )}
      style={{ width: size, height: size }}
      role="img"
      aria-label="The Padel Society monogram"
    >
      <span
        className="relative font-serif font-semibold leading-none [font-feature-settings:'ss01']"
        style={{ fontSize: size * 0.5 }}
      >
        <span className="relative -mr-[0.14em] -translate-y-[0.09em]">P</span>
        <span className="relative translate-y-[0.09em]">S</span>
      </span>
    </span>
  );
}
