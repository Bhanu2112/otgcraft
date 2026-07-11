import React from "react";
import { MessageCircle, Smartphone, Globe, Mail, Instagram, MapPin } from "lucide-react";

export default function Footer() {
  const handleWhatsAppFooter = () => {
    const text = encodeURIComponent(
      "Hi OTG Craft! I saw your stunning landing page and would love to check slot availability for an upcoming mobile shoot!"
    );
    const whatsappUrl = `https://wa.me/918688962339?text=${text}`;

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#06060A] border-t border-white/5 relative overflow-hidden">
      
      {/* Absolute decorative accent */}
      <div className="absolute top-0 left-1/3 w-64 h-64 bg-cyber-lime/[0.01] rounded-full blur-3xl pointer-events-none" />

      {/* FINAL PITCH / HERO FOOTER BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center border-b border-white/5 relative z-10">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4 leading-[1.3] sm:leading-tight">
          Let's Craft Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-lime to-white">Unforgettable.</span>
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-[1.6] sm:leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8 px-2 sm:px-0">
          Ready to capture premium social-first vertical reels on flagship smartphone devices? Let's get moving!
        </p>

        {/* Pulsing button */}
        <div className="flex justify-center">
          <button
            onClick={handleWhatsAppFooter}
            className="w-full max-w-[280px] sm:w-auto px-5 py-3 sm:px-8 sm:py-4 rounded-xl bg-cyber-lime hover:bg-cyber-lime-hover text-black font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(204,255,0,0.2)] hover:shadow-[0_0_35px_rgba(204,255,0,0.45)] hover:-translate-y-0.5 inline-flex items-center justify-center gap-2.5 cursor-pointer text-xs sm:text-base active:scale-95 group relative overflow-hidden"
          >
            <MessageCircle className="h-4.5 w-4.5 fill-current animate-pulse" />
            <span>WhatsApp Us to Book</span>
          </button>
        </div>
      </div>

      {/* FOOTER DIRECTORIES */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        
        {/* Column 1: Brand Info */}
        <div className="space-y-4 text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <div className="h-8 w-8 rounded-lg bg-cyber-lime text-black flex items-center justify-center font-bold text-base shadow-[0_0_10px_rgba(204,255,0,0.3)]">
              ⚡
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-white">
              OTG <span className="text-cyber-lime">Craft</span>
            </span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed max-w-xs mx-auto md:mx-0">
            Premium mobile videography. Capturing real feelings on flagship sensors, processed with lightning-fast 20-minute turnarounds in Hyderabad.
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="text-center md:text-left">
          <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-4">NAVIGATE</h4>
          <ul className="space-y-2 text-xs text-gray-400">
            <li>
              <button onClick={() => scrollToSection("services")} className="hover:text-cyber-lime cursor-pointer transition-colors">
                Our Services
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("demo")} className="hover:text-cyber-lime cursor-pointer transition-colors">
                Device Simulator
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("process")} className="hover:text-cyber-lime cursor-pointer transition-colors">
                Lean Process
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("faq")} className="hover:text-cyber-lime cursor-pointer transition-colors">
                Support FAQ
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="text-center md:text-left">
          <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-4">CONNECT</h4>
          <ul className="space-y-2.5 text-xs text-gray-400">
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <Mail className="h-3.5 w-3.5 text-cyber-lime" />
              <span>hello@otgcraft.in</span>
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <Instagram className="h-3.5 w-3.5 text-cyber-lime" />
              <span>@otgcraft.in</span>
            </li>
            <li className="flex items-center gap-2 justify-center md:justify-start">
              <MapPin className="h-3.5 w-3.5 text-cyber-lime" />
              <span>Hyderabad, Telangana, IN</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Quick badges */}
        <div className="text-center md:text-left space-y-3">
          <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-2">COMPATIBILITY</h4>
          <div className="flex flex-wrap gap-1.5 justify-center md:justify-start">
            <span className="text-[9px] font-mono bg-white/5 border border-white/10 text-gray-300 px-2 py-1 rounded">
              iPhone 15/16 Pro
            </span>
            <span className="text-[9px] font-mono bg-white/5 border border-white/10 text-gray-300 px-2 py-1 rounded">
              Galaxy S23/S24 Ultra
            </span>
            <span className="text-[9px] font-mono bg-white/5 border border-white/10 text-gray-300 px-2 py-1 rounded">
              Pixel Pro Series
            </span>
          </div>
          <p className="text-[10px] text-gray-500 font-mono">
            All devices running flagships optimized with gimbal-stabilized mobile setups.
          </p>
        </div>

      </div>

      {/* COPYRIGHT STIPULATION */}
      <div className="bg-[#030305] py-6 border-t border-white/5 text-center relative z-10">
        <p className="text-[10px] font-mono text-gray-500">
          © OTG Craft. Handcrafted with precision in Hyderabad. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}
