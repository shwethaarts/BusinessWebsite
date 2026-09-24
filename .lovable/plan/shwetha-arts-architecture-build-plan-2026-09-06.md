# SHWETHA ARTS — architecture & build plan

A premium, mobile-first branding website built so content can move to a database later without touching layout code.

## 1. Content-first architecture

All text, images, services, projects, reviews and settings live in typed content files under `src/content/` — never inside page layouts.

```text
src/content/
  site.ts        business name, phone, WhatsApp text, socials, maps link
  services.ts    the 6 services (slug, titles, SEO text, uses, benefits, process, FAQs, images)
  projects.ts    gallery items (category, image, caption, optional video)
  reviews.ts     empty for now — real Google reviews only
  testimonials.ts empty for now — real videos only
  faqs.ts        general FAQs
```

Each file exports data matching a type in `src/types/content.ts`. Later, a Cloud (database) layer replaces the file source behind the same types, so pages keep working unchanged. Data access goes through `src/lib/content/*` loader functions — one swap point.

## 2. Routes (SEO-friendly, one page per service)

```text
/                       home (full scroll story)
/about
/services               overview grid
/services/$slug         one reusable template, six slugs
/gallery
/reviews
/contact
/get-a-quote
/faq  /privacy  /terms
```

Adding a service later = one entry in `services.ts`. No layout changes, no new route file.

Every page gets its own title, description and social preview text; service pages use Bengaluru-focused wording (e.g. "Glass Frosting & Glass Stickering Services in Bangalore | SHWETHA ARTS"). LocalBusiness structured data on the home page using only real supplied details.

## 3. Reusable components

`src/components/`
- layout: TopContactBar, Header (sticky, mobile menu), Footer, FloatingActions (WhatsApp + Call)
- cards: ServiceCard, GalleryCard, ReviewCard, TestimonialCard, ValueCard, SegmentCard
- sections: Hero, TrustStrip, ServicesGrid, WhyChooseUs, WhoWeServe, BeforeAfter (draggable slider), Portfolio, HowWeWork, ReviewsSection, VideoTestimonials, ValueForMoney, FaqAccordion, FinalCta, ContactMap
- forms: QuoteForm, ContactForm (validated, clear success message)
- ui: Lightbox, LazyVideo, Section wrapper, Reveal (fade/slide on scroll)

## 4. Design system

Tokens defined once in `src/styles.css`, taken from the logo: deep navy, royal blue, subtle purple accent, near-white backgrounds, soft shadows, gentle gradients, restrained motion. Components use tokens only — no one-off colours anywhere.

## 5. Contact, WhatsApp and forms

WhatsApp and Call links are generated from a single settings entry, so changing the number updates the whole site. Pre-filled WhatsApp messages as specified. Until the backend is enabled, form submissions hand off to WhatsApp with the details filled in and show a success message; when Cloud is switched on, the same form saves an enquiry record instead.

## 6. Images

Your logo becomes the header, footer, mobile menu and favicon. Service and gallery visuals will be generated as realistic, relevant, licence-clean placeholders (office frosted glass, branded vehicles, wall graphics, name plates, banners), each referenced from the content files with a clear note that they are temporary and swappable.

## 7. Honesty rules

No invented reviews, ratings, project counts, years of experience or client logos. Reviews, testimonials, ratings and statistics stay as clearly marked empty placeholders until you supply the real ones.

## 8. Later: Cloud + admin dashboard

Phase 2 (on your go-ahead) enables Lovable Cloud: tables for services, projects, reviews, testimonials, enquiries and settings; public read access; enquiry writes; an owner login and a simple admin area to edit text, upload photos and videos, and read enquiries. Because pages already read through the loader functions, this is an add-on, not a rebuild.

## 9. Build order

1. Design system + logo asset + layout shell (bar, header, footer, floating buttons)
2. Content model and files
3. Home page sections in the specified order
4. Service template + six services
5. Gallery, Reviews, About, FAQ
6. Contact and Get a Quote
7. SEO, performance and responsive pass

## Needed from you (left as placeholders otherwise)
Instagram, Facebook and LinkedIn links, Google Maps / Google Business profile link, real Google rating and reviews, project photos and videos, and any real experience or project numbers.
