import { createFileRoute } from "@tanstack/react-router";

import { Section, SectionHeading } from "@/components/ui-x/Section";
import { CtaButtons } from "@/components/ui-x/CtaButtons";
import { generalFaqs } from "@/content/faqs";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions | SHWETHA ARTS Bangalore" },
      {
        name: "description",
        content:
          "Answers about branding services, designs, site visits, installation, timelines and pricing from SHWETHA ARTS in Bengaluru.",
      },
      { property: "og:title", content: "FAQ | SHWETHA ARTS" },
      {
        property: "og:description",
        content: "Common questions about our branding, printing and signage services.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/faq" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <Section>
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
        <div className="mx-auto max-w-3xl space-y-3">
          {generalFaqs.map((f) => (
            <details key={f.question} className="card-soft p-5">
              <summary className="cursor-pointer text-sm font-semibold">{f.question}</summary>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading title="Still have a question?" />
        <div className="flex justify-center">
          <CtaButtons />
        </div>
      </Section>
    </>
  );
}
