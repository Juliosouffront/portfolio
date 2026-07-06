export function BackgroundGradient() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-1/2 top-[900px] -z-0 h-[5530px] w-full max-w-[1200px] -translate-x-1/2"
      style={{
        background:
          "linear-gradient(180deg, rgb(250 250 250) 0%, rgb(249 248 248) 36%, rgb(244 241 238) 51%, rgb(226 236 246) 73%, rgb(167 203 242) 125%)",
      }}
    />
  );
}
