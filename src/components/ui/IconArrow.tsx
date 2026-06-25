interface IconArrowProps {
  direction?: "right" | "left";
  className?: string;
}

export function IconArrow({ direction = "right", className = "h-4 w-4" }: IconArrowProps) {
  const path =
    direction === "right"
      ? "M13 7l5 5m0 0l-5 5m5-5H6"
      : "M15 19l-7-7 7-7";

  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}
