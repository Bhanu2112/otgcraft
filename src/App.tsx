/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import DeviceToggle from "./components/DeviceToggle";
import ProcessTimeline from "./components/ProcessTimeline";
import BookingWizard from "./components/BookingWizard";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  const [showFab, setShowFab] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show FAB after scrolling past 300px
      if (window.scrollY > 300) {
        setShowFab(true);
      } else {
        setShowFab(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-studio-dark min-h-screen text-gray-200 selection:bg-cyber-lime selection:text-black">
      {/* Background static dark layout helper */}
      <div className="fixed inset-0 z-0 bg-studio-dark pointer-events-none" />

      {/* Main Single Page Frame */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* Services Showcase Section */}
        <Services />

        {/* Interactive Device Simulator Showcase */}
        <DeviceToggle />

        {/* The Lean Process Section */}
        <ProcessTimeline />

        {/* Dynamic Calculator & Booking BookingWizard */}
        <BookingWizard />

        {/* FAQ Accordions Section */}
        <FAQ />

        {/* Final Footer Pitch & Directory */}
        <Footer />
      </div>

      {/* Floating Action Button (FAB) - Visible on mobile/tablets */}
      <AnimatePresence>
        {showFab && (
          <motion.button
            id="mobile-book-fab"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={handleScrollToBooking}
            className="fixed bottom-6 right-6 z-50 md:hidden flex items-center gap-2 px-5 py-3.5 rounded-full bg-cyber-lime hover:bg-cyber-lime-hover text-black font-extrabold text-xs uppercase tracking-wider shadow-[0_4px_24px_rgba(204,255,0,0.45)] border border-cyber-lime/30 active:scale-95 transition-transform duration-100 cursor-pointer"
          >
            <Calendar className="h-4.5 w-4.5 fill-black/10" />
            <span>Book Now</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
