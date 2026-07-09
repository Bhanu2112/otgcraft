/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import DeviceToggle from "./components/DeviceToggle";
import ProcessTimeline from "./components/ProcessTimeline";
import BookingWizard from "./components/BookingWizard";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
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
    </div>
  );
}
