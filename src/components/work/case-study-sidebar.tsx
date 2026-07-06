"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { scrollToElement } from "@/lib/scroll-to";
import type { CaseStudy } from "@/lib/work-case-studies";
import { cn } from "@/lib/utils";

export type CaseStudyNavItem = {
  id: string;
  label: string;
};

export function getCaseStudyNavItems(study: CaseStudy): CaseStudyNavItem[] {
  return [
    { id: "overview", label: "Overview" },
    { id: "details", label: "Details" },
    { id: "summary", label: "Summary" },
    { id: "impact", label: "Impact" },
    ...study.sections.map((section) => ({ id: section.id, label: section.label })),
    ...study.designFeatures.map((feature) => ({
      id: `design-${feature.index}`,
      label: `Design ${feature.index}/${feature.total}`,
    })),
    { id: "reflections", label: "Reflections" },
    { id: "next-steps", label: "What's next" },
    { id: "closing", label: "Closing" },
  ];
}

type CaseStudySidebarProps = {
  study: CaseStudy;
  items: CaseStudyNavItem[];
};

export function CaseStudySidebar({ study, items }: CaseStudySidebarProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "overview");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <aside className="case-study-sidebar">
      <div className="flex h-full flex-col px-4 py-6 tablet:px-5 tablet:py-8">
        <Link
          href="/#work"
          className="mb-8 inline-flex items-center gap-2 font-sans text-sm text-neutral-20 transition-colors hover:text-neutral-30"
          data-cursor-hover
        >
          <span aria-hidden>←</span>
          <span>Back</span>
        </Link>

        <p className="mb-4 font-sans text-xs uppercase tracking-[0.12em] text-neutral-10">{study.name}</p>

        <nav aria-label="Case study sections" className="min-h-0 flex-1 overflow-y-auto">
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById(item.id);
                    if (el) scrollToElement(el, -24);
                  }}
                  className={cn(
                    "w-full rounded-lg px-2 py-2 text-left font-sans text-xs leading-snug transition-colors tablet:px-3 tablet:text-sm",
                    activeId === item.id
                      ? "bg-neutral-30/8 font-medium text-neutral-30"
                      : "text-neutral-20 hover:bg-neutral-30/5 hover:text-neutral-30",
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
