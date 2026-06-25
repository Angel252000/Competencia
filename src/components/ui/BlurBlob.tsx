interface BlurBlobProps {
  className?: string;
  color?: string;
  size?: number;
  delay?: string;
}

export function BlurBlob({ className = "", color = "bg-blue-bright/20", size = 96, delay = "0s" }: BlurBlobProps) {
  return (
    <div
      className={`absolute rounded-full ${color} blur-[100px] animate-pulse-slow ${className}`}
      style={{ width: size * 4, height: size * 4, animationDelay: delay }}
    />
  );
}
