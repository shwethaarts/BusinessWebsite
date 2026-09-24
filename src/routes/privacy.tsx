import { createFileRoute } from "@tanstack/react-router";

import { Section } from "@/components/ui-x/Section";
import { site } from "@/content/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | SHWETHA ARTS" },
      {
        name: "description",
        content:
          "How SHWETHA ARTS collects and uses the details you share through enquiries, calls and WhatsApp messages.",
      },
      { property: "og:title", content: "Privacy Policy | SHWETHA ARTS" },
      { property: "og:description", content: "How we handle your enquiry details." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <Section>
      <div className="prose-sm mx-auto max-w-3xl space-y-4">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground">
          {site.name} collects only the details you choose to share with us — such as your name,
          phone number, location and project requirement — so that we can respond to your enquiry
          and provide a quotation.
        </p>
        <p className="text-sm text-muted-foreground">
          We do not sell or rent your details to anyone. Enquiries sent through this website open a
          WhatsApp message on your device, so your message is also handled under WhatsApp's own
          privacy terms.
        </p>
        <p className="text-sm text-muted-foreground">
          If you would like your details removed from our records, call or WhatsApp us on{" "}
          {site.phoneDisplay} and we will remove them.
        </p>
      </div>
    </Section>
  );
}
