import { AppImage as Image } from "@/components/ui/app-image";
import { cn } from "@/lib/utils";

type PolaroidPhotoProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  variant?: "default" | "sm";
  /** When false, shows the full image without rounded-mask cropping */
  clip?: boolean;
};

const variantClasses = {
  default:
    "max-w-[460px] tablet:max-w-none",
  sm: "max-w-[320px] tablet:max-w-[340px] desktop:max-w-[380px]",
};

export function PolaroidPhoto({
  src,
  alt,
  width,
  height,
  className,
  variant = "default",
  clip = true,
}: PolaroidPhotoProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full tablet:mx-0",
        clip
          ? "overflow-hidden rounded-[120px] rounded-bl-3xl rounded-tr-3xl desktop:rounded-[202px]"
          : "overflow-visible",
        variantClasses[variant],
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={
          variant === "sm"
            ? "(min-width: 1200px) 380px, (min-width: 810px) 340px, 320px"
            : "(min-width: 810px) 536px, 460px"
        }
        className="h-auto w-full object-contain"
      />
    </div>
  );
}
