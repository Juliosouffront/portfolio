"use client";

import { AppImage as Image } from "@/components/ui/app-image";

type AwardLogo = {
  readonly src: string;
  readonly alt: string;
};

type AwardsCarouselProps = {
  logos: readonly AwardLogo[];
};

export function AwardsCarousel({ logos }: AwardsCarouselProps) {
  const expandedLogos = [...logos, ...logos];
  const track = [...expandedLogos, ...expandedLogos];

  return (
    <div className="relative w-full" aria-label="Awards and recognition">
      <div className="awards-carousel-fade relative w-full overflow-hidden py-0">
        <div className="awards-marquee flex w-max items-center gap-4 tablet:gap-5">
          {track.map((logo, index) => (
            <Image
              key={`${logo.src}-${index}`}
              src={logo.src}
              alt={logo.alt}
              width={1240}
              height={354}
              className="h-7 w-auto max-w-none shrink-0 object-contain tablet:h-10"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
