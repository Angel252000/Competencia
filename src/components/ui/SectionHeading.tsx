interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className = "" }: SectionHeadingProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="font-mono text-3xl font-bold uppercase tracking-[-0.04em] text-navy-dark sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-gray-600 max-w-lg mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
