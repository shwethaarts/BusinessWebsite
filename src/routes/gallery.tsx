import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { Section, SectionHeading } from "@/components/ui-x/Section";
import { CtaButtons } from "@/components/ui-x/CtaButtons";
import { categoryLabels, projects } from "@/content/projects";
import type { ProjectCategory } from "@/types/content";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Our Work Gallery | SHWETHA ARTS Bangalore" },
      {
        name: "description",
        content:
          "Branding work by SHWETHA ARTS in Bengaluru — glass frosting, business stickers, wall graphics, flex banners, name plates and vehicle branding.",
      },
      { property: "og:title", content: "Our Work Gallery | SHWETHA ARTS" },
      {
        property: "og:description",
        content: "Branding, printing and signage work across Bengaluru.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const categories = Object.keys(categoryLabels) as ProjectCategory[];

function GalleryPage() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");
  const shown = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="Gallery"
          title="Our Work"
          description="Browse our project photographs and reference visuals across stickers, frosting, banners, name plates and branding work."
        />

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {(["all", ...categories] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active === cat
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-foreground hover:bg-secondary"
              }`}
            >
              {cat === "all" ? "All Work" : categoryLabels[cat]}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <figure key={p.id} className="card-soft overflow-hidden">
              <img
                src={p.image}
                alt={p.alt}
                loading="lazy"
                className="h-52 w-full object-cover"
              />
              <figcaption className="p-4">
                <p className="text-sm font-semibold">{p.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {categoryLabels[p.category]}
                  {p.isPlaceholder ? " · reference image" : ""}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading title="Have a similar requirement?" />
        <div className="flex justify-center">
          <CtaButtons />
        </div>
      </Section>
    </>
  );
}
