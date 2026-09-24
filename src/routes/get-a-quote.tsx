import { createFileRoute } from "@tanstack/react-router";

import { Section, SectionHeading } from "@/components/ui-x/Section";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

export const Route = createFileRoute("/get-a-quote")({
  head: () => ({
    meta: [
      { title: "Get a Free Quote | SHWETHA ARTS Bangalore" },
      {
        name: "description",
        content:
          "Request a free quotation from SHWETHA ARTS in Bengaluru for glass frosting, branding stickers, wall graphics, flex printing, name plates and vehicle branding.",
      },
      { property: "og:title", content: "Get a Free Quote | SHWETHA ARTS" },
      {
        property: "og:description",
        content: "Share your requirement and receive a quotation from our Bengaluru team.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/get-a-quote" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/get-a-quote" }],
  }),
  component: QuotePage,
});

function QuotePage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Get a quote"
        title="Request a free quotation"
        description="Tell us what you need, where it is and any size details. We will get back with pricing and options."
      />
      <div className="mx-auto max-w-2xl">
        <EnquiryForm variant="quote" />
      </div>
    </Section>
  );
}
