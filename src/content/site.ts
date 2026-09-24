import type { SiteSettings } from "@/types/content";

/**
 * Single source of truth for business details.
 * Change the phone number, WhatsApp text, socials or map link here and the
 * whole website updates.
 *
 * Links marked TODO are intentionally empty — nothing fake is published.
 */
export const site: SiteSettings = {
  name: "SHWETHA ARTS",
  tagline: "Creative Branding Solutions",
  shortDescription:
    "Customized branding, printing and visual solutions for businesses, spaces, homes and vehicles.",
  city: "Bengaluru",
  region: "Karnataka",
  country: "India",
  phone: "+919686585032",
  phoneDisplay: "9686585032",
  whatsappNumber: "919686585032",
  whatsappDefaultMessage:
    "Hi SHWETHA ARTS, I would like to enquire about your branding services.",
  whatsappQuoteMessage:
    "Hi SHWETHA ARTS, I would like to know more about your branding services and get a quotation.",
  addressLine: "Bengaluru, Karnataka, India",
  // TODO: add the official Google Maps embed + profile links when supplied.
  googleMapsEmbedUrl: "",
  googleMapsLink: "https://maps.app.goo.gl/MeeH5bxJCRHcfXm78",
  googleReviewsLink: "",
  socials: [
    // TODO: replace with the official profile links when supplied by the owner.
    { label: "Instagram", href: "https://www.instagram.com/shwetha_arts/", icon: "instagram" },
    { label: "Google Maps", href: "https://maps.app.goo.gl/MeeH5bxJCRHcfXm78", icon: "maps" },
    { label: "Facebook", href: "https://www.facebook.com/spsriram.04", icon: "facebook" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/shwetha-arts-695a48305/", icon: "linkedin" },
  ],
};
