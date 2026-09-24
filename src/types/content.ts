/**
 * Content model for the SHWETHA ARTS website.
 *
 * Every page reads content through these types (see src/lib/content).
 * When the content moves into Lovable Cloud later, only the loader
 * functions change — pages and components stay exactly the same.
 */

export type SocialLink = {
  label: string;
  href: string;
  icon: "instagram" | "facebook" | "linkedin" | "maps";
};

export type SiteSettings = {
  name: string;
  tagline: string;
  shortDescription: string;
  city: string;
  region: string;
  country: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  whatsappDefaultMessage: string;
  whatsappQuoteMessage: string;
  email?: string;
  addressLine?: string;
  googleMapsEmbedUrl?: string;
  googleMapsLink?: string;
  googleReviewsLink?: string;
  socials: SocialLink[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  cardDescription: string;
  heroHeadline: string;
  heroSubline: string;
  seoTitle: string;
  seoDescription: string;
  image: string;
  imageAlt: string;
  intro: string[];
  whereUsed: string[];
  benefits: string[];
  process: ProcessStep[];
  faqs: FaqItem[];
  galleryCategory: ProjectCategory;
};

export type ProjectCategory =
  | "glass-frosting"
  | "business-stickers"
  | "wall-graphics"
  | "flex-banners"
  | "name-plates"
  | "vehicle-branding";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string;
  alt: string;
  description?: string;
  videoUrl?: string;
  /** Temporary reference imagery until the owner's own photos are supplied. */
  isPlaceholder: boolean;
};

export type BeforeAfterItem = {
  id: string;
  title: string;
  caption: string;
  beforeImage: string;
  afterImage: string;
  isPlaceholder: boolean;
};

export type Review = {
  id: string;
  author: string;
  rating: number;
  text: string;
  service?: string;
  source?: "google" | "direct";
  date?: string;
};

export type VideoTestimonial = {
  id: string;
  customerName?: string;
  businessName?: string;
  service?: string;
  thumbnail?: string;
  videoUrl: string;
};
