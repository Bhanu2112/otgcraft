import React, { useState } from "react";
import { ADDONS } from "../data";
import { Sparkles, MessageCircle, Info, Check, ShieldCheck, MapPin, Video } from "lucide-react";

export default function BookingWizard() {
  // Form State
  const [name, setName] = useState<string>("");
  const [whatsappPhone, setWhatsappPhone] = useState<string>("");
  const [eventDetails, setEventDetails] = useState<string>("");
  const [neighborhood, setNeighborhood] = useState<string>("Jubilee Hills");
  const [customLocation, setCustomLocation] = useState<string>("");
  const [packageSelection, setPackageSelection] = useState<"reel" | "multicam">("reel");
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>(["instant_delivery"]);

  // List of top Hyderabad neighborhoods
  const HYD_NEIGHBORHOODS = [
    "Jubilee Hills",
    "Banjara Hills",
    "Gachibowli",
    "Madhapur",
    "Kondapur",
    "Secunderabad",
    "Begumpet",
    "Himayatnagar",
    "Other Location"
  ];

  const handleAddonToggle = (id: string) => {
    if (selectedAddonIds.includes(id)) {
      setSelectedAddonIds(selectedAddonIds.filter((item) => item !== id));
    } else {
      setSelectedAddonIds([...selectedAddonIds, id]);
    }
  };

  const handleBookWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Please fill in your name before booking!");
      return;
    }

    const packageLabel = "⚡ The OTG Reel - Single Creator Setup";

    const loc = neighborhood === "Other Location" ? (customLocation || "Hyderabad") : neighborhood;

    const addonsList = ADDONS
      .filter((a) => selectedAddonIds.includes(a.id))
      .map((a) => `- ${a.name}`)
      .join("\n");

    const formattedAddonsText = addonsList ? `\nAdd-ons Selected:\n${addonsList}` : "\nNo extra add-ons selected.";

    // Format highly-converting WhatsApp text block without date or pricing mentions
    const textMessage = `Hi OTG Craft! I'd love to request crew availability and get a custom quote for my event. Here are my customized package choices:
 
👤 Client Name: ${name}
📞 Contact Phone: ${whatsappPhone || "Provided on chat"}
📍 Shoot Location: ${loc}, Hyderabad
📸 Event Vibe & Details: ${eventDetails || "Celebration / Party / Gathering"}

💎 Selected Package:
${packageLabel}
${formattedAddonsText}

Please let me know if you have an open crew slot available and what the custom quote would be. Thanks!`;

    const encodedText = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/918688962339?text=${encodedText}`;

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

  return (
    <section id="booking" className="py-24 bg-[#09090D] border-t border-white/5 relative">
      <div className="absolute top-1/2 left-0 w-84 h-84 rounded-full bg-cyber-lime/[0.01] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs text-cyber-lime font-mono mb-4 tracking-wider uppercase font-semibold">
            <Video className="h-3.5 w-3.5 animate-pulse shrink-0" />
            <span>INSTANT DEALS BUILDER</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4 leading-[1.3] sm:leading-tight">
            Build Your Custom Package & <span className="text-cyber-lime">Secure a Slot.</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-[1.6] sm:leading-relaxed max-w-2xl mx-auto">
            Tell us about your upcoming Hyderabad gig, marriage/wedding, birthday, or casual timepass reels. We offer the most affordable vertical 4K packages with zero quality compromises.
          </p>
        </div>

        {/* Dynamic Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Form Side - Left Column */}
          <form 
            id="booking-form"
            onSubmit={handleBookWhatsApp}
            className="lg:col-span-7 space-y-6 rounded-2xl glass-card p-4 sm:p-8"
          >
            <div className="border-b border-white/5 pb-4">
              <h3 className="text-lg sm:text-xl font-display font-bold text-white flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-cyber-lime" />
                <span>Onboarding Details</span>
              </h3>
              <p className="text-xs text-gray-400 mt-1">Please provide valid contact and location details so we can cross-check our crew availability.</p>
            </div>

            {/* Client name & phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] sm:text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2 font-mono">YOUR FULL NAME *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyber-lime transition-all"
                />
              </div>

              <div>
                <label className="block text-[10px] sm:text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2 font-mono">WHATSAPP PHONE NUMBER</label>
                <input
                  type="tel"
                  placeholder="e.g. +91 80088 00880"
                  value={whatsappPhone}
                  onChange={(e) => setWhatsappPhone(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyber-lime transition-all"
                />
              </div>
            </div>

            {/* Event Details & Location row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] sm:text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2 font-mono">EVENT VIBE & TYPE *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Wedding / Marriage, Birthday Party, Timepass / Casual Reels"
                  value={eventDetails}
                  onChange={(e) => setEventDetails(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyber-lime transition-all"
                />
              </div>

              <div>
                <label className="block text-[10px] sm:text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2 font-mono">HYDERABAD NEIGHBORHOOD</label>
                <select
                  value={neighborhood}
                  onChange={(e) => setNeighborhood(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyber-lime transition-all text-gray-300"
                >
                  {HYD_NEIGHBORHOODS.map((nh, index) => (
                    <option key={index} value={nh} className="bg-studio-dark text-white">
                      {nh}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Custom Location input if other chosen */}
            {neighborhood === "Other Location" && (
              <div className="animate-fade-in">
                <label className="block text-[10px] sm:text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2 font-mono">SPECIFY NEIGHBORHOOD OR LOCATION</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-3.5 h-4 w-4 text-cyber-lime" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tarnaka or near Miyapur"
                    value={customLocation}
                    onChange={(e) => setCustomLocation(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-cyber-lime transition-all"
                  />
                </div>
              </div>
            )}

            {/* 2. Package selection (Simplified to primary flagship package) */}
            <div>
              <label className="block text-[10px] sm:text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2 font-mono">BASE PRODUCTION PACKAGE</label>
              <div className="p-4 rounded-xl border border-cyber-lime/30 bg-cyber-lime/[0.04] relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-cyber-lime/10 text-cyber-lime text-[10px] uppercase font-mono font-bold px-2.5 py-1 rounded-bl-xl border-l border-b border-cyber-lime/20">
                  FLAGSHIP BASE
                </div>
                <div>
                  <span className="block font-extrabold text-sm sm:text-base text-white flex items-center gap-2">
                    ⚡ The OTG Reel (Single Creator)
                  </span>
                  <span className="text-xs text-gray-400 mt-1.5 block leading-relaxed">
                    Stunning single-camera high-energy vertical 4K coverage. Shot on flagship iPhone/Android sensors, custom color graded, and delivered on-the-go with instant on-site turnaround.
                  </span>
                </div>
                <div className="mt-3.5 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-400">Setup Configuration:</span>
                  <span className="text-cyber-lime font-bold uppercase">Single Creator Setup</span>
                </div>
              </div>
            </div>

            {/* 3. Addon selection */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-3 font-mono">UPGRADE WITH HANDCRAFTED ADD-ONS</label>
              
              <div className="space-y-2.5">
                {ADDONS.map((addon) => {
                  const isChecked = selectedAddonIds.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => handleAddonToggle(addon.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                        isChecked
                          ? "border-cyber-lime/40 bg-cyber-lime/[0.04]"
                          : "border-white/5 bg-white/[0.01] hover:border-white/10"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`mt-0.5 h-4.5 w-4.5 rounded border flex items-center justify-center shrink-0 transition-colors ${
                          isChecked ? "bg-cyber-lime border-cyber-lime text-black" : "border-white/20"
                        }`}>
                          {isChecked && <Check className="h-3 w-3 stroke-[3]" />}
                        </div>
                        <div>
                          <span className="block font-bold text-xs text-white">{addon.name}</span>
                          <span className="text-[10px] text-gray-400 leading-tight block mt-0.5">{addon.description}</span>
                        </div>
                      </div>
                      <span className="font-mono text-[10px] text-cyber-lime uppercase tracking-widest shrink-0 font-bold">
                        Addon
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </form>

          {/* Pricing Estimation Recaps - Right Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            
            {/* Live Invoice Preview */}
            <div className="rounded-2xl glass-card p-6 border-2 border-white/5 overflow-hidden relative">
              <div className="absolute top-0 right-0 h-32 w-32 bg-cyber-lime/[0.02] rounded-full translate-x-12 -translate-y-12" />

              <div className="border-b border-white/5 pb-4 mb-4">
                <span className="text-xs font-mono text-cyber-lime uppercase tracking-widest font-semibold block">LIVE CONFIGURATION SUMMARY</span>
                <h3 className="text-xl font-display font-extrabold text-white mt-1">Event Config Summary</h3>
              </div>

              <div className="space-y-4 text-sm">
                
                {/* Base selection detail row */}
                <div className="flex justify-between text-gray-200">
                  <div>
                    <span className="font-bold block text-sm sm:text-base text-white">
                      ⚡ Base: The OTG Reel Only
                    </span>
                    <span className="text-xs text-gray-400 font-mono mt-1 block">Includes dynamic color grade & edit</span>
                  </div>
                </div>

                {/* List of checked add-ons */}
                {selectedAddonIds.length > 0 ? (
                  <div className="pt-3 border-t border-white/5 space-y-2.5">
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block font-bold">CHOSEN UPGRADES</span>
                    {ADDONS.filter((a) => selectedAddonIds.includes(a.id)).map((addon) => (
                      <div key={addon.id} className="flex justify-between items-center text-gray-300 text-xs sm:text-sm">
                        <span>{addon.name}</span>
                        <span className="font-mono text-xs text-cyber-lime font-bold uppercase bg-cyber-lime/10 px-2 py-0.5 rounded">Included</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="pt-3 border-t border-white/5 text-xs text-gray-500 font-mono italic">
                    No custom upgrades checked.
                  </div>
                )}

                {/* Grand Total glowing row */}
                <div className="pt-6 border-t border-white/10 mt-6 text-center">
                  <div className="text-gray-400 font-mono text-xs mb-2 uppercase tracking-widest font-bold">INAUGURAL DEAL</div>
                  <div className="text-xl sm:text-2xl font-display font-black text-cyber-lime px-5 py-3 rounded-xl bg-cyber-lime/10 border border-cyber-lime/20 inline-block leading-tight uppercase tracking-wider">
                    🎁 25% Launch Discount!
                  </div>
                  <span className="block text-xs text-gray-200 font-mono mt-2.5 font-bold">Special Introductory Offer Applied on Booking!</span>
                  <span className="block text-[11px] text-gray-400 mt-1 max-w-xs mx-auto">Get high-quality vertical reels at super-budget rates, customized & discussed directly on WhatsApp.</span>
                </div>

              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                form="booking-form"
                className="w-full mt-6 py-4 rounded-xl bg-cyber-lime hover:bg-cyber-lime-hover text-black font-bold tracking-wide transition-all shadow-[0_4px_20px_rgba(204,255,0,0.2)] hover:shadow-[0_8px_30px_rgba(204,255,0,0.45)] hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base active:scale-95 animate-pulse-subtle"
              >
                <MessageCircle className="h-5 w-5 fill-current" />
                <span>Request Availability & Quote</span>
              </button>

              <div className="mt-4 flex items-center gap-2 justify-center text-xs text-gray-300 font-mono">
                <ShieldCheck className="h-4 w-4 text-cyber-lime shrink-0" />
                <span>Zero pre-payment required to check slots!</span>
              </div>
            </div>

            {/* Micro FAQ notice */}
            <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 flex gap-3 items-start text-xs sm:text-sm">
              <Info className="h-4.5 w-4.5 text-cyber-lime shrink-0 mt-0.5" />
              <div className="text-gray-300 leading-relaxed">
                <p className="font-bold text-white mb-1">How scheduling works:</p>
                Once you click to send details, your prefilled package structure is loaded directly to our WhatsApp support inbox. We will instantly verify if a creator is free in your requested neighborhood and provide a custom pricing breakdown.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
