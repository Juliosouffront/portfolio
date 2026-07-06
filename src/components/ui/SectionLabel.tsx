import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

type SectionLabelProps = {
  text: string;
  color: string;
  className?: string;
  align?: "left" | "center" | "right";
};

export function SectionLabel({
  text,
  color,
  className = "",
  align = "center",
}: SectionLabelProps) {
  const alignClass =
    align === "right" ? "justify-end" : align === "left" ? "justify-start" : "justify-center";

  return (
    <div className={`flex ${alignClass} ${className}`}>
      <span
        className={cn("rounded-pill px-3 pb-2 pt-[9px]", typography.label)}
        style={{
          color,
          backgroundColor: `color-mix(in srgb, ${color} 5%, transparent)`,
        }}
      >
        {text}
      </span>
    </div>
  );
}
