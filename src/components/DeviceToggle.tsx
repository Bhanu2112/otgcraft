import React, { useState, useEffect } from "react";
import { DeviceType, DemoVibe } from "../types";
import { DEMO_VIBES } from "../data";
import { Smartphone, Heart, Sparkles, Volume2, Award, Play, Pause, Video, Zap } from "lucide-react";

export default function DeviceToggle() {
  const [device, setDevice] = useState<DeviceType>("iphone");
  const [activeVibeId, setActiveVibeId] = useState<string>("bday_reel");
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [liked, setLiked] = useState<boolean>(false);

  // Find active vibe properties
  const activeVibe = DEMO_VIBES.find((v) => v.id === activeVibeId) || DEMO_VIBES[0];

  // When changing vibe, reset liked state
  useEffect(() => {
    setLiked(false);
  }, [activeVibeId]);

  return (
    <section id="demo" className="py-24 bg-[#09090D] border-t border-b border-white/5 relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-lime/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs text-cyber-lime font-mono mb-4 tracking-wider uppercase font-semibold">
            <Smartphone className="h-3.5 w-3.5 shrink-0" />
            <span>INTERACTIVE PREVIEW ENGINE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4 leading-[1.3] sm:leading-tight">
            See the Magic. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-lime to-white">Toggle Any Device.</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-[1.6] sm:leading-relaxed">
            We build with full cross-platform premium support. Experience exactly how our vertical 4K reels render on both iOS and Android flagship screens.
          </p>
        </div>

        {/* Dynamic Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT PANEL: Controls & Customizations */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            
            {/* 1. Device Picker Card */}
            <div className="p-4 sm:p-6 rounded-2xl glass-card relative overflow-hidden">
              <div className="absolute top-0 right-0 h-24 w-24 bg-white/[0.01] rounded-full translate-x-8 -translate-y-8" />
              
              <h3 className="text-base sm:text-lg font-display font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-cyber-lime">01.</span> Select Target Device Frame
              </h3>
              
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
                {/* iPhone selection */}
                <button
                  onClick={() => setDevice("iphone")}
                  className={`p-3.5 sm:p-4 rounded-xl border text-left transition-all cursor-pointer relative ${
                    device === "iphone"
                      ? "border-cyber-lime bg-cyber-lime/10 text-white"
                      : "border-white/5 bg-white/[0.01] text-gray-400 hover:border-white/10"
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-xs sm:text-sm">iPhone 14+ Pro & Pro Max</span>
                    <span className="text-[10px] font-mono text-gray-500">iOS</span>
                  </div>
                  <span className="text-[11px] text-gray-400 block mt-1 leading-tight">iPhone 14, 15, 16 Pro Cinematic Log</span>
                  {device === "iphone" && (
                    <span className="absolute bottom-2 right-2 text-cyber-lime text-[10px] font-bold">● Active</span>
                  )}
                </button>

                {/* Samsung / Android selection */}
                <button
                  onClick={() => setDevice("samsung")}
                  className={`p-3.5 sm:p-4 rounded-xl border text-left transition-all cursor-pointer relative ${
                    device === "samsung"
                      ? "border-cyber-lime bg-cyber-lime/10 text-white"
                      : "border-white/5 bg-white/[0.01] text-gray-400 hover:border-white/10"
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-xs sm:text-sm">Android Flagships</span>
                    <span className="text-[10px] font-mono text-gray-500">Android</span>
                  </div>
                  <span className="text-[11px] text-gray-400 block mt-1 leading-tight">Galaxy S23/S24, Google Pixel, OnePlus & More</span>
                  {device === "samsung" && (
                    <span className="absolute bottom-2 right-2 text-cyber-lime text-[10px] font-bold">● Active</span>
                  )}
                </button>
              </div>

              {/* Hardware Spec callout */}
              <div className="mt-4 p-3 rounded-lg bg-black/40 border border-white/5 text-[11px] sm:text-xs text-gray-400 font-mono leading-relaxed">
                {device === "iphone" ? (
                  <p>📸 <span className="text-white">iPhone 14, 15, 16 Pro Series:</span> Shot in pristine 4K ProRes Log format, bringing cinematic depth-of-field, insane stabilization, and professional-grade coloring.</p>
                ) : (
                  <p>🤖 <span className="text-white">Flagship Android Suite:</span> Dynamic 4K HDR captures with extreme detail on Samsung S23/S24 Ultra, Google Pixel Pro, and OnePlus Pro, tailored for vibrant social color grading.</p>
                )}
              </div>
            </div>

            {/* 2. Concept/Vibe Picker Card */}
            <div className="p-4 sm:p-6 rounded-2xl glass-card">
              <h3 className="text-base sm:text-lg font-display font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-cyber-lime">02.</span> Select Creative Concept
              </h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-500 font-mono uppercase tracking-widest mb-2 flex items-center gap-1">
                    <Zap className="h-3 w-3 text-cyber-lime" /> Single-Camera Vibe
                  </p>
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
                    {DEMO_VIBES.filter((v) => v.category === "single").map((v) => (
                      <button
                        key={v.id}
                        onClick={() => setActiveVibeId(v.id)}
                        className={`py-2.5 px-3 sm:py-3 sm:px-4 rounded-xl text-xs font-medium border text-left transition-all cursor-pointer flex items-center gap-2 ${
                          activeVibeId === v.id
                            ? "border-cyber-lime bg-cyber-lime/15 text-white"
                            : "border-white/5 bg-white/[0.01] text-gray-400 hover:border-white/10 hover:text-white"
                        }`}
                      >
                        <span className="text-base shrink-0">{v.emoji}</span>
                        <div className="truncate">
                          <span className="block font-bold truncate">{v.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[10px] sm:text-xs text-gray-500 font-mono uppercase tracking-widest mb-2 flex items-center gap-1">
                    <Video className="h-3 w-3 text-cyber-lime" /> Multi-Angle Sync (Director's Cut)
                  </p>
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
                    {DEMO_VIBES.filter((v) => v.category === "multi").map((v) => (
                      <button
                        key={v.id}
                        onClick={() => setActiveVibeId(v.id)}
                        className={`py-2.5 px-3 sm:py-3 sm:px-4 rounded-xl text-xs font-medium border text-left transition-all cursor-pointer flex items-center gap-2 ${
                          activeVibeId === v.id
                            ? "border-cyber-lime bg-cyber-lime/15 text-white"
                            : "border-white/5 bg-white/[0.01] text-gray-400 hover:border-white/10 hover:text-white"
                        }`}
                      >
                        <span className="text-base shrink-0">{v.emoji}</span>
                        <div className="truncate">
                          <span className="block font-bold truncate">{v.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Premium details callout */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-cyber-lime/10 to-indigo-500/10 border border-white/5 flex gap-4 items-start">
              <div className="p-2 rounded-xl bg-cyber-lime/10 text-cyber-lime shrink-0">
                <Award className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">Zero Intrusive Crews</h4>
                <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed">
                  We blend in seamlessly with your guests. Using mobile setups, we move fluidly without tripod-clutter, catching natural laughter and high-energy shots that traditional crews miss completely.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT PANEL: Interactive Phone Mockup */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center pt-6 lg:pt-0">
            
            {/* The Smartphone wrapper */}
            <div className="relative transition-all duration-500 scale-[0.95] xs:scale-100">
              
              {/* iPhone specific body casing */}
              {device === "iphone" ? (
                <div 
                  className="w-[280px] h-[550px] xs:w-[310px] xs:h-[610px] sm:w-[330px] sm:h-[650px] bg-[#1a1a24] rounded-[40px] xs:rounded-[52px] p-[8px] xs:p-[10px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8),_0_0_40px_rgba(204,255,0,0.05)] border-3 border-[#2E2E3E] relative"
                  id="iphone-shell"
                >
                  {/* Subtle Apple Buttons overlay */}
                  <div className="absolute top-[80px] xs:top-[100px] -left-[3px] w-[3px] h-[30px] xs:h-[40px] bg-[#2E2E3E] rounded-r" />
                  <div className="absolute top-[120px] xs:top-[150px] -left-[3px] w-[3px] h-[40px] xs:h-[50px] bg-[#2E2E3E] rounded-r" />
                  <div className="absolute top-[170px] xs:top-[210px] -left-[3px] w-[3px] h-[40px] xs:h-[50px] bg-[#2E2E3E] rounded-r" />
                  <div className="absolute top-[130px] xs:top-[160px] -right-[3px] w-[3px] h-[50px] xs:h-[65px] bg-[#2E2E3E] rounded-l" />
                  
                  {/* Outer Speaker slot */}
                  <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-20 xs:w-24 h-1 bg-[#101015] rounded-full z-30" />

                  {/* Inner screen glass container */}
                  <div className="w-full h-full rounded-[32px] xs:rounded-[43px] overflow-hidden bg-black relative border border-white/5 flex flex-col justify-between">
                    
                    {/* Dynamic Island Overlay */}
                    <div className="absolute top-2.5 xs:top-3.5 left-1/2 -translate-x-1/2 w-24 xs:w-28 h-[20px] xs:h-[25px] bg-black rounded-full z-40 flex items-center justify-between px-2.5 xs:px-3 text-[8px] font-mono text-gray-500 pointer-events-none">
                      <span className="text-cyber-lime text-[7px] xs:text-[9px]">●</span>
                      <div className="flex items-center gap-1">
                        <span className="w-1 h-1 xs:w-1.5 xs:h-1.5 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-[7px] xs:text-[8px] text-white/80">LIVE</span>
                      </div>
                    </div>

                    {/* LIVE SCREEN CONTENT */}
                    <ScreenContent activeVibe={activeVibe} isPlaying={isPlaying} liked={liked} setLiked={setLiked} setIsPlaying={setIsPlaying} />

                  </div>
                </div>
              ) : (
                /* Samsung Galaxy Ultra specific body casing (sharper square edges) */
                <div 
                  className="w-[280px] h-[550px] xs:w-[310px] xs:h-[610px] sm:w-[330px] sm:h-[650px] bg-[#1d1d23] rounded-[16px] xs:rounded-[24px] p-[6px] xs:p-[8px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8),_0_0_40px_rgba(204,255,0,0.05)] border-3 border-[#3A3A4A] relative"
                  id="samsung-shell"
                >
                  {/* Symmetrical buttons */}
                  <div className="absolute top-[110px] xs:top-[140px] -right-[3px] w-[3px] h-[45px] xs:h-[55px] bg-[#3A3A4A] rounded-l" />
                  <div className="absolute top-[165px] xs:top-[205px] -right-[3px] w-[3px] h-[60px] xs:h-[80px] bg-[#3A3A4A] rounded-l" />

                  {/* Inner screen glass container - sharper corners */}
                  <div className="w-full h-full rounded-[10px] xs:rounded-[18px] overflow-hidden bg-black relative border border-white/5 flex flex-col justify-between">
                    
                    {/* Tiny Punch Hole Camera */}
                    <div className="absolute top-2.5 xs:top-3 left-1/2 -translate-x-1/2 w-2.5 h-2.5 xs:w-3.5 xs:h-3.5 bg-black rounded-full z-40 border border-white/10 pointer-events-none" />

                    {/* LIVE SCREEN CONTENT */}
                    <ScreenContent activeVibe={activeVibe} isPlaying={isPlaying} liked={liked} setLiked={setLiked} setIsPlaying={setIsPlaying} />

                  </div>
                </div>
              )}

              {/* Floating controller panel underneath device */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-2.5 rounded-full border border-white/10 flex items-center gap-3 sm:gap-4 shadow-lg z-40 text-[10px] sm:text-xs font-mono">
                <span className="text-gray-400">FPS: <span className="text-cyber-lime font-bold">60.0</span></span>
                <span className="text-white/20">|</span>
                <span className="text-gray-400">Delay: <span className="text-white font-semibold">20m Edit</span></span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

// Inner Screen Renderer helper
function ScreenContent({ 
  activeVibe, 
  isPlaying, 
  liked, 
  setLiked, 
  setIsPlaying 
}: { 
  activeVibe: DemoVibe; 
  isPlaying: boolean; 
  liked: boolean; 
  setLiked: (l: boolean) => void; 
  setIsPlaying: (p: boolean) => void;
}) {
  return (
    <div 
      className="w-full h-full flex flex-col justify-between p-4 relative overflow-hidden transition-all duration-300"
      style={{ background: activeVibe.bgGradient }}
    >
      {/* Overlay decorative elements (starlight/dust floating) */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/15 to-black/50 z-10" />
      
      <div className="w-full h-full flex flex-col justify-between relative z-20 pt-8 pb-4">
        
        {/* Top header overlay inside mockup */}
        <div className="flex justify-between items-center text-[10px] font-semibold text-white/70">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-cyber-lime animate-pulse" />
            <span>otgcraft.in/reels</span>
          </div>
          <div className="flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded-full">
            <Volume2 className="h-3 w-3 text-cyber-lime" />
            <span>PRO AUDIO</span>
          </div>
        </div>

        {/* Cinematic middle visualization */}
        {activeVibe.category === "multi" ? (
          /* ================= SPLIT SCREEN DIRECTORS MULTICAM PREVIEW ================= */
          <div className="flex-1 flex flex-col justify-center py-2 space-y-2">
            
            <div className="grid grid-rows-2 gap-2 flex-1">
              {/* Angle A - iPhone Pro Log */}
              <div className="rounded-xl border border-white/10 bg-black/40 overflow-hidden relative flex flex-col items-center justify-center p-3 text-center">
                <span className="absolute top-1 right-2 text-[8px] font-mono text-cyber-lime bg-black/60 px-1 rounded">CAM A (WIDE)</span>
                <span className="text-xl">🎬</span>
                <span className="text-[10px] font-bold text-white mt-1">Wide Angle Entry</span>
                <span className="text-[8px] text-gray-400 font-mono mt-0.5">10-bit HDR Log</span>
                {isPlaying && (
                  <div className="absolute bottom-1 left-2 flex items-center gap-1 text-[8px] text-red-500 font-mono animate-pulse">
                    <span>● REC</span>
                  </div>
                )}
              </div>

              {/* Angle B - Android Flagship Zoom */}
              <div className="rounded-xl border border-white/10 bg-black/40 overflow-hidden relative flex flex-col items-center justify-center p-3 text-center">
                <span className="absolute top-1 right-2 text-[8px] font-mono text-[#38BDF8] bg-black/60 px-1 rounded">CAM B (TIGHT)</span>
                <span className="text-xl">✨</span>
                <span className="text-[10px] font-bold text-white mt-1">Tight Zoom Capture</span>
                <span className="text-[8px] text-gray-400 font-mono mt-0.5">Flagship Android Super Zoom</span>
                {isPlaying && (
                  <div className="absolute bottom-1 left-2 flex items-center gap-1 text-[8px] text-red-500 font-mono animate-pulse">
                    <span>● REC</span>
                  </div>
                )}
              </div>
            </div>

            {/* Sync bar */}
            <div className="text-center">
              <p className="text-white font-display font-bold text-sm tracking-tight drop-shadow-md">
                {activeVibe.title}
              </p>
              <p className="text-cyber-lime text-[9px] font-mono mt-0.5 animate-pulse">
                🔊 SYNCED SOUNDTRACK MATCHED TO BEAT
              </p>
            </div>

          </div>
        ) : (
          /* ================= SINGLE CAMERA FULL VIEW ================= */
          <div className="flex-1 flex flex-col items-center justify-center py-6 text-center">
            
            {/* Spinning disk or music wave indicator */}
            <div className="relative w-28 h-28 flex items-center justify-center">
              <div 
                className={`absolute inset-0 rounded-full border-2 border-dashed transition-transform duration-10000 linear ${
                  isPlaying ? "animate-spin" : ""
                }`} 
                style={{ borderColor: activeVibe.accentColor }} 
              />
              <div className="w-20 h-20 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-4xl shadow-inner relative z-10">
                {activeVibe.emoji}
              </div>
              
              {/* Dynamic decorative particles */}
              {isPlaying && (
                <>
                  <span className="absolute -top-3 left-1/4 animate-bounce text-xs">✨</span>
                  <span className="absolute top-1/2 -right-3 animate-ping text-xs">📸</span>
                  <span className="absolute -bottom-2 right-1/4 animate-pulse text-xs">🎵</span>
                </>
              )}
            </div>

            {/* Vibe Song details */}
            <h4 className="text-white font-display font-bold text-lg tracking-tight mt-4 drop-shadow-md">
              {activeVibe.title}
            </h4>
            <p className="text-gray-300 text-xs font-mono px-4 truncate mt-1">
              {activeVibe.subtitle}
            </p>

            {/* Simulated Live Audio Soundwaves */}
            <div className="flex items-center gap-1 h-6 mt-4">
              {[0.4, 0.9, 0.5, 0.8, 1, 0.6, 0.3, 0.7, 0.5, 0.9, 0.4].map((scale, idx) => (
                <span 
                  key={idx}
                  className="w-1 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: activeVibe.accentColor,
                    height: isPlaying ? `${scale * 100}%` : "15%",
                    animation: isPlaying ? `bounce 1.5s ease-in-out infinite alternate` : undefined,
                    animationDelay: `${idx * 0.1}s`
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Bottom details & interactions */}
        <div className="space-y-3 mt-auto">
          
          {/* Spec labels pill */}
          <div className="flex flex-wrap gap-1">
            {activeVibe.features.map((feat, idx) => (
              <span key={idx} className="text-[9px] bg-black/50 text-gray-200 px-2 py-0.5 rounded-md border border-white/5 font-mono">
                ✓ {feat}
              </span>
            ))}
          </div>

          {/* Interactive controls */}
          <div className="flex items-center justify-between pt-2 border-t border-white/10">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-full bg-cyber-lime text-black font-bold text-[9px] flex items-center justify-center">
                OTG
              </div>
              <div>
                <span className="text-[10px] font-bold text-white block -mb-0.5">OTG Craft</span>
                <span className="text-[8px] text-gray-400">Hyderabad</span>
              </div>
            </div>

            {/* Interaction buttons */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                title={isPlaying ? "Pause Demo" : "Play Demo"}
              >
                {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 fill-current" />}
              </button>
              
              <button 
                onClick={() => setLiked(!liked)} 
                className={`p-1.5 rounded-full cursor-pointer transition-colors ${
                  liked ? "bg-red-500/20 text-red-500" : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                <Heart className={`h-3.5 w-3.5 ${liked ? "fill-current" : ""}`} />
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
            <div 
              className="h-full bg-cyber-lime transition-all duration-1000 ease-linear"
              style={{ width: isPlaying ? "75%" : "12%" }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
