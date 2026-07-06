"use client";

import { AppImage as Image } from "@/components/ui/app-image";
import { useRouter } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import { WorkPasswordPrompt } from "@/components/work/work-password-prompt";
import { work, sectionLabels } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { VimeoPlayer } from "@/components/ui/vimeo-player";
import { AwardsCarousel } from "@/components/ui/awards-carousel";
import { HighlightedText } from "@/components/ui/highlighted-text";
import { ProjectHoverCursorLabel } from "@/components/ui/project-hover-cursor-label";
import {
  projectCardHoverClass,
  projectCardShellClass,
  projectContentMediaClass,
  projectHoverCopyClass,
  projectHoverOverlayClass,
} from "@/components/ui/project-hover-label";
import { useProjectContentScrollScale } from "@/hooks/use-project-content-scroll-scale";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

type WorkSlide = (typeof work.slides)[number];

type WorkProjectCardProps = {
  slide: WorkSlide;
  imageSizes: string;
  onProjectClick: (href: string) => void;
};

function WorkProjectCard({ slide, imageSizes, onProjectClick }: WorkProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useProjectContentScrollScale(cardRef, contentRef);

  return (
    <article
      ref={cardRef}
      className={cn("group relative w-full hoverable:hover:cursor-none", projectCardHoverClass)}
    >
      <div className={cn("relative w-full bg-white shadow-soft", projectCardShellClass)}>
        <div className="relative aspect-[1072/603] w-full">
        <div ref={contentRef} className={cn("absolute inset-0", projectContentMediaClass)}>
          {"vimeo" in slide && slide.vimeo ? (
            <>
              <picture className="absolute inset-0">
                <source media="(max-width: 809px)" srcSet={slide.mobileImage} />
                <Image
                  src={slide.desktopImage}
                  alt={slide.alt}
                  fill
                  sizes={imageSizes}
                  className="object-cover"
                />
              </picture>
              <VimeoPlayer
                videoId={slide.vimeo.id}
                title={slide.vimeo.title}
                autoplay
                muted
                loop
                controls={false}
                fill
                className="relative z-[1]"
              />
            </>
          ) : (
            <picture className="block h-full w-full">
              <source media="(max-width: 809px)" srcSet={slide.mobileImage} />
              <Image
                src={slide.desktopImage}
                alt={slide.alt}
                fill
                sizes={imageSizes}
                className="object-cover"
              />
            </picture>
          )}
        </div>

        <div aria-hidden className={projectHoverOverlayClass} />

        <div ref={copyRef} className={projectHoverCopyClass}>
          <p className={cn(typography.caption, "text-white/90")}>{slide.category}</p>
          <h3 className={cn(typography.h4, "mt-2 text-white")}>{slide.name}</h3>
          <p className={cn(typography.body, "mt-3 text-white")}>{slide.description}</p>
        </div>

        <button
          type="button"
          data-project-link
          data-cursor-hover
          className="absolute inset-0 z-[8] cursor-pointer border-0 bg-transparent p-0"
          aria-label={`View ${slide.name} case study`}
          onClick={() => onProjectClick(`/work/${slide.id}`)}
        />
      </div>
      </div>
      <ProjectHoverCursorLabel label="View case study" targetRef={cardRef} copyRef={copyRef} />
    </article>
  );
}

export function WorkSection() {
  const router = useRouter();
  const [featuredSlide, ...pairedSlides] = work.slides;
  const [passwordTarget, setPasswordTarget] = useState<string | null>(null);
  const [pendingHref, setPendingHref] = useState<string | null>(null);

  const handleProjectClick = useCallback(
    async (href: string) => {
      try {
        const response = await fetch("/api/work-auth");
        const data = (await response.json()) as { granted?: boolean };

        if (data.granted) {
          router.push(href);
          return;
        }
      } catch {
        // Fall through to password prompt.
      }

      setPendingHref(href);
      setPasswordTarget(href);
    },
    [router],
  );

  const closePasswordPrompt = useCallback(() => {
    setPasswordTarget(null);
    setPendingHref(null);
  }, []);

  const handlePasswordSuccess = useCallback(() => {
    const href = pendingHref;
    closePasswordPrompt();
    if (href) router.push(href);
  }, [closePasswordPrompt, pendingHref, router]);

  return (
    <Reveal as="section" id="work" className="section-first">
      <div className="container-site">
        <div className="section-eyebrow-group">
          <SectionLabel text={sectionLabels.work.text} color={sectionLabels.work.color} />

          <div className="section-intro">
            <h2 className={typography.h2}>
              <HighlightedText segments={work.title} />
            </h2>
          </div>
        </div>

        <div className="mt-6 flex w-full flex-col items-center gap-5">
          <p className={cn(typography.bodyLg, typography.measure, "text-center")}>
            {work.description}
          </p>

          <AwardsCarousel logos={work.awards} />

          <div className="flex w-full flex-col gap-6 tablet:gap-8">
            <WorkProjectCard
              slide={featuredSlide}
              imageSizes="(min-width: 1200px) 1072px, 100vw"
              onProjectClick={handleProjectClick}
            />

            <div className="grid grid-cols-2 gap-4 tablet:gap-8">
              {pairedSlides.map((slide) => (
                <WorkProjectCard
                  key={slide.id}
                  slide={slide}
                  imageSizes="(min-width: 1200px) 536px, 50vw"
                  onProjectClick={handleProjectClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {passwordTarget ? (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-neutral-30/75 px-6 backdrop-blur-md"
          onClick={closePasswordPrompt}
        >
          <div onClick={(event) => event.stopPropagation()}>
            <WorkPasswordPrompt
              onClose={closePasswordPrompt}
              onSuccess={handlePasswordSuccess}
            />
          </div>
        </div>
      ) : null}
    </Reveal>
  );
}
