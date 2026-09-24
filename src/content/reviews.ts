import type { Review } from "@/types/content";

/**
 * Real customer reviews only.
 *
 * Leave this list empty until the owner supplies genuine Google reviews (or a
 * Google review integration is connected). The Reviews section renders an
 * honest placeholder while it is empty — no invented reviews, names or ratings.
 */
export const reviews: Review[] = [];

/** Set these only when the real Google rating and review count are supplied. */
export const googleRating: number | null = 4.8;
export const googleReviewCount: number | null = 180;

export const googleReviewUrl =
  "https://www.google.com/search?q=shwetha+arts&oq=shwetha&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOTIGCAMQRRg7MgYIBBBFGDwyBggFEEUYPTIGCAYQRRg90gEJNzE5MmowajE1qAIIsAIB8QWGAOCNAPFWbfEFhgDgjQDxVm0&sourceid=chrome&source=chrome.rb&ie=UTF-8#lrd=0x3bae234020f79099:0x8811cad3503826cf,3,,,,";

export const googleReviewImages = [
  {
    id: "review-screenshot-1",
    src: "/reviews/Review%201.png",
    alt: "Google review screenshot for SHWETHA ARTS",
  },
  {
    id: "review-screenshot-2",
    src: "/reviews/Review%202.jpeg",
    alt: "Customer Google review screenshot for SHWETHA ARTS",
  },
  {
    id: "review-screenshot-3",
    src: "/reviews/Review%203.jpeg",
    alt: "Customer rating screenshot for SHWETHA ARTS",
  },
];
