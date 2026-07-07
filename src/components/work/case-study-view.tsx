"use client";

import { AppImage as Image } from "@/components/ui/app-image";
import Link from "next/link";
import { useCallback, useMemo, useRef, useState } from "react";
import type { CaseStudy } from "@/lib/work-case-studies";
import { sectionLabels } from "@/lib/content";
import { gsap, useGSAP } from "@/lib/gsap";
import { PageIntroCurtain } from "@/components/work/page-intro-curtain";
import {
  CaseStudySidebar,
  getCaseStudyNavItems,
} from "@/components/work/case-study-sidebar";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { VimeoPlayer } from "@/components/ui/vimeo-player";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

type CaseStudyViewProps = {
  study: CaseStudy;
};

const labelColor = sectionLabels.work.color;

function CaseStudySection({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("case-study-section case-study-scroll-target", className)}>
      {children}
    </section>
  );
}

function CaseStudySectionHeader({
  label,
  title,
  className,
}: {
  label: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={cn("section-eyebrow-group", className)}>
      <SectionLabel text={label} color={labelColor} />
      <div className="section-intro">
        <h2 className={cn(typography.caseStudyTitle, "case-study-section-title text-center")}>{title}</h2>
      </div>
    </div>
  );
}

function CaseStudyProse({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("case-study-prose mt-6 space-y-4", typography.body, className)}>{children}</div>
  );
}

function CaseStudyHeroMedia({ study }: { study: CaseStudy }) {
  const { heroMedia } = study;

  return (
    <div className="relative mx-auto mt-10 w-full max-w-5xl overflow-hidden rounded-card shadow-soft">
      <div className="relative aspect-[1072/603] w-full bg-neutral-30/5">
        {heroMedia.vimeoId ? (
          <>
            <picture className="absolute inset-0">
              <source media="(max-width: 809px)" srcSet={heroMedia.mobile} />
              <Image
                src={heroMedia.desktop}
                alt={heroMedia.alt}
                fill
                sizes="(min-width: 1200px) 1072px, 100vw"
                className="object-cover"
                priority
              />
            </picture>
            <VimeoPlayer
              videoId={heroMedia.vimeoId}
              title={study.name}
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
            <source media="(max-width: 809px)" srcSet={heroMedia.mobile} />
            <Image
              src={heroMedia.desktop}
              alt={heroMedia.alt}
              fill
              sizes="(min-width: 1200px) 1072px, 100vw"
              className="object-cover"
              priority
            />
          </picture>
        )}
      </div>
    </div>
  );
}

function CaseStudyDesignMedia({ image, alt }: { image: string; alt: string }) {
  return (
    <div className="relative aspect-[1072/603] w-full overflow-hidden rounded-card bg-neutral-30/5 shadow-soft">
      <Image src={image} alt={alt} fill sizes="(min-width: 1200px) 1072px, 100vw" className="object-cover" />
    </div>
  );
}

export function CaseStudyView({ study }: CaseStudyViewProps) {
  const [introDone, setIntroDone] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const layoutRef = useRef<HTMLDivElement>(null);
  const navItems = useMemo(() => getCaseStudyNavItems(study), [study]);

  const handleIntroComplete = useCallback(() => {
    setIntroDone(true);
  }, []);

  useGSAP(
    () => {
      if (!introDone) return;

      if (layoutRef.current) {
        gsap.to(layoutRef.current, {
          backgroundColor: "#ffffff",
          duration: 0.45,
          ease: "power2.out",
        });
      }

      if (!contentRef.current) return;

      gsap.from(contentRef.current, {
        y: 16,
        duration: 0.55,
        ease: "power2.out",
        clearProps: "transform",
      });
    },
    { dependencies: [introDone] },
  );

  return (
    <>
      {!introDone && <PageIntroCurtain color={study.themeColor} onComplete={handleIntroComplete} />}

      <div
        ref={layoutRef}
        className="case-study-layout case-study-page"
        style={{ backgroundColor: study.themeColor }}
      >
        <CaseStudySidebar study={study} items={navItems} />

        <div ref={contentRef} className="case-study-main">
          <CaseStudySection id="overview" className="pt-10 tablet:pt-12">
            <div className="container-site mx-auto max-w-3xl">
              <div className="section-eyebrow-group">
                <SectionLabel text={study.name} color={labelColor} />
                <div className="section-intro">
                  <h1 className={cn(typography.caseStudyHero, "case-study-hero-title text-center")}>
                    {study.heroTitle}
                  </h1>
                  <p className={cn(typography.caption, "text-center")}>{study.tags.join(" · ")}</p>
                  <p className={cn(typography.bodyLg, typography.measure, "text-center text-neutral-20")}>
                    {study.description}
                  </p>
                </div>
              </div>
              <CaseStudyHeroMedia study={study} />
            </div>
          </CaseStudySection>

          <CaseStudySection id="details">
            <div className="container-site mx-auto max-w-4xl">
              <div className="section-eyebrow-group">
                <SectionLabel text="Details" color={labelColor} />
              </div>
              <div className="mt-10 grid gap-10 tablet:grid-cols-2 tablet:gap-x-16 tablet:gap-y-12">
                {study.meta.map((item) => (
                  <div key={item.label} className="text-center">
                    <p className={cn(typography.bodyLg, "text-neutral-30")}>{item.value}</p>
                    <p className={cn(typography.caption, "mt-2 uppercase tracking-[0.12em] text-neutral-10")}>
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </CaseStudySection>

          <CaseStudySection id="summary">
            <div className="container-site mx-auto max-w-5xl">
              <div className="section-eyebrow-group mb-10">
                <SectionLabel text="Summary" color={labelColor} />
              </div>
              <div className="grid gap-12 tablet:grid-cols-3 tablet:gap-8">
                {study.summary.map((card) => (
                  <article key={card.label} className="text-center">
                    <h3 className={cn(typography.caseStudyCardTitle, "text-center")}>
                      <span style={{ color: labelColor }}>{card.label}</span> {card.title}
                    </h3>
                    <p className={cn(typography.body, "mt-4")}>{card.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </CaseStudySection>

          <CaseStudySection id="impact">
            <div className="container-site mx-auto max-w-5xl">
              <div className="section-eyebrow-group mb-10">
                <SectionLabel text="Impact" color={labelColor} />
              </div>
              <div className="grid gap-12 tablet:grid-cols-3 tablet:gap-8">
                {study.impact.map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center text-center">
                    <div className={cn(typography.caseStudyImpactValue, "case-study-impact-value")}>
                      {stat.value}
                      {stat.valueSecondary && (
                        <>
                          <br />
                          {stat.valueSecondary}
                        </>
                      )}
                    </div>
                    <p className={cn(typography.caseStudyCardTitle, "mt-3")}>{stat.label}</p>
                    <p className={cn(typography.caption, "mt-2 max-w-[16rem]")}>{stat.footnote}</p>
                  </div>
                ))}
              </div>
            </div>
          </CaseStudySection>

          {study.sections.map((section) => (
            <CaseStudySection key={section.id} id={section.id}>
              <div className="container-site mx-auto max-w-3xl">
                <CaseStudySectionHeader label={section.label} title={section.title} />
                <CaseStudyProse>
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </CaseStudyProse>
                {section.bullets && (
                  <ul className={cn("case-study-prose mt-6 list-none space-y-3", typography.body)}>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </CaseStudySection>
          ))}

          {study.designFeatures.map((feature) => (
            <CaseStudySection key={feature.title} id={`design-${feature.index}`}>
              <div className="container-site">
                <div className="mx-auto max-w-3xl">
                  <CaseStudySectionHeader
                    label={`Design ${feature.index}/${feature.total}`}
                    title={feature.title}
                  />
                  <CaseStudyProse>
                    <p>{feature.body}</p>
                  </CaseStudyProse>
                </div>

                <div className="relative mx-auto mt-10 w-full max-w-5xl">
                  <CaseStudyDesignMedia image={feature.image} alt={feature.title} />
                </div>

                {feature.captions && (
                  <div className="mx-auto mt-6 grid max-w-5xl gap-3 tablet:grid-cols-2">
                    {feature.captions.map((caption) => (
                      <p
                        key={caption}
                        className={cn(typography.caption, "text-center tablet:text-left")}
                      >
                        {caption}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </CaseStudySection>
          ))}

          <CaseStudySection id="reflections">
            <div className="container-site mx-auto max-w-3xl">
              <div className="section-eyebrow-group mb-8">
                <SectionLabel text="Reflections" color={labelColor} />
              </div>
              <div className={cn("case-study-prose space-y-6", typography.body)}>
                {study.reflections.map((reflection) => (
                  <p key={reflection.title}>
                    <span className="font-semibold text-neutral-30">{reflection.title}:</span>{" "}
                    {reflection.body}
                  </p>
                ))}
              </div>
            </div>
          </CaseStudySection>

          {study.nextSteps.length > 0 && (
            <CaseStudySection id="next-steps">
              <div className="container-site mx-auto max-w-3xl">
                <div className="section-eyebrow-group mb-8">
                  <SectionLabel text="What I would do next.." color={labelColor} />
                </div>
                <div className="space-y-10">
                  {study.nextSteps.map((step) => (
                    <div key={step.title} className="text-center">
                      <h3 className={cn(typography.caseStudyTitle, "text-center")}>{step.title}</h3>
                      <CaseStudyProse className="mt-4">
                        <p>{step.body}</p>
                      </CaseStudyProse>
                    </div>
                  ))}
                </div>
              </div>
            </CaseStudySection>
          )}

          <CaseStudySection id="closing" className="pb-16 tablet:pb-20">
            <div className="container-site mx-auto max-w-3xl text-center">
              <p className={cn(typography.bodyLg, typography.measure, "mx-auto text-neutral-30")}>
                {study.closing}
              </p>
              <p className={cn(typography.caption, "mt-12")}>fin.</p>
            </div>
          </CaseStudySection>

          <footer className="border-t border-[rgb(117_115_114_/_0.15)] px-6 py-10 tablet:px-8">
            <div className="container-site flex flex-col items-center gap-4 text-center">
              <div className={cn("flex gap-6", typography.caption)}>
                <Link href="/#contact" className="underline underline-offset-4">
                  contact
                </Link>
                <Link href="/#work" className="underline underline-offset-4">
                  work
                </Link>
              </div>
              <p className={cn(typography.caption, "max-w-lg")}>
                Thanks for reading. This case study is part of Julio Souffront&apos;s portfolio.
              </p>
              <p className={cn(typography.caption, "text-neutral-10")}>
                © 2026 Julio Souffront. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
