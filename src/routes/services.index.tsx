import { createFileRoute, Link } from "@tanstack/react-router";

import { CtaButtons } from "@/components/ui-x/CtaButtons";
import { Section, SectionHeading } from "@/components/ui-x/Section";
import { services } from "@/content/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Branding, Printing & Signage Services in Bangalore | SHWETHA ARTS" },
      {
        name: "description",
        content:
          "Glass frosting, business branding stickers, wall graphics, flex and banner printing, home name plates and vehicle branding in Bengaluru.",
      },
      { property: "og:title", content: "Our Services | SHWETHA ARTS" },
      {
        property: "og:description",
        content: "Six branding and printing services for offices, shops, homes and vehicles in Bengaluru.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <Section tone="navy" className="py-12 md:py-16">
        <SectionHeading
          invert
          eyebrow="Services"
          title="Everything we design, print and install"
          description="Choose a service to see where it is used, the benefits, our process and common questions."
        />
      </Section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="card-soft group overflow-hidden transition-shadow hover:shadow-lift"
            >
              <img
                src={s.image}
                alt={s.imageAlt}
                loading="lazy"
                className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-5">
                <h2 className="text-lg font-semibold">{s.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.cardDescription}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-primary">View details →</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <CtaButtons />
        </div>
      </Section>
    </>
  );
}
