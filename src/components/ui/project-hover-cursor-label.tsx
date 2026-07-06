"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { projectHoverPillClass } from "@/components/ui/project-hover-label";
import { cn } from "@/lib/utils";

const CURSOR_OFFSET = 16;

type ProjectHoverCursorLabelProps = {
  label: string;
  targetRef: React.RefObject<HTMLElement | null>;
  copyRef?: React.RefObject<HTMLElement | null>;
  className?: string;
};

function isPointInsideRect(x: number, y: number, rect: DOMRect) {
  return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
}

function isOverCopyText(x: number, y: number, copyRoot: HTMLElement | null) {
  if (!copyRoot) return false;

  const textElements = copyRoot.querySelectorAll("p, h2, h3, h4");
  return Array.from(textElements).some((element) =>
    isPointInsideRect(x, y, element.getBoundingClientRect()),
  );
}

export function ProjectHoverCursorLabel({
  label,
  targetRef,
  copyRef,
  className,
}: ProjectHoverCursorLabelProps) {
  const [visible, setVisible] = useState(false);
  const [isOverCopy, setIsOverCopy] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const pendingRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const schedulePosition = (x: number, y: number) => {
      pendingRef.current = { x, y };

      if (rafRef.current !== null) return;

      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        setPosition(pendingRef.current);
      });
    };

    const updateCopyHover = (x: number, y: number) => {
      const copy = copyRef?.current;
      if (!copy) {
        setIsOverCopy(false);
        return;
      }

      setIsOverCopy(isOverCopyText(x, y, copy));
    };

    const onMove = (event: MouseEvent) => {
      schedulePosition(event.clientX, event.clientY);
      updateCopyHover(event.clientX, event.clientY);
    };

    const onEnter = (event: MouseEvent) => {
      schedulePosition(event.clientX, event.clientY);
      updateCopyHover(event.clientX, event.clientY);
      setVisible(true);
    };

    const onLeave = () => {
      setVisible(false);
      setIsOverCopy(false);
    };

    target.addEventListener("mousemove", onMove);
    target.addEventListener("mouseenter", onEnter);
    target.addEventListener("mouseleave", onLeave);

    return () => {
      target.removeEventListener("mousemove", onMove);
      target.removeEventListener("mouseenter", onEnter);
      target.removeEventListener("mouseleave", onLeave);

      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [copyRef, targetRef]);

  if (!visible || typeof document === "undefined") return null;

  return createPortal(
    <span
      aria-hidden
      className={cn(
        projectHoverPillClass,
        "pointer-events-none fixed z-[200] -translate-y-1/2 transition-opacity duration-150",
        isOverCopy ? "opacity-10" : "opacity-100",
        className,
      )}
      style={{
        left: position.x + CURSOR_OFFSET,
        top: position.y + CURSOR_OFFSET,
      }}
    >
      {label}
    </span>,
    document.body,
  );
}
