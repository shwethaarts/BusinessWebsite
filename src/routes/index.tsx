import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BadgeCheck,
  Building2,
  Car,
  CheckCircle2,
  Clock,
  Home,
  Palette,
  Ruler,
  ShieldCheck,
  Sparkles,
  Store,
  Wrench,
} from "lucide-react";

import heroImage from "@/assets/hero.jpg";
import { CtaButtons } from "@/components/ui-x/CtaButtons";
import { GoogleReviews } from "@/components/ui-x/GoogleReviews";
import { Section, SectionHeading } from "@/components/ui-x/Section";
import { generalFaqs } from "@/content/faqs";
import { beforeAfterItems, projects } from "@/content/projects";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { videoTestimonials } from "@/content/testimonials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SHWETHA ARTS | Creative Branding Solutions in Bangalore" },
      {
        name: "description",
        content:
          "Glass frosting, branding stickers, wall graphics, flex printing, name plates and vehicle branding in Bengaluru. Design, printing and installation. Call 9900005087.",
      },
      { property: "og:title", content: "SHWETHA ARTS | Creative Branding Solutions" },
      {
        property: "og:description",
        content:
          "Customized branding, printing and visual solutions for businesses, spaces, homes and vehicles in Bengaluru.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: site.name,
          description: site.shortDescription,
          telephone: site.phone,
          areaServed: "Bengaluru, Karnataka, India",
          address: {
            "@type": "PostalAddress",
            addressLocality: site.city,
            addressRegion: site.region,
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

const trustPoints = [
  { icon: Palette, label: "Customized designs" },
  { icon: BadgeCheck, label: "Quality materials" },
  { icon: Wrench, label: "Professional installation" },
  { icon: Clock, label: "On-time delivery" },
];

const whyChooseUs = [
  {
    icon: Palette,
    title: "Fully customized work",
    text: "Every design is made for your space, brand and budget — nothing off the shelf.",
  },
  {
    icon: Ruler,
    title: "Accurate measurement",
    text: "We measure on site so the finished work fits exactly as planned.",
  },
  {
    icon: ShieldCheck,
    title: "Quality materials",
    text: "Films, vinyl and print media chosen to last in real Indian conditions.",
  },
  {
    icon: Wrench,
    title: "End-to-end service",
    text: "Design, printing, production and installation handled by one team.",
  },
  {
    icon: Clock,
    title: "Clear timelines",
    text: "You know the schedule before we start, and we stick to it.",
  },
  {
    icon: Sparkles,
    title: "Neat finishing",
    text: "A final quality check on every panel, wall, board and vehicle.",
  },
];

const segments = [
  { icon: Building2, title: "Offices & corporates", text: "Partitions, cabins, reception branding and wall graphics." },
  { icon: Store, title: "Shops & showrooms", text: "Shopfront stickers, boards, offers and window branding." },
  { icon: Home, title: "Homes", text: "Name plates, window frosting and decorative wall work." },
  { icon: Car, title: "Vehicles & fleets", text: "Van, car and delivery vehicle branding for daily visibility." },
];

const howWeWork = [
  { title: "Share your requirement", text: "Call or WhatsApp us with photos and rough sizes." },
  { title: "Site visit & measurement", text: "We confirm sizes and suggest the right material." },
  { title: "Design approval", text: "You see and approve the artwork before production." },
  { title: "Production", text: "Printing, cutting and finishing with quality materials." },
  { title: "Installation", text: "Clean, professional installation by our own team." },
  { title: "Final check", text: "We review the finished work with you before handover." },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroImage}
          alt="Branding, signage and printing work by SHWETHA ARTS in Bengaluru"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-foreground/70">
            {site.name} · {site.tagline}
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-navy-foreground sm:text-4xl md:text-5xl">
            Creative branding solutions that make your space and brand look professional
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-navy-foreground/85 sm:text-base">
            Glass frosting, business branding stickers, wall graphics, flex &amp; banner printing,
            home name plates and vehicle branding — designed, produced and installed by one team.
          </p>
          <div className="mt-8">
            <CtaButtons />
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {trustPoints.map((t) => (
              <div
                key={t.label}
                className="flex items-center gap-2 rounded-2xl border border-navy-foreground/15 bg-navy-foreground/5 px-3 py-3 text-xs font-medium text-navy-foreground sm:text-sm"
              >
                <t.icon className="h-4 w-4 shrink-0" aria-hidden />
                {t.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <Section id="services">
        <SectionHeading
          eyebrow="What we do"
          title="Our branding & printing services"
          description="Six core services covering everything from glass and walls to banners and vehicles."
        />
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
                <h3 className="text-lg font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.cardDescription}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-primary">
                  View details →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Why choose us */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="Why SHWETHA ARTS"
          title="Work that is planned, finished and installed properly"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((w) => (
            <div key={w.title} className="card-soft p-5">
              <w.icon className="h-6 w-6 text-primary" aria-hidden />
              <h3 className="mt-3 text-base font-semibold">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Who we serve */}
      <Section>
        <SectionHeading eyebrow="Who we serve" title="Businesses, spaces, homes and vehicles" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map((s) => (
            <div key={s.title} className="card-soft p-5">
              <s.icon className="h-6 w-6 text-primary" aria-hidden />
              <h3 className="mt-3 text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Before & after */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="Transformations"
          title="Before and after"
          description="Reference visuals showing the kind of change our work makes. Real project photos are being added."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {beforeAfterItems.map((item) => (
            <div key={item.id} className="card-soft overflow-hidden">
              <div className="grid grid-cols-2">
                <figure className="relative">
                  <img src={item.beforeImage} alt={`Before: ${item.title}`} loading="lazy" className="h-40 w-full object-cover" />
                  <figcaption className="absolute left-2 top-2 rounded-full bg-navy/80 px-2 py-0.5 text-[11px] font-semibold text-navy-foreground">
                    Before
                  </figcaption>
                </figure>
                <figure className="relative">
                  <img src={item.afterImage} alt={`After: ${item.title}`} loading="lazy" className="h-40 w-full object-cover" />
                  <figcaption className="absolute left-2 top-2 rounded-full bg-primary px-2 py-0.5 text-[11px] font-semibold text-primary-foreground">
                    After
                  </figcaption>
                </figure>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Portfolio preview */}
      <Section>
        <SectionHeading eyebrow="Our work" title="A look at what we deliver" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {projects.slice(0, 6).map((p) => (
            <figure key={p.id} className="card-soft overflow-hidden">
              <img src={p.image} alt={p.alt} loading="lazy" className="h-40 w-full object-cover sm:h-48" />
              <figcaption className="p-3 text-xs font-medium sm:text-sm">{p.title}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/gallery"
            className="inline-flex rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:bg-secondary"
          >
            View full gallery
          </Link>
        </div>
      </Section>

      {/* How we work */}
      <Section tone="surface">
        <SectionHeading eyebrow="Our process" title="How we work" />
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {howWeWork.map((step, i) => (
            <li key={step.title} className="card-soft p-5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {i + 1}
              </span>
              <h3 className="mt-3 text-base font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Reviews */}
      <Section>
        <SectionHeading
          eyebrow="Customer feedback"
          title="Reviews"
          description="See our Google rating, write a review, and read recent customer feedback."
        />
        <GoogleReviews />
      </Section>

      {/* Video testimonials */}
      {videoTestimonials.length > 0 ? (
        <Section tone="surface">
          <SectionHeading eyebrow="In their words" title="Video testimonials" />
          <div className="grid gap-5 sm:grid-cols-2">
            {videoTestimonials.map((v) => (
              <div key={v.id} className="card-soft overflow-hidden">
                <video
                  controls
                  preload="metadata"
                  poster={v.thumbnail}
                  className="max-h-[70vh] w-full bg-navy object-contain"
                >
                  <source src={v.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </Section>
      ) : null}

      {/* Value for money */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="Value"
          title="Branding that pays for itself"
          description="Good visual branding is one of the most affordable ways to look established and win trust."
        />
        <ul className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
          {[
            "Affordable compared to renovation or interiors",
            "Instantly improves how customers see you",
            "Long-lasting materials, low maintenance",
            "Works for you every day, without ad spend",
          ].map((v) => (
            <li key={v} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              {v}
            </li>
          ))}
        </ul>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading eyebrow="Questions" title="Frequently asked questions" />
        <div className="mx-auto max-w-3xl divide-y divide-border">
          {generalFaqs.slice(0, 6).map((f) => (
            <details key={f.question} className="group py-4">
              <summary className="cursor-pointer list-none text-sm font-semibold marker:hidden sm:text-base">
                {f.question}
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.answer}</p>
            </details>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/faq" className="text-sm font-semibold text-primary">
            See all FAQs →
          </Link>
        </div>
      </Section>

      {/* Final CTA */}
      <Section tone="navy">
        <div className="text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Ready to upgrade how your brand looks?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-navy-foreground/80">
            Send us a photo of your space or vehicle and we will suggest options with a clear price.
          </p>
          <div className="mt-7 flex justify-center">
            <CtaButtons />
          </div>
        </div>
      </Section>
    </>
  );
}
