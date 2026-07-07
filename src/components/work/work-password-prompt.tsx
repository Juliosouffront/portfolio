"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { WORK_ACCESS_SLOT_COUNT } from "@/lib/work-access-config";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

type WorkPasswordPromptProps = {
  title?: string;
  description?: string;
  onClose?: () => void;
  onSuccess: () => void;
  className?: string;
  /** Use sans (Gabarito) instead of Goudy — for case study pages */
  sansTypography?: boolean;
};

const ACCESS_EMAIL = "juliosouffront@gmail.com";

function PasswordIncorrectMessage() {
  return (
    <p className="font-sans text-sm text-accent-red" role="alert">
      The password is incorrect.{" "}
      <a
        href={`mailto:${ACCESS_EMAIL}?subject=Portfolio%20case%20study%20access`}
        className="underline underline-offset-2 transition-opacity hover:opacity-70"
      >
        Mail me at {ACCESS_EMAIL}
      </a>{" "}
      for access.
    </p>
  );
}

export function WorkPasswordPrompt({
  title = "Enter password",
  description = "This case study is password protected.",
  onClose,
  onSuccess,
  className,
  sansTypography = false,
}: WorkPasswordPromptProps) {
  const titleId = useId();
  const descriptionId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose?.();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const submitPassword = useCallback(
    async (value: string) => {
      if (!value.trim()) return;

      setShowError(false);
      setIsSubmitting(true);

      try {
        const response = await fetch("/api/work-auth", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password: value }),
        });

        if (!response.ok) {
          setShowError(true);
          setPassword("");
          inputRef.current?.focus();
          return;
        }

        onSuccess();
      } catch {
        setShowError(true);
      } finally {
        setIsSubmitting(false);
      }
    },
    [onSuccess],
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void submitPassword(password);
  };

  return (
    <div
      className={cn(
        "relative w-full max-w-lg rounded-[24px] border border-[rgb(var(--color-border-soft))] bg-white p-8 shadow-soft",
        className,
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
    >
      {onClose ? (
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full text-neutral-30/60 transition-colors hover:bg-page hover:text-neutral-30"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path
              d="M1 1l12 12M13 1L1 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      ) : null}

      <h2
        id={titleId}
        className={cn(
          sansTypography ? typography.caseStudyCardTitle : typography.h4,
          "text-center",
        )}
      >
        {title}
      </h2>
      <p id={descriptionId} className={cn(typography.caption, "mt-3 text-center")}>
        {description}
      </p>

      <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
        <label className="block">
          <span className="sr-only">Password</span>
          <div className="flex items-center gap-2 rounded-2xl border border-[rgb(var(--color-border-soft))] bg-page p-1.5 pl-4 transition-colors focus-within:border-neutral-20">
            <input
              ref={inputRef}
              type="password"
              value={password}
              maxLength={WORK_ACCESS_SLOT_COUNT}
              onChange={(event) => {
                setPassword(event.target.value);
                if (showError) setShowError(false);
              }}
              autoComplete="current-password"
              className="min-w-0 flex-1 border-0 bg-transparent py-2 font-sans text-base text-neutral-30 outline-none"
              disabled={isSubmitting}
            />
            <button
              type="submit"
              disabled={isSubmitting || !password}
              className={cn(
                "inline-flex shrink-0 items-center justify-center rounded-pill border border-neutral-30 bg-neutral-30 px-4 py-2 text-sm text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-50",
                sansTypography ? "font-sans" : "font-serif",
              )}
            >
              {isSubmitting ? "..." : "Enter"}
            </button>
          </div>
        </label>

        {showError ? <PasswordIncorrectMessage /> : null}
      </form>
    </div>
  );
}
