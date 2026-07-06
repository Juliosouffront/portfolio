import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { Footer } from "@/components/footer";
import { getAllPosts } from "@/lib/blog";
import { typography } from "@/lib/typography";

export const metadata = {
  title: "Writing",
  description: "Essays and notes on design, care, and building products that feel human.",
};

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <>
      <SiteNav />
      <main id="main" className="min-h-screen bg-page pt-32 pb-24">
        <div className="container-site">
          <Link href="/" className="text-sm text-neutral-20 underline underline-offset-4 hover:text-neutral-30">
            ← Back home
          </Link>
          <h1 className={`${typography.h1} mt-8`}>Writing</h1>
          <p className="mt-4 max-w-2xl text-neutral-20">
            Notes on design, momentum, and building with an unreasonable amount of care.
          </p>

          <div className="mt-16 grid gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-card border border-[rgb(117_115_114_/_0.15)] bg-white/70 p-8 transition hover:bg-white"
              >
                <p
                  className="font-display text-xs font-semibold uppercase tracking-[0.08em]"
                  style={{ color: post.categoryColor ?? "rgb(var(--color-neutral-10))" }}
                >
                  {post.categories.join(", ")}
                </p>
                <h2 className="mt-3 font-serif text-3xl text-neutral-30">
                  <Link href={`/writing/${post.slug}`} className="hover:opacity-70">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-neutral-20">{post.summary}</p>
                {post.date && (
                  <time className="mt-4 block text-sm text-neutral-10" dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                )}
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
