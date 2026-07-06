"use client";

import { AppImage as Image } from "@/components/ui/app-image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { navigation } from "@/lib/content";
import { assets } from "@/lib/assets";
import { getScrollY } from "@/lib/scroll-position";
import { NavItem } from "@/components/ui/nav-item";
import { SlideInButton } from "@/components/ui/slide-in-button";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(getScrollY() > 40);

    onScroll();

    const trigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: onScroll,
    });

    return () => {
      trigger.kill();
    };
  }, []);

  useEffect(() => {
    if (!menuRef.current) return;

    if (open) {
      gsap.fromTo(
        menuRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.25, ease: "power2.out" },
      );
      return;
    }

    gsap.to(menuRef.current, { height: 0, opacity: 0, duration: 0.2, ease: "power2.in" });
  }, [open]);

  const sectionLinks = navigation.filter((item) => !("external" in item && item.external));
  const isGlass = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50 py-4">
      <nav className="container-site rounded-pill" aria-label="Primary navigation">
        <div
          className={cn(
            "rounded-[40px] px-2.5 py-2.5 transition-all duration-300",
            isGlass
              ? "border border-[rgb(117_115_114_/_0.15)] bg-white/25 shadow-none backdrop-blur-[10px]"
              : "border border-transparent bg-transparent",
          )}
        >
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
            <Link
              href="/#hero"
              className="justify-self-start rounded-pill p-1"
              aria-label="Julio Souffront home"
              data-cursor-hover
            >
              <Image
                src={assets.logo}
                alt="Julio Souffront"
                width={32}
                height={32}
                className="size-9 rounded-full object-cover"
                priority
              />
            </Link>

            <div className="hidden items-center justify-center gap-1 justify-self-center tablet:flex">
              {sectionLinks.map((item) => (
                <NavItem key={item.href} href={item.href}>
                  {item.label}
                </NavItem>
              ))}
            </div>

            <div className="hidden justify-self-end tablet:block">
              <SlideInButton
                href="https://www.linkedin.com/in/juliosouffront/"
                external
                variant="glass"
                size="md"
              >
                LinkedIn
              </SlideInButton>
            </div>

            <button
              type="button"
              className="col-start-3 inline-flex size-10 flex-col items-center justify-center gap-1.5 justify-self-end rounded-pill bg-white/30 tablet:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? "Close navigation" : "Open navigation"}</span>
              <span
                className={cn(
                  "block h-px w-5 bg-neutral-30 transition-transform duration-200",
                  open && "translate-y-[5px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-px w-5 bg-neutral-30 transition-opacity duration-200",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "block h-px w-5 bg-neutral-30 transition-transform duration-200",
                  open && "-translate-y-[5px] -rotate-45",
                )}
              />
            </button>
          </div>

          <div
            ref={menuRef}
            id="mobile-menu"
            className={cn("overflow-hidden tablet:hidden", !open && "pointer-events-none")}
            style={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          >
            <div className="grid gap-2 pt-4">
              {navigation.map((item) =>
                "external" in item && item.external ? (
                  <NavItem
                    key={item.href}
                    href={item.href}
                    external
                    onNavigate={() => setOpen(false)}
                    className="justify-center py-3"
                  >
                    {item.label}
                  </NavItem>
                ) : (
                  <NavItem
                    key={item.href}
                    href={item.href}
                    onNavigate={() => setOpen(false)}
                    className="justify-center py-3"
                  >
                    {item.label}
                  </NavItem>
                ),
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
