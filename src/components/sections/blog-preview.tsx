import { AppImage as Image } from "@/components/ui/app-image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

type BlogPreviewProps = {
  posts: BlogPost[];
};

export function BlogPreview({ posts }: BlogPreviewProps) {
  if (posts.length === 0) return null;

  return (
    <section id="writing" className="container-site flex flex-col items-center py-24" aria-label="Writing">
      <div className="mb-10 flex w-full max-w-[960px] flex-col items-center gap-4 text-center tablet:flex-row tablet:items-end tablet:justify-between tablet:text-left">
        <h2 className={typography.h2}>Writing</h2>
        <Link
          href="/writing"
          className={cn(typography.caption, "underline underline-offset-4 transition hover:text-neutral-30")}
          data-cursor-hover
        >
          View all
        </Link>
      </div>

      <div className="grid w-full max-w-[960px] gap-6 tablet:grid-cols-2">
        {posts.slice(0, 4).map((post) => (
          <Link
            key={post.slug}
            href={`/writing/${post.slug}`}
            className="group rounded-card bg-white/70 p-6 transition hover:bg-white"
            data-cursor-hover
          >
            {post.mainImage && (
              <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-card">
                <Image
                  src={post.mainImage}
                  alt=""
                  fill
                  sizes="(min-width: 810px) 536px, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            )}
            <p
              className={cn("mb-2", typography.label)}
              style={{ color: post.categoryColor ?? "rgb(var(--color-neutral-10))" }}
            >
              {post.categories.join(", ")}
            </p>
            <h3 className={typography.h4}>{post.title}</h3>
            <p className={cn("mt-3", typography.caption)}>{post.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
