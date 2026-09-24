import { createFileRoute } from "@tanstack/react-router";

import { Section } from "@/components/ui-x/Section";
import { site } from "@/content/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | SHWETHA ARTS" },
      {
        name: "description",
        content:
          "Terms covering quotations, designs, timelines, installation and payments for work carried out by SHWETHA ARTS in Bengaluru.",
      },
      { property: "og:title", content: "Terms of Service | SHWETHA ARTS" },
      { property: "og:description", content: "Terms for our branding and signage work." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl space-y-4">
        <h1 className="text-3xl font-bold">Terms of Service</h1>
        <p className="text-sm text-muted-foreground">
          Quotations shared by {site.name} are based on the sizes, materials and design details
          confirmed at the time of enquiry. Any change in size, material or design may change the
          price.
        </p>
        <p className="text-sm text-muted-foreground">
          Production begins after the design and quotation are approved. Timelines are confirmed
          for each project and may vary with site conditions, material availability and access for
          installation.
        </p>
        <p className="text-sm text-muted-foreground">
          Images shown on this website are examples of the type of work we carry out. Final output
          depends on the surface, material and design chosen for your project.
        </p>
        <p className="text-sm text-muted-foreground">
          For any clarification, call or WhatsApp us on {site.phoneDisplay}.
        </p>
      </div>
    </Section>
  );
}
