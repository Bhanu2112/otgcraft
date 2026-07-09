import React from "react";
import { MessageCircle, ArrowRight, Sparkles, Smartphone, Zap, Flame } from "lucide-react";

export default function Hero() {
  const handleWhatsAppDirect = () => {
    // Standard direct link with prefilled general message
    const message = encodeURIComponent(
      "Hi OTG Craft! I saw your stunning premium landing page and would love to check slot availability for an upcoming shoot in Hyderabad!"
    );
    window.open(`https://wa.me/918008800880?text=${message}`, "_blank");
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
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 mb-8 animate-fade-in">
          <Sparkles className="h-3.5 w-3.5 text-cyber-lime animate-pulse" />
          <span>The Future of Event Aftermovies is Here</span>
          <span className="h-1.5 w-1.5 rounded-full bg-cyber-lime"></span>
          <span className="font-mono text-[10px] text-cyber-lime">HYD EDITION</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1] mb-6">
          Premium Social Reels.{" "}
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyber-lime to-[#A3E635] drop-shadow-[0_0_15px_rgba(204,255,0,0.15)]">
            Captured On-The-Go.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
          No heavy camera gear. No massive crews. Just pure, organic vibes shot on flagship 
          <span className="text-white font-medium"> iOS & Android devices</span>, edited instantly on-site. Ready to blow your social audience away?
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 max-w-md mx-auto sm:max-w-none">
          <button
            onClick={handleWhatsAppDirect}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-cyber-lime hover:bg-cyber-lime-hover text-black font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(204,255,0,0.25)] hover:shadow-[0_0_35px_rgba(204,255,0,0.45)] hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer text-base group relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <MessageCircle className="h-5.5 w-5.5 fill-current" />
            <span className="relative">Book a Slot via WhatsApp</span>
          </button>

          <button
            onClick={scrollToServices}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold tracking-wide border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer text-base"
          >
            <span>Explore Services</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Key Features/Badges Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-white/5">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center">
            <div className="p-2 rounded-lg bg-cyber-lime/10 text-cyber-lime mb-2.5">
              <Zap className="h-5 w-5" />
            </div>
            <span className="text-xs text-gray-500 uppercase tracking-widest font-mono font-semibold">EDIT SPEED</span>
            <span className="text-sm font-bold text-gray-200 mt-1">20-Min Delivery</span>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center">
            <div className="p-2 rounded-lg bg-cyber-lime/10 text-cyber-lime mb-2.5">
              <Smartphone className="h-5 w-5" />
            </div>
            <span className="text-xs text-gray-500 uppercase tracking-widest font-mono font-semibold">SENSOR QUALITY</span>
            <span className="text-sm font-bold text-gray-200 mt-1">iOS & Android</span>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center">
            <div className="p-2 rounded-lg bg-cyber-lime/10 text-cyber-lime mb-2.5">
              <Flame className="h-5 w-5" />
            </div>
            <span className="text-xs text-gray-500 uppercase tracking-widest font-mono font-semibold">EXPERIENCE VIBES</span>
            <span className="text-sm font-bold text-gray-200 mt-1">Zero Intrusive Crews</span>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center">
            <div className="p-2 rounded-lg bg-cyber-lime/10 text-cyber-lime mb-2.5">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="text-xs text-gray-500 uppercase tracking-widest font-mono font-semibold">SOUND DESIGN</span>
            <span className="text-sm font-bold text-gray-200 mt-1">DJI Pro Audio</span>
          </div>
        </div>
      </div>
    </section>
  );
}
