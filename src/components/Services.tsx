import React from "react";
import { SERVICES } from "../data";
import { Zap, Video, Cpu, Check, Sparkles } from "lucide-react";

export default function Services() {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 bg-studio-dark relative">
      {/* Absolute decorative glow background */}
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-[#CCFF00]/[0.01] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs text-cyber-lime font-mono mb-4 tracking-wider uppercase font-semibold">
            <Sparkles className="h-3.5 w-3.5 shrink-0" />
            <span>OUR CORE CRAFT SPECIALITIES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4 leading-[1.3] sm:leading-tight">
            High-Vibe Production. <span className="text-cyber-lime">Zero Friction.</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-[1.6] sm:leading-relaxed max-w-2xl mx-auto">
            Forget bulky cinema rigs and intrusive crews that make guests feel awkward. We capture raw authentic energy using state-of-the-art mobile sensors, editing and delivering on-site in 20 minutes.
          </p>
        </div>

        {/* Two-Column Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {SERVICES.map((service) => {
            const isReel = service.id === "reel";
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl p-5 sm:p-8 transition-all duration-300 glass-card hover:border-cyber-lime/40 hover:shadow-[0_10px_30px_rgba(204,255,0,0.05)] flex flex-col justify-between"
              >
                {/* Visual accent top-right corner */}
                <div className="absolute top-0 right-0 h-16 w-16 bg-white/[0.01] group-hover:bg-cyber-lime/[0.02] rounded-bl-3xl transition-colors duration-300" />
                
                <div>
                  {/* Icon & Title row */}
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-6">
                    <div className={`p-3 sm:p-4 rounded-xl ${isReel ? "bg-cyber-lime/10 text-cyber-lime" : "bg-indigo-500/10 text-indigo-400"} shadow-inner shrink-0`}>
                      {isReel ? (
                        <Zap className="h-5 w-5 sm:h-6 sm:w-6" />
                      ) : (
                        <Video className="h-5 w-5 sm:h-6 sm:w-6" />
                      )}
                    </div>
                    <div>
                      <span className="text-[9px] sm:text-xs text-cyber-lime/80 font-mono tracking-wider uppercase font-semibold">
                        {isReel ? "LIGHTNING REEL COVERAGE" : "DIRECTOR CUT MULTICAM"}
                      </span>
                      <h3 className="text-lg sm:text-2xl font-display font-bold text-white group-hover:text-cyber-lime transition-colors leading-snug mt-0.5">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Tagline & Description */}
                  <p className="text-cyber-lime font-mono text-xs sm:text-sm mb-3 leading-snug">
                    {service.tagline}
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm leading-[1.6] mb-6">
                    {service.description}
                  </p>

                  {/* Highlights Specs Checklist */}
                  <div className="space-y-3 mb-8">
                    <p className="text-[10px] sm:text-xs text-gray-500 font-mono uppercase tracking-wider">FEATURES & SPECIFICATIONS</p>
                    {service.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                        <div className="h-4 w-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-cyber-lime" />
                        </div>
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Pricing Panel */}
                <div className="pt-6 border-t border-white/5 flex flex-col xs:flex-row items-stretch xs:items-center justify-between gap-4 mt-auto">
                  <div>
                    <span className="text-[10px] sm:text-xs text-cyber-lime font-mono block">MANUAL PRICING</span>
                    <span className="text-lg sm:text-xl font-display font-bold text-white">
                      Custom Quote
                    </span>
                  </div>

                  <button
                    onClick={scrollToBooking}
                    className="w-full xs:w-auto px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg bg-white/5 hover:bg-cyber-lime hover:text-black font-semibold text-xs sm:text-sm text-white transition-all border border-white/10 hover:border-transparent flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Plan Event Vibe</span>
                    <Zap className="h-3.5 w-3.5 shrink-0" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand Device Support Callout Banner */}
        <div className="max-w-5xl mx-auto mt-12 p-5 sm:p-6 rounded-2xl bg-white/[0.01] border border-white/5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <div className="p-3 bg-cyber-lime/5 text-cyber-lime rounded-xl shrink-0">
              <Cpu className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base">Flagship iPhone & Android Mastery</h4>
              <p className="text-xs text-gray-400 leading-relaxed mt-0.5">
                We shoot across both ecosystems fluidly. Using Apple ProRes Log for spectacular, rich movie coloring, and Samsung Galaxy Ultra sensors for extreme low-light clarity. No device bias—just pure, high-performance visual capture.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 xs:gap-3 shrink-0">
            <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-gray-300">IPHONE 16 PRO LOG</span>
            <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-gray-300">S24 ULTRA 200MP</span>
          </div>
        </div>

      </div>
    </section>
  );
}
