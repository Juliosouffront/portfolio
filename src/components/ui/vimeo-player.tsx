type VimeoPlayerProps = {
  videoId: string;
  title?: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  className?: string;
  fill?: boolean;
};

export function VimeoPlayer({
  videoId,
  title = "Video",
  autoplay = false,
  muted = false,
  loop = false,
  controls = true,
  className = "",
  fill = false,
}: VimeoPlayerProps) {
  const params = new URLSearchParams({
    badge: "0",
    autopause: "0",
    player_id: "0",
    app_id: "58479",
    dnt: "1",
    background: fill && autoplay ? "1" : "0",
  });

  if (autoplay) params.set("autoplay", "1");
  if (muted) params.set("muted", "1");
  if (loop) params.set("loop", "1");
  if (!controls) params.set("controls", "0");

  const src = `https://player.vimeo.com/video/${videoId}?${params.toString()}`;

  return (
    <div
      className={`relative overflow-hidden bg-black ${fill ? "h-full w-full" : "aspect-video w-full"} ${className}`}
    >
      <iframe
        src={src}
        title={title}
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
      />
    </div>
  );
}

export const VIMEO = {
  qikPro: {
    id: "1179002856",
    url: "https://vimeo.com/1179002856",
    title: "Qik Pro",
  },
} as const;
