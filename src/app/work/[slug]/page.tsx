import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyView } from "@/components/work/case-study-view";
import { WorkPasswordGate } from "@/components/work/work-password-gate";
import { isWorkAccessGranted } from "@/lib/work-access";
import { getAllCaseStudySlugs, getCaseStudyBySlug } from "@/lib/work-case-studies";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};

  return {
    title: `${study.name} — Case Study`,
    description: study.description,
    openGraph: {
      title: study.heroTitle,
      description: study.description,
      images: [{ url: study.heroMedia.desktop }],
    },
  };
}

export default async function WorkCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const accessGranted = await isWorkAccessGranted();
  if (!accessGranted) {
    return <WorkPasswordGate projectName={study.name} />;
  }

  return (
    <main id="main" className="case-study-page min-h-screen text-neutral-30" style={{ backgroundColor: study.themeColor }}>
      <CaseStudyView study={study} />
    </main>
  );
}
