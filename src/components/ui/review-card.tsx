import { AppImage as Image } from "@/components/ui/app-image";
import { cn } from "@/lib/utils";
import { typography } from "@/lib/typography";

type ReviewCardProps = {
  quote: string;
  name: string;
  role?: string;
  image?: string;
  compact?: boolean;
  className?: string;
};

export function ReviewCard({ quote, name, role, image, compact = false, className }: ReviewCardProps) {
  return (
    <article
      className={cn(
        "flex w-full flex-col justify-between rounded-card",
        compact ? "bg-white/40" : "bg-white/70",
        compact
          ? "min-h-[148px] gap-4 p-4 tablet:min-h-[168px] tablet:p-5"
          : "min-h-[213px] gap-6 p-6 tablet:min-h-[287px] tablet:p-8",
        className,
      )}
    >
      <p
        className={cn(
          compact ? "text-sm leading-relaxed" : typography.body,
          "text-neutral-30",
        )}
      >
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        {image ? (
          <Image
            src={image}
            alt=""
            width={56}
            height={64}
            className={cn(
              "rounded-pill object-cover",
              compact ? "h-12 w-10" : "h-16 w-14",
            )}
          />
        ) : (
          <div
            className={cn(
              "flex items-center justify-center rounded-pill bg-neutral-30/10 font-display font-semibold text-neutral-30",
              typography.caption,
              compact ? "h-12 w-10" : "h-16 w-14",
            )}
          >
            {name.charAt(0)}
          </div>
        )}
        <div>
          <p className={cn(typography.caption, "font-medium text-neutral-30")}>{name}</p>
          {role && <p className={typography.caption}>{role}</p>}
        </div>
      </div>
    </article>
  );
}
