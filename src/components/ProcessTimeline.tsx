import React from "react";
import { MessageSquareCode, Video, Rocket, ArrowRight } from "lucide-react";

export default function ProcessTimeline() {
  const steps = [
    {
      number: "01",
      title: "Ping Us",
      highlight: "Chat & Schedule",
      description: "Tap our prominent WhatsApp CTA. Share your event type, neighborhood location, and creative ideas. We will check crew availability instantly and lock your slot with zero complex paperwork.",
      icon: MessageSquareCode,
      glowColor: "rgba(204, 255, 0, 0.4)"
    },
    {
      number: "02",
      title: "We Capture",
      highlight: "Flagship Fluid Motion",
      description: "Our certified mobile creators arrive equipped with top-tier smartphones (iPhone Pro/S24 Ultra) and fluid stabilizer gimbals, moving discreetly to capture genuine crowd energy.",
      icon: Video,
      glowColor: "rgba(139, 92, 246, 0.4)"
    },
    {
      number: "03",
      title: "We Deliver",
      highlight: "Handcrafted 20m Drop",
      description: "Our on-site editors pull raw clips, color-grade, sync them perfectly to beats, and deliver a vertical 4K masterpiece directly to your phone in 20 minutes.",
      icon: Rocket,
      glowColor: "rgba(204, 255, 0, 0.4)"
    }
  ];

  return (
    <section id="process" className="py-24 bg-[#09090D] relative overflow-hidden">
      {/* Visual glowing grid mesh lines in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-500/[0.01] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs text-cyber-lime font-mono uppercase tracking-widest bg-white/5 border border-white/10 px-3 py-1 rounded-full">
            OUR LEAN PRODUCTION WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight mt-4">
            Zero Friction. <span className="text-cyber-lime">Infinite Vibes.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-3">
            We've stripped away the heavy layers of traditional video crews. Here's how we deliver premium social-first content in record time.
          </p>
        </div>

        {/* Horizontal Timeline Block */}
        <div className="relative max-w-5xl mx-auto">
          {/* Symmetrical connecting dashed line on desktop */}
          <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-[1px] border-t border-dashed border-white/10 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div key={idx} className="group relative">
                  
                  {/* Timeline Node Icon Head */}
                  <div className="flex justify-center lg:justify-start mb-6">
                    <div className="relative">
                      {/* Ambient circle glow */}
                      <div 
                        className="absolute -inset-1 rounded-2xl opacity-10 group-hover:opacity-100 transition-opacity blur-lg"
                        style={{ backgroundColor: step.glowColor }}
                      />
                      {/* Active Icon container */}
                      <div className="relative h-20 w-20 rounded-2xl bg-[#121218] border border-white/10 flex items-center justify-center text-white group-hover:border-cyber-lime transition-all group-hover:scale-105">
                        <IconComponent className="h-9 w-9 text-cyber-lime group-hover:animate-pulse" />
                        
                        {/* Static Step number badge */}
                        <span className="absolute -bottom-2 -right-2 h-6 w-8 bg-black border border-white/10 rounded-md flex items-center justify-center font-mono font-bold text-[11px] text-cyber-lime">
                          {step.number}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Step Description Content */}
                  <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 group-hover:border-white/10 group-hover:bg-white/[0.02] transition-all text-center lg:text-left">
                    <span className="text-[10px] font-mono text-cyber-lime uppercase tracking-widest font-semibold">
                      STEP {step.number} • {step.highlight}
                    </span>
                    <h3 className="text-xl font-display font-extrabold text-white mt-1 group-hover:text-cyber-lime transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-3">
                      {step.description}
                    </p>
                  </div>

                  {/* Responsive arrow hint pointing to next step */}
                  {idx < 2 && (
                    <div className="hidden lg:block absolute top-[28px] -right-[20px] z-20 pointer-events-none text-white/20 group-hover:text-cyber-lime transition-colors">
                      <ArrowRight className="h-6 w-6" />
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
