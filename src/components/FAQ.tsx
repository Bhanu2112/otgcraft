import React, { useState } from "react";
import { FAQS } from "../data";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-24 bg-studio-dark relative">
      <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full bg-cyber-lime/[0.01] blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-cyber-lime font-mono mb-4">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>COMMONLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-4">
            Got Questions? <span className="text-cyber-lime">We've Got Answers.</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Everything you need to know about our mobile workflows, turnaround timing, surprise page domain hosting, and locations inside Hyderabad.
          </p>
        </div>

        {/* Interactive Accordion Stack */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all border duration-200 ${
                  isOpen
                    ? "border-cyber-lime/30 bg-cyber-lime/[0.02]"
                    : "border-white/5 bg-white/[0.01] hover:border-white/10"
                }`}
              >
                {/* Trigger Button */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left px-6 py-5 sm:py-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-display font-bold text-sm sm:text-base md:text-lg text-white group-hover:text-cyber-lime transition-colors">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-white/5 text-gray-400 transition-transform ${
                    isOpen ? "rotate-180 text-cyber-lime" : ""
                  }`}>
                    <ChevronDown className="h-4 sm:h-5 sm:w-5 w-4 shrink-0" />
                  </div>
                </button>

                {/* Body Content */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-[500px] opacity-100 border-t border-white/5" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="px-6 py-5 sm:py-6 text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
