import { ServiceItem, AddOnOption, DemoVibe } from "./types";

export const SERVICES: ServiceItem[] = [
  {
    id: "reel",
    title: "⚡ The OTG Reel",
    tagline: "Fast, cinematic, social-ready.",
    description: "High-energy, social-optimized short-form video coverage for birthdays, gigs, launches, or intimate parties. Shot entirely on flagship smartphones using premium camera sensors and delivered fully edited with dynamic transitions within 20 minutes.",
    specs: [
      "Shot on iPhone Pro or Galaxy S-Ultra Series",
      "Dynamic color grading & visual beats syncing",
      "Lightning-fast 20-Minute Turnaround",
      "4K high-bitrate vertical orientation (9:16)"
    ],
    basePrice: "Get Quote",
    icon: "Zap"
  },
  {
    id: "multicam",
    title: "🎥 The Multi-Angle Cinematic Reel",
    tagline: "Elevated, multi-perspective, raw energy.",
    description: "Multiple creators capturing simultaneous angles of your event on dual flagship iOS and Android devices. Synced perfectly with studio-grade wireless sound for a rich, high-production vertical experience delivered on-site.",
    specs: [
      "Dual-angle synchronized multi-camera setup",
      "DJI Mic 2 high-fidelity vocal audio sync",
      "Delivered fully edited in 20 minutes post-shoot",
      "Stunning 4K vertical color-graded resolution"
    ],
    basePrice: "Get Quote",
    icon: "Video"
  }
];

export const ADDONS: AddOnOption[] = [
  {
    id: "instant_delivery",
    name: "⚡ 20-Minute Super Express",
    description: "Our elite live editor processes and delivers your high-energy reel within exactly 20 minutes of the final shoot.",
    price: 0
  },
  {
    id: "audio",
    name: "🎙️ Pro Wireless Audio & Mics",
    description: "Equip creators with DJI/Rode wireless lapel mics to capture crystal clear vocals and crowd sound.",
    price: 0
  },
  {
    id: "low_angle",
    name: "🛹 Gimbal & Action-Cam Gear",
    description: "High-adrenaline ultra-low tracking shots & buttery stabilizer rigs for dance sessions or party entries.",
    price: 0
  },
  {
    id: "dual_device",
    name: "📱 Dual Platform Capture",
    description: "Simultaneous capture on both an iPhone Pro (for ProRes colors) and Samsung Ultra (for high sharpness).",
    price: 0
  }
];

export const DEMO_VIBES: DemoVibe[] = [
  {
    id: "bday_reel",
    name: "🎂 B'day Bash Reel",
    category: "single",
    title: "Siddharth's Celebration",
    subtitle: "Midnight Chaos & Neon Beats",
    bgGradient: "linear-gradient(to top, rgba(0, 0, 0, 0.95), rgba(124, 58, 237, 0.35))",
    accentColor: "#CCFF00",
    emoji: "🎉",
    reelLength: "0:45",
    features: ["Cinematic slow-mos", "Bass-drop transitions", "True Tone low-light capture"]
  },
  {
    id: "gig_reel",
    name: "🎸 Live Acoustic Gig",
    category: "single",
    title: "The Acoustic Project",
    subtitle: "Live Session at Heart Cup",
    bgGradient: "linear-gradient(to top, rgba(0, 0, 0, 0.95), rgba(220, 38, 38, 0.35))",
    accentColor: "#FF3366",
    emoji: "🔥",
    reelLength: "1:00",
    features: ["Studio-grade audio", "Crisp telephoto sensor details", "Multi-angle crowd sweeps"]
  },
  {
    id: "wedding_entrance",
    name: "✨ Grand Party Entry",
    category: "multi",
    title: "The Royal Entry",
    subtitle: "Smoke Machines & Sparklers",
    bgGradient: "linear-gradient(to top, #06060F, #1E1B4B)",
    accentColor: "#CCFF00",
    emoji: "👑",
    reelLength: "1:15",
    features: ["Dual angle synchronization", "Ultra-wide gimbal tracking", "Pro Sound-beat alignment"]
  },
  {
    id: "club_bash",
    name: "🥂 Premium Club Night",
    category: "multi",
    title: "Saturday Night Vibe",
    subtitle: "Shot on iPhone & Samsung Ultra",
    bgGradient: "linear-gradient(to top, #09090D, #27272A)",
    accentColor: "#FFFFFF",
    emoji: "✨",
    reelLength: "0:50",
    features: ["Dynamic low-light HDR", "Instant 20-min editing", "Fluid action tracking"]
  }
];

export const FAQS = [
  {
    question: "Do you really only shoot on smartphones?",
    answer: "Yes! Modern flagship smartphones (iPhone 15/16 Pro Max, Samsung Galaxy S24 Ultra) possess state-of-the-art camera sensors, powerful optical stabilization, and advanced AI processors that outperform bulky traditional DSLRs for fast-paced short-form content. Using mobile setups allows our creators to move seamlessly, blend into your event, and edit on the fly."
  },
  {
    question: "Is it true you deliver fully edited reels in 20 minutes?",
    answer: "Absolutely! Our signature service is built for the high-speed social media era. While the party is still buzzing, our on-site editors pull high-bitrate raw clips via high-speed transfer, color-grade, sync them to beats, and deliver a ready-to-post vertical masterpiece in 20 minutes."
  },
  {
    question: "Do you prefer iPhone or Android for shoots?",
    answer: "We shoot on both! We utilize both iPhone Pro Max devices and Samsung Galaxy Ultra series equally. This gives us the best of both worlds: the smooth color-grading profiles of Apple ProRes Log and the extreme night-sensory sharpness of Samsung's latest sensors. No platform bias—just peak mobile quality."
  },
  {
    question: "Are you based in Hyderabad? Where do you shoot?",
    answer: "Yes, we are based in Hyderabad! We shoot across all major locations in Hyderabad including Gachibowli, Jubilee Hills, Banjara Hills, Madhapur, Secunderabad, and Begumpet. If you have an event slightly outside these zones, ping us on WhatsApp, and we can make arrangements!"
  },
  {
    question: "Can we pick our own music for the reels?",
    answer: "Absolutely! When you finalize your booking, our onboarding team asks for your preferred tracks or high-energy audio themes. We'll synchronize the video edits to match the exact tempo and vibe of your chosen track."
  }
];
