"use client";

import { mentors, sectionLabels } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PolaroidPhoto } from "@/components/ui/polaroid-photo";
import { HighlightedText } from "@/components/ui/highlighted-text";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

export function MentorsSection() {
  return (
    <Reveal as="section" id="friends-mentors" className="section-padding">
      <div className="container-site">
        <div className="grid items-center gap-8 tablet:grid-cols-2 tablet:gap-12 desktop:gap-16">
          <PolaroidPhoto
            src={mentors.portrait.src}
            alt={mentors.portrait.alt}
            width={mentors.portrait.width}
            height={mentors.portrait.height}
          />

          <div className="flex flex-col items-center text-center tablet:items-start tablet:text-left">
            <div className="section-eyebrow-group tablet-left">
              <SectionLabel
                text={sectionLabels.mentors.text}
                color={sectionLabels.mentors.color}
                className="w-full [&>div]:justify-center tablet:[&>div]:justify-start"
              />

              <div className="section-intro tablet:items-start tablet:text-left">
                <h2 className={typography.h2}>
                  <HighlightedText segments={mentors.title} />
                </h2>
                <p className={cn(typography.bodyLg, typography.measure)}>
                  {mentors.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
