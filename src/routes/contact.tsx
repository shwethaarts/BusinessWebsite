import { createFileRoute } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone } from "lucide-react";

import { Section, SectionHeading } from "@/components/ui-x/Section";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { site } from "@/content/site";
import { callLink, whatsappLink } from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SHWETHA ARTS | Branding Services in Bangalore" },
      {
        name: "description",
        content:
          "Contact SHWETHA ARTS in Bengaluru for glass frosting, branding stickers, wall graphics, printing, name plates and vehicle branding. Call 9900005087.",
      },
      { property: "og:title", content: "Contact SHWETHA ARTS" },
      {
        property: "og:description",
        content: "Call or WhatsApp us in Bengaluru for branding and signage work.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Contact"
        title="Talk to us"
        description="Send your requirement and we will reply with suggestions and a quotation."
      />
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <a href={callLink()} className="card-soft flex items-center gap-3 p-5">
            <Phone className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold">Call {site.phoneDisplay}</span>
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="card-soft flex items-center gap-3 p-5"
          >
            <MessageCircle className="h-5 w-5 text-whatsapp" />
            <span className="text-sm font-semibold">WhatsApp us</span>
          </a>
          <div className="card-soft flex items-center gap-3 p-5">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-sm">{site.addressLine}</span>
          </div>
          {site.googleMapsEmbedUrl ? (
            <iframe
              title="SHWETHA ARTS location"
              src={site.googleMapsEmbedUrl}
              loading="lazy"
              className="h-64 w-full rounded-2xl border border-border"
            />
          ) : null}
        </div>
        <EnquiryForm variant="contact" />
      </div>
    </Section>
  );
}
