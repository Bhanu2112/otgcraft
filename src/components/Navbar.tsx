import React, { useState, useEffect } from "react";
import { Zap, Calendar } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hydTime, setHydTime] = useState("");

  useEffect(() => {
    // Update local time in Hyderabad (Asia/Kolkata)
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat("en-US", options);
      setHydTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-studio-dark/80 backdrop-blur-md border-b border-white/5 shadow-lg"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="h-9 w-9 rounded-lg bg-cyber-lime text-black flex items-center justify-center font-bold text-lg shadow-[0_0_15px_rgba(204,255,0,0.3)] group-hover:scale-105 transition-transform">
              ⚡
            </div>
            <div>
              <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-cyber-lime transition-colors">
                OTG <span className="text-cyber-lime">Craft</span>
              </span>
              <p className="text-[10px] font-mono tracking-wider text-gray-500 uppercase -mt-1">
                Premium Mobile Studio
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-gray-300 hover:text-cyber-lime transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("demo")}
              className="text-sm font-medium text-gray-300 hover:text-cyber-lime transition-colors cursor-pointer"
            >
              Device Simulator
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-sm font-medium text-gray-300 hover:text-cyber-lime transition-colors cursor-pointer"
            >
              Our Process
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium text-gray-300 hover:text-cyber-lime transition-colors cursor-pointer"
            >
              FAQ
            </button>
          </div>

          {/* Hyderabad Info & CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Pulsing Hyderabad badge */}
            <div className="flex flex-col items-end text-right">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-lime opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-lime"></span>
                </span>
                📍 Hyderabad
              </div>
              <span className="text-[9px] font-mono text-gray-400 mt-1 hidden sm:block">
                IST: {hydTime || "Loading..."}
              </span>
            </div>

            <button
              onClick={() => scrollToSection("booking")}
              className="px-4 py-2 rounded-lg bg-cyber-lime hover:bg-cyber-lime-hover text-black font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-[0_0_15px_rgba(204,255,0,0.2)] hover:shadow-[0_0_25px_rgba(204,255,0,0.4)] flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <Calendar className="h-3.5 w-3.5" />
              <span>Book Slot</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
