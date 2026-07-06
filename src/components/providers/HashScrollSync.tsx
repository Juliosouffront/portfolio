"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToHash } from "@/lib/scroll-to";

const NAV_OFFSET = -96;

export function HashScrollSync() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const timer = window.setTimeout(() => scrollToHash(hash, NAV_OFFSET), 100);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
