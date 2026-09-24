import { createFileRoute } from "@tanstack/react-router";

import { Section, SectionHeading } from "@/components/ui-x/Section";
import { CtaButtons } from "@/components/ui-x/CtaButtons";
import { GoogleReviews } from "@/components/ui-x/GoogleReviews";
import { videoTestimonials } from "@/content/testimonials";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews | SHWETHA ARTS Bangalore" },
      {
        name: "description",
        content:
          "Customer feedback for SHWETHA ARTS, a creative branding, printing and signage company in Bengaluru.",
      },
      { property: "og:title", content: "Customer Reviews | SHWETHA ARTS" },
      {
        property: "og:description",
        content: "Genuine customer feedback for SHWETHA ARTS, Bengaluru.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/reviews" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="Reviews"
          title="What our customers say"
          description="See our Google rating, write a review, and read recent customer feedback."
        />
        <GoogleReviews />
      </Section>

      {videoTestimonials.length > 0 ? (
        <Section tone="surface">
          <SectionHeading title="Video testimonials" />
          <div className="grid gap-5 sm:grid-cols-2">
            {videoTestimonials.map((t) => (
              <article key={t.id} className="card-soft overflow-hidden">
                <video
                  controls
                  preload="metadata"
                  poster={t.thumbnail}
                  className="max-h-[70vh] w-full bg-navy object-contain"
                >
                  <source src={t.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {t.businessName || t.customerName || t.service ? (
                  <div className="p-4">
                    {t.businessName || t.customerName ? (
                      <p className="text-sm font-semibold">{t.businessName ?? t.customerName}</p>
                    ) : null}
                    {t.service ? <p className="text-xs text-muted-foreground">{t.service}</p> : null}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </Section>
      ) : null}

      <Section tone="surface">
        <SectionHeading title="Start your branding project" />
        <div className="flex justify-center">
          <CtaButtons />
        </div>
      </Section>
    </>
  );
}
