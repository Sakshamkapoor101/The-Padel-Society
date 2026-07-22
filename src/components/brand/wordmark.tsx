import { cn } from "@/lib/utils";

type WordmarkProps = {
  className?: string;
  /** Render on a single line ("THE PADEL SOCIETY") or stacked. */
  stacked?: boolean;
  as?: React.ElementType;
};

/**
 * The Padel Society wordmark.
 * Vintage letterspaced serif set in Fraunces, mirroring the brand lockup.
 */
export function Wordmark({
  className,
  stacked = false,
  as: Tag = "span",
}: WordmarkProps) {
  return (
    <Tag
      className={cn(
        "font-serif font-medium uppercase leading-none tracking-[0.14em] [font-feature-settings:'ss01']",
        stacked && "flex flex-col items-center gap-1 tracking-[0.2em]",
        className
      )}
      aria-label="The Padel Society"
    >
      {stacked ? (
        <>
          <span className="text-[0.55em] tracking-[0.35em]">THE</span>
          <span>PADEL</span>
          <span>SOCIETY</span>
        </>
      ) : (
        "The Padel Society"
      )}
    </Tag>
  );
}
