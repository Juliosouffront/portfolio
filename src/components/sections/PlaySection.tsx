"use client";

import { play, sectionLabels } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PlayCard } from "@/components/ui/play-card";
import { HighlightedText } from "@/components/ui/highlighted-text";
import { typography } from "@/lib/typography";

export function PlaySection() {
  return (
    <Reveal as="section" id="play" className="section-padding">
      <div className="container-site section-stack">
        <div className="section-eyebrow-group">
          <SectionLabel text={sectionLabels.play.text} color={sectionLabels.play.color} />

          <div className="section-intro">
            <h2 className={typography.h2}>
              <HighlightedText segments={play.title} />
            </h2>
            <p className={typography.bodyLg}>
              {play.description.prefix}{" "}
              <a
                href={play.description.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-neutral-30/30 underline-offset-4 transition-opacity hover:opacity-60"
                data-cursor-hover
              >
                {play.description.link.text}
              </a>{" "}
              {play.description.suffix}
            </p>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 tablet:grid-cols-2 tablet:gap-8">
          {play.projects.map((project, index) => (
            <PlayCard key={project.id} project={project} index={index} className="w-full min-w-0" />
          ))}
        </div>
      </div>
    </Reveal>
  );
}
