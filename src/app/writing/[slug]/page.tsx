import Link from "next/link";
import { AppImage as Image } from "@/components/ui/app-image";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import { SiteNav } from "@/components/site-nav";
import { Footer } from "@/components/footer";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { typography } from "@/lib/typography";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: post.mainImage ? [{ url: post.mainImage }] : undefined,
    },
  };
}

export default async function WritingPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <SiteNav />
      <main id="main" className="min-h-screen bg-page pt-32 pb-24">
        <article className="container-site max-w-3xl">
          <Link href="/writing" className="text-sm text-neutral-20 underline underline-offset-4 hover:text-neutral-30">
            ← All writing
          </Link>

          <p
            className="mt-8 font-display text-xs font-semibold uppercase tracking-[0.08em]"
            style={{ color: post.categoryColor ?? "rgb(var(--color-neutral-10))" }}
          >
            {post.categories.join(", ")}
          </p>

          <h1 className={`${typography.h1} mt-4`}>{post.title}</h1>
          <p className="mt-4 text-lg text-neutral-20">{post.summary}</p>

          {post.mainImage && (
            <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-card">
              <Image src={post.mainImage} alt="" fill className="object-cover" priority sizes="768px" />
            </div>
          )}

          <div className="prose-blog mt-12">
            <Markdown>{post.content}</Markdown>
          </div>

          {post.author && (
            <footer className="mt-16 flex items-center gap-4 border-t border-[rgb(117_115_114_/_0.15)] pt-8">
              {post.author.image && (
                <Image
                  src={post.author.image}
                  alt=""
                  width={48}
                  height={48}
                  className="size-12 rounded-full object-cover"
                />
              )}
              <div>
                <p className="font-medium text-neutral-30">{post.author.name}</p>
                {post.author.position && (
                  <p className="text-sm text-neutral-20">{post.author.position}</p>
                )}
              </div>
            </footer>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
