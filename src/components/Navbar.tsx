import React, { useState, useEffect } from "react";
import { Zap, Calendar, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hydTime, setHydTime] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        scrolled || isMobileMenuOpen
          ? "py-3 bg-[#09090D]/95 backdrop-blur-md border-b border-white/5 shadow-lg"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center gap-2 cursor-pointer group shrink-0"
          >
            <div className="h-9 w-9 rounded-lg bg-cyber-lime text-black flex items-center justify-center font-bold text-lg shadow-[0_0_15px_rgba(204,255,0,0.3)] group-hover:scale-105 transition-transform">
              ⚡
            </div>
            <div>
              <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-cyber-lime transition-colors">
                OTG <span className="text-cyber-lime">Craft</span>
              </span>
              <p className="text-[9px] sm:text-[10px] font-mono tracking-wider text-gray-500 uppercase -mt-1">
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

          {/* Right Section Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Pulsing Hyderabad badge (Desktop / Tablet only to prevent mobile overflow) */}
            <div className="hidden sm:flex flex-col items-end text-right">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-lime opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-lime"></span>
                </span>
                📍 Hyderabad
              </div>
              <span className="text-[9px] font-mono text-gray-400 mt-1">
                IST: {hydTime || "Loading..."}
              </span>
            </div>

            <button
              onClick={() => {
                scrollToSection("booking");
                setIsMobileMenuOpen(false);
              }}
              className="px-3 py-2 sm:px-4 sm:py-2 rounded-lg bg-cyber-lime hover:bg-cyber-lime-hover text-black font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-[0_0_15px_rgba(204,255,0,0.2)] hover:shadow-[0_0_25px_rgba(204,255,0,0.4)] flex items-center gap-1 sm:gap-1.5 cursor-pointer active:scale-95"
            >
              <Calendar className="h-3.5 w-3.5" />
              <span>Book Slot</span>
            </button>

            {/* Mobile Hamburger menu toggle button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -mr-1.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer md:hidden flex items-center justify-center min-w-[40px] min-h-[40px]"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5.5 w-5.5" />
              ) : (
                <Menu className="h-5.5 w-5.5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#09090D]/95 backdrop-blur-lg border-b border-white/5 transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen
            ? "max-h-[350px] opacity-100 py-6 px-4"
            : "max-h-0 opacity-0 pointer-events-none py-0 px-4"
        }`}
      >
        <div className="flex flex-col gap-4">
          <button
            onClick={() => {
              scrollToSection("services");
              setIsMobileMenuOpen(false);
            }}
            className="text-left py-2.5 text-base font-medium text-gray-300 hover:text-cyber-lime border-b border-white/5 transition-colors cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => {
              scrollToSection("demo");
              setIsMobileMenuOpen(false);
            }}
            className="text-left py-2.5 text-base font-medium text-gray-300 hover:text-cyber-lime border-b border-white/5 transition-colors cursor-pointer"
          >
            Device Simulator
          </button>
          <button
            onClick={() => {
              scrollToSection("process");
              setIsMobileMenuOpen(false);
            }}
            className="text-left py-2.5 text-base font-medium text-gray-300 hover:text-cyber-lime border-b border-white/5 transition-colors cursor-pointer"
          >
            Our Process
          </button>
          <button
            onClick={() => {
              scrollToSection("faq");
              setIsMobileMenuOpen(false);
            }}
            className="text-left py-2.5 text-base font-medium text-gray-300 hover:text-cyber-lime transition-colors cursor-pointer"
          >
            FAQ
          </button>

          {/* Location and Time Info nested at the bottom of Mobile Drawer */}
          <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between sm:hidden">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-lime opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-lime"></span>
              </span>
              📍 Hyderabad
            </div>
            <span className="text-[10px] font-mono text-gray-400">
              IST: {hydTime || "Loading..."}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
