import { ScrollSmoother } from "@/lib/gsap";

export function getScrollY() {
  return ScrollSmoother.get()?.scrollTop() ?? window.scrollY;
}
