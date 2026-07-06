"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { scrollToHash } from "@/lib/scroll-to";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

const NAV_OFFSET = -96;

type NavItemProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  onNavigate?: () => void;
  className?: string;
};

export function NavItem({ href, children, external, onNavigate, className }: NavItemProps) {
  const pathname = usePathname();

  const classes = cn(
    "inline-flex rounded-pill px-4 py-2.5 transition-colors hover:bg-white/20",
    typography.nav,
    className,
  );

  const handleSectionClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onNavigate?.();

    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) return;

    const path = href.slice(0, hashIndex) || "/";
    const hash = href.slice(hashIndex + 1);
    const isSamePage = path === pathname;

    if (!isSamePage || !hash) return;

    event.preventDefault();
    scrollToHash(hash, NAV_OFFSET);
    window.history.pushState(null, "", `/#${hash}`);
  };

  if (external || href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classes}
        onClick={onNavigate}
        data-cursor-hover
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={handleSectionClick} data-cursor-hover>
      {children}
    </Link>
  );
}
