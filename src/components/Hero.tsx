import React from "react";
import { MessageCircle, ArrowRight, Sparkles, Smartphone, Zap, Flame } from "lucide-react";

export default function Hero() {
  const handleWhatsAppDirect = () => {
    // Standard direct link with prefilled general message
    const message = encodeURIComponent(
      "Hi OTG Craft! I saw your stunning premium landing page and would love to check slot availability for an upcoming shoot in Hyderabad!"
    );
    const whatsappUrl = `https://wa.me/918688962339?text=${message}`;

    // Robust redirection: try window.open first, if blocked or fails, fall back to window.location.href
    try {
      const newWin = window.open(whatsappUrl, "_blank");
      if (!newWin || newWin.closed || typeof newWin.closed === "undefined") {
        window.location.href = whatsappUrl;
      }
    } catch (err) {
      window.location.href = whatsappUrl;
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden mesh-grid min-h-[90vh] flex flex-col justify-center">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-cyber-lime/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/5 right-1/10 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Intro Badge */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-2 px-4 py-2 sm:py-1.5 rounded-2xl sm:rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 mb-8 animate-fade-in max-w-[90%] sm:max-w-none mx-auto">
          <div className="flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-cyber-lime animate-pulse shrink-0" />
            <span className="font-medium text-[11px] sm:text-xs">The Future of Event Aftermovies is Here</span>
          </div>
          <span className="hidden sm:inline-block h-1.5 w-1.5 rounded-full bg-cyber-lime"></span>
          <span className="px-2.5 py-0.5 rounded bg-cyber-lime/10 sm:bg-cyber-lime/5 border border-cyber-lime/20 text-[9px] sm:text-[10px] font-mono font-bold text-cyber-lime tracking-widest">
            HYD EDITION
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.25] sm:leading-[1.15] md:leading-[1.1] mb-5">
          Premium Social Reels.{" "}
          <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyber-lime to-[#A3E635] drop-shadow-[0_0_15px_rgba(204,255,0,0.15)]">
            For All Your Events.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto font-normal leading-[1.6] sm:leading-relaxed mb-8 sm:mb-10 px-2 sm:px-0">
          Whether it is a premium <span className="text-white font-semibold">Wedding or Marriage</span>, high-energy birthday parties, casual <span className="text-cyber-lime font-semibold">timepass reels</span>, or any celebration—we shoot stunning 4K social content on flagship <span className="text-white font-medium">iPhone 14+ & Androids</span>, edited instantly on-site. <span className="text-cyber-lime font-medium">Extremely affordable premium quality!</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-16 max-w-[280px] sm:max-w-none mx-auto">
          <button
            onClick={handleWhatsAppDirect}
            className="w-full sm:w-auto px-5 py-3 sm:px-8 sm:py-4 rounded-xl bg-cyber-lime hover:bg-cyber-lime-hover text-black font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(204,255,0,0.25)] hover:shadow-[0_0_35px_rgba(204,255,0,0.45)] hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-base group relative overflow-hidden active:scale-95"
          >
            <span className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <MessageCircle className="h-4.5 w-4.5 fill-current shrink-0" />
            <span className="relative">Book an Affordable Slot</span>
          </button>

          <button
            onClick={scrollToServices}
            className="w-full sm:w-auto px-5 py-3 sm:px-8 sm:py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold tracking-wide border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-base active:scale-95"
          >
            <span>Explore Pricing & Services</span>
            <ArrowRight className="h-4 w-4 shrink-0" />
          </button>
        </div>

        {/* Key Features/Badges Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-8 border-t border-white/5">
          <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center">
            <div className="p-2 rounded-lg bg-cyber-lime/10 text-cyber-lime mb-2 sm:mb-2.5">
              <Zap className="h-5 w-5" />
            </div>
            <span className="text-[9px] sm:text-xs text-gray-500 uppercase tracking-wider font-mono font-bold leading-tight">BUDGET-FRIENDLY</span>
            <span className="text-xs sm:text-sm font-bold text-gray-200 mt-1.5 leading-snug">Highly Affordable</span>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center">
            <div className="p-2 rounded-lg bg-cyber-lime/10 text-cyber-lime mb-2 sm:mb-2.5">
              <Smartphone className="h-5 w-5" />
            </div>
            <span className="text-[9px] sm:text-xs text-gray-500 uppercase tracking-wider font-mono font-bold leading-tight">ANY SENSOR</span>
            <span className="text-xs sm:text-sm font-bold text-gray-200 mt-1.5 leading-snug">iPhone 14+ & Androids</span>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center">
            <div className="p-2 rounded-lg bg-cyber-lime/10 text-cyber-lime mb-2 sm:mb-2.5">
              <Flame className="h-5 w-5" />
            </div>
            <span className="text-[9px] sm:text-xs text-gray-500 uppercase tracking-wider font-mono font-bold leading-tight">FOR ALL EVENTS</span>
            <span className="text-xs sm:text-sm font-bold text-gray-200 mt-1.5 leading-snug">Weddings & Timepass</span>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center">
            <div className="p-2 rounded-lg bg-cyber-lime/10 text-cyber-lime mb-2 sm:mb-2.5">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="text-[9px] sm:text-xs text-gray-500 uppercase tracking-wider font-mono font-bold leading-tight">CINEMATIC GRADING</span>
            <span className="text-xs sm:text-sm font-bold text-gray-200 mt-1.5 leading-snug">Premium 4K HDR</span>
          </div>
        </div>
      </div>
    </section>
  );
}
