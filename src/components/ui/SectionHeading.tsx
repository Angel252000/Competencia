interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className = "" }: SectionHeadingProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-text sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-gradient-to-r from-transparent via-neon to-transparent" />
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-text-dim max-w-lg mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
