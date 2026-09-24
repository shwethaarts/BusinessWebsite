import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

import { Section, SectionHeading } from "@/components/ui-x/Section";
import { CtaButtons } from "@/components/ui-x/CtaButtons";
import { services } from "@/content/services";
import { site } from "@/content/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | SHWETHA ARTS Creative Branding, Bangalore" },
      {
        name: "description",
        content:
          "SHWETHA ARTS is a creative branding solutions company in Bengaluru offering glass frosting, stickers, wall graphics, printing, name plates and vehicle branding.",
      },
      { property: "og:title", content: "About SHWETHA ARTS" },
      {
        property: "og:description",
        content: "Creative branding, printing and signage solutions in Bengaluru.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { title: "Customized solutions", text: "Every design is made for your space, brand and budget." },
  { title: "Quality materials", text: "We use durable films, vinyls and print media for a long-lasting finish." },
  { title: "End-to-end service", text: "Design, production and on-site installation handled by one team." },
  { title: "Clear communication", text: "Quick replies on WhatsApp, honest pricing and agreed timelines." },
];

function AboutPage() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">About us</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            {site.name} — {site.tagline}
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {site.shortDescription} Based in {site.city}, we work with shops, offices, showrooms,
            clinics, restaurants, schools, homes and vehicle owners to turn plain surfaces into
            clear, attractive branding.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButtons />
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="Why choose us" title="How we work" />
        <div className="grid gap-5 sm:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="card-soft flex gap-3 p-5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="text-sm font-semibold">{v.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title="What we do" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="card-soft p-5 transition-shadow hover:shadow-lift"
            >
              <h3 className="text-sm font-semibold">{s.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.cardDescription}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
