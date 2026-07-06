import { ScrollSmoother } from "@/lib/gsap";

export function scrollToElement(element: HTMLElement, offset = 0) {
  const smoother = ScrollSmoother.get();

  if (smoother) {
    const y = smoother.offset(element, "top top") + offset;
    smoother.scrollTo(y, true);
    return;
  }

  const top = element.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top, behavior: "smooth" });
}

export function scrollToHash(hash: string, offset = 0) {
  const id = hash.replace(/^#/, "");
  if (!id) return;

  const element = document.getElementById(id);
  if (!element) return;

  scrollToElement(element, offset);
}
