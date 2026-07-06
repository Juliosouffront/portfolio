"use client";

import { AppImage as Image } from "@/components/ui/app-image";
import { useRef } from "react";
import { play } from "@/lib/content";
import { typography } from "@/lib/typography";
import { ProjectHoverCursorLabel } from "@/components/ui/project-hover-cursor-label";
import {
  projectCardHoverClass,
  projectCardShellClass,
  projectContentMediaClass,
  projectHoverCopyClass,
  projectHoverOverlayClass,
} from "@/components/ui/project-hover-label";
import { useProjectContentScrollScale } from "@/hooks/use-project-content-scroll-scale";
import { cn } from "@/lib/utils";

type PlayProject = (typeof play.projects)[number];

type PlayCardProps = {
  project: PlayProject;
  index: number;
  className?: string;
};

const MEDIA_HEIGHT = 304;

export function PlayCard({ project, className }: PlayCardProps) {
  const cardRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useProjectContentScrollScale(cardRef, contentRef);

  const cardClassName = cn(
    "group relative flex w-full min-w-0",
    projectCardHoverClass,
    project.cta.href ? "cursor-pointer" : "cursor-default",
    className,
  );

  const inner = (
    <div className={cn("relative w-full shadow-soft", projectCardShellClass)} style={{
        backgroundColor: project.mediaBg,
        height: MEDIA_HEIGHT,
      }}
    >
      {"image" in project && project.image ? (
        <div
          ref={contentRef}
          className={cn(
            "absolute inset-0 flex items-center justify-center",
            projectContentMediaClass,
          )}
          style={{ padding: project.mediaPadding }}
        >
          <div className="relative h-full w-full">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="(min-width: 810px) 536px, 100vw"
              className="object-contain object-center"
              unoptimized
            />
          </div>
        </div>
      ) : null}

      <div aria-hidden className={projectHoverOverlayClass} />

      <div ref={copyRef} className={projectHoverCopyClass}>
        <p className={cn(typography.caption, "text-white/90")}>{project.category}</p>
        <h3 className={cn(typography.h4, "mt-2 text-white")}>{project.title}</h3>
        <p className={cn(typography.body, "mt-3 text-white")}>{project.description}</p>
      </div>
    </div>
  );

  const cursorLabel = (
    <ProjectHoverCursorLabel label={project.cta.label} targetRef={cardRef} copyRef={copyRef} />
  );

  if (project.cta.href) {
    return (
      <a
        ref={cardRef as never}
        href={project.cta.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClassName}
        aria-label={`${project.title}: ${project.cta.label}`}
        data-cursor-hover
      >
        {inner}
        {cursorLabel}
      </a>
    );
  }

  return (
    <article ref={cardRef as never} className={cardClassName} aria-label={project.title}>
      {inner}
      {cursorLabel}
    </article>
  );
}
