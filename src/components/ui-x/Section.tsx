import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "surface" | "navy";
}) {
  return (
    <section
      id={id}
      className={cn(
        "px-4 py-14 sm:px-6 md:py-20",
        tone === "surface" && "bg-surface",
        tone === "navy" && "bg-navy text-navy-foreground",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  invert?: boolean;
}) {
  return (
    <div
      className={cn(
        "mb-10 max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.18em]",
            invert ? "text-navy-foreground/70" : "text-primary",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">{title}</h2>
      {description ? (
        <p
          className={cn(
            "mt-3 text-sm leading-relaxed sm:text-base",
            invert ? "text-navy-foreground/80" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
