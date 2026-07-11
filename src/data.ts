import { ServiceItem, AddOnOption, DemoVibe } from "./types";

export const SERVICES: ServiceItem[] = [
  {
    id: "reel",
    title: "⚡ The OTG Reel",
    tagline: "Extremely affordable, fast, cinematic, social-ready.",
    description: "High-energy, social-optimized vertical video coverage for marriages, weddings, birthdays, casual hanging out, timepass reels, private gigs, or any event whatsoever. Shot on flagship phones and edited fully on-site with cinematic visual beats synced in 20 minutes.",
    specs: [
      "Shot on iPhone 14 Pro & above or premium Android flagships",
      "Perfect for marriages, casual timepass reels, and any celebration",
      "Dynamic color grading & visual beats syncing",
      "Lightning-fast 20-Minute Turnaround",
      "Stunning 4K high-bitrate vertical orientation (9:16)"
    ],
    basePrice: "Highly Affordable",
    icon: "Zap"
  },
  {
    id: "multicam",
    title: "🎥 The Multi-Angle Cinematic Reel",
    tagline: "Dual perspective, premium, ultra budget-friendly.",
    description: "Multiple creators capturing simultaneous angles of your special events—from grand wedding entries to casual celebrations—on dual flagship iOS & Android devices. Synced perfectly with studio-grade wireless audio and edited on-site.",
    specs: [
      "Dual-angle synchronized multi-camera setup",
      "Shot on multiple flagship devices (iPhone 14+ Pro & Androids)",
      "DJI Mic 2 high-fidelity vocal audio sync",
      "Perfect for premium marriages and high-energy crowd events",
      "Delivered fully edited in 20 minutes post-shoot"
    ],
    basePrice: "Highly Affordable",
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
    description: "High-adrenaline ultra-low tracking shots & buttery stabilizer rigs for dance sessions or wedding party entries.",
    price: 0
  },
  {
    id: "dual_device",
    name: "📱 Multi-Flagship Capture",
    description: "Simultaneous capture on multiple flagships (iPhone 14/15/16 Pro and high-end Androids like Samsung/Pixel/OnePlus).",
    price: 0
  }
];

export const DEMO_VIBES: DemoVibe[] = [
  {
    id: "marriage_reel",
    name: "💍 Marriage & Wedding",
    category: "multi",
    title: "The Grand Telugu Marriage",
    subtitle: "Warm Candids & Festive Beats",
    bgGradient: "linear-gradient(to top, rgba(0, 0, 0, 0.95), rgba(217, 119, 6, 0.35))",
    accentColor: "#F59E0B",
    emoji: "💖",
    reelLength: "1:15",
    features: ["Cinematic traditional aesthetics", "Warm cultural color grading", "Emotional candid captures"]
  },
  {
    id: "timepass_reel",
    name: "🛹 Timepass & Casual Vibe",
    category: "single",
    title: "Chai & Casual Chit-Chat",
    subtitle: "Unscripted Laughs & Fun",
    bgGradient: "linear-gradient(to top, rgba(0, 0, 0, 0.95), rgba(16, 185, 129, 0.35))",
    accentColor: "#10B981",
    emoji: "😎",
    reelLength: "0:30",
    features: ["Raw fun & laughter", "Trendy transition edits", "Effortless casual capture"]
  },
  {
    id: "bday_reel",
    name: "🎉 B'day & Parties",
    category: "single",
    title: "Siddharth's Celebration",
    subtitle: "Midnight Cake Smash & Neon Beats",
    bgGradient: "linear-gradient(to top, rgba(0, 0, 0, 0.95), rgba(124, 58, 237, 0.35))",
    accentColor: "#CCFF00",
    emoji: "🎂",
    reelLength: "0:45",
    features: ["Cinematic slow-mos", "Bass-drop transitions", "True Tone low-light capture"]
  },
  {
    id: "gig_reel",
    name: "🎸 Live Acoustic Gig",
    category: "multi",
    title: "Live Acoustic Night",
    subtitle: "Crowd Sweeps at Heart Cup",
    bgGradient: "linear-gradient(to top, rgba(0, 0, 0, 0.95), rgba(220, 38, 38, 0.35))",
    accentColor: "#FF3366",
    emoji: "🔥",
    reelLength: "1:00",
    features: ["Studio-grade audio", "Crisp telephoto sensor details", "Multi-angle crowd sweeps"]
  }
];

export const FAQS = [
  {
    question: "Do you shoot for weddings, marriages, and casual events?",
    answer: "Yes, absolutely! We shoot reels for ALL events. Whether it is a grand premium wedding, traditional marriage, high-energy birthday party, corporate gig, celebration, or just casual \"timepass\" hangout reels with friends—we cover anything and everything. There is no event too big or too casual for our mobile lenses!"
  },
  {
    question: "How affordable are your packages with such high quality?",
    answer: "We are extremely budget-friendly! By completely removing heavy cinema camera gear, massive crews, tripod-clutter, and weeks of delayed editing, we cut out massive overhead costs. We pass those savings directly on to you, giving you premium 4K cinematic reels at a fraction of the cost of traditional videography crews."
  },
  {
    question: "Which phone models do you use for shoots?",
    answer: "We shoot on iPhone 14 Pro and above series (iPhone 14 Pro, 14 Pro Max, iPhone 15 Pro, 15 Pro Max, and iPhone 16 Pro Max) as well as premium flagship Androids (Samsung Galaxy S23 & S24 Ultra, Google Pixel Pro, OnePlus Pro, and other top-tier mobile devices). This guarantees pristine low-light performance and rich colors no matter what!"
  },
  {
    question: "Do you really deliver fully edited reels in 20 minutes?",
    answer: "Absolutely! Our signature service is built for high speed. While your event is still buzzing, our on-site editors pull high-bitrate raw clips from the flagship phones, color-grade, sync them to beats, and deliver a ready-to-post vertical masterpiece in 20 minutes."
  },
  {
    question: "Are you based in Hyderabad? Where do you shoot?",
    answer: "Yes, we are proudly based in Hyderabad! We shoot across all major neighborhoods in Hyderabad including Jubilee Hills, Banjara Hills, Gachibowli, Madhapur, Kondapur, Secunderabad, Begumpet, and Himayatnagar. If you have an event anywhere else, ping us on WhatsApp and we will make it happen!"
  }
];
