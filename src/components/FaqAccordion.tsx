"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className={`rounded-xl border bg-panel/50 overflow-hidden transition-all ${
            openIndex === index ? "border-neon/40 shadow-[0_0_24px_rgba(34,211,238,0.12)]" : "border-line"
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-panel"
          >
            <span className="font-medium text-text text-sm sm:text-base pr-4">
              {item.question}
            </span>
            <svg
              className={`h-5 w-5 shrink-0 transition-transform ${
                openIndex === index ? "rotate-180 text-neon" : "text-text-mute"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              openIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="px-5 pb-4 text-sm text-text-dim leading-relaxed">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
