import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, MessageCircle, Phone } from "lucide-react";

import { site } from "@/content/site";
import { callLink, whatsappLink } from "@/lib/contact";

export function CtaButtons({
  message,
  quoteLabel = "Get a Free Quote",
}: {
  message?: string;
  quoteLabel?: string;
}) {
  const socials = site.socials.filter((s) => s.icon === "instagram" || s.icon === "maps");
  const socialIcons = { instagram: Instagram, maps: MapPin };

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={whatsappLink(message ?? site.whatsappQuoteMessage)}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-white shadow-soft transition-opacity hover:opacity-90"
      >
        <MessageCircle className="h-4 w-4" /> WhatsApp Now
      </a>
      <a
        href={callLink()}
        className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
      >
        <Phone className="h-4 w-4" /> Call {site.phoneDisplay}
      </a>
      <Link
        to="/get-a-quote"
        className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
      >
        {quoteLabel}
      </Link>
      {socials.map((s) => {
        const Icon = socialIcons[s.icon as keyof typeof socialIcons];
        return (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={s.label}
            title={s.label}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Icon className="h-4 w-4" aria-hidden />
          </a>
        );
      })}
    </div>
  );
}
