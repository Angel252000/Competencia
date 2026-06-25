"use client";

import { useCountUp } from "@/lib/hooks";

interface StatsCounterProps {
  end: number;
  suffix?: string;
  label: string;
}

export default function StatsCounter({ end, suffix = "", label }: StatsCounterProps) {
  const { count, ref } = useCountUp(end);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold text-navy-dark sm:text-4xl lg:text-5xl">
        {count}
        {suffix}
      </div>
      <div className="mt-1 text-xs font-medium text-gray-500 sm:text-sm">
        {label}
      </div>
    </div>
  );
}
