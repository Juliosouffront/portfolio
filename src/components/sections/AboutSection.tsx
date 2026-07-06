"use client";

import { about, sectionLabels } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PolaroidPhoto } from "@/components/ui/polaroid-photo";
import { HighlightedText } from "@/components/ui/highlighted-text";
import { Testimonials } from "@/components/sections/testimonials";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

export function AboutSection() {
  return (
    <Reveal as="section" id="about" className="section-padding">
      <div className="container-site flex flex-col">
        <div className="grid items-center gap-8 tablet:grid-cols-2 tablet:gap-12 desktop:gap-16">
          <div className="order-2 flex flex-col items-center text-center tablet:order-1 tablet:items-start tablet:text-left">
            <div className="section-eyebrow-group tablet-left">
              <SectionLabel
                text={sectionLabels.about.text}
                color={sectionLabels.about.color}
                className="w-full [&>div]:justify-center tablet:[&>div]:justify-start"
              />

              <div className="section-intro tablet:items-start tablet:text-left">
                <h2 className={typography.h2}>
                  <HighlightedText segments={about.title} />
                </h2>
                <p className={cn(typography.bodyLg, typography.measure)}>
                  {about.description}
                </p>
              </div>
            </div>
          </div>

          <PolaroidPhoto
            src={about.image.src}
            alt={about.image.alt}
            width={about.image.width}
            height={about.image.height}
            variant="sm"
            clip={false}
            className="order-1 tablet:order-2 tablet:justify-self-end"
          />
        </div>

        <figure className="mt-[calc(var(--space-section)*2)] w-full text-center tablet:mt-[calc(var(--space-section-lg)*2)]">
          <blockquote className="flex flex-col gap-6">
            <p className={typography.quote}>
              &ldquo;
              <HighlightedText segments={about.quote.segments} />
              &rdquo;
            </p>
            <figcaption className={cn(typography.caption, "font-display font-semibold text-neutral-20")}>
              {about.quote.attribution}
            </figcaption>
          </blockquote>
        </figure>

        <div className="mt-8 tablet:mt-[var(--space-title-content)]">
          <Testimonials />
        </div>
      </div>
    </Reveal>
  );
}
