"use client";

import { mentors } from "@/lib/content";
import { ReviewCard } from "@/components/ui/review-card";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const shouldReduceMotion = usePrefersReducedMotion();
  const track = [...mentors.testimonials, ...mentors.testimonials];

  return (
    <div className="w-full" aria-label="Testimonials">
      <div className="testimonials-carousel-fade relative w-full overflow-hidden py-2">
        <div
          className={cn(
            "testimonials-marquee flex w-max items-stretch gap-3 tablet:gap-4",
            shouldReduceMotion && "motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-4",
          )}
        >
          {(shouldReduceMotion ? mentors.testimonials : track).map((testimonial, index) => (
            <ReviewCard
              key={`${testimonial.id}-${index}`}
              quote={testimonial.quote}
              name={testimonial.author}
              compact
              className="w-[min(68vw,220px)] shrink-0 tablet:w-[240px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
