type PortfolioContentProps = {
  children: React.ReactNode;
};

/** Inner content wrapper — outer shell (margin, parallax, radius) lives in HeroScrollShell. */
export function PortfolioContent({ children }: PortfolioContentProps) {
  return <>{children}</>;
}
