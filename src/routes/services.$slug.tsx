import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

import { CtaButtons } from "@/components/ui-x/CtaButtons";
import { Section, SectionHeading } from "@/components/ui-x/Section";
import { categoryLabels, projects } from "@/content/projects";
import { services } from "@/content/services";
import { serviceWhatsappMessage } from "@/lib/contact";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service unavailable | SHWETHA ARTS" }, { name: "robots", content: "noindex" }] };
    }
    const { service } = loaderData;
    return {
      meta: [
        { title: service.seoTitle },
        { name: "description", content: service.seoDescription },
        { property: "og:title", content: service.seoTitle },
        { property: "og:description", content: service.seoDescription },
        { property: "og:url", content: `/services/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: service.faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
        },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const related = projects.filter((p) => p.category === service.galleryCategory);

  return (
    <>
      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-foreground/70">
              {categoryLabels[service.galleryCategory]} · Bengaluru
            </p>
            <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">{service.heroHeadline}</h1>
            <p className="mt-4 text-sm leading-relaxed text-navy-foreground/85 sm:text-base">
              {service.heroSubline}
            </p>
            <div className="mt-7">
              <CtaButtons message={serviceWhatsappMessage(service.name)} />
            </div>
          </div>
          <img
            src={service.image}
            alt={service.imageAlt}
            className="h-64 w-full rounded-3xl object-cover shadow-lift md:h-80"
          />
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl space-y-4">
          {service.intro.map((p) => (
            <p key={p} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {p}
            </p>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold sm:text-2xl">Where it is used</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {service.whereUsed.map((u) => (
                <li key={u} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  {u}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold sm:text-2xl">Benefits</h2>
            <ul className="mt-4 grid gap-2">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Process" title={`How we deliver ${service.shortName.toLowerCase()}`} />
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {service.process.map((step, i) => (
            <li key={step.title} className="card-soft p-5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {i + 1}
              </span>
              <h3 className="mt-3 text-base font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      {related.length > 0 ? (
        <Section tone="surface">
          <SectionHeading eyebrow="Examples" title="Reference work" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {related.map((p) => (
              <figure key={p.id} className="card-soft overflow-hidden">
                <img src={p.image} alt={p.alt} loading="lazy" className="h-40 w-full object-cover sm:h-48" />
                <figcaption className="p-3 text-xs sm:text-sm">{p.title}</figcaption>
              </figure>
            ))}
          </div>
        </Section>
      ) : null}

      <Section>
        <SectionHeading eyebrow="FAQ" title="Common questions" />
        <div className="mx-auto max-w-3xl divide-y divide-border">
          {service.faqs.map((f) => (
            <details key={f.question} className="py-4">
              <summary className="cursor-pointer list-none text-sm font-semibold sm:text-base">
                {f.question}
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <div className="text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Get a quote for {service.shortName}</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-navy-foreground/80">
            Share sizes or a photo and we will reply with options and a clear price.
          </p>
          <div className="mt-7 flex justify-center">
            <CtaButtons message={serviceWhatsappMessage(service.name)} />
          </div>
          <p className="mt-6 text-sm text-navy-foreground/70">
            <Link to="/services" className="underline">
              Back to all services
            </Link>
          </p>
        </div>
      </Section>
    </>
  );
}
