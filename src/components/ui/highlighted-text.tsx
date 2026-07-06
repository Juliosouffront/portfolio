type TextSegment = {
  readonly text: string;
  readonly color?: string;
};

type HighlightedTextProps = {
  segments: readonly TextSegment[];
  className?: string;
};

export function HighlightedText({ segments, className }: HighlightedTextProps) {
  return (
    <span className={className}>
      {segments.map((segment, index) =>
        segment.color ? (
          <span key={index} style={{ color: segment.color }}>
            {segment.text}
          </span>
        ) : (
          <span key={index}>{segment.text}</span>
        ),
      )}
    </span>
  );
}
