import { ExternalLink, Star } from "lucide-react";

import {
  googleRating,
  googleReviewCount,
  googleReviewImages,
  googleReviewUrl,
} from "@/content/reviews";

function GoogleWordmark() {
  return (
    <span aria-label="Google" className="font-sans text-xl font-semibold tracking-normal">
      <span className="text-[#4285f4]">G</span>
      <span className="text-[#ea4335]">o</span>
      <span className="text-[#fbbc05]">o</span>
      <span className="text-[#4285f4]">g</span>
      <span className="text-[#34a853]">l</span>
      <span className="text-[#ea4335]">e</span>
    </span>
  );
}

export function GoogleReviews() {
  return (
    <div className="space-y-6">
      <div className="card-soft bg-surface p-5 sm:p-7">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <GoogleWordmark />
              <span className="text-xl font-bold text-foreground">Reviews</span>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="text-2xl font-bold text-foreground">{googleRating?.toFixed(1)}</span>
              <span className="flex text-[#fbbc05]" aria-label={`${googleRating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-current" aria-hidden />
                ))}
              </span>
              {googleReviewCount ? (
                <span className="text-sm text-muted-foreground">
                  {googleReviewCount} Google reviews
                </span>
              ) : null}
            </div>
          </div>

          <a
            href={googleReviewUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1a73e8] px-5 py-3 text-sm font-semibold text-white shadow-soft transition-opacity hover:opacity-90 sm:w-auto"
          >
            Review us on Google
            <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {googleReviewImages.map((review) => (
          <figure key={review.id} className="card-soft overflow-hidden bg-surface">
            <img
              src={review.src}
              alt={review.alt}
              loading="lazy"
              className="h-full w-full object-contain"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
