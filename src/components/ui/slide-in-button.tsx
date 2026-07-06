"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type SlideInButtonProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  variant?: "dark" | "glass" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: "px-3.5 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-2.5 text-base",
};

export function SlideInButton({
  href,
  children,
  external,
  variant = "dark",
  size = "md",
  className,
}: SlideInButtonProps) {
  const buttonRef = useRef<HTMLSpanElement>(null);

  const buttonClass = cn(
    "relative inline-flex rounded-pill border leading-none",
    sizes[size],
    variant === "dark" && "border-neutral-30 bg-neutral-30 text-white",
    variant === "glass" &&
      "group overflow-hidden border-[rgb(var(--color-border-soft))] bg-[rgb(var(--color-soft-white))] text-neutral-30 backdrop-blur-[10px] hoverable:group-hover:bg-[rgb(255_255_255_/_0.35)]",
    variant === "ghost" && "border-neutral-30 bg-transparent text-neutral-30 hover:bg-neutral-30/5",
    className,
  );

  const textClass = cn(
    "relative z-10 tracking-[-0.02em]",
    variant === "dark" && "font-serif text-white",
    variant === "ghost" && "font-serif text-neutral-30",
    variant === "glass" &&
      "font-sans text-base text-neutral-30 transition-colors duration-300 ease-out",
  );

  const handlePointerDown = () => {
    if (variant === "dark" || !buttonRef.current) return;

    gsap.to(buttonRef.current, { scale: 0.97, duration: 0.12, ease: "power2.out" });
  };

  const handlePointerUp = () => {
    if (variant === "dark" || !buttonRef.current) return;

    gsap.to(buttonRef.current, { scale: 1, duration: 0.2, ease: "back.out(2)" });
  };

  const content = (
    <span
      ref={buttonRef}
      className={buttonClass}
      onPointerDown={variant === "dark" ? undefined : handlePointerDown}
      onPointerUp={variant === "dark" ? undefined : handlePointerUp}
      onPointerLeave={variant === "dark" ? undefined : handlePointerUp}
      data-cursor-hover
      suppressHydrationWarning
    >
      <span className={textClass}>{children}</span>
    </span>
  );

  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
      >
        {content}
      </a>
    );
  }

  return <Link href={href}>{content}</Link>;
}
