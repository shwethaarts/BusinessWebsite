import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X, MessageCircle, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

import logoUrl from "@/assets/logo.png";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { callLink, whatsappLink } from "@/lib/contact";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

function TopContactBar() {
  return (
    <div className="brand-gradient text-navy-foreground">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs sm:px-6 sm:text-sm">
      <a
        href={site.googleMapsLink}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 hover:underline"
      >
        <MapPin className="h-3.5 w-3.5" aria-hidden />
        {site.addressLine}
      </a>
        <div className="flex items-center gap-4">
          <a href={callLink()} className="inline-flex items-center gap-1.5 hover:underline">
            <Phone className="h-3.5 w-3.5" aria-hidden />
            {site.phoneDisplay}
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:underline"
          >
            <MessageCircle className="h-3.5 w-3.5" aria-hidden />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const headerSocials = site.socials.filter((s) => s.icon === "instagram" || s.icon === "maps");
  const headerIcons = { instagram: Instagram, maps: MapPin };

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logoUrl} alt="SHWETHA ARTS logo" className="h-10 w-auto" />
          <span className="sr-only">SHWETHA ARTS</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/get-a-quote"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
          >
            Get a Quote
          </Link>
          <div className="flex items-center gap-2">
            {headerSocials.map((s) => {
              const Icon = headerIcons[s.icon as keyof typeof headerIcons];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/75 transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              );
            })}
          </div>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-border p-2 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm font-medium"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/get-a-quote"
              onClick={() => setOpen(false)}
              className="my-3 rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Get a Quote
            </Link>
            <div className="mb-3 flex items-center justify-center gap-3">
              {headerSocials.map((s) => {
                const Icon = headerIcons[s.icon as keyof typeof headerIcons];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    onClick={() => setOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/75 transition-colors hover:border-primary hover:text-primary"
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                  </a>
                );
              })}
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function Footer() {
  const socialIcons = { instagram: Instagram, facebook: Facebook, linkedin: Linkedin, maps: MapPin };

  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
        <img src={logoUrl} alt="SHWETHA ARTS logo" className="h-12 w-auto brightness-0 invert" />
          <p className="mt-4 text-sm text-navy-foreground/75">{site.shortDescription}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/75">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="hover:text-navy-foreground"
                >
                  {s.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide">Company</h3>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/75">
            {[
              { to: "/about", label: "About Us" },
              { to: "/gallery", label: "Gallery" },
              { to: "/reviews", label: "Reviews" },
              { to: "/faq", label: "FAQ" },
              { to: "/contact", label: "Contact" },
              { to: "/get-a-quote", label: "Get a Quote" },
              { to: "/privacy", label: "Privacy Policy" },
              { to: "/terms", label: "Terms of Service" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-navy-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/75">
            <li>
              <a href={callLink()} className="hover:text-navy-foreground">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="hover:text-navy-foreground"
              >
                WhatsApp us
              </a>
            </li>
            <li>{site.addressLine}</li>
          </ul>
          <div className="mt-4 flex gap-3">
            {site.socials
              .filter((s) => s.href)
              .map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="rounded-full border border-navy-foreground/25 p-2 hover:bg-navy-foreground/10"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
          </div>
        </div>
      </div>

      <div className="border-t border-navy-foreground/15 px-4 py-5 text-center text-xs text-navy-foreground/65 sm:px-6">
        © {new Date().getFullYear()} SHWETHA ARTS. Creative Branding Solutions, Bengaluru.
      </div>
    </footer>
  );
}

function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center rounded-full bg-whatsapp p-3.5 text-white shadow-lift transition-transform hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={callLink()}
        aria-label="Call SHWETHA ARTS"
        className="flex items-center justify-center rounded-full bg-primary p-3.5 text-primary-foreground shadow-lift transition-transform hover:scale-105"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <TopContactBar />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
