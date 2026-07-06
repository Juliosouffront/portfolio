import { about } from "@/lib/content";
import { SITE } from "@/lib/constants";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

const footerLinkClass =
  cn(typography.caption, "inline-flex w-fit items-center underline decoration-neutral-30/20 underline-offset-4");

export function Footer() {
  return (
    <footer
      id="contact"
      className="container-site px-0 pt-8 tablet:pt-10"
      aria-label="Contact and social links"
    >
      <div className="footer-shell p-6 tablet:p-10" suppressHydrationWarning>
        <div className="flex flex-col gap-8 tablet:gap-[var(--space-title-content)]">
          <div className="flex flex-col justify-between gap-8 tablet:gap-[var(--space-title-content)] desktop:flex-row">
            <div className="flex flex-col gap-4">
              <p className={typography.caption}>{SITE.name}</p>
              <h2 className={cn(typography.footerHeadline, typography.measure)}>
                {about.footer.headline}
              </h2>
              <p className={typography.caption}>{about.footer.tagline}</p>
            </div>

            <div>
              <p className={cn(typography.label, "mb-3 text-neutral-10")}>
                {about.footer.socialsLabel}
              </p>
              <div className={cn("grid gap-1", typography.caption)}>
                {about.footer.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                    className={footerLinkClass}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={cn("flex flex-col gap-4 border-t border-[rgb(117_115_114_/_0.15)] pt-6 tablet:flex-row tablet:items-center tablet:justify-between", typography.caption)}>
            <p>
              © {new Date().getFullYear()} {SITE.name}. All rights reserved.
            </p>
            <p className={typography.caption}>{about.footer.handle}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
